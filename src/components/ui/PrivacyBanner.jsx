import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if user has already responded
    const hasResponded = localStorage.getItem('privacy_consent');
    if (!hasResponded) {
      // Show after 2 seconds
      const timer = setTimeout(() => {
        setShouldRender(true);
        // Small delay to allow CSS transition to trigger after mount
        setTimeout(() => setIsVisible(true), 50);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(() => {
      localStorage.setItem('privacy_consent', 'accepted');
      setShouldRender(false);
    }, 300); // Wait for fade out animation
  };

  const handleReject = () => {
    setIsVisible(false);
    setTimeout(() => {
      localStorage.setItem('privacy_consent', 'rejected');
      setShouldRender(false);
    }, 300); // Wait for fade out animation
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-md text-white border-t border-white/10 p-4 md:p-5 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-8">
        <div className="text-sm text-slate-300 font-medium leading-relaxed flex-1">
          We use our own and third-party cookies to personalize content and to analyze web traffic. 
          By clicking "Accept", you agree to our use of cookies and our {' '}
          <Link to="/privacy-policy" className="text-white hover:text-blue-300 underline underline-offset-2 transition-colors">
            Privacy Policy
          </Link>.
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
          <button 
            onClick={handleReject}
            className="flex-1 md:flex-none px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Reject
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-5 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded-lg transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
