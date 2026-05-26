import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'

export default function About() {
  const containerRef = useRef(null)
  const foundersRef = useRef(null)
  
  const { scrollYProgress: foundersProgress } = useScroll({
    target: foundersRef,
    offset: ['start end', 'end start']
  })
  
  const imgY = useTransform(foundersProgress, [0, 1], ['0%', '20%'])

  const focusAreas = [
    "Participant Engagement",
    "Retention Operations",
    "Workflow Coordination",
    "Operational Visibility",
    "Study Continuity",
    "Clinical Trial Support"
  ]

  return (
    <main ref={containerRef} className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto text-center border-b border-slate-100 relative z-10 bg-white">
        <div className="space-y-6 max-w-5xl mx-auto">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Building Better Retention Infrastructure for Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              CliniLink was founded to help clinical organizations take a more proactive, coordinated, and operationally efficient approach to participant engagement and retention management.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1 - WHY WE EXIST */}
      <section className="py-40 px-6 bg-slate-50 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Why CliniLink</h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-8 text-2xl text-slate-600 font-medium leading-relaxed border-l-4 border-primary pl-8">
            <p>Participant disengagement remains one of the most persistent operational challenges in clinical research.</p>
            <p>Missed visits, inconsistent communication, and delayed follow-up workflows can impact study continuity, increase operational burden, and contribute to costly trial delays.</p>
            <p>CliniLink was created to help sponsors, CROs, and research sites improve visibility into participant engagement activity and support more proactive retention operations across clinical studies.</p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - OUR APPROACH */}
      <section className="py-40 px-6 max-w-4xl mx-auto space-y-12 relative z-10 bg-white">
        <RevealLine>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Our Approach</h2>
        </RevealLine>
        <FadeIn delay={0.2} className="space-y-8 text-2xl text-slate-600 font-medium leading-relaxed">
          <p>We believe participant retention requires more than isolated communication tools.</p>
          <p>Modern clinical trials need centralized engagement workflows, operational visibility, and coordinated retention management designed to support both participants and study teams throughout the trial lifecycle.</p>
          <p>CliniLink combines participant engagement infrastructure, workflow coordination, and retention-focused operational support into a unified platform built for modern clinical operations.</p>
        </FadeIn>
      </section>

      {/* SECTION 3 - WHAT WE FOCUS ON */}
      <section className="py-40 px-6 bg-slate-900 text-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <RevealLine className="mb-20 text-center">
            <h2 className="text-5xl font-black tracking-tight">Our Focus Areas</h2>
          </RevealLine>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <FadeIn key={i} delay={0.1 * i} className="p-10 rounded-3xl bg-slate-800 border border-slate-700 hover:border-primary/50 hover:bg-slate-800/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-default">
                <h3 className="text-2xl font-bold tracking-tight">{area}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - LEADERSHIP / FOUNDERS */}
      <section className="py-40 px-6 max-w-6xl mx-auto space-y-20 border-b border-slate-100 relative z-10 bg-white" ref={foundersRef}>
        <RevealLine className="text-center">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Leadership</h2>
        </RevealLine>
        
        <div className="grid md:grid-cols-2 gap-20">
          {/* Founder Placeholder */}
          <FadeIn delay={0.2} className="space-y-8 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-[2rem] bg-slate-200 overflow-hidden shadow-2xl border-4 border-white shrink-0 relative">
              <motion.img style={{ y: imgY }} src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="Founder" className="absolute -top-[10%] left-0 w-full h-[120%] object-cover grayscale-[30%] will-change-transform" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Dr. James Founder</h3>
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-6">Co-Founder & CEO</p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Focused on improving participant engagement and operational retention workflows across clinical research through scalable technology infrastructure and modern engagement systems.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="space-y-8 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-[2rem] bg-slate-200 overflow-hidden shadow-2xl border-4 border-white shrink-0 relative">
              <motion.img style={{ y: imgY }} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" alt="Founder" className="absolute -top-[10%] left-0 w-full h-[120%] object-cover grayscale-[30%] will-change-transform" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Sarah Technical</h3>
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-6">Co-Founder & CTO</p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Bringing over a decade of enterprise software architecture experience to build secure, HIPAA-compliant platforms for the clinical trial industry.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 - VISION */}
      <section className="py-40 px-6 max-w-4xl mx-auto space-y-12 relative z-10 bg-slate-50 border-b border-slate-100 rounded-[3rem] my-20 shadow-xl shadow-slate-200/50">
        <div className="p-12">
          <RevealLine>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-12">Our Vision</h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-8 text-2xl text-slate-600 font-medium leading-relaxed">
            <p>We believe the future of clinical trial retention will be driven by more proactive engagement strategies, better operational coordination, and improved visibility into participant activity throughout the study lifecycle.</p>
            <p>CliniLink is building infrastructure designed to support more connected and efficient retention operations across modern clinical research.</p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-40 text-center px-6 relative z-10 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">Learn More About CliniLink</h2>
          </RevealLine>
          <FadeIn delay={0.4} className="pt-8 flex justify-center">
            <MagneticButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-slate-800 transition-colors shadow-2xl inline-flex group">
              <span className="flex items-center gap-3">
                Book a Demo <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
