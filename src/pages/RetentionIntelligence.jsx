import { 
  ArrowRight, Activity, Eye, FileSearch, ShieldCheck, Clock, Users,
  MessageSquare, Calendar, ClipboardList, TrendingDown,
  Search, Bell, Settings, AlertTriangle, CheckSquare, 
  Send, FileText, LayoutDashboard, Zap, ShieldAlert, HeartPulse, 
  Layers, Cpu, Compass, RefreshCw, AlertCircle, CheckCircle2, Check
} from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'

const benefits = [
  {
    title: 'Earlier Risk Detection',
    desc: 'Identify retention concerns before disengagement escalates.',
    icon: ShieldAlert
  },
  {
    title: 'Faster Coordinator Response',
    desc: 'Improve follow-up speed and operational prioritization.',
    icon: Zap
  },
  {
    title: 'Improved Study Continuity',
    desc: 'Reduce operational disruption caused by participant dropout.',
    icon: HeartPulse
  },
  {
    title: 'Centralized Visibility',
    desc: 'Support retention oversight across studies and sites.',
    icon: Layers
  },
  {
    title: 'Reduced Manual Coordination',
    desc: 'Automate retention workflows and communication tasks.',
    icon: Cpu
  },
  {
    title: 'Scalable Retention Operations',
    desc: 'Support growing clinical programs with standardized processes.',
    icon: Compass
  }
]

const lifecycleSteps = [
  { label: 'Engaged', style: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600', dot: 'bg-emerald-500' },
  { label: 'Reduced Response', style: 'bg-blue-500/10 border-blue-500/20 text-blue-600', dot: 'bg-blue-500' },
  { label: 'Missed Reminder', style: 'bg-amber-500/10 border-amber-500/20 text-amber-600', dot: 'bg-amber-500' },
  { label: 'Missed Visit Risk', style: 'bg-orange-500/10 border-orange-500/20 text-orange-600', dot: 'bg-orange-500' },
  { label: 'Escalation', style: 'bg-rose-500/10 border-rose-500/20 text-rose-600', dot: 'bg-rose-500' }
]

const workflowSteps = [
  { label: 'Signal Detected', dot: 'bg-blue-400' },
  { label: 'Risk Prioritized', dot: 'bg-indigo-400' },
  { label: 'Coordinator Alerted', dot: 'bg-amber-400' },
  { label: 'Participant Outreach Triggered', dot: 'bg-orange-400' },
  { label: 'Intervention Logged', dot: 'bg-emerald-400' },
  { label: 'Retention Status Updated', dot: 'bg-cyan-400' }
]

const signalsData = [
  {
    title: 'Communication Gaps',
    desc: 'Missed responses, delayed follow-ups, declining engagement frequency.',
    metric: 'Response Rate: 42% (Normal >80%)',
    alert: 'Critical Delay',
    color: 'amber',
    icon: MessageSquare
  },
  {
    title: 'Visit Adherence Risk',
    desc: 'Late confirmations, cancellations, missed appointments.',
    metric: 'Next Visit Confidence: 30%',
    alert: 'Adherence Threat',
    color: 'rose',
    icon: Calendar
  },
  {
    title: 'Protocol Friction',
    desc: 'Repeated clarification requests, incomplete activities, adherence inconsistencies.',
    metric: 'Unfinished Tasks: 4 / 10',
    alert: 'Friction Warning',
    color: 'orange',
    icon: ClipboardList
  },
  {
    title: 'Coordinator Activity',
    desc: 'Unresolved follow-ups, delayed outreach, escalation backlog.',
    metric: 'Backlog: 8 cases pending',
    alert: 'Attention Needed',
    color: 'blue',
    icon: Users
  },
  {
    title: 'Participant Behavior Trends',
    desc: 'Engagement decline patterns across study activity.',
    metric: 'Activity Score: -35% over 14d',
    alert: 'Decline Pattern',
    color: 'rose',
    icon: TrendingDown
  }
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
    <motion.div ref={ref} style={{ opacity, y }} className="flex flex-col items-center w-full relative">
      {index > 0 && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          className="w-[2px] h-10 bg-gradient-to-b from-slate-300 to-slate-200 rounded-full my-1 origin-top"
        />
      )}
      <div className={`border rounded-2xl font-black text-lg text-center py-4 px-6 w-full max-w-xs shadow-sm
                       hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 ${step.style}`}>
        <span className={`w-2.5 h-2.5 rounded-full ${step.dot}`} />
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
  const opacity = useTransform(progress, [rangeStart, rangeEnd], [0.25, 1])
  const y = useTransform(progress, [rangeStart, rangeEnd], [12, 0])

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="flex flex-col items-center w-full relative">
      {index > 0 && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          className="w-[2px] h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full my-1 origin-top"
        />
      )}
      <div className={`border bg-slate-950/80 border-slate-800 rounded-2xl font-black text-lg text-center py-4 px-6 w-full max-w-xs shadow-2xl
                       hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 text-slate-100`}>
        <span className={`w-2.5 h-2.5 rounded-full ${step.dot || 'bg-blue-400'}`} />
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
      className="group bg-white border border-slate-250/80 p-8 rounded-[2rem]
                 shadow-lg shadow-slate-200/40 hover:-translate-y-2 hover:shadow-2xl
                 hover:shadow-blue-500/10 hover:border-blue-200
                 transition-all duration-400 cursor-default"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6
                      group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white
                      transition-all duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-black text-slate-900 leading-tight tracking-tight mb-3
                     group-hover:text-blue-600 transition-colors duration-300">
        {benefit.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed font-semibold">
        {benefit.desc}
      </p>
    </motion.div>
  )
}

