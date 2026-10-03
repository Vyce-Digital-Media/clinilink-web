import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ShieldCheck, Lock } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieConsentContext';

export function CookiePreferencesModal() {
  const {
    consent,
    isModalOpen,
    closePreferences,
    acceptAll,
    rejectNonEssential,
    savePreferences,
  } = useCookieConsent();

  // Local state for interactive toggles before saving
  const [localCategories, setLocalCategories] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    media: false,
  });

  // Sync local state whenever modal opens or consent changes
  useEffect(() => {
    if (isModalOpen) {
      setLocalCategories({
        essential: true,
        analytics: Boolean(consent.analytics),
        marketing: Boolean(consent.marketing),
        media: Boolean(consent.media),
      });
    }
  }, [isModalOpen, consent]);

  // Prevent background scrolling and lock Lenis smooth scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      if (window.lenis) {
        window.lenis.stop();
      }
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        if (window.lenis) {
          window.lenis.start();
        }
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    }
  }, [isModalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closePreferences();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closePreferences]);

  if (!isModalOpen) return null;

  const handleToggle = (key) => {
    if (key === 'essential') return; // Cannot toggle essential
    setLocalCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSaveAndClose = () => {
    savePreferences(localCategories);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm transition-opacity overscroll-contain"
      data-lenis-prevent="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePreferences();
      }}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget) e.preventDefault();
      }}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0b1329] border border-white/15 rounded-2xl shadow-2xl text-slate-100 overflow-hidden flex flex-col my-auto max-h-[90vh] overscroll-contain"
        data-lenis-prevent="true"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
              <span className="text-xs font-mono tracking-wider uppercase text-sky-400 font-semibold">
                Privacy Controls
              </span>
            </div>
            <h2 id="cookie-preferences-title" className="text-2xl font-bold tracking-tight text-white">
              Cookies on CliniLink
            </h2>
          </div>
          <button
            onClick={closePreferences}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close preferences modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div 
          className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed overscroll-contain touch-pan-y"
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <p>
            We use some essential cookies to make this site work. We would like to set analytics and tracking cookies (such as RB2B) to understand how you use this site and improve our services. We may also use services from Vimeo and YouTube that may also use cookies.
          </p>
          <p>
            For more detailed information, see our{' '}
            <Link
              to="/privacy-policy"
              onClick={closePreferences}
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300 font-medium inline-flex items-center gap-0.5"
            >
              Privacy Policy
            </Link>
            .
          </p>

          {/* Quick Choice Buttons matching UK ICO layout */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              type="button"
              onClick={acceptAll}
              className="flex-1 px-4 py-2.5 bg-white hover:bg-slate-200 text-slate-950 font-semibold rounded-lg text-sm transition-all shadow-sm text-center"
            >
              Accept non-essential cookies
            </button>
            <button
              type="button"
              onClick={rejectNonEssential}
              className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-sm border border-white/20 transition-all text-center"
            >
              Reject non-essential cookies
            </button>
          </div>

          <div className="h-px bg-white/10 w-full" />

          {/* Category 1: Essential Cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white text-base flex items-center gap-2">
                Essential cookies
              </h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Lock className="w-3 h-3" /> Always on
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              These cookies are necessary for core functionality, such as security, routing, and network management. They cannot be turned off.
            </p>
          </div>

          <div className="h-px bg-white/10 w-full" />

          {/* Category 2: Analytics Cookies */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-white text-base">Analytics cookies</h3>
              <button
                type="button"
                role="switch"
                aria-checked={localCategories.analytics}
                onClick={() => handleToggle('analytics')}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0b1329] ${
                  localCategories.analytics ? 'bg-sky-500' : 'bg-slate-700'
                }`}
              >
                <span className="sr-only">Toggle analytics cookies</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    localCategories.analytics ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              We use analytics tools to measure how you use the CliniLink website. These cookies collect information about how you got to the site, the pages you visit, how long you spend on each page, and what you click on.
            </p>
          </div>

          <div className="h-px bg-white/10 w-full" />

          {/* Category 3: Marketing & Identification Cookies (RB2B) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white text-base">
                  Marketing & Identification cookies
                </h3>
                <span className="text-xs text-sky-400 font-mono">Includes RB2B & Tracking Pixels</span>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={localCategories.marketing}
                onClick={() => handleToggle('marketing')}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0b1329] ${
                  localCategories.marketing ? 'bg-sky-500' : 'bg-slate-700'
                }`}
              >
                <span className="sr-only">Toggle marketing cookies</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    localCategories.marketing ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              We use identification technologies (including RB2B and marketing pixels) to recognize organizations visiting our website and tailor clinical research outreach. Consistent with legal guidelines, these cookies are disabled by default and will not load without your express consent.
            </p>
          </div>

          <div className="h-px bg-white/10 w-full" />

          {/* Category 4: Video Player Cookies */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-white text-base">Video player cookies</h3>
              <button
                type="button"
                role="switch"
                aria-checked={localCategories.media}
                onClick={() => handleToggle('media')}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0b1329] ${
                  localCategories.media ? 'bg-sky-500' : 'bg-slate-700'
                }`}
              >
                <span className="sr-only">Toggle video player cookies</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    localCategories.media ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              Some pages include videos hosted on Vimeo or YouTube. If you enable this setting, the video platforms may collect viewing information for analytics and advertising purposes. If disabled, external links or privacy-enhanced modes will be utilized.
            </p>
          </div>
        </div>

        {/* Modal Footer Action */}
        <div className="p-6 pt-4 border-t border-white/10 bg-[#080d1e] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            You can change your consent preferences at any time using the badge on the bottom left.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleSaveAndClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" /> Save and close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
