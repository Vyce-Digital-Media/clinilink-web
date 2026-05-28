import { ArrowRight, Activity, Eye, FileSearch, ShieldCheck, Clock, Users } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'

const DASHBOARD_IMG =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80'

const benefits = [
  { title: 'Earlier Visibility into Engagement Activity',    icon: Eye },
  { title: 'More Coordinated Follow-Up Workflows',           icon: Activity },
  { title: 'Reduced Manual Communication Burden',            icon: Clock },
  { title: 'Centralized Operational Oversight',              icon: FileSearch },
  { title: 'Improved Participant Engagement Continuity',     icon: Users },
  { title: 'Streamlined Study Coordination',                 icon: ShieldCheck }
]

const lifecycleSteps = [
  { label: 'Engagement Activity',      style: 'bg-slate-50 border-slate-200 text-slate-700' },
  { label: 'Communication Monitoring', style: 'bg-slate-50 border-slate-200 text-slate-700' },
  { label: 'Participation Signals',    style: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'Operational Visibility',   style: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { label: 'Retention Follow-Up',      style: 'bg-emerald-50 border-emerald-200 text-emerald-700' }
]

const workflowSteps = [
  { label: 'Missed Visit Activity',          style: 'bg-slate-800 border-slate-700 text-white' },
  { label: 'Outreach Workflow Triggered',    style: 'bg-blue-500/15 border-blue-500/40 text-blue-300' },
  { label: 'Participant Response Monitoring', style: 'bg-slate-800 border-slate-700 text-white' },
  { label: 'Coordinator Notification',       style: 'bg-slate-800 border-slate-700 text-white' },
  { label: 'Follow-Up Tracking',             style: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' }
]

/* ── Sub-components ──────────────────────────────────────────────────────── */

function LifecycleStep({ step, index, progress }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const rangeStart = Math.max(0, index / lifecycleSteps.length - 0.05)
  const rangeEnd = Math.min(1, (index + 0.9) / lifecycleSteps.length)
  const opacity = useTransform(progress, [rangeStart, rangeEnd], [0.2, 1])
  const y = useTransform(progress, [rangeStart, rangeEnd], [12, 0])

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="flex flex-col items-center w-full">
      {index > 0 && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          className="w-[2px] h-7 bg-gradient-to-b from-blue-300/50 to-indigo-300/50 rounded-full my-1 origin-top"
        />
      )}
      <div className={`border rounded-2xl font-bold text-xl text-center py-5 w-full max-w-xs shadow-sm
                       hover:scale-105 transition-transform duration-300 ${step.style}`}>
        {step.label}
      </div>
    </motion.div>
  )
}

function WorkflowStep({ step, index, progress }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const rangeStart = Math.max(0, index / workflowSteps.length - 0.05)
  const rangeEnd = Math.min(1, (index + 0.9) / workflowSteps.length)
  const opacity = useTransform(progress, [rangeStart, rangeEnd], [0.2, 1])
  const y = useTransform(progress, [rangeStart, rangeEnd], [12, 0])

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="flex flex-col items-center w-full">
      {index > 0 && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          className="w-[2px] h-7 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full my-1 origin-top"
        />
      )}
      <div className={`border rounded-2xl font-bold text-xl text-center py-5 w-full max-w-xs shadow-xl
                       hover:scale-105 transition-transform duration-300 ${step.style}`}>
        {step.label}
      </div>
    </motion.div>
  )
}

function BenefitCard({ benefit, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = benefit.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white border border-slate-200 p-10 rounded-[2rem]
                 shadow-lg shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl
                 hover:shadow-blue-500/10 hover:border-blue-100
                 transition-all duration-400 cursor-default"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8
                      group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white
                      transition-all duration-300">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight
                     group-hover:text-blue-600 transition-colors duration-300">
        {benefit.title}
      </h3>
    </motion.div>
  )
}

function LifecycleSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 35%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 22 })

  return (
    <section className="py-36 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10 bg-white">
      <div className="space-y-8">
        <RevealLine>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Monitor Engagement Activity Across the Study Lifecycle
          </h2>
        </RevealLine>
        <FadeIn delay={0.2}>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            CliniLink centralizes participant engagement activity, communication workflows, adherence trends, and follow-up
            visibility into a unified operational view designed to support proactive retention management.
          </p>
        </FadeIn>
      </div>

      {/* Lifecycle visual with scroll-linked connector line */}
      <div ref={ref} className="flex flex-col items-center relative">
        {/* Background connector line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-[2px] bg-slate-100 rounded-full">
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-blue-400 via-indigo-400 to-emerald-400 rounded-full"
          />
        </div>

        <div className="w-full max-w-xs space-y-0 relative z-10">
          {lifecycleSteps.map((step, i) => (
            <LifecycleStep key={i} step={step} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkflowSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 30%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 22 })

  return (
    <section className="py-36 px-6 bg-slate-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Workflow visual */}
        <div ref={ref} className="flex flex-col items-center relative lg:order-first">
          <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-[2px] bg-slate-800 rounded-full">
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-indigo-400 to-emerald-400 rounded-full"
            />
          </div>
          <div className="w-full max-w-xs space-y-0 relative z-10">
            {workflowSteps.map((step, i) => (
              <WorkflowStep key={i} step={step} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="space-y-8">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Support Earlier Participant Follow-Up</h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-400 font-medium leading-relaxed">
            <p>CliniLink enables study teams to coordinate participant communication workflows, automate outreach activity, and maintain more consistent engagement throughout active participation.</p>
            <p>The platform is designed to help coordinators prioritize follow-up activity without increasing operational complexity.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function RetentionIntelligence() {
  const dashboardRef = useRef(null)
  const { scrollYProgress: dashProgress } = useScroll({
    target: dashboardRef,
    offset: ['start end', 'end start']
  })
  const scaleDash = useSpring(
    useTransform(dashProgress, [0, 0.5, 1], [0.96, 1, 1.03]),
    { stiffness: 60, damping: 20 }
  )

  return (
    <main className="bg-white overflow-clip selection:bg-primary/20 selection:text-primary">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-40 pb-32 px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <InteractiveGrid cellSize={60} hoverColor="hover:bg-slate-50" gridColor="border-slate-200/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white z-10" />
        </div>

        <div className="space-y-8 max-w-5xl mx-auto text-center relative z-10">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase">
              Proactive{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Retention Intelligence
              </span>{' '}
              for Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.4} className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
              CliniLink helps clinical teams identify engagement risks earlier, monitor participant activity more
              effectively, and support proactive retention workflows across the study lifecycle.
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

      {/* ── THE RETENTION CHALLENGE ───────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-slate-50 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Participant Disengagement Rarely Happens All at Once
            </h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
            <p>Retention challenges often emerge gradually through missed check-ins, declining responsiveness, inconsistent engagement, and communication gaps.</p>
            <p>Without clear operational visibility, these signals are difficult to identify early enough for effective intervention.</p>
            <p>CliniLink helps clinical teams monitor retention-related activity and respond more proactively throughout active studies.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── LIFECYCLE FLOW ────────────────────────────────────────────────────── */}
      <LifecycleSection />

      {/* ── PROACTIVE WORKFLOW ────────────────────────────────────────────────── */}
      <WorkflowSection />

      {/* ── CENTRALIZED OVERSIGHT (with scale parallax) ──────────────────────── */}
      <section className="py-36 px-6 max-w-7xl mx-auto border-b border-slate-100 relative z-10 bg-white" ref={dashboardRef}>
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-24">
          <RevealLine>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Centralized Visibility Across Participants and Studies
            </h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
            <p>Study teams can monitor engagement activity, participant communication status, and operational follow-up workflows from a centralized retention management environment.</p>
            <p>Designed for modern clinical operations, CliniLink supports more coordinated retention oversight across sites and studies.</p>
          </FadeIn>
        </div>

        <motion.div
          style={{ scale: scaleDash }}
          className="rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(15,23,42,0.10)] border border-slate-200
                     will-change-transform relative group"
        >
          <img src={DASHBOARD_IMG} alt="Centralized Retention Oversight" className="w-full h-auto" />
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/8 transition-colors duration-500" />
        </motion.div>
      </section>

      {/* ── OPERATIONAL BENEFITS GRID ─────────────────────────────────────────── */}
      <section className="py-36 px-6 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Designed to Support Better Retention Operations
              </h2>
            </RevealLine>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <BenefitCard key={i} benefit={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-32 text-center px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">
              See How CliniLink Supports{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Proactive Retention Management
              </span>
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Explore how modern retention intelligence can help clinical teams improve engagement visibility and support
              more proactive participant follow-up workflows.
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