function SignalCard({ signal, index }) {
  const Icon = signal.icon
  const colorMap = {
    rose: {
      border: 'border-rose-100 hover:border-rose-500/30 shadow-rose-500/5',
      bg: 'bg-rose-50/80 text-rose-600',
      badge: 'bg-rose-100 text-rose-700',
      bar: 'bg-rose-500',
      glow: 'bg-rose-500'
    },
    amber: {
      border: 'border-amber-100 hover:border-amber-500/30 shadow-amber-500/5',
      bg: 'bg-amber-50/80 text-amber-600',
      badge: 'bg-amber-100 text-amber-700',
      bar: 'bg-amber-500',
      glow: 'bg-amber-500'
    },
    orange: {
      border: 'border-orange-100 hover:border-orange-500/30 shadow-orange-500/5',
      bg: 'bg-orange-50/80 text-orange-600',
      badge: 'bg-orange-100 text-orange-700',
      bar: 'bg-orange-500',
      glow: 'bg-orange-500'
    },
    blue: {
      border: 'border-blue-100 hover:border-blue-500/30 shadow-blue-500/5',
      bg: 'bg-blue-50/80 text-blue-600',
      badge: 'bg-blue-100 text-blue-700',
      bar: 'bg-blue-500',
      glow: 'bg-blue-500'
    }
  }

  const currentTheme = colorMap[signal.color] || colorMap.blue

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border rounded-[2rem] p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-400 flex flex-col justify-between ${currentTheme.border}`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className={`p-3.5 rounded-2xl ${currentTheme.bg}`}>
            <Icon size={24} />
          </div>
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentTheme.glow}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${currentTheme.glow}`}></span>
            </span>
            <span className={`text-[10px] font-black tracking-wider uppercase ${currentTheme.badge}`}>
              {signal.alert}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-3 leading-snug tracking-tight">{signal.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 font-semibold">{signal.desc}</p>
      </div>

      <div className="border-t border-slate-100 pt-5 mt-auto">
        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-2">Live Telemetry</span>
        <span className="text-sm font-black text-slate-800 block mb-3">{signal.metric}</span>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${currentTheme.bar}`}
            style={{ width: signal.color === 'rose' ? '85%' : signal.color === 'orange' ? '65%' : signal.color === 'amber' ? '50%' : '35%' }}
          />
        </div>
      </div>
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
            Retention risk rarely appears all at once.
          </h2>
        </RevealLine>
        <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
          <p>
            Participant disengagement often develops gradually through missed communications, declining responsiveness, inconsistent visit adherence, and operational friction.
          </p>
          <p>
            Without centralized visibility, these early warning signs can be difficult to identify before dropout impacts study continuity.
          </p>
          <p>
            CliniLink helps clinical teams detect and respond to retention risk earlier through continuous monitoring and proactive operational workflows.
          </p>
        </FadeIn>
      </div>

      {/* Lifecycle visual with scroll-linked connector line */}
      <div ref={ref} className="flex flex-col items-center relative py-4">
        {/* Background connector line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-16 bottom-16 w-[2px] bg-slate-100 rounded-full">
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-emerald-400 via-amber-400 to-rose-500 rounded-full"
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
    <section className="py-36 px-6 bg-slate-900 text-white relative z-10 border-b border-slate-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Workflow visual */}
        <div ref={ref} className="flex flex-col items-center relative lg:order-first">
          <div className="absolute left-1/2 -translate-x-1/2 top-16 bottom-16 w-[2px] bg-slate-800 rounded-full">
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-400 rounded-full"
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
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
              From retention signals to proactive intervention.
            </h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-400 font-medium leading-relaxed">
            <p>
              CliniLink transforms retention intelligence into operational action by helping teams prioritize outreach, coordinate follow-ups, and intervene earlier across active studies.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function RetentionDashboardMockup() {
  const [filter, setFilter] = useState('ALL') // 'ALL', 'HIGH', 'ESCALATIONS'
  const [participants, setParticipants] = useState([
    { id: 'PT-4082', score: 92, category: 'High', signal: 'Missed Visit 2', site: 'Site 102', status: 'Pending Alert', escalation: 'Level 2 Escalation' },
    { id: 'PT-1109', score: 78, category: 'High', signal: 'No SMS Response (4d)', site: 'Site 105', status: 'SMS Reminder Sent', escalation: 'Level 1 Escalation' },
    { id: 'PT-8720', score: 65, category: 'Medium', signal: 'Incomplete ePRO (2d)', site: 'Site 108', status: 'Follow-up Scheduled', escalation: 'None' },
    { id: 'PT-3490', score: 58, category: 'Medium', signal: 'Late confirmations', site: 'Site 102', status: 'Monitoring', escalation: 'None' },
    { id: 'PT-2154', score: 44, category: 'Low', signal: 'Declining App Logins', site: 'Site 110', status: 'Active', escalation: 'None' }
  ])

  const [actions, setActions] = useState([
    { id: 1, text: 'Call PT-4082 regarding missed Visit 2', completed: false },
    { id: 2, text: 'Approve escalation protocol for PT-1109', completed: false },
    { id: 3, text: 'Review ePRO activity reports for Site 108', completed: true },
    { id: 4, text: 'Send reminder packet to Site 102 staff', completed: true }
  ])

  const [logs, setLogs] = useState([
    { time: '14:32:05', msg: 'System: Checked 1,248 participants across 12 sites' },
    { time: '14:28:12', msg: 'Alert: PT-4082 flagged for missed Visit 2' },
    { time: '14:15:40', msg: 'Outreach: SMS sent to PT-1109 (Delivered)' }
  ])

  // Live simulation tick
  useEffect(() => {
    const messages = [
      'Telemetry: Heartbeat pulse check complete.',
      'Signal: PT-2154 completed daily ePRO activity.',
      'Action: Coordinator resolved follow-up for PT-3490.',
      'Outreach: Call logged with PT-8720 (Resolved).',
      'Telemetry: Analyzing behavioral patterns for active cohort...',
      'Alert: Site 102 reporting increased missed visit rate (+5%).',
      'Signal: Response received from PT-1109 (Pending review).'
    ]
    
    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)]
      const now = new Date()
      const timeStr = now.toTimeString().split(' ')[0]
      setLogs(prev => [{ time: timeStr, msg: randomMsg }, ...prev.slice(0, 4)])
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const handleActionClick = (id) => {
    setActions(prev => prev.map(act => act.id === id ? { ...act, completed: !act.completed } : act))
  }

  const handleTriggerOutreach = (ptId) => {
    setParticipants(prev => prev.map(p => {
      if (p.id === ptId) {
        return { ...p, status: 'Outreach Triggered', score: Math.max(30, p.score - 15) }
      }
      return p
    }))
    const now = new Date()
    const timeStr = now.toTimeString().split(' ')[0]
    setLogs(prev => [{ time: timeStr, msg: `User Outreach triggered for ${ptId}` }, ...prev.slice(0, 4)])
  }

  const filteredParticipants = participants.filter(p => {
    if (filter === 'HIGH') return p.category === 'High'
    if (filter === 'ESCALATIONS') return p.escalation !== 'None'
    return true
  })

  return (
    <div className="bg-slate-950 text-slate-100 rounded-[2.5rem] p-6 md:p-10 border border-slate-800 shadow-2xl font-sans relative overflow-hidden select-none">
      {/* Glow highlight */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-2xl">
            <LayoutDashboard size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Retention Operations</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] bg-emerald-950 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">Live telemetry</span>
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white mt-1">Retention Command Center</h3>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-initial">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500 pointer-events-none">
              <Search size={14} />
            </span>
            <input 
              type="text" 
              placeholder="Search participants or sites..." 
              className="bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-full md:w-64"
              disabled
            />
          </div>
          <button className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors relative">
            <Bell size={16} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-slate-800">
        {[
          { label: 'Active Participants', val: '1,248', change: 'Normal Adherence', color: 'text-slate-400' },
          { label: 'At-Risk Queue', val: '14 flagged', change: '4 Critical High-Risk', color: 'text-rose-400' },
          { label: 'Site Alerts Active', val: '3 sites', change: 'Site 102, 105, 108', color: 'text-amber-400' },
          { label: 'Response Rate avg', val: '86%', change: '+1.2% over 7 days', color: 'text-emerald-400' }
        ].map((m, idx) => (
          <div key={idx} className="bg-slate-900/40 border border-slate-900 p-5 rounded-2xl">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest block mb-1.5">{m.label}</span>
            <span className="text-2xl font-black text-white block">{m.val}</span>
            <span className={`text-xs font-bold ${m.color} block mt-1`}>{m.change}</span>
          </div>
        ))}
      </div>

      {/* Main Grid content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        
        {/* At-risk Queue (Cols 1 & 2) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h4 className="text-sm font-black text-slate-300 uppercase tracking-widest flex items-center gap-2">
              <AlertTriangle size={16} className="text-rose-500" />
              At-Risk Participant Queue
            </h4>
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-[10px] font-bold self-start sm:self-auto">
              {[
                { key: 'ALL', label: 'All Cases' },
                { key: 'HIGH', label: 'High Risk' },
                { key: 'ESCALATIONS', label: 'Escalations' }
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => setFilter(t.key)}
                  className={`px-3 py-2 rounded-lg transition-colors ${filter === t.key ? 'bg-blue-600 text-white font-black' : 'text-slate-400 hover:text-white'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-slate-900/30 border border-slate-850 rounded-[1.5rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-850 text-slate-500 bg-slate-950 font-black uppercase text-[10px] tracking-widest">
                    <th className="py-4 px-5">Participant ID</th>
                    <th className="py-4 px-5">Risk Score</th>
                    <th className="py-4 px-5">Primary Signal</th>
                    <th className="py-4 px-5">Site</th>
                    <th className="py-4 px-5">Escalation</th>
                    <th className="py-4 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850/50">
                  {filteredParticipants.map(p => {
                    const isHigh = p.category === 'High'
                    const isMed = p.category === 'Medium'
                    const barColor = isHigh ? 'bg-rose-500' : isMed ? 'bg-amber-500' : 'bg-blue-500'
                    
                    return (
                      <tr key={p.id} className="hover:bg-slate-900/20 transition-colors">
                        <td className="py-4 px-5 font-bold text-white flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isHigh ? 'bg-rose-500 animate-pulse' : isMed ? 'bg-amber-500' : 'bg-blue-500'}`} />
                          {p.id}
                        </td>
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <span className="font-black text-slate-200 w-8 text-right">{p.score}</span>
                            <div className="w-16 h-1.5 bg-slate-850 rounded-full overflow-hidden hidden sm:block">
                              <div className={`h-full rounded-full ${barColor}`} style={{ width: `${p.score}%` }} />
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-slate-300 font-semibold">{p.signal}</td>
                        <td className="py-4 px-5 text-slate-400 font-bold">{p.site}</td>
                        <td className="py-4 px-5">
                          <span className={`text-[9px] px-2 py-1 rounded-full font-black uppercase tracking-wider ${p.escalation !== 'None' ? 'bg-rose-950/80 border border-rose-900/50 text-rose-400' : 'bg-slate-900 border border-slate-800 text-slate-500'}`}>
                            {p.escalation}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-right">
                          {p.status === 'Outreach Triggered' ? (
                            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/50 border border-emerald-900/50 px-3 py-1.5 rounded-lg">
                              Outreach Active
                            </span>
                          ) : (
                            <button
                              onClick={() => handleTriggerOutreach(p.id)}
                              className="text-[10px] font-black bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition-colors border border-blue-500/30"
                            >
                              Intervene
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Live Telemetry Logs */}
          <div className="bg-slate-900/20 border border-slate-850 p-5 rounded-[1.5rem]">
            <h5 className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-4 flex items-center justify-between">
              <span>Live Operational Log Feed</span>
              <span className="text-[9px] text-slate-600 flex items-center gap-1.5">
                <RefreshCw size={10} className="animate-spin" /> Auto-updating
              </span>
            </h5>
            <div className="space-y-2 font-mono text-xs">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-4 text-slate-400">
                  <span className="text-blue-500 font-black">{log.time}</span>
                  <span className="text-slate-300 break-words">{log.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar Columns */}
        <div className="space-y-6">
          
          {/* Site-Level Alerts */}
          <div className="bg-slate-900/20 border border-slate-850 p-6 rounded-[1.5rem]">
            <h4 className="text-sm font-black text-slate-300 uppercase tracking-widest mb-5 flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-500" />
              Active Site Alerts
            </h4>
            <div className="space-y-4">
              {[
                { site: 'Site 102 (Cleveland)', alert: 'Adherence drops by 15%', type: 'Critical', color: 'border-rose-500/20 bg-rose-500/5 text-rose-400' },
                { site: 'Site 105 (Dallas)', alert: 'Coordinator outreach backlog (+8 cases)', type: 'Warning', color: 'border-amber-500/20 bg-amber-500/5 text-amber-400' },
                { site: 'Site 108 (Boston)', alert: 'Incomplete diaries warning', type: 'Notice', color: 'border-blue-500/20 bg-blue-500/5 text-blue-400' }
              ].map((sa, i) => (
                <div key={i} className={`border p-4 rounded-xl flex flex-col justify-between gap-2 ${sa.color}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-white text-xs">{sa.site}</span>
                    <span className="text-[8px] uppercase font-black tracking-widest px-2 py-0.5 rounded bg-slate-950/60 border border-current">{sa.type}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300">{sa.alert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Interventions / Coordinator Actions Checklist */}
          <div className="bg-slate-900/20 border border-slate-850 p-6 rounded-[1.5rem]">
            <h4 className="text-sm font-black text-slate-300 uppercase tracking-widest mb-5 flex items-center gap-2">
              <CheckSquare size={16} className="text-emerald-500" />
              Coordinator Actions
            </h4>
            <div className="space-y-3.5">
              {actions.map(act => (
                <div 
                  key={act.id} 
                  onClick={() => handleActionClick(act.id)}
                  className={`flex items-start gap-3.5 p-4 border rounded-xl cursor-pointer transition-all duration-300 select-none
                             ${act.completed 
                               ? 'border-slate-900 bg-slate-900/10 text-slate-500 line-through' 
                               : 'border-slate-800/80 hover:border-slate-700 bg-slate-900/35 text-slate-200'}`}
                >
                  <div className={`mt-0.5 w-4.5 h-4.5 rounded border flex items-center justify-center transition-colors
                                  ${act.completed 
                                    ? 'bg-emerald-600 border-emerald-500 text-white' 
                                    : 'border-slate-700 bg-slate-950 text-transparent'}`}>
                    <Check size={10} strokeWidth={4} />
                  </div>
                  <span className="text-xs font-bold leading-snug">{act.text}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-slate-800/80 pt-5 mt-5 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 p-4 rounded-2xl border border-blue-500/10">
              <span className="text-[9px] uppercase font-black text-blue-450 tracking-wider block mb-1.5">Recommended Outreach Platform</span>
              <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                System recommends <strong className="text-white">SMS check-in via CliniLink portal</strong> for PT-1109 to reduce response friction.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
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
      <section className="relative min-h-[80vh] flex items-center justify-center pt-44 pb-36 px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <InteractiveGrid cellSize={60} hoverColor="hover:bg-slate-50" gridColor="border-slate-200/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white z-10" />
        </div>

        <div className="space-y-10 max-w-6xl mx-auto text-center relative z-10">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase">
              Retention Intelligence{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Command Center
              </span>
            </h1>
          </RevealLine>
          <FadeIn delay={0.4} className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 font-semibold leading-relaxed">
              A real-time, actionable mission control for retention operations. Monitor at-risk participant queues, track escalation triggers, implement suggested interventions, and resolve site-level alerts from a single command view.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} className="pt-4 flex justify-center">
            <MagneticButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold
                                       hover:bg-primary transition-all duration-500
                                       shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-2 relative z-10">
                Schedule a Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 1: THE RETENTION CHALLENGE + LIFECYCLE FLOW ──────────────── */}
      <LifecycleSection />

      {/* ── SECTION 2: CONTINUOUS SIGNAL MONITORING ──────────────────────────── */}
      <section className="py-36 px-6 bg-slate-50 relative z-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-8 mb-20">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Continuous Retention Signal Monitoring
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-600 font-semibold leading-relaxed">
                CliniLink monitors operational, behavioral, and engagement-related signals across the participant journey to identify emerging retention risk in real time.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signalsData.map((sig, i) => (
              <SignalCard key={i} signal={sig} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FROM SIGNAL TO INTERVENTION ───────────────────────────── */}
      <WorkflowSection />

      {/* ── SECTION 4: CENTRALIZED RETENTION OVERSIGHT (with scale parallax) ─── */}
      <section className="py-36 px-6 max-w-7xl mx-auto border-b border-slate-100 relative z-10 bg-white" ref={dashboardRef}>
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-20">
          <RevealLine>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Operational visibility across participants, sites, and studies.
            </h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-600 font-semibold leading-relaxed">
            <p>
              Monitor retention activity, engagement trends, alerts, and intervention workflows from one centralized operational view.
            </p>
          </FadeIn>
        </div>

        <motion.div
          style={{ scale: scaleDash }}
          className="will-change-transform"
        >
          <RetentionDashboardMockup />
        </motion.div>
      </section>

      {/* ── SECTION 5: OPERATIONAL BENEFITS GRID ─────────────────────────────── */}
      <section className="py-36 px-6 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Built for proactive retention operations.
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

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="py-36 text-center px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">
              See{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Retention Intelligence
              </span>{' '}
              in Action
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-semibold leading-relaxed max-w-2xl mx-auto">
              Explore how CliniLink helps clinical teams identify dropout risk earlier and support proactive retention management across studies.
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

