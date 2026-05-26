import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ShieldCheck, Activity, Users, FileLock2, BrainCircuit, Globe, ArrowRight } from 'lucide-react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import MagneticButton from '../components/ui/MagneticButton'
import ScrollingText from '../components/sections/ScrollingText'
import ExpandOnHover from '../components/ui/ExpandOnHover'
import InteractiveGrid from '../components/ui/InteractiveGrid'
import CardStackSection from '../components/ui/CardStackSection'
import TextReveal from '../components/ui/TextReveal'

export default function Home() {
  const containerRef = useRef(null)
  const dashboardRef = useRef(null)
  const stickyContainerRef = useRef(null)
  const textRevealRef = useRef(null)

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

          <motion.div style={{ opacity: opacityHero }} className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center will-change-opacity pointer-events-none">

            <div className="space-y-2 mb-8">
              <RevealLine delay={0.1}>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-slate-900 leading-[0.9]">
                  Reduce Clinical
                </h1>
              </RevealLine>
              <RevealLine delay={0.2}>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.9]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-secondary italic pr-4">Trial Dropout</span>
                </h1>
              </RevealLine>
              <RevealLine delay={0.3}>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-slate-900 leading-[0.9]">
                  Before It Happens
                </h1>
              </RevealLine>
            </div>

            <FadeIn delay={0.5} className="max-w-2xl">
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                CliniLink helps CROs, sponsors, and research sites identify at-risk participants early and automate personalized engagement workflows that improve retention and protocol adherence.
              </p>
            </FadeIn>

            <FadeIn delay={0.7} className="mt-12 flex flex-col sm:flex-row gap-6 items-center pointer-events-auto">
              <MagneticButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-2xl shadow-slate-900/20 group">
                <span className="flex items-center gap-2">
                  See the Platform
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </MagneticButton>
              <MagneticButton className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/5 group">
                <span className="flex items-center gap-2">Book Demo</span>
              </MagneticButton>
            </FadeIn>
          </motion.div>
        </section>

        {/* SCROLLING TEXT LIKE VYCE */}
        <ScrollingText />

        {/* SCROLL-DRIVEN TEXT REVEAL SECTION */}
        <section ref={textRevealRef} className="relative min-h-[200vh] bg-white z-20" id="problem">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
              <TextReveal 
                text="The hidden cost of clinical research is participant attrition. When you lose patients, you lose time, data integrity, and capital. CliniLink turns passive monitoring into proactive intervention." 
                progress={textRevealProgress}
                className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] justify-center"
              />
            </div>
            
            {/* Ambient background glow for drama */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px] -z-10" />
          </div>
        </section>

        {/* CARD STACK SCROLLING SECTION */}
        <CardStackSection />

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
                <p className="text-xl text-slate-400 font-medium">Built for sponsors, loved by sites.</p>
              </FadeIn>
            </div>

            <motion.div style={{ y: dashY }} className="relative max-w-5xl mx-auto rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl overflow-hidden group hover:shadow-primary/20 transition-shadow duration-700 will-change-transform">
              <div className="h-14 border-b border-white/10 flex items-center justify-between px-6">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="bg-white/5 border border-white/10 text-slate-400 text-xs px-4 py-1.5 rounded-md flex items-center gap-2">
                  <ShieldCheck size={14} className="text-primary" /> clinilink-os.app
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8 h-[600px] text-left">
                {/* Sidebar */}
                <div className="hidden md:flex flex-col gap-2 border-r border-white/10 pr-6">
                  {["Overview", "Participants", "Risk Scoring", "Workflows", "Outreach", "Settings"].map((tab, idx) => (
                    <button
                      key={tab}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 text-left ${idx === 0
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
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                      <span className="text-xs font-bold text-slate-200">Patient Risk Monitoring</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
                        5 High Attrition Alerts
                      </span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { id: "P-8291", site: "Boston Clinic", progress: "Missed Visit 3", risk: "High", color: "bg-red-500/20 text-red-400 border border-red-500/30" },
                        { id: "P-1049", site: "SF Medical", progress: "Delayed Survey", risk: "Medium", color: "bg-amber-500/20 text-amber-400 border border-amber-500/30" },
                        { id: "P-3882", site: "Chicago Center", progress: "On Schedule", risk: "Low", color: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" },
                        { id: "P-9011", site: "Boston Clinic", progress: "Non-responsive (4d)", risk: "High", color: "bg-red-500/20 text-red-400 border border-red-500/30" }
                      ].map((patient) => (
                        <div key={patient.id} className="w-full h-11 bg-white/5 border border-white/5 rounded-xl flex items-center px-4 justify-between hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400">
                              {patient.id.split('-')[1]}
                            </div>
                            <div className="text-left">
                              <span className="text-xs font-bold text-white block">{patient.id}</span>
                              <span className="text-[9px] text-slate-400 block -mt-1">{patient.site}</span>
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-slate-300">{patient.progress}</div>
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${patient.color}`}>
                            {patient.risk}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* INTERACTIVE EXPAND ON HOVER GALLERY SECTION */}
        <section className="relative py-32 bg-slate-950 text-white" id="platform">
          <div className="w-full flex justify-center items-center overflow-hidden">
            <div className="flex justify-center items-center relative w-full">
              <ExpandOnHover items={features} />
            </div>
          </div>
        </section>

        {/* FINAL CTA WITH MAGNETIC BUTTON */}
        <section className="py-40 px-6 bg-white relative overflow-hidden text-center border-t border-slate-100">
          <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            <RevealLine>
              <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Ready to secure <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">your study?</span>
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-2xl text-slate-600 font-medium">
                Stop losing patients. Start deploying operational intelligence.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="pt-8 flex justify-center">
              <MagneticButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-primary hover:text-white transition-colors duration-500 shadow-2xl shadow-primary/20 group overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Book Your Demo Today <ArrowRight className="group-hover:translate-x-2 transition-transform" />
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
