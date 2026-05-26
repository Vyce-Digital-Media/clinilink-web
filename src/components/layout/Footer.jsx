export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 md:col-span-1">
          <h3 className="text-xl font-bold text-white tracking-tight">
            CliniLink<span className="text-primary">.</span>
          </h3>
          <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
            The operational intelligence leader for clinical trial retention. We identify risks early so you don't have to.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white font-semibold tracking-wide text-sm uppercase">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Overview</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Retention Intelligence</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold tracking-wide text-sm uppercase">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">For CROs</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">For Sponsors</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">For Sites</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold tracking-wide text-sm uppercase">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} CliniLink Health. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
