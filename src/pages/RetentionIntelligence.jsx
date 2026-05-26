import { ArrowRight, Activity, Eye, FileSearch, ShieldCheck, Clock, Users } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'

export default function RetentionIntelligence() {
  const containerRef = useRef(null)
  const dashboardRef = useRef(null)
  
  const DASHBOARD_IMG = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
  
  const { scrollYProgress: dashProgress } = useScroll({
    target: dashboardRef,
    offset: ['start end', 'end start']
  })
  const scaleDash = useTransform(dashProgress, [0, 1], [0.95, 1.05])
  
  const benefits = [
    { title: "Earlier Visibility into Engagement Activity", icon: Eye },
    { title: "More Coordinated Follow-Up Workflows", icon: Activity },
    { title: "Reduced Manual Communication Burden", icon: Clock },
    { title: "Centralized Operational Oversight", icon: FileSearch },
    { title: "Improved Participant Engagement Continuity", icon: Users },
    { title: "Streamlined Study Coordination", icon: ShieldCheck }
  ]

  return (
    <main ref={containerRef} className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto text-center border-b border-slate-100 relative z-10">
        <div className="space-y-6 max-w-5xl mx-auto">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Proactive Retention Intelligence for Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              CliniLink helps clinical teams identify engagement risks earlier, monitor participant activity more effectively, and support proactive retention workflows across the study lifecycle.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-8">
            <MagneticButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-colors shadow-2xl inline-flex group">
              <span className="flex items-center gap-2">Book a Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1 - THE RETENTION CHALLENGE */}
      <section className="py-32 px-6 bg-slate-50 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <RevealLine>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Participant Disengagement Rarely Happens All at Once</h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
            <p>Retention challenges often emerge gradually through missed check-ins, declining responsiveness, inconsistent engagement, and communication gaps.</p>
            <p>Without clear operational visibility, these signals are difficult to identify early enough for effective intervention.</p>
            <p>CliniLink helps clinical teams monitor retention-related activity and respond more proactively throughout active studies.</p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - RETENTION SIGNAL MONITORING */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10 bg-white">
        <div className="space-y-8">
          <RevealLine>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">Monitor Engagement Activity Across the Study Lifecycle</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              CliniLink centralizes participant engagement activity, communication workflows, adherence trends, and follow-up visibility into a unified operational view designed to support proactive retention management.
            </p>
          </FadeIn>
        </div>
        
        {/* Simple elegant lifecycle visual */}
        <FadeIn delay={0.4} className="flex flex-col items-center">
          <div className="w-full max-w-sm space-y-4">
            <div className="bg-slate-50 border border-slate-200 text-slate-700 text-center py-5 rounded-2xl font-bold text-xl shadow-sm hover:scale-105 transition-transform duration-300">Engagement Activity</div>
            <div className="flex justify-center"><ArrowRight className="text-slate-300 rotate-90" size={24} /></div>
            <div className="bg-slate-50 border border-slate-200 text-slate-700 text-center py-5 rounded-2xl font-bold text-xl shadow-sm hover:scale-105 transition-transform duration-300">Communication Monitoring</div>
            <div className="flex justify-center"><ArrowRight className="text-slate-300 rotate-90" size={24} /></div>
            <div className="bg-blue-50 border border-blue-200 text-blue-700 text-center py-5 rounded-2xl font-bold text-xl shadow-md hover:scale-105 transition-transform duration-300">Participation Signals</div>
            <div className="flex justify-center"><ArrowRight className="text-blue-300 rotate-90" size={24} /></div>
            <div className="bg-indigo-50 border border-indigo-200 text-indigo-700 text-center py-5 rounded-2xl font-bold text-xl shadow-md hover:scale-105 transition-transform duration-300">Operational Visibility</div>
            <div className="flex justify-center"><ArrowRight className="text-indigo-300 rotate-90" size={24} /></div>
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-center py-5 rounded-2xl font-bold text-xl shadow-lg shadow-emerald-500/10 hover:scale-105 transition-transform duration-300">Retention Follow-Up</div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 3 - PROACTIVE ENGAGEMENT WORKFLOWS */}
      <section className="py-40 px-6 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Workflow Visual */}
          <FadeIn delay={0.4} className="flex flex-col items-center lg:order-first order-last">
            <div className="w-full max-w-sm space-y-4">
              <div className="bg-slate-800 border border-slate-700 text-center py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform duration-300">Missed Visit Activity</div>
              <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" size={24} /></div>
              <div className="bg-primary/20 border border-primary/30 text-primary text-center py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">Outreach Workflow Triggered</div>
              <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" size={24} /></div>
              <div className="bg-slate-800 border border-slate-700 text-center py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform duration-300">Participant Response Monitoring</div>
              <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" size={24} /></div>
              <div className="bg-slate-800 border border-slate-700 text-center py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform duration-300">Coordinator Notification</div>
              <div className="flex justify-center"><ArrowRight className="text-slate-600 rotate-90" size={24} /></div>
              <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-center py-5 rounded-2xl font-bold text-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform duration-300">Follow-Up Tracking</div>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <RevealLine>
              <h2 className="text-5xl font-black tracking-tight">Support Earlier Participant Follow-Up</h2>
            </RevealLine>
            <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-400 font-medium leading-relaxed">
              <p>CliniLink enables study teams to coordinate participant communication workflows, automate outreach activity, and maintain more consistent engagement throughout active participation.</p>
              <p>The platform is designed to help coordinators prioritize follow-up activity without increasing operational complexity.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CENTRALIZED RETENTION OVERSIGHT */}
      <section className="py-40 px-6 max-w-7xl mx-auto border-b border-slate-100 relative z-10 bg-white" ref={dashboardRef}>
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-24">
          <RevealLine>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">Centralized Visibility Across Participants and Studies</h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
            <p>Study teams can monitor engagement activity, participant communication status, and operational follow-up workflows from a centralized retention management environment.</p>
            <p>Designed for modern clinical operations, CliniLink supports more coordinated retention oversight across sites and studies.</p>
          </FadeIn>
        </div>
        <motion.div style={{ scale: scaleDash }} className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 will-change-transform transform-gpu relative group">
          <img src={DASHBOARD_IMG} alt="Centralized Retention Oversight" className="w-full h-auto" />
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
        </motion.div>
      </section>

      {/* SECTION 5 - OPERATIONAL BENEFITS */}
      <section className="py-40 px-6 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <RevealLine className="text-center mb-24">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Designed to Support Better Retention Operations</h2>
          </RevealLine>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <FadeIn key={i} delay={0.1 * i} className="bg-white border border-slate-200 p-10 rounded-3xl shadow-lg shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight">{benefit.title}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-40 text-center px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">See How CliniLink Supports Proactive Retention Management</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              Explore how modern retention intelligence can help clinical teams improve engagement visibility and support more proactive participant follow-up workflows.
            </p>
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
