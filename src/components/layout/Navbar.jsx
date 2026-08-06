import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const location = useLocation()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setHoveredIndex(null)
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Platform', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Retention Intelligence', path: '/retention-intelligence' },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const getActiveIndex = () => {
    const path = location.pathname;
    if (path === '/') return 0;
    if (path === '/platform') return 1;
    if (path === '/solutions') return 2;
    if (path === '/retention-intelligence') return 3;
    if (path === '/resources') return 4;
    if (path === '/about') return 5;
    if (path === '/contact') return 6;
    return null;
  };

  const activeIndex = getActiveIndex();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed inset-x-0 mx-auto z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? 'top-4 w-[95%] max-w-7xl' : 'top-6 w-[95%] max-w-7xl'
        }`}
    >
      <div className="bg-[#0b1b33]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-950/20 rounded-full px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 relative z-20">
          <img src="/logo.png" alt="CliniLink Logo" className="h-7 sm:h-9 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-1 relative" onMouseLeave={() => setHoveredIndex(null)}>
          {navLinks.map((link, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = activeIndex === index;
            const displayBubble = hoveredIndex !== null ? isHovered : isActive;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-bold transition-colors ${isActive ? 'text-primary' : 'text-slate-300 hover:text-white'
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                {displayBubble && (
                  <motion.div
                    layoutId="navBubble"
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA BUTTONS */}
        <div className="flex items-center gap-2 sm:gap-3 z-20">
          <a href="https://calendly.com/pkshah-zsk7" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95">
            Schedule a Demo
          </a>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#0b1b33]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl flex flex-col gap-2 z-40"
          >
            {navLinks.map((link, index) => {
              const isActive = activeIndex === index;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-xl text-base font-bold transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
