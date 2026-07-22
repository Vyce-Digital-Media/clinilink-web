import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
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
    setHoveredIndex(null)
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
        <div className="hidden md:flex items-center gap-1 relative" onMouseLeave={() => setHoveredIndex(null)}>
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
        <div className="flex items-center gap-3 z-20">
          <a href="#" className="whitespace-nowrap px-5 py-2.5 rounded-full bg-primary hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95">
            Schedule a Demo
          </a>
        </div>

      </div>
    </motion.nav>
  )
}
