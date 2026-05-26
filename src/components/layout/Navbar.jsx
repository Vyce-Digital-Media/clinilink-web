import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [scienceOpen, setScienceOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setScienceOpen(false)
    setHoveredIndex(null)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Science', path: null, hasDropdown: true },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed inset-x-0 mx-auto z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'top-4 w-[95%] max-w-5xl' : 'top-6 w-[95%] max-w-7xl'
      }`}
    >
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/50 rounded-full px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 relative z-20">
          <img src="/logo.png" alt="CliniLink Logo" className="h-7 sm:h-9 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} /> 
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-1 relative" onMouseLeave={() => setHoveredIndex(null)}>
          {navLinks.map((link, index) => {
            const isHovered = hoveredIndex === index;
            
            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name}
                  className="relative group px-3 py-2 cursor-pointer"
                  onMouseEnter={() => {
                    setHoveredIndex(index)
                    setScienceOpen(true)
                  }}
                  onMouseLeave={() => setScienceOpen(false)}
                >
                  <div className="flex items-center gap-1 text-sm font-bold text-slate-700 hover:text-primary transition-colors z-10 relative">
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${scienceOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isHovered && (
                    <motion.div
                      layoutId="navBubble"
                      className="absolute inset-0 bg-slate-100 rounded-full -z-0"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {scienceOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(5px)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 p-2 w-64 origin-top z-50"
                      >
                        <Link to="/platform" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">
                          Platform
                        </Link>
                        <Link to="/solutions" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">
                          Solutions
                        </Link>
                        <Link to="/retention-intelligence" className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors">
                          Retention Intelligence
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className="relative px-4 py-2 text-sm font-bold text-slate-700 hover:text-primary transition-colors"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <span className="relative z-10">{link.name}</span>
                {isHovered && (
                  <motion.div
                    layoutId="navBubble"
                    className="absolute inset-0 bg-slate-100 rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA BUTTONS */}
        <div className="flex items-center gap-3 z-20">
          <a href="#" className="text-sm font-bold text-slate-600 hover:text-slate-900 hidden sm:block transition-colors px-3 py-2 rounded-full hover:bg-slate-100">Log In</a>
          <a href="#" className="px-5 py-2.5 rounded-full bg-primary hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95">
            Book a Demo
          </a>
        </div>

      </div>
    </motion.nav>
  )
}
