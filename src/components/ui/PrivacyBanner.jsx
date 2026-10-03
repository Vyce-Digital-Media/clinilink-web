import React from 'react';
import { Link } from 'react-router-dom';
import { Sliders, Cookie } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieConsentContext';

export function PrivacyBanner() {
  const {
    isBannerVisible,
    acceptAll,
    rejectNonEssential,
    openPreferences,
  } = useCookieConsent();

  if (!isBannerVisible) return null;

  return (
    <div 
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b1329]/95 backdrop-blur-md text-white border-t border-white/10 p-4 md:p-5 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.7)] animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-8">
        {/* Scrollable text container on mobile to keep buttons always visible */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <Cookie className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 hidden sm:block" />
          <div className="max-h-[36vh] lg:max-h-none overflow-y-auto pr-2 space-y-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed scrollbar-thin">
            <p>
              Our website stores cookies (including third-party cookies) on your computer, as described in our{' '}
              <Link 
                to="/privacy-policy" 
                className="text-white hover:text-sky-300 underline underline-offset-2 transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              , including in order to make the website available to you, to improve your browsing experience, to improve the website and to provide personalized services and advertisements to you. To learn more about how we use cookies and how to change your settings, see our{' '}
              <Link 
                to="/privacy-policy" 
                className="text-white hover:text-sky-300 underline underline-offset-2 transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              Please be aware that when you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email or online profiles. We (or service providers on our behalf) may then send communications and marketing to these emails or profiles. You may opt out of receiving this advertising by visiting{' '}
              <a 
                href="https://app.retention.com/optout" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-400 hover:text-sky-300 underline underline-offset-2 break-all"
              >
                https://app.retention.com/optout
              </a>
              .
            </p>
            <p>
              By selecting &ldquo;Accept Non-Essential Cookies,&rdquo; you consent to the use of all cookies, including technologies that track your activity on our website and disclose related information to third parties. By selecting &ldquo;Reject Non-Essential Cookies,&rdquo; only strictly necessary cookies will be used. Select &ldquo;Customize&rdquo; to manage cookies by category. You can withdraw your consent to the use of non-essential cookies at any time.
            </p>
          </div>
        </div>

        {/* Buttons - Always visible and accessible */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full lg:w-auto justify-end pt-2 sm:pt-0 border-t border-white/10 sm:border-0">
          <button 
            type="button"
            onClick={rejectNonEssential}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all text-center focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Reject Non-Essential Cookies
          </button>
          
          <button 
            type="button"
            onClick={openPreferences}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-sky-300 hover:text-sky-200 border border-sky-500/30 rounded-lg hover:bg-sky-500/10 transition-all flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <Sliders className="w-3.5 h-3.5" />
            Customize
          </button>

          <button 
            type="button"
            onClick={acceptAll}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-all shadow-md text-center focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Accept Non-Essential Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
