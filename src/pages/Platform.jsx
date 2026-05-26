import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'

export default function Platform() {
  const containerRef = useRef(null)
  const workflowRef = useRef(null)

  const DASHBOARD_IMG = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const { scrollYProgress: workflowProgress } = useScroll({
    target: workflowRef,
    offset: ['start center', 'end center']
  })

  const yBg = useTransform(heroProgress, [0, 1], ['0%', '20%'])
  const scaleDash = useTransform(heroProgress, [0, 1], [1, 1.05])
  
  const arrow1Opacity = useTransform(workflowProgress, [0, 0.2], [0.2, 1])
  const arrow2Opacity = useTransform(workflowProgress, [0.2, 0.4], [0.2, 1])
  const arrow3Opacity = useTransform(workflowProgress, [0.4, 0.6], [0.2, 1])
  const arrow4Opacity = useTransform(workflowProgress, [0.6, 0.8], [0.2, 1])

  const capabilities = [
    { title: 'Participant Engagement', desc: 'Coordinate participant communication across SMS, voice, email, and outreach workflows from a centralized platform.' },
    { title: 'Retention Monitoring', desc: 'Track participant engagement activity, adherence trends, and study participation signals in real time.' },
    { title: 'Automated Engagement Workflows', desc: 'Automate reminders, follow-ups, and participant communication tasks to reduce manual coordinator workload.' },
    { title: 'Operational Visibility', desc: 'Provide study teams with centralized dashboards and engagement oversight across sites and participants.' },
    { title: 'Configurable Communication', desc: 'Support flexible communication pathways tailored to study protocols and participant needs.' },
    { title: 'Study Coordination Support', desc: 'Enable more efficient participant management through streamlined engagement workflows and monitoring tools.' }
  ]

  return (
    <main ref={containerRef} className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center relative">
        <div className="space-y-6 max-w-4xl mx-auto relative z-10">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Modern Retention Infrastructure for Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              CliniLink helps clinical teams manage participant engagement, monitor retention activity, and streamline engagement workflows throughout the study lifecycle.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-8">
            <MagneticButton className="px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors shadow-2xl shadow-primary/30 inline-flex">
              <span className="flex items-center gap-2">Book a Demo <ArrowRight size={18} /></span>
            </MagneticButton>
          </FadeIn>
        </div>

        <motion.div style={{ y: yBg, scale: scaleDash }} className="mt-20 relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-100 will-change-transform transform-gpu">
          <img src={DASHBOARD_IMG} alt="CliniLink Dashboard" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 1 - PLATFORM OVERVIEW */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Built for Modern Clinical Operations</h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
            <p>Clinical trial teams need more efficient ways to manage participant engagement, monitor retention activity, and support study continuity across active studies.</p>
            <p>CliniLink centralizes communication, monitoring, and engagement workflows into a unified operational platform designed for modern trial management.</p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - CORE PLATFORM CAPABILITIES */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10 bg-white">
        <RevealLine className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Core Platform Capabilities</h2>
        </RevealLine>
        <div className="grid md:grid-cols-2 gap-12">
          {capabilities.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-10 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 cursor-default">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SECTION 3 - WORKFLOW AUTOMATION WITH SCROLL REVEALS */}
      <section className="py-40 bg-slate-900 text-white px-6 relative z-10" ref={workflowRef}>
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <RevealLine>
            <h2 className="text-5xl font-black tracking-tight">Configurable Engagement Workflows</h2>
          </RevealLine>
          <FadeIn delay={0.2} className="flex flex-col items-center gap-6">
            <div className="bg-slate-800 border border-slate-700 px-8 py-4 rounded-xl font-bold text-xl shadow-xl transform-gpu hover:scale-105 transition-transform duration-300">Upcoming Visit</div>
            <motion.div style={{ opacity: arrow1Opacity }}><ArrowRight className="text-primary rotate-90" size={32} /></motion.div>
            <div className="bg-primary/20 border border-primary/30 text-primary px-8 py-4 rounded-xl font-bold text-xl shadow-xl shadow-primary/10 transform-gpu hover:scale-105 transition-transform duration-300">Automated Reminder <span className="block text-sm font-medium mt-1 text-primary/80">(SMS / Voice / Email)</span></div>
            <motion.div style={{ opacity: arrow2Opacity }}><ArrowRight className="text-primary rotate-90" size={32} /></motion.div>
            <div className="bg-slate-800 border border-slate-700 px-8 py-4 rounded-xl font-bold text-xl shadow-xl transform-gpu hover:scale-105 transition-transform duration-300">Participant Response</div>
            <motion.div style={{ opacity: arrow3Opacity }}><ArrowRight className="text-primary rotate-90" size={32} /></motion.div>
            <div className="bg-slate-800 border border-slate-700 px-8 py-4 rounded-xl font-bold text-xl shadow-xl transform-gpu hover:scale-105 transition-transform duration-300">Coordinator Notification <span className="text-slate-400 font-medium text-sm">(if needed)</span></div>
            <motion.div style={{ opacity: arrow4Opacity }}><ArrowRight className="text-emerald-400 rotate-90" size={32} /></motion.div>
            <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-8 py-4 rounded-xl font-bold text-xl shadow-xl shadow-emerald-500/10 transform-gpu hover:scale-105 transition-transform duration-300">Engagement Tracking</div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 - OPERATIONAL VISIBILITY */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center bg-white relative z-10">
        <div className="space-y-8">
          <RevealLine>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Centralized Retention Oversight</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Monitor participant engagement activity, communication status, and follow-up visibility across studies from a centralized operational view.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.4} className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
          <img src={DASHBOARD_IMG} alt="Operational Visibility" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
        </FadeIn>
      </section>

      {/* SECTION 5 - INFRASTRUCTURE & SECURITY */}
      <section className="py-40 bg-slate-50 border-y border-slate-100 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <RevealLine className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Enterprise-Ready Infrastructure</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <ul className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                'HIPAA-ready architecture',
                'Secure participant data handling',
                'Role-based access controls',
                'Integration-ready workflows',
                'Configurable operational support'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700 bg-white p-6 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CheckCircle2 className="text-emerald-500" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 text-center px-6 bg-white relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <RevealLine>
            <h2 className="text-6xl font-black text-slate-900 tracking-tight">See the CliniLink Platform in Action</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-slate-600 font-medium">Explore how CliniLink supports proactive participant engagement and operational retention management across clinical studies.</p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-8">
            <MagneticButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-primary transition-colors shadow-2xl shadow-slate-900/20 inline-flex group">
              <span className="flex items-center gap-3">
                Schedule a Demo <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
