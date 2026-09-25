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
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b1329]/95 backdrop-blur-md text-white border-t border-white/10 p-4 md:p-5 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">
        <div className="flex items-start gap-3 flex-1 text-sm text-slate-300 font-normal leading-relaxed">
          <Cookie className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <span>
              We use essential cookies to make our site work. With your consent, we would also like to use non-essential cookies (including analytics and identification tools such as RB2B) to analyze web traffic and improve your experience. You can accept all, reject non-essential cookies, or customize your settings at any time. Learn more in our{' '}
            </span>
            <Link 
              to="/privacy-policy" 
              className="text-white hover:text-sky-300 underline underline-offset-2 transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            .
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full lg:w-auto justify-end">
          <button 
            type="button"
            onClick={rejectNonEssential}
            className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Reject non-essential
          </button>
          
          <button 
            type="button"
            onClick={openPreferences}
            className="flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-semibold text-sky-300 hover:text-sky-200 border border-sky-500/30 rounded-lg hover:bg-sky-500/10 transition-all flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <Sliders className="w-3.5 h-3.5" />
            Customize
          </button>

          <button 
            type="button"
            onClick={acceptAll}
            className="flex-1 sm:flex-none px-5 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
