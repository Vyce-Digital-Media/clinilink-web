import { ArrowRight, Activity, Users, Building2, Workflow, Eye, Clock, LayoutGrid, ShieldCheck } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'

export default function Solutions() {
  const containerRef = useRef(null)

  const DASHBOARD_IMG_CRO = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
  const DASHBOARD_IMG_SPONSOR = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
  const DASHBOARD_IMG_SITE = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=80"

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // We can use a general slow parallax for images as they come into view
  const imgY1 = useTransform(scrollYProgress, [0, 0.3], ['0%', '10%'])
  const imgY2 = useTransform(scrollYProgress, [0.3, 0.6], ['0%', '10%'])
  const imgY3 = useTransform(scrollYProgress, [0.6, 0.9], ['0%', '10%'])

  const crossStudyBenefits = [
    { title: "Centralized Engagement Management", icon: LayoutGrid },
    { title: "Improved Operational Visibility", icon: Eye },
    { title: "Streamlined Communication Workflows", icon: Workflow },
    { title: "More Proactive Retention Oversight", icon: Activity },
    { title: "Reduced Manual Coordination", icon: Clock },
    { title: "Scalable Study Support", icon: ShieldCheck }
  ]

  return (
    <main ref={containerRef} className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto text-center border-b border-slate-100 relative z-10 bg-white">
        <div className="space-y-6 max-w-4xl mx-auto">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Retention Solutions for Modern Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              CliniLink helps sponsors, CROs, and research sites improve participant engagement, streamline operational workflows, and support proactive retention management across clinical studies.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-8">
            <MagneticButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-colors shadow-2xl inline-flex group">
              <span className="flex items-center gap-2">Book a Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1 - WHY RETENTION MATTERS */}
      <section className="py-24 bg-slate-50 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <RevealLine>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Retention Challenges Impact Every Clinical Trial Stakeholder</h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-4 text-xl text-slate-600 font-medium leading-relaxed">
            <p>Participant disengagement can affect study timelines, operational efficiency, recruitment costs, and protocol adherence across the clinical trial lifecycle.</p>
            <p>CliniLink helps organizations take a more proactive and coordinated approach to participant engagement and retention management.</p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - FOR CROs */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 bg-white">
        <div className="space-y-8">
          <RevealLine>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4">
              <Building2 size={16} /> For CROs
            </div>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Scale Participant Engagement</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
              Support sponsors with scalable participant engagement and centralized retention oversight across studies and sites.
            </p>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={0.3} className="space-y-2 border-l-2 border-blue-500 pl-4">
              <h4 className="font-bold text-lg text-slate-900">Operational Visibility</h4>
              <p className="text-slate-600 font-medium">Monitor participant engagement and follow-up activity across active studies.</p>
            </FadeIn>
            <FadeIn delay={0.4} className="space-y-2 border-l-2 border-blue-200 pl-4 hover:border-blue-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Standardized Engagement Workflows</h4>
              <p className="text-slate-600 font-medium">Support more consistent communication and retention processes across programs.</p>
            </FadeIn>
            <FadeIn delay={0.5} className="space-y-2 border-l-2 border-blue-200 pl-4 hover:border-blue-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Reduced Coordinator Burden</h4>
              <p className="text-slate-600 font-medium">Automate participant outreach and streamline engagement workflows.</p>
            </FadeIn>
            <FadeIn delay={0.6} className="space-y-2 border-l-2 border-blue-200 pl-4 hover:border-blue-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Sponsor Support</h4>
              <p className="text-slate-600 font-medium">Provide sponsors with stronger retention infrastructure and operational transparency.</p>
            </FadeIn>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 lg:order-last order-first h-[600px] relative">
          <motion.img style={{ y: imgY1 }} src={DASHBOARD_IMG_CRO} alt="CRO Dashboard" className="absolute -top-[10%] left-0 w-full h-[120%] object-cover will-change-transform" />
        </div>
      </section>

      {/* SECTION 3 - FOR SPONSORS */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center border-t border-slate-100 relative z-10 bg-white">
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 border border-slate-200 h-[600px] relative">
          <motion.img style={{ y: imgY2 }} src={DASHBOARD_IMG_SPONSOR} alt="Sponsor Dashboard" className="absolute -top-[10%] left-0 w-full h-[120%] object-cover will-change-transform" />
        </div>
        <div className="space-y-8">
          <RevealLine>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-4">
              <Users size={16} /> For Sponsors
            </div>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Improve Study Continuity</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
              Improve study continuity with better participant engagement visibility and proactive retention management.
            </p>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={0.3} className="space-y-2 border-l-2 border-emerald-500 pl-4">
              <h4 className="font-bold text-lg text-slate-900">Retention Oversight</h4>
              <p className="text-slate-600 font-medium">Gain centralized visibility into participant engagement activity across studies.</p>
            </FadeIn>
            <FadeIn delay={0.4} className="space-y-2 border-l-2 border-emerald-200 pl-4 hover:border-emerald-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Study Continuity Support</h4>
              <p className="text-slate-600 font-medium">Reduce operational disruption caused by participant disengagement and missed visits.</p>
            </FadeIn>
            <FadeIn delay={0.5} className="space-y-2 border-l-2 border-emerald-200 pl-4 hover:border-emerald-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Engagement Coordination</h4>
              <p className="text-slate-600 font-medium">Support more consistent participant communication throughout the study lifecycle.</p>
            </FadeIn>
            <FadeIn delay={0.6} className="space-y-2 border-l-2 border-emerald-200 pl-4 hover:border-emerald-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Scalable Operational Support</h4>
              <p className="text-slate-600 font-medium">Enable retention management across multi-site clinical programs.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4 - FOR RESEARCH SITES */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center border-t border-slate-100 relative z-10 bg-white">
        <div className="space-y-8">
          <RevealLine>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-bold mb-4">
              <Activity size={16} /> For Research Sites
            </div>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Simplify Site Workflows</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
              Simplify participant communication workflows and reduce administrative follow-up burden for site teams.
            </p>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={0.3} className="space-y-2 border-l-2 border-violet-500 pl-4">
              <h4 className="font-bold text-lg text-slate-900">Streamlined Participant Outreach</h4>
              <p className="text-slate-600 font-medium">Coordinate reminders, updates, and follow-ups from a centralized platform.</p>
            </FadeIn>
            <FadeIn delay={0.4} className="space-y-2 border-l-2 border-violet-200 pl-4 hover:border-violet-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Workflow Efficiency</h4>
              <p className="text-slate-600 font-medium">Reduce repetitive communication tasks through automated engagement workflows.</p>
            </FadeIn>
            <FadeIn delay={0.5} className="space-y-2 border-l-2 border-violet-200 pl-4 hover:border-violet-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Coordinator Support</h4>
              <p className="text-slate-600 font-medium">Improve visibility into participant communication activity and follow-up needs.</p>
            </FadeIn>
            <FadeIn delay={0.6} className="space-y-2 border-l-2 border-violet-200 pl-4 hover:border-violet-500 transition-colors">
              <h4 className="font-bold text-lg text-slate-900">Simplified Engagement Management</h4>
              <p className="text-slate-600 font-medium">Support more organized participant communication throughout active studies.</p>
            </FadeIn>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-violet-900/10 border border-slate-200 lg:order-last order-first h-[600px] relative">
          <motion.img style={{ y: imgY3 }} src={DASHBOARD_IMG_SITE} alt="Site Dashboard" className="absolute -top-[10%] left-0 w-full h-[120%] object-cover will-change-transform" />
        </div>
      </section>

      {/* SECTION 5 - CROSS-STUDY OPERATIONAL BENEFITS */}
      <section className="py-40 bg-slate-900 text-white px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <RevealLine className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tight">Built to Support Better Trial Operations</h2>
          </RevealLine>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crossStudyBenefits.map((benefit, i) => (
              <FadeIn key={i} delay={0.1 * i} className="bg-slate-800 border border-slate-700 p-10 rounded-3xl hover:bg-slate-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
                <benefit.icon size={40} className="text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                <h3 className="text-2xl font-bold leading-tight">{benefit.title}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-40 text-center px-6 bg-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">See How CliniLink Supports Modern Retention Operations</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-slate-600 font-medium">Explore how CliniLink helps clinical organizations manage participant engagement and operational retention workflows across studies.</p>
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
