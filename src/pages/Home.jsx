import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ShieldCheck,
  Activity,
  Users,
  FileLock2,
  BrainCircuit,
  Globe,
  ArrowRight,
  BellRing,
  CalendarClock,
  History,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building2,
  TrendingUp,
  Workflow,
  Key,
  Network,
  Zap
} from 'lucide-react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import MagneticButton from '../components/ui/MagneticButton'
import ScrollingText from '../components/sections/ScrollingText'
import StickyScrollSection from '../components/ui/StickyScrollSection'
import InteractiveGrid from '../components/ui/InteractiveGrid'
import CardStackSection from '../components/ui/CardStackSection'
import TextReveal from '../components/ui/TextReveal'

export default function Home() {
  const containerRef = useRef(null)
  const dashboardRef = useRef(null)
  const stickyContainerRef = useRef(null)
  const textRevealRef = useRef(null)
  const stepsContainerRef = useRef(null)

  const [activeTab, setActiveTab] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(stepsProgress, "change", (latest) => {
    const step = Math.min(3, Math.floor(latest * 4))
    setActiveStep(step)
  })

  const scrollToStep = (stepIndex) => {
    if (stepsContainerRef.current) {
      const rect = stepsContainerRef.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const containerHeight = stepsContainerRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      const scrollRange = containerHeight - viewportHeight
      const targetScroll = scrollTop + rect.top + (stepIndex / 3) * scrollRange

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth"
      })
    }
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const { scrollYProgress: stickyScrollProgress } = useScroll({
    target: stickyContainerRef,
    offset: ['start start', 'end end']
  })

  // Removed getTransformValues because we are now using AnimatePresence for smooth transitions

  // Optimize framer-motion scroll by mapping without spring if it lags, or keep spring light
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Dashboard parallax and Light-to-Dark transition
  const { scrollYProgress: dashProgress } = useScroll({
    target: dashboardRef,
    offset: ['start 40%', 'start 0%']
  })

  const dashY = useTransform(dashProgress, [0, 1], ['10%', '-10%'])
  const dashBgColor = useTransform(dashProgress, [0, 1], ['#ffffff', '#0f172a'])
  const dashTextColor = useTransform(dashProgress, [0, 1], ['#0f172a', '#ffffff'])
  const dashOverlayOpacity = useTransform(dashProgress, [0, 1], [0, 0.9])
  const dashImgOpacity = useTransform(dashProgress, [0, 1], [0, 0.2])

  // Text Reveal scroll tracking
  const { scrollYProgress: textRevealProgress } = useScroll({
    target: textRevealRef,
    offset: ["start center", "end center"]
  })

  const DASHBOARD_IMG = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"

  const features = [
    { icon: Activity, title: 'Predictive Signals', desc: 'Identify at-risk participants weeks before they drop out.', img: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80' },
    { icon: BrainCircuit, title: 'Automated Workflows', desc: 'Trigger personalized interventions and site alerts automatically.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80' },
    { icon: ShieldCheck, title: 'Compliance First', desc: 'HIPAA and GDPR compliant infrastructure.', img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80' },
    { icon: Users, title: 'Cross-Site Visibility', desc: 'Unified dashboard for CROs and Sponsors.', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80' },
    { icon: FileLock2, title: 'Protocol Adherence', desc: 'Ensure participants stay on track with visit schedules.', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
    { icon: Globe, title: 'Global Scale', desc: 'Deploy across multiple countries and languages.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80' },
  ]

  return (
    <>
      <main ref={containerRef} className="bg-background overflow-clip selection:bg-primary/20 selection:text-primary">

        {/* PREMIUM HERO SECTION WITH INTERACTIVE GRID */}
        <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
          <motion.div
            style={{ y: yBg }}
            className="absolute inset-0 z-0 will-change-transform"
          >
            <InteractiveGrid cellSize={60} hoverColor="hover:bg-slate-900" gridColor="border-slate-900/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white z-10 pointer-events-none" />
          </motion.div>

          <motion.div style={{ opacity: opacityHero }} className="max-w-7xl mx-auto px-6 relative z-10 w-full will-change-opacity pointer-events-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left pointer-events-auto">
                <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase font-black block mb-4 animate-pulse">
                  Retention Intelligence Platform
                </span>
                
                <div className="space-y-1 mb-6">
                  <RevealLine delay={0.1}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05]">
                      Predict patient dropout
                    </h1>
                  </RevealLine>
                  <RevealLine delay={0.2}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05]">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-secondary italic pr-3">before it disrupts</span>
                    </h1>
                  </RevealLine>
                  <RevealLine delay={0.3}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05]">
                      your trial.
                    </h1>
                  </RevealLine>
                </div>

                <FadeIn delay={0.5} className="max-w-xl">
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    CliniLink helps sponsors, CROs, and research sites identify participant disengagement early and automate proactive retention workflows before missed visits and dropout impact timelines, costs, and study continuity.
                  </p>
                </FadeIn>

                <FadeIn delay={0.7} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
                  <MagneticButton className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-2xl shadow-slate-900/20 group">
                    <span className="flex items-center gap-2 text-sm sm:text-base">
                      Explore the Platform
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </MagneticButton>
                  <MagneticButton className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/5 group">
                    <span className="text-sm sm:text-base flex items-center gap-2">Book a Demo</span>
                  </MagneticButton>
                </FadeIn>
              </div>

              {/* Right Column: Premium Dashboard Mockup (Increased Size) */}
              <div className="lg:col-span-6 w-full pointer-events-auto pt-6 lg:pt-0">
                <div className="relative w-full max-w-2xl lg:max-w-none mx-auto aspect-[4/3] md:aspect-square lg:aspect-auto lg:h-[550px] xl:h-[580px]">
                  {/* Ambient background glow behind the dashboard */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl blur-3xl opacity-60 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
                  
                  {/* The main dashboard card */}
                  <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-2xl shadow-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                    {/* Ambient glow inside the card */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
                    
                    {/* Window Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-mono text-slate-400">
                        clinilink.app/dashboard
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white font-bold">OS</div>
                    </div>

                    {/* Dashboard Metrics grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {/* Metric 1 */}
                      <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                        <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Cohorts</span>
                        <div>
                          <span className="text-xl font-black text-white">48</span>
                          <span className="text-[8px] text-emerald-400 block mt-0.5">↑ 3.2%</span>
                        </div>
                      </div>
                      {/* Metric 2 */}
                      <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex flex-col justify-between">
                        <span className="text-[9px] text-slate-300 uppercase font-bold tracking-wider">Retention</span>
                        <div>
                          <span className="text-xl font-black text-white">94.8%</span>
                          <span className="text-[8px] text-slate-400 block mt-0.5">Avg: 85%</span>
                        </div>
                      </div>
                      {/* Metric 3 */}
                      <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                        <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Risk level</span>
                        <div>
                          <span className="text-xl font-black text-rose-400">Low</span>
                          <span className="text-[8px] text-slate-400 block mt-0.5">8 flagged</span>
                        </div>
                      </div>
                    </div>

                    {/* Chart / Signal list */}
                    <div className="mt-4 flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col justify-between min-h-[160px]">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                        <span className="text-xs font-bold text-slate-200">Patient Risk Probability</span>
                        <span className="text-[9px] bg-primary/20 text-primary px-2 py-0.5 rounded font-mono font-bold">AI Predictive</span>
                      </div>
                      
                      {/* Visual Chart Wave */}
                      <div className="flex-1 flex items-end gap-1.5 py-4 h-24">
                        {[40, 25, 45, 60, 55, 75, 40, 65, 80, 95, 70, 85, 90, 100].map((h, i) => (
                          <div 
                            key={i} 
                            className="flex-1 rounded-t-sm transition-all duration-500 hover:bg-primary cursor-pointer"
                            style={{ 
                              height: `${h}%`,
                              backgroundColor: i === 9 ? '#f43f5e' : i === 13 ? '#10b981' : 'rgba(56,189,248,0.2)'
                            }} 
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[8px] text-slate-400 font-mono">
                        <span>Week 1</span>
                        <span>Week 2</span>
                        <span>Week 3</span>
                        <span>Week 4</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating glassmorphic card 1 (AI Risk Warning) */}
                  <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3 w-56 animate-bounce" style={{ animationDuration: '6s' }}>
                    <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                      <AlertCircle size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-white block">Attrition Alert</span>
                      <span className="text-[9px] text-slate-300 block">Patient P-8291 risk score 94%</span>
                    </div>
                  </div>

                  {/* Floating glassmorphic card 2 (Retention Secured) */}
                  <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3 w-56 animate-bounce" style={{ animationDuration: '8s' }}>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-white block">Retention Secured</span>
                      <span className="text-[9px] text-slate-300 block">Uber rideshare dispatched</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TRUST BAR (NEW) */}
        <section className="bg-slate-950 py-20 relative z-20 overflow-hidden border-y border-slate-900">
          {/* Ambient subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Neon background glows for premium feel */}
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-col items-center gap-16 relative z-10">
            {/* Edge-to-edge Infinite Marquee of Badges */}
            <div className="relative w-full overflow-hidden py-4 animate-marquee-hover-pause">
              {/* Fade gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

              <div className="flex gap-0 min-w-full">
                {/* First set */}
                <div className="flex shrink-0 gap-8 animate-marquee justify-around min-w-full pr-8">
                  {[
                    { label: "HIPAA-ready", icon: ShieldCheck, color: "text-emerald-400 border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-400 hover:shadow-emerald-500/10" },
                    { label: "Role-based access", icon: Key, color: "text-blue-400 border-blue-500/25 bg-blue-500/5 hover:border-blue-400 hover:shadow-blue-500/10" },
                    { label: "Multi-site coordination", icon: Network, color: "text-purple-400 border-purple-500/25 bg-purple-500/5 hover:border-purple-400 hover:shadow-purple-500/10" },
                    { label: "Workflow automation", icon: Zap, color: "text-amber-400 border-amber-500/25 bg-amber-500/5 hover:border-amber-400 hover:shadow-amber-500/10" },
                    { label: "Predictive retention intelligence", icon: BrainCircuit, color: "text-rose-400 border-rose-500/25 bg-rose-500/5 hover:border-rose-400 hover:shadow-rose-500/10" }
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 text-xs font-bold border px-6 py-4 rounded-2xl shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 shrink-0 ${item.color}`}
                      >
                        <IconComponent size={18} className="shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
                {/* Second set for infinite loop */}
                <div className="flex shrink-0 gap-8 animate-marquee justify-around min-w-full pr-8">
                  {[
                    { label: "HIPAA-ready", icon: ShieldCheck, color: "text-emerald-400 border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-400 hover:shadow-emerald-500/10" },
                    { label: "Role-based access", icon: Key, color: "text-blue-400 border-blue-500/25 bg-blue-500/5 hover:border-blue-400 hover:shadow-blue-500/10" },
                    { label: "Multi-site coordination", icon: Network, color: "text-purple-400 border-purple-500/25 bg-purple-500/5 hover:border-purple-400 hover:shadow-purple-500/10" },
                    { label: "Workflow automation", icon: Zap, color: "text-amber-400 border-amber-500/25 bg-amber-500/5 hover:border-amber-400 hover:shadow-amber-500/10" },
                    { label: "Predictive retention intelligence", icon: BrainCircuit, color: "text-rose-400 border-rose-500/25 bg-rose-500/5 hover:border-rose-400 hover:shadow-rose-500/10" }
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={`dup-${idx}`}
                        className={`flex items-center gap-3 text-xs font-bold border px-6 py-4 rounded-2xl shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 shrink-0 ${item.color}`}
                      >
                        <IconComponent size={18} className="shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Title & Description centered and well-spaced */}
            <div className="max-w-7xl mx-auto px-6 w-full text-center space-y-4">
              <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase font-bold block animate-pulse">
                Security & Infrastructure
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
                “Built for sponsors, CROs, and modern research operations.”
              </h3>
            </div>
          </div>
        </section>

        {/* D. THE COST OF DROPOUT SECTION (REPLACES CURRENT "PROBLEM" SECTION) */}
        <section ref={textRevealRef} className="py-32 px-6 bg-white relative z-20 border-b border-slate-100" id="cost-of-dropout">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Side: Text and 3 Columns */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                  <span className="text-primary font-mono text-xs md:text-sm tracking-[0.35em] uppercase font-bold block">
                    The Cost of Dropout
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                    Retention failures impact every stage of a clinical trial.
                  </h2>
                </div>

                 {/* 3-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 font-black transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20">01</div>
                    <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-500">Delayed Timelines</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      Missed visits and participant disengagement delay milestone completion and study progression.
                    </p>
                  </div>
                  <div className="space-y-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 font-black transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20">02</div>
                    <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-500">Increased Costs</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      Replacing participants and recovering protocol deviations increases operational burden and trial spend.
                    </p>
                  </div>
                  <div className="space-y-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 font-black transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20">03</div>
                    <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-red-500">Reduced Study Integrity</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      Dropout and inconsistent engagement threaten data continuity and statistical reliability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Animated Mock Video / Monitoring Widget */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
                  {/* Glowing light effect */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                  {/* Mock Video Player Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase font-bold">Risk Signal Video Monitor</span>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[9px] font-mono text-primary font-bold">
                      LIVE STREAM
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white leading-snug mb-6">
                    CliniLink continuously monitors retention-risk signals throughout the participant journey.
                  </h4>

                  {/* List of 6 signals with status bars */}
                  <div className="space-y-3">
                    {[
                      { name: "Missed visits", status: "Critical Alert", val: 88, color: "text-red-400 border-red-500/20 bg-red-500/10" },
                      { name: "Communication gaps", status: "Warning", val: 65, color: "text-amber-400 border-amber-500/20 bg-amber-500/10" },
                      { name: "Reduced engagement", status: "Warning", val: 55, color: "text-amber-400 border-amber-500/20 bg-amber-500/10" },
                      { name: "Transportation barriers", status: "Flagged", val: 42, color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
                      { name: "Protocol confusion", status: "Flagged", val: 35, color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
                      { name: "Adherence decline", status: "Critical Alert", val: 82, color: "text-red-400 border-red-500/20 bg-red-500/10" },
                    ].map((signal, sIdx) => (
                      <div key={sIdx} className="p-3 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-xs font-bold text-slate-200">{signal.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${signal.color}`}>
                            {signal.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E. HOW CLINILINK INTERVENES (NEW) - STICKY SCROLL */}
        <section ref={stepsContainerRef} className="relative h-[500vh] bg-slate-50 z-20 border-b border-slate-200" id="intervenes">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Left Side: Stepper */}
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-4">
                    <span className="text-primary font-mono text-xs md:text-sm tracking-[0.35em] uppercase font-bold block">
                      Intervention Workflow
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                      From prediction to intervention.
                    </h2>
                  </div>

                  <div className="flex flex-col gap-6">
                    {[
                      { step: "Detect", desc: "AI models identify participants at elevated risk of dropout." },
                      { step: "Prioritize", desc: "Sites and coordinators receive retention alerts and visibility into risk." },
                      { step: "Engage", desc: "Automated personalized outreach workflows are triggered across communication channels." },
                      { step: "Retain", desc: "Teams intervene earlier to improve adherence and reduce participant loss." }
                    ].map((item, idx) => {
                      const isActive = activeStep === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => scrollToStep(idx)}
                          className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 group ${isActive
                              ? "bg-white border-slate-200 shadow-xl shadow-slate-200/50 translate-x-2"
                              : "bg-transparent border-transparent hover:bg-slate-100/50"
                            }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 ${isActive ? "bg-primary text-white" : "bg-slate-200 text-slate-500 group-hover:bg-primary/20 group-hover:text-primary group-hover:scale-110"
                            }`}>
                            {idx + 1}
                          </div>
                          <div className="space-y-1">
                            <h3 className={`text-lg font-black uppercase tracking-tight ${isActive ? "text-slate-900" : "text-slate-600"}`}>
                              {item.step}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Interactive Stepper Visual (Enlarged & Upscaled) */}
                <div className="lg:col-span-7 w-full">
                  <div className="bg-slate-900 rounded-3xl p-12 border border-slate-800 shadow-2xl relative overflow-hidden h-[560px] md:h-[620px] flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />

                    <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                      <span className="text-xs md:text-sm font-mono text-slate-400 uppercase tracking-widest font-black">
                        Intervention Stage: {["Detect", "Prioritize", "Engage", "Retain"][activeStep]}
                      </span>
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="flex-1 flex items-center justify-center py-8">
                      <AnimatePresence mode="wait">
                        {activeStep === 0 && (
                          <motion.div
                            key="detect-visual-large"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="w-full max-w-md bg-white/5 border border-white/5 rounded-2xl p-8 space-y-6 text-left"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm md:text-base font-bold text-slate-200">Patient P-8291 Risk Profile</span>
                              <span className="text-xs font-mono bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full font-bold">HIGH RISK</span>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between text-xs md:text-sm text-slate-300 font-semibold">
                                <span>Attrition Probability</span>
                                <span className="text-red-400 font-black text-lg md:text-xl">94%</span>
                              </div>
                              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full" style={{ width: "94%" }} />
                              </div>
                            </div>
                            <div className="text-xs md:text-sm text-slate-300 bg-white/5 p-5 rounded-xl border border-white/5 space-y-3">
                              <span className="font-bold text-white block mb-1">Key Attrition Signals:</span>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                                <span>2 Missed visit schedule check-ins this week</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                                <span>Communication latency increased by 180%</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeStep === 1 && (
                          <motion.div
                            key="prioritize-visual-large"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="w-full max-w-md space-y-4 text-left"
                          >
                            <div className="text-xs md:text-sm font-bold text-slate-400 mb-2">Escalated Retention Alerts</div>
                            {[
                              { id: "P-8291", priority: "High Alert", desc: "Missed Visit 3 & Delayed Surveys", color: "bg-red-500/20 text-red-400 border border-red-500/30" },
                              { id: "P-9011", priority: "High Alert", desc: "No Daily Diary entry for 4 days", color: "bg-red-500/20 text-red-400 border border-red-500/30" },
                              { id: "P-1049", priority: "Medium Priority", desc: "Transport barriers flagged", color: "bg-amber-500/20 text-amber-400 border border-amber-500/30" }
                            ].map((item, idx) => (
                              <div key={idx} className="p-5 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors">
                                <div>
                                  <span className="text-sm md:text-base font-bold text-white block">{item.id}</span>
                                  <span className="text-xs text-slate-400 block mt-0.5">{item.desc}</span>
                                </div>
                                <span className={`text-xs font-black uppercase px-3 py-1 rounded-full border ${item.color}`}>
                                  {item.priority}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}

                        {activeStep === 2 && (
                          <motion.div
                            key="engage-visual-large"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="w-full max-w-md space-y-5 text-sm md:text-base"
                          >
                            <div className="bg-slate-800 text-slate-200 p-5 rounded-2xl rounded-tr-none ml-auto max-w-[85%] text-right font-medium leading-relaxed shadow-lg">
                              Hi Alex, we noticed you missed your daily diary. Is there any assistance you need with the study tasks or transportation?
                            </div>
                            <div className="bg-primary/20 text-slate-200 border border-primary/20 p-5 rounded-2xl rounded-tl-none mr-auto max-w-[85%] text-left leading-relaxed shadow-lg">
                              Hi, yes my regular ride fell through and I don't have transport to clinic on Friday for Visit 4.
                            </div>
                            <div className="bg-slate-800 text-slate-200 p-5 rounded-2xl rounded-tr-none ml-auto max-w-[85%] text-right font-medium leading-relaxed shadow-lg">
                              No worries! We can schedule an automated rideshare for your visit. Would you like us to book it for you?
                            </div>
                          </motion.div>
                        )}

                        {activeStep === 3 && (
                          <motion.div
                            key="retain-visual-large"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="w-full max-w-md bg-white/5 border border-white/5 rounded-2xl p-8 text-center space-y-6"
                          >
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
                              <CheckCircle2 size={36} />
                            </div>
                            <div className="space-y-3">
                              <h5 className="text-lg md:text-xl font-black text-white">Retention Secured</h5>
                              <p className="text-xs md:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed font-medium">
                                Participant rideshare has been booked. Visit schedule updated to Friday 9:00 AM. Risk level downgraded.
                              </p>
                            </div>
                            <div className="pt-6 border-t border-white/5 flex justify-around text-xs md:text-sm max-w-sm mx-auto">
                              <div>
                                <span className="text-xs text-slate-400 block uppercase font-bold mb-1">Visit 4 Status</span>
                                <span className="font-extrabold text-emerald-400 text-sm md:text-base">Rideshare Booked</span>
                              </div>
                              <div className="w-px bg-white/10 h-10" />
                              <div>
                                <span className="text-xs text-slate-400 block uppercase font-bold mb-1">Risk Level</span>
                                <span className="font-extrabold text-slate-300 text-sm md:text-base">Downgraded (12%)</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Indicator dots */}
                    <div className="flex justify-center gap-3">
                      {[0, 1, 2, 3].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => scrollToStep(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${activeStep === idx ? "w-10 bg-primary" : "w-2.5 bg-slate-800 hover:bg-slate-700"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* PARALLAX DASHBOARD MOCKUP */}
        <motion.section ref={dashboardRef} style={{ backgroundColor: dashBgColor, color: dashTextColor }} className="relative py-40 px-6 overflow-hidden">
          <motion.div style={{ opacity: dashImgOpacity }} className="absolute inset-0">
            <img src={DASHBOARD_IMG} alt="Office" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div style={{ opacity: dashOverlayOpacity, backgroundColor: '#0f172a' }} className="absolute inset-0" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 space-y-4">
              <RevealLine>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight">Operational Visibility</h2>
              </RevealLine>
              <FadeIn delay={0.2}>
                <p className="text-xl text-slate-400 font-medium">Real-time participant oversight and risk mitigation.</p>
              </FadeIn>
            </div>

            <motion.div style={{ y: dashY }} className="relative max-w-5xl mx-auto rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl overflow-hidden group hover:shadow-primary/20 transition-shadow duration-700 will-change-transform">
              <div className="h-14 border-b border-white/10 flex items-center justify-between px-6">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-50/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-50/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-50/80"></div>
                </div>
                <div className="bg-white/5 border border-white/10 text-slate-400 text-xs px-4 py-1.5 rounded-md flex items-center gap-2">
                  <ShieldCheck size={14} className="text-primary" /> clinilink-os.app
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8 h-[600px] text-left">
                {/* Sidebar */}
                <div className="hidden md:flex flex-col gap-2 border-r border-white/10 pr-6">
                  {[
                    "Participant Risk Score",
                    "Alert Escalation",
                    "Missed Visit Prediction",
                    "Engagement Timeline",
                    "Intervention Workflow"
                  ].map((tab, idx) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(idx)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 text-left ${activeTab === idx
                        ? 'bg-primary/20 border border-primary/30 text-primary translate-x-1'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {/* Main Content */}
                <div className="md:col-span-3 flex flex-col gap-6">
                  <div className="flex gap-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl flex-1 flex flex-col justify-center p-6 relative overflow-hidden group-hover:bg-white/10 transition-all duration-500">
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Active Participants</span>
                      <span className="text-3xl font-black text-white mt-1">1,248</span>
                      <span className="text-[10px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                        <span>↑ 12.4%</span> this month
                      </span>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl flex-1 flex flex-col justify-center p-6 relative overflow-hidden group-hover:bg-primary/20 transition-all duration-500">
                      <span className="text-[10px] text-slate-300 font-black uppercase tracking-wider">Average Retention</span>
                      <span className="text-3xl font-black text-white mt-1">94.8%</span>
                      <span className="text-[10px] text-slate-400 mt-1 font-semibold">
                        Industry Average: 85%
                      </span>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                  </div>

                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {activeTab === 0 && (
                        <motion.div
                          key="tab0"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="h-full flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                            <span className="text-xs font-bold text-slate-200">Participant Risk Score</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
                              Live Risk Analysis
                            </span>
                          </div>
                          <div className="space-y-2 overflow-y-auto max-h-[220px] pr-1">
                            {[
                              { id: "P-8291", site: "Boston Clinic", score: "94%", risk: "High Risk", color: "bg-red-500/20 text-red-400 border border-red-500/30" },
                              { id: "P-9011", site: "Boston Clinic", score: "88%", risk: "High Risk", color: "bg-red-500/20 text-red-400 border border-red-500/30" },
                              { id: "P-1049", site: "SF Medical", score: "78%", risk: "Medium Risk", color: "bg-amber-500/20 text-amber-400 border border-amber-500/30" },
                              { id: "P-3882", site: "Chicago Center", score: "24%", risk: "Low Risk", color: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" }
                            ].map((row) => (
                              <div key={row.id} className="w-full h-11 bg-white/5 border border-white/5 rounded-xl flex items-center px-4 justify-between hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                    {row.id.split('-')[1]}
                                  </div>
                                  <div>
                                    <span className="text-xs font-bold text-white block">{row.id}</span>
                                    <span className="text-[9px] text-slate-400 block -mt-1">{row.site}</span>
                                  </div>
                                </div>
                                <div className="text-xs font-semibold text-slate-300">Score: {row.score}</div>
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${row.color}`}>
                                  {row.risk}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 1 && (
                        <motion.div
                          key="tab1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="h-full flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                            <span className="text-xs font-bold text-slate-200">Alert Escalation Log</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">
                              Active Escalations
                            </span>
                          </div>
                          <div className="space-y-2 overflow-y-auto max-h-[220px] pr-1">
                            {[
                              { id: "P-8291", event: "Missed Visit 3", escalatedTo: "Principal Investigator", status: "Escalated", color: "bg-red-500/20 text-red-400 border border-red-500/30" },
                              { id: "P-9011", event: "Diary Delay > 4d", escalatedTo: "Coordinator Phone Call", status: "In Progress", color: "bg-amber-500/20 text-amber-400 border border-amber-500/30" },
                              { id: "P-1049", event: "Transport Barrier", escalatedTo: "Automated Uber Voucher", status: "Dispatched", color: "bg-blue-500/20 text-blue-400 border border-blue-500/30" },
                              { id: "P-2234", event: "Device Offline", escalatedTo: "Technical Support", status: "Resolved", color: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" }
                            ].map((row, idx) => (
                              <div key={idx} className="w-full h-11 bg-white/5 border border-white/5 rounded-xl flex items-center px-4 justify-between hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-white">{row.id}</span>
                                  <span className="text-slate-500 text-[10px]">|</span>
                                  <span className="text-slate-300 text-xs font-medium">{row.event}</span>
                                </div>
                                <div className="text-[10px] text-slate-400 hidden sm:block">To: {row.escalatedTo}</div>
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${row.color}`}>
                                  {row.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 2 && (
                        <motion.div
                          key="tab2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="h-full flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                            <span className="text-xs font-bold text-slate-200">Missed Visit Prediction</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-bold">
                              Predictive Engine
                            </span>
                          </div>
                          <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-auto">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-black text-white">Patient P-8291 (Boston Clinic)</span>
                                <span className="text-[9px] font-mono bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">High Probability</span>
                              </div>
                              <p className="text-[11px] text-slate-400 leading-relaxed max-w-md">
                                AI model predicts 89% chance of missing Visit 4 on June 5th based on 3 missed diaries, transport barriers, and response latency.
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="text-[10px] text-slate-400 uppercase block">Prediction Confidence</span>
                              <span className="text-2xl font-black text-red-400">89% At-Risk</span>
                            </div>
                          </div>
                          <div className="flex gap-4 text-[10px] text-slate-400 border-t border-white/5 pt-3 mt-3">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-50" />
                              <span>Missed Diaries (3)</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              <span>Transport Issue</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span>No Contact for 48h</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 3 && (
                        <motion.div
                          key="tab3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="h-full flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                            <span className="text-xs font-bold text-slate-200">Engagement Timeline</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-bold">
                              Patient Journey Touchpoints
                            </span>
                          </div>
                          <div className="relative pl-6 border-l border-white/10 space-y-3 max-h-[190px] overflow-y-auto py-1 my-auto text-left">
                            {[
                              { day: "Day 18", event: "Automated SMS outreach sent (Retention workflow)", color: "bg-blue-500" },
                              { day: "Day 17", event: "Daily Diary missed (Alert triggered)", color: "bg-red-500" },
                              { day: "Day 15", event: "SMS compliance reminder dispatched", color: "bg-slate-600" },
                              { day: "Day 14", event: "Visit 2 completed successfully (On-site)", color: "bg-emerald-500" }
                            ].map((step, idx) => (
                              <div key={idx} className="relative">
                                <div className={`absolute -left-[30px] top-1 w-2.5 h-2.5 rounded-full ${step.color} border border-slate-950`} />
                                <div>
                                  <span className="text-[9px] font-mono text-primary font-bold">{step.day}</span>
                                  <p className="text-xs text-slate-200 font-semibold">{step.event}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 4 && (
                        <motion.div
                          key="tab4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="h-full flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                            <span className="text-xs font-bold text-slate-200">Intervention Workflow</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                              Triggered Sequences
                            </span>
                          </div>
                          <div className="space-y-3 my-auto">
                            <div className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl">
                              <div className="space-y-0.5">
                                <span className="text-[9px] text-primary font-bold uppercase tracking-wider block">Rule: High Attrition Risk</span>
                                <span className="text-xs font-bold text-white">Trigger: Risk Score &gt; 80%</span>
                              </div>
                              <span className="text-[9px] font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded font-bold">Active</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                              {[
                                { step: "1. Detect & Score", status: "Completed", icon: "✓" },
                                { step: "2. Alert Site Team", status: "Completed", icon: "✓" },
                                { step: "3. Auto-Outreach", status: "Pending", icon: "⋯" }
                              ].map((wStep, idx) => (
                                <div key={idx} className="p-2.5 bg-white/5 border border-white/5 rounded-xl flex items-center gap-2">
                                  <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${wStep.status === "Completed" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-white/5 text-slate-500 border border-white/10"}`}>
                                    {wStep.icon}
                                  </div>
                                  <div>
                                    <span className="text-[9px] text-slate-400 block">{wStep.step}</span>
                                    <span className="text-[10px] font-bold text-white leading-none">{wStep.status}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SCROLLING TEXT LIKE VYCE */}
        <ScrollingText />

        {/* STICKY SPLIT-SCROLL RETENTION SECTION */}
        <StickyScrollSection />

        {/* G. WHO IT’S FOR (NEW) */}
        <section className="py-32 px-6 bg-slate-50 relative z-20 border-b border-slate-200" id="who-its-for">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-primary font-mono text-xs md:text-sm tracking-[0.35em] uppercase font-bold block">
                Target Audience
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
                Who it's for.
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                Tailored solutions for every stakeholder in modern clinical operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sponsors",
                  desc: "Portfolio-level retention visibility across studies.",
                  icon: Sparkles,
                  color: "border-blue-500/20 bg-blue-500/5 text-blue-500"
                },
                {
                  title: "CROs",
                  desc: "Operational coordination and proactive participant management.",
                  icon: Building2,
                  color: "border-indigo-500/20 bg-indigo-500/5 text-indigo-500"
                },
                {
                  title: "Research Sites",
                  desc: "Reduced coordinator burden and earlier intervention workflows.",
                  icon: Users,
                  color: "border-primary/20 bg-primary/5 text-primary"
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/20 hover:-translate-y-1 transition-all duration-300 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* H. FINAL CTA WITH MAGNETIC BUTTON */}
        <section className="py-40 px-6 bg-white relative overflow-hidden text-center border-t border-slate-100">
          <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            <RevealLine>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                Retention management should not <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">start after participants disengage.</span>
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                CliniLink enables proactive retention operations before dropout impacts trial performance.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="pt-8 flex justify-center">
              <MagneticButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-primary hover:text-white transition-colors duration-500 shadow-2xl shadow-primary/20 group overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Schedule a Demo <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </MagneticButton>
            </FadeIn>
          </div>
        </section>

      </main>
    </>
  )
}
