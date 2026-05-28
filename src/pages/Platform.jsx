import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'

const DASHBOARD_IMG =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80'

const capabilities = [
  { title: 'Participant Engagement', desc: 'Coordinate participant communication across SMS, voice, email, and outreach workflows from a centralized platform.' },
  { title: 'Retention Monitoring', desc: 'Track participant engagement activity, adherence trends, and study participation signals in real time.' },
  { title: 'Automated Engagement Workflows', desc: 'Automate reminders, follow-ups, and participant communication tasks to reduce manual coordinator workload.' },
  { title: 'Operational Visibility', desc: 'Provide study teams with centralized dashboards and engagement oversight across sites and participants.' },
  { title: 'Configurable Communication', desc: 'Support flexible communication pathways tailored to study protocols and participant needs.' },
  { title: 'Study Coordination Support', desc: 'Enable more efficient participant management through streamlined engagement workflows and monitoring tools.' }
]

const workflowSteps = [
  { label: 'Upcoming Visit', color: 'bg-slate-800 border-slate-700 text-white' },
  { label: 'Automated Reminder', sub: '(SMS / Voice / Email)', color: 'bg-blue-500/15 border-blue-500/40 text-blue-300' },
  { label: 'Participant Response', color: 'bg-slate-800 border-slate-700 text-white' },
  { label: 'Coordinator Notification', sub: '(if needed)', color: 'bg-slate-800 border-slate-700 text-white' },
  { label: 'Engagement Tracking', color: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' }
]

const infraItems = [
  'HIPAA-ready architecture',
  'Secure participant data handling',
  'Role-based access controls',
  'Integration-ready workflows',
  'Configurable operational support'
]

/* ── Sub-components ──────────────────────────────────────────────────────── */

function CapabilityCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-10 rounded-[2rem] bg-white border border-slate-100
                 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-500/8
                 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-default"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-gradient-to-b from-blue-500 to-indigo-500
                      origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
      {/* Index watermark */}
      <span className="absolute top-4 right-6 font-mono text-[5rem] font-black text-slate-900/[0.025]
                       leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight
                     group-hover:text-blue-600 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-lg text-slate-600 font-medium leading-relaxed">{item.desc}</p>
    </motion.div>
  )
}

function WorkflowSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <section ref={ref} className="py-40 bg-slate-900 text-white px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <RevealLine>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-24">
            Configurable Engagement Workflows
          </h2>
        </RevealLine>

        <div className="relative inline-flex flex-col items-center gap-0">
          {/* Animated connector line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-slate-800 overflow-hidden rounded-full">
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-indigo-400 to-emerald-400"
            />
          </div>

          {workflowSteps.map((step, i) => (
            <WorkflowStep key={i} step={step} index={i} total={workflowSteps.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkflowStep({ step, index, total, progress }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const rangeStart = Math.max(0, index / total - 0.05)
  const rangeEnd = Math.min(1, (index + 0.9) / total)
  const opacity = useTransform(progress, [rangeStart, rangeEnd], [0.2, 1])

  return (
    <motion.div ref={ref} style={{ opacity }} className="relative z-10 w-full flex flex-col items-center">
      {/* Dot */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="w-3 h-3 rounded-full bg-blue-400 border-2 border-slate-900 my-4 z-10"
      />
      {/* Card */}
      <div className={`px-8 py-4 rounded-2xl border font-bold text-xl shadow-xl
                       hover:scale-105 transition-transform duration-300 ${step.color}`}>
        {step.label}
        {step.sub && <span className="block text-sm font-medium mt-1 opacity-70">{step.sub}</span>}
      </div>
    </motion.div>
  )
}

function InfraItem({ label, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-4 text-lg font-bold text-slate-700
                 bg-white p-6 rounded-2xl shadow-md shadow-slate-200/50 border border-slate-100
                 hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-x-1
                 hover:border-blue-100 transition-all duration-400 group cursor-default"
    >
      <CheckCircle2
        className="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform duration-300"
        size={24}
      />
      {label}
    </motion.li>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function Platform() {
  const containerRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  const yBg = useTransform(heroProgress, [0, 1], ['0%', '18%'])

  return (
    <main ref={containerRef} className="bg-white overflow-clip selection:bg-primary/20 selection:text-primary">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-40 pb-32 px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <InteractiveGrid cellSize={60} hoverColor="hover:bg-slate-50" gridColor="border-slate-200/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white z-10" />
        </div>

        <div className="space-y-8 max-w-5xl mx-auto text-center relative z-10">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase">
              Modern{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Retention Infrastructure
              </span>{' '}
              for Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.4} className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
              CliniLink helps clinical teams manage participant engagement, monitor retention activity, and streamline
              engagement workflows throughout the study lifecycle.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} className="pt-4 flex justify-center">
            <MagneticButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold
                                       hover:bg-primary transition-all duration-500
                                       shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-2 relative z-10">
                Book a Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* ── Dashboard image ───────────────────────────────────────────────────── */}
      <section className="py-0 px-6 max-w-6xl mx-auto -mt-8 relative z-20">
        <motion.div
          style={{ y: yBg }}
          className="rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(15,23,42,0.12)] border border-slate-200 will-change-transform"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={DASHBOARD_IMG} alt="CliniLink Dashboard" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* ── PLATFORM OVERVIEW ─────────────────────────────────────────────────── */}
      <section className="py-36 bg-slate-50 border-y border-slate-100 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Built for Modern Clinical Operations
            </h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
            <p>Clinical trial teams need more efficient ways to manage participant engagement, monitor retention activity, and support study continuity across active studies.</p>
            <p>CliniLink centralizes communication, monitoring, and engagement workflows into a unified operational platform designed for modern trial management.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ─────────────────────────────────────────────────── */}
      <section className="py-36 px-6 max-w-7xl mx-auto relative z-10 bg-white">
        <div className="mb-20 text-center">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Core Platform Capabilities</h2>
          </RevealLine>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((item, i) => (
            <CapabilityCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── WORKFLOW ──────────────────────────────────────────────────────────── */}
      <WorkflowSection />

      {/* ── OPERATIONAL VISIBILITY ────────────────────────────────────────────── */}
      <section className="py-36 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center bg-white relative z-10">
        <div className="space-y-8">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Centralized Retention Oversight</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Monitor participant engagement activity, communication status, and follow-up visibility across studies
              from a centralized operational view.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.4} className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 group">
          <img
            src={DASHBOARD_IMG}
            alt="Operational Visibility"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          />
        </FadeIn>
      </section>

      {/* ── INFRASTRUCTURE ────────────────────────────────────────────────────── */}
      <section className="py-36 bg-slate-50 border-y border-slate-100 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Enterprise-Ready Infrastructure</h2>
            </RevealLine>
          </div>
          <ul className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {infraItems.map((item, i) => (
              <InfraItem key={i} label={item} index={i} />
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-32 text-center px-6 bg-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">
              See the{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                CliniLink Platform
              </span>{' '}
              in Action
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Explore how CliniLink supports proactive participant engagement and operational retention management across clinical studies.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-6 flex justify-center">
            <MagneticButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl
                                       hover:bg-primary transition-all duration-500
                                       shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-3 relative z-10">
                Schedule a Demo <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
