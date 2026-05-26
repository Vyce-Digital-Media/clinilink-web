import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

export function AnimatedCounter({ value, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  
  const motionValue = useSpring(direction === 'down' ? value : 0, {
    damping: 50,
    stiffness: 100,
  })

  useEffect(() => {
    if (inView) {
      motionValue.set(direction === 'down' ? 0 : value)
    }
  }, [motionValue, inView, value, direction])

  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>
}
