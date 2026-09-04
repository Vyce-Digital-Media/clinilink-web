import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-50 border-t border-white/10 pt-16 pb-12 px-6 lg:px-12 font-sans relative overflow-hidden">

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full flex justify-center items-center opacity-[0.03]">
        <img 
          src="/logo.png" 
          alt="clinilink watermark" 
          className="w-[180vw] md:w-[140vw] lg:w-[110vw] min-w-[1200px] max-w-none object-contain"
          style={{ clipPath: 'inset(0 0 0 25%)', transform: 'translateX(-12%)' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 relative">

          {/* Left Column: Brand / Logo */}
          <div className="lg:col-span-3 pr-0 lg:pr-8 pb-8 lg:pb-0">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="clinilink" className="h-8 lg:h-10 w-auto" />
            </Link>
          </div>

          {/* Middle Columns: Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 pr-0 lg:pr-12 pb-8 lg:pb-0">
            {/* Column 1: Platform */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-slate-300 tracking-wide">Platform</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                <li><Link to="/platform" className="hover:text-white transition-colors">Overview</Link></li>
                <li><Link to="/retention-intelligence" className="hover:text-white transition-colors">Retention Intelligence</Link></li>
                <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-slate-300 tracking-wide">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Newsletter */}
          <div className="lg:col-span-4 pl-0 lg:pl-12 flex flex-col justify-between">
            <div className="space-y-6 max-w-sm">
              <h4 className="text-sm font-mono tracking-wider text-slate-300">Newsletter</h4>
              <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-[280px]">
                Stay updated with the latest clinical intelligence and retention strategies.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1.5 focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/10 transition-all max-w-[300px]">
                  <input
                    type="email"
                    placeholder="email@clinilink-os.app"
                    className="bg-transparent text-xs text-white w-full pl-3 pr-2 py-1.5 outline-none placeholder:text-slate-500 font-sans"
                    required
                  />
                  <button type="submit" aria-label="Subscribe" className="bg-white hover:bg-slate-200 text-slate-900 p-2.5 rounded-lg transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Social Icons matching the bottom left of Kosbiotic */}
            <div className="flex gap-4 mt-8 lg:mt-16">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
