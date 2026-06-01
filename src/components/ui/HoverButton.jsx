import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useRef } from 'react'

export default function HoverButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  
  // Spotlight coordinates
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  function handleMouseMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    
    // Spotlight position
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              120px circle at ${x}px ${y}px,
              rgba(255,255,255,0.3),
              transparent 80%
            )
          `,
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
