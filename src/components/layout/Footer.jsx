import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#fcfbfa] text-slate-900 border-t border-slate-200/80 pt-16 pb-12 px-6 lg:px-12 font-sans relative">
      <div className="max-w-7xl mx-auto relative">

        {/* Top Border Line of the Logo Box */}
        <div className="w-full h-px bg-slate-200/60" />

        {/* Centered Huge Logo Section */}
        <div className="py-10 text-center">
          <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
            <h1 className="text-[12vw] md:text-[8rem] lg:text-[11rem] font-medium tracking-tighter leading-none text-[#111] select-none lowercase">
              clinilink
            </h1>
          </Link>
        </div>

        {/* Horizontal Line separating Logo and Grid */}
        <div className="w-full h-px bg-slate-200/60" />

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 py-12 relative">

          {/* Left Column: Newsletter */}
          <div className="lg:col-span-4 pr-0 lg:pr-12 flex flex-col justify-between pb-8 lg:pb-0 lg:border-r border-slate-200/60">
            <div className="space-y-6 max-w-sm">
              <h4 className="text-sm font-mono tracking-wider text-slate-700">Newsletter</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[280px]">
                Stay updated with the latest clinical intelligence and retention strategies.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1.5 focus-within:border-slate-800 focus-within:ring-2 focus-within:ring-slate-100 transition-all max-w-[300px]">
                  <input
                    type="email"
                    placeholder="email@clinilink-os.app"
                    className="bg-transparent text-xs text-slate-800 w-full pl-3 pr-2 py-1.5 outline-none placeholder:text-slate-400 font-sans"
                    required
                  />
                  <button type="submit" aria-label="Subscribe" className="bg-slate-900 hover:bg-slate-800 text-white p-2.5 rounded-lg transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </button>
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer select-none pt-1">
                  <input type="checkbox" className="mt-0.5 rounded border-slate-300 text-slate-900 focus:ring-slate-900 w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase leading-tight hover:text-slate-600 transition-colors">
                    I accept the terms & conditions
                  </span>
                </label>
              </form>
            </div>

            {/* Social Icons matching the bottom left of Kosbiotic */}
            <div className="flex gap-4 mt-8 lg:mt-16">
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {/* Right Columns: Links (Consolidated to 2 Columns) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 pl-0 lg:pl-12">
            {/* Column 1: Platform */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-slate-800 tracking-wide">Platform</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><Link to="/platform" className="hover:text-slate-950 transition-colors">Overview</Link></li>
                <li><Link to="/retention-intelligence" className="hover:text-slate-950 transition-colors">Retention Intelligence</Link></li>
                <li><Link to="/solutions" className="hover:text-slate-950 transition-colors">Solutions</Link></li>
                <li><Link to="/resources" className="hover:text-slate-950 transition-colors">Resources</Link></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-slate-800 tracking-wide">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li><Link to="/about" className="hover:text-slate-950 transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-slate-950 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-slate-950 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Right side Logo Column */}
          <div className="lg:col-span-2 flex justify-center items-center pl-0 lg:pl-6">
            <div className="bg-slate-950 px-8 py-6 rounded-2xl flex items-center justify-center shadow-md hover:bg-black transition-all duration-300 w-full max-w-[240px]">
              <img src="/logo.png" alt="CliniLink Logo" className="h-12 sm:h-16 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Horizontal Line separating Grid and Bottom Bar */}
        <div className="w-full h-px bg-slate-200/60" />

        {/* Bottom Bar & Floating Chat Bubble */}
        <div className="flex justify-between items-center pt-8 relative">
          <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
            COPYRIGHT CLINILINK 2026
          </div>

          {/* Floating Chat Bubble acting as quick link to Contact Page */}
          <div className="absolute right-0 bottom-2 lg:bottom-4">
            <Link to="/contact" aria-label="Contact Us" className="w-12 h-12 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
