import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'clinilink_cookie_consent_v2';
const CONSENT_EVENT = 'clinilink:consent-change';

const DEFAULT_PREFERENCES = {
  essential: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false, // RB2B, tracking pixels, ad identifiers
  media: false, // Vimeo, YouTube, third-party video embeds
};

const CookieConsentContext = createContext(null);

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(DEFAULT_PREFERENCES);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize consent state from localStorage on mount
  useEffect(() => {
    try {
      // Tidy up obsolete keys from prior iterations as requested
      localStorage.removeItem('clinilink_cookie_consent_v1');
      localStorage.removeItem('privacy_consent');

      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed.categories === 'object') {
          const loadedCategories = {
            essential: true,
            analytics: Boolean(parsed.categories.analytics),
            marketing: Boolean(parsed.categories.marketing),
            media: Boolean(parsed.categories.media),
          };
          setConsent(loadedCategories);
          setHasAnswered(true);
          setIsBannerVisible(false);
          syncGlobalState(loadedCategories);
        }
      } else {
        // No decision made yet -> Display banner after brief delay
        const timer = setTimeout(() => {
          setIsBannerVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.error('Failed to parse stored cookie consent:', e);
      setIsBannerVisible(true);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Sync state to window object and dispatch event for third-party scripts/tag managers
  const syncGlobalState = (updatedConsent) => {
    if (typeof window !== 'undefined') {
      window.__clinilinkConsent = updatedConsent;
      window.dispatchEvent(
        new CustomEvent(CONSENT_EVENT, { detail: updatedConsent })
      );
    }
  };

  const persistConsent = useCallback((newCategories) => {
    const finalized = {
      essential: true,
      analytics: Boolean(newCategories.analytics),
      marketing: Boolean(newCategories.marketing),
      media: Boolean(newCategories.media),
    };

    const record = {
      version: '2.0',
      timestamp: new Date().toISOString(),
      categories: finalized,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch (e) {
      console.error('Failed to save cookie consent to localStorage:', e);
    }

    setConsent(finalized);
    setHasAnswered(true);
    setIsBannerVisible(false);
    setIsModalOpen(false);
    syncGlobalState(finalized);
  }, []);

  // Accept all non-essential cookies
  const acceptAll = useCallback(() => {
    persistConsent({
      essential: true,
      analytics: true,
      marketing: true,
      media: true,
    });
  }, [persistConsent]);

  // Reject all non-essential cookies (True Opt-In default)
  const rejectNonEssential = useCallback(() => {
    persistConsent({
      essential: true,
      analytics: false,
      marketing: false,
      media: false,
    });
  }, [persistConsent]);

  // Save granular custom preferences
  const savePreferences = useCallback(
    (customCategories) => {
      persistConsent(customCategories);
    },
    [persistConsent]
  );

  const openPreferences = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const hasConsent = useCallback(
    (category) => {
      if (category === 'essential') return true;
      return Boolean(consent[category]);
    },
    [consent]
  );

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasAnswered,
        isBannerVisible,
        isModalOpen,
        isLoaded,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openPreferences,
        closePreferences,
        hasConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
