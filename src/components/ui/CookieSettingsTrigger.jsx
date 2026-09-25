import React, { useState } from 'react';
import { Cookie, Settings } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieConsentContext';

export function CookieSettingsTrigger() {
  const { openPreferences, isModalOpen } = useCookieConsent();
  const [isHovered, setIsHovered] = useState(false);

  // If modal is actively open, don't show the trigger underneath
  if (isModalOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <button
        type="button"
        onClick={openPreferences}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Manage cookie and privacy preferences"
        className="group relative flex items-center gap-2 p-2.5 sm:px-3 sm:py-2 rounded-full bg-[#0f172a]/90 hover:bg-[#0f172a] text-slate-300 hover:text-white border border-white/15 hover:border-sky-400/50 shadow-lg hover:shadow-sky-500/20 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
      >
        <Cookie className="w-4 h-4 text-sky-400 transition-transform group-hover:rotate-12 duration-300" />
        <span className="hidden sm:inline text-xs font-medium tracking-wide">
          Cookie Settings
        </span>

        {/* Mobile hover/touch tooltip */}
        <span
          className={`absolute left-0 -top-8 px-2 py-1 bg-slate-900 text-white text-[11px] rounded shadow border border-white/10 whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0 sm:hidden'
          }`}
        >
          Manage Cookie Preferences
        </span>
      </button>
    </div>
  );
}
