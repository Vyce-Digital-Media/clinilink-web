import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import HoverButton from '../components/ui/HoverButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'

const DASHBOARD_IMG =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80'

const capabilities = [
  { title: 'Unified participant view', desc: 'Centralize participant communication, logs, and activity records into a single source of truth for clinical teams.' },
  { title: 'AI-powered retention intelligence', desc: 'Leverage predictive models to accurately forecast participant behavior and dropout probability.' },
  { title: 'Automated engagement workflows', desc: 'Trigger reminders, scheduling outreach, and surveys automatically based on study milestones.' },
  { title: 'Real-time monitoring', desc: 'Continuously track response latency, diary compliance, and check-in adherence as data is logged.' },
  { title: 'Actionable insights for study teams', desc: 'Equip site coordinators and principal investigators with direct indicators on when and how to intervene.' }
]

const workflowSteps = [
  { label: 'Upcoming Visit', color: 'bg-slate-800 border-slate-700 text-white' },
  { label: 'Automated Reminder', color: 'bg-blue-500/15 border-blue-500/40 text-blue-300' },
  { label: 'Participant Response', color: 'bg-slate-800 border-slate-700 text-white' },
  { label: 'Coordinator Notification', color: 'bg-slate-800 border-slate-700 text-white' },
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
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-slate-900 text-white z-10">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center w-full">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
              Configurable Engagement Workflows
            </h2>
          </RevealLine>

          <div className="relative flex flex-col items-center gap-6 py-8 w-full max-w-xs mx-auto">
            {/* Scroll-linked line behind the cards */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px] bg-slate-800/50 rounded-full z-0">
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
      </div>
    </section>
  )
}

function WorkflowStep({ step, index, total, progress }) {
  const ref = useRef(null)
  const rangeStart = Math.max(0, index / total - 0.05)
  const rangeEnd = Math.min(1, (index + 0.9) / total)
  const opacity = useTransform(progress, [rangeStart, rangeEnd], [0.2, 1])

  return (
    <motion.div ref={ref} style={{ opacity }} className="relative z-10 w-full">
      {/* Card */}
      <div className={`px-8 py-4 rounded-2xl border font-bold text-xl shadow-xl
                       hover:scale-105 transition-transform duration-300 flex items-center justify-center text-center relative z-10 bg-slate-900 ${step.color}`}>
        <div>
          {step.label}
          {step.sub && <span className="block text-sm font-medium mt-1 opacity-70">{step.sub}</span>}
        </div>
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
              Two Platforms.{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                One Goal:
              </span>{' '}
              Better Trial Retention.
            </h1>
          </RevealLine>
          <FadeIn delay={0.4} className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
              CliniLink helps clinical teams predict who is likely to stay before enrollment and identify who is at risk of dropping out during the trial — enabling earlier intervention, stronger retention, and better study continuity.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} className="pt-4 flex justify-center">
            <HoverButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold
                                       hover:bg-primary transition-all duration-500
                                       shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-2 relative z-10">
                Book a Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>

            </HoverButton>
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

      {/* ── TWO-PLATFORM SECTION ─────────────────────────────────────────────── */}
      <section className="py-36 bg-slate-50 border-y border-slate-100 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                Two Platforms, One continuum of retention intelligence
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                From predicting who’s most likely to stay, to identifying who’s at risk during the trial – CliniLink gives clinical teams the intelligence to act early and keep studies on track.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Platform 1 Card */}
            <div className="bg-white border border-slate-200/60 rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase font-bold px-3.5 py-1 bg-primary/10 rounded-full">
                    Platform 1
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase font-bold px-3.5 py-1 bg-slate-100 rounded-full">
                    Pre-Trial / Enrollment
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Predict Who Will Stay
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  Evaluate participant fit and study completion likelihood before dropout risk emerges. This platform helps clinical teams evaluate which participants are most likely to remain engaged and complete the study.
                </p>

                <div className="h-px bg-slate-100 my-6" />

                <ul className="space-y-4">
                  {[
                    "Uses historical and real-time data signals",
                    "Predicts participant likelihood of study completion",
                    "Helps identify stronger-fit participants before or during enrollment",
                    "Supports better enrollment quality",
                    "Helps reduce downstream dropout risk"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 font-semibold text-sm">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Platform 2 Card */}
            <div className="bg-white border border-slate-200/60 rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase font-bold px-3.5 py-1 bg-primary/10 rounded-full">
                    Platform 2
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase font-bold px-3.5 py-1 bg-slate-100 rounded-full">
                    During the Trial
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Predict Who Will Drop Out
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  Monitor active participants, detect disengagement signals, and trigger proactive intervention. This platform monitors active participants during the study and identifies who may be at risk of disengagement or dropout.
                </p>

                <div className="h-px bg-slate-100 my-6" />

                <ul className="space-y-4">
                  {[
                    "Monitors engagement and behavior signals",
                    "Detects early signs of dropout risk",
                    "Triggers alerts and proactive intervention workflows",
                    "Supports site teams with follow-up visibility",
                    "Helps reduce dropout and protect study continuity"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 font-semibold text-sm">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ─────────────────────────────────────────────────── */}
      <section className="py-36 px-6 max-w-7xl mx-auto relative z-10 bg-white">
        <div className="mb-20 text-center">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Shared Capabilities</h2>
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
              A clean, unified interface displaying pending risk alerts, study participation statuses, engagement trends, and actionable follow-ups to maintain study continuity.
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
              Two connected platforms working together to predict, prevent, and improve retention across every study.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-6 flex justify-center">
            <HoverButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl
                                       hover:bg-primary transition-all duration-500
                                       shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-3 relative z-10">
                Schedule a Demo <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>

            </HoverButton>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
