import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowRight, Compass, PhoneCall } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070e1c] text-white pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Error 404 &bull; Page Not Found
        </motion.div>

        {/* Big visual number */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500"
        >
          404
        </motion.h1>

        {/* Headline & Description */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold mt-4 mb-3 text-slate-100"
        >
          The page you are looking for doesn't exist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
        >
          The link might be broken, outdated, or the page may have moved. Explore our core platform or return to the main dashboard.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4 text-blue-400" />
            <span>Explore Platform</span>
            <ArrowRight className="w-4 h-4 opacity-60" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 font-semibold text-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 text-slate-400" />
            <span>Contact Support</span>
          </Link>
        </motion.div>

        {/* Helpful links pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400"
        >
          <span className="text-slate-400">Popular destinations:</span>
          <Link to="/solutions" className="text-slate-300 hover:text-blue-400 transition-colors">
            Solutions
          </Link>
          <span className="text-slate-600">&bull;</span>
          <Link to="/retention-intelligence" className="text-slate-300 hover:text-blue-400 transition-colors">
            Retention Intelligence
          </Link>
          <span className="text-slate-600">&bull;</span>
          <Link to="/resources" className="text-slate-300 hover:text-blue-400 transition-colors">
            Resources
          </Link>
          <span className="text-slate-600">&bull;</span>
          <Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
            About Us
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
