/**
 * Utility helper to ensure scripts (RB2B, Google Analytics, Pixels, Session Replay)
 * are strictly blocked until affirmative opt-in consent is recorded.
 */

const STORAGE_KEY = 'clinilink_cookie_consent_v1';
const CONSENT_EVENT = 'clinilink:consent-change';

/**
 * Returns true if the user has affirmatively granted consent for the specified category.
 * @param {'essential' | 'analytics' | 'marketing' | 'media'} category 
 * @returns {boolean}
 */
export function checkConsent(category) {
  if (category === 'essential') return true;
  if (typeof window === 'undefined') return false;

  if (window.__clinilinkConsent && window.__clinilinkConsent[category]) {
    return true;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    return Boolean(data?.categories?.[category]);
  } catch {
    return false;
  }
}

/**
 * Executes a callback immediately if consent already exists,
 * or attaches an event listener to fire it as soon as the user grants consent.
 * 
 * @param {'analytics' | 'marketing' | 'media'} category
 * @param {() => void} callback
 */
export function executeWhenConsented(category, callback) {
  if (checkConsent(category)) {
    callback();
    return () => {};
  }

  const handler = (event) => {
    if (event.detail && event.detail[category]) {
      callback();
      window.removeEventListener(CONSENT_EVENT, handler);
    }
  };

  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}

/**
 * Safely loads an external script tag only after specific consent category is granted.
 * Example for RB2B:
 * loadScriptWhenConsented('marketing', 'https://s3.amazonaws.com/rb2b-tracking/...', { id: 'rb2b-script' })
 *
 * @param {'analytics' | 'marketing' | 'media'} category
 * @param {string} src
 * @param {Record<string, string>} attributes
 */
export function loadScriptWhenConsented(category, src, attributes = {}) {
  return executeWhenConsented(category, () => {
    if (attributes.id && document.getElementById(attributes.id)) {
      return; // Already loaded
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    Object.entries(attributes).forEach(([k, v]) => {
      script.setAttribute(k, v);
    });
    document.head.appendChild(script);
  });
}
