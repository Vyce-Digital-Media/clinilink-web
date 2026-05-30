import { ArrowRight, Activity, Users, Building2, Workflow, Eye, Clock, LayoutGrid, ShieldCheck } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'

const DASHBOARD_IMG_CRO     = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80'
const DASHBOARD_IMG_SPONSOR = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80'
const DASHBOARD_IMG_SITE    = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=80'

const crossStudyBenefits = [
  { title: 'Centralized Engagement Management', icon: LayoutGrid },
  { title: 'Predictive Retention Visibility',   icon: Eye },
  { title: 'Streamlined Communication Workflows', icon: Workflow },
  { title: 'Proactive Participant Intervention', icon: Activity },
  { title: 'Reduced Manual Coordination',        icon: Clock },
  { title: 'Scalable Multi-Study Support',       icon: ShieldCheck }
]

const audiences = [
  {
    tag: 'For CROs',
    tagIcon: Building2,
    tagColor: 'bg-blue-50 text-blue-600',
    accentColor: 'border-blue-500',
    dimColor: 'border-blue-200 group-hover:border-blue-500',
    title: 'Support sponsors with scalable retention operations',
    desc: 'Support sponsors with scalable retention operations, centralized participant oversight, and more standardized engagement workflows across studies and sites.',
    bullets: [
      { head: 'Operational Visibility', body: 'Monitor participant engagement activity, follow-ups, alerts, and retention workflows across active studies.' },
      { head: 'Standardized Engagement Processes', body: 'Create more consistent participant communication and retention management workflows across programs.' },
      { head: 'Reduced Coordinator Burden', body: 'Automate outreach, reminders, and follow-up workflows to improve operational efficiency.' },
      { head: 'Sponsor Transparency', body: 'Provide sponsors with stronger retention oversight and operational visibility throughout the study lifecycle.' }
    ],
    image: DASHBOARD_IMG_CRO,
    imgAlt: 'CRO Dashboard'
  },
  {
    tag: 'For Sponsors',
    tagIcon: Users,
    tagColor: 'bg-emerald-50 text-emerald-600',
    accentColor: 'border-emerald-500',
    dimColor: 'border-emerald-200 group-hover:border-emerald-500',
    title: 'For Sponsors',
    desc: 'Improve study continuity with better retention visibility, proactive participant monitoring, and scalable operational oversight across clinical programs.',
    bullets: [
      { head: 'Centralized Retention Oversight', body: 'Gain visibility into participant engagement activity and retention risk across studies and sites.' },
      { head: 'Improved Study Continuity', body: 'Reduce operational disruption associated with disengagement, missed visits, and participant dropout.' },
      { head: 'Proactive Engagement Management', body: 'Support more consistent participant communication and intervention workflows throughout the study lifecycle.' },
      { head: 'Multi-Study Operational Support', body: 'Enable scalable retention operations across complex multi-site clinical programs.' }
    ],
    image: DASHBOARD_IMG_SPONSOR,
    imgAlt: 'Sponsor Dashboard',
    flip: true
  },
  {
    tag: 'For Research Sites',
    tagIcon: Activity,
    tagColor: 'bg-violet-50 text-violet-600',
    accentColor: 'border-violet-500',
    dimColor: 'border-violet-200 group-hover:border-violet-500',
    title: 'For Research Sites',
    desc: 'Reduce manual follow-up burden and simplify participant communication workflows for site coordinators and research teams.',
    bullets: [
      { head: 'Streamlined Participant Outreach', body: 'Coordinate reminders, updates, and participant follow-ups from one centralized system.' },
      { head: 'Workflow Efficiency', body: 'Reduce repetitive communication tasks through configurable engagement automation.' },
      { head: 'Coordinator Visibility', body: 'Improve visibility into participant communication history, engagement activity, and pending actions.' },
      { head: 'Simplified Retention Management', body: 'Support more organized and proactive participant engagement throughout active studies.' }
    ],
    image: DASHBOARD_IMG_SITE,
    imgAlt: 'Site Dashboard'
  }
]

/* ── Sub-components ──────────────────────────────────────────────────────── */

function BulletRow({ head, body, accent, dim, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group space-y-1 border-l-2 pl-4 transition-colors duration-300 ${index === 0 ? accent : dim}`}
    >
      <h4 className="font-black text-lg text-slate-900">{head}</h4>
      <p className="text-slate-600 font-medium">{body}</p>
    </motion.div>
  )
}

function AudienceBlock({ a, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isFlipped = a.flip
  const TagIcon = a.tagIcon

  return (
    <section
      ref={ref}
      className={`py-36 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center
                  ${index > 0 ? 'border-t border-slate-100' : ''} relative z-10 bg-white`}
    >
      {/* Text side */}
      <div className={`space-y-8 ${isFlipped ? 'lg:order-2' : ''}`}>
        <RevealLine>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${a.tagColor} text-sm font-bold mb-2`}>
            <TagIcon size={15} /> {a.tag}
          </div>
        </RevealLine>
        <RevealLine delay={0.08}>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{a.title}</h2>
        </RevealLine>
        <FadeIn delay={0.2}>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">{a.desc}</p>
        </FadeIn>
        <div className="space-y-6 pt-2">
          {a.bullets.map((b, i) => (
            <BulletRow key={i} head={b.head} body={b.body} accent={a.accentColor} dim={a.dimColor} index={i} />
          ))}
        </div>
      </div>

      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 h-[520px] relative group
                    ${isFlipped ? 'lg:order-1' : ''}`}
      >
        <img
          src={a.image}
          alt={a.imgAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
      </motion.div>
    </section>
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
      className="group bg-slate-800 border border-slate-700 p-10 rounded-[2rem]
                 hover:bg-slate-750 hover:-translate-y-2 hover:border-slate-600
                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                 transition-all duration-400 cursor-default"
    >
      <Icon
        size={40}
        className="text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
      />
      <h3 className="text-2xl font-black leading-tight text-white">{benefit.title}</h3>
    </motion.div>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function Solutions() {
  return (
    <main className="bg-white overflow-clip selection:bg-primary/20 selection:text-primary">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-40 pb-32 px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <InteractiveGrid cellSize={60} hoverColor="hover:bg-slate-50" gridColor="border-slate-200/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white z-10" />
        </div>

        <div className="space-y-8 max-w-5xl mx-auto text-center relative z-10">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase">
              Retention Solutions{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                for Modern
              </span>{' '}
              Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.4} className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
              CliniLink helps sponsors, CROs, and research sites improve participant retention through predictive intelligence, centralized engagement workflows, and proactive operational oversight across the study lifecycle.
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

      {/* ── WHY RETENTION MATTERS ─────────────────────────────────────────────── */}
      <section className="py-28 bg-slate-50 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <RevealLine>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Retention Challenges Impact Every Clinical Trial Stakeholder
            </h2>
          </RevealLine>
          <FadeIn delay={0.2} className="space-y-4 text-xl text-slate-600 font-medium leading-relaxed">
            <p>Participant disengagement and dropout can disrupt study timelines, increase operational burden, reduce protocol adherence, and impact study continuity across clinical programs.</p>
            <p>CliniLink helps organizations take a more proactive, coordinated, and scalable approach to participant retention management.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── AUDIENCE BLOCKS (CROs / Sponsors / Sites) ─────────────────────────── */}
      {audiences.map((a, i) => (
        <AudienceBlock key={i} a={a} index={i} />
      ))}

      {/* ── CROSS-STUDY BENEFITS ──────────────────────────────────────────────── */}
      <section className="py-36 bg-slate-900 text-white px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Built to Support Better Trial Operations</h2>
            </RevealLine>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crossStudyBenefits.map((b, i) => (
              <BenefitCard key={i} benefit={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-32 text-center px-6 bg-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">
              See How CliniLink Supports{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Modern Retention Operations
              </span>
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto">
              Explore how CliniLink helps sponsors, CROs, and research sites improve participant engagement, streamline retention workflows, and support better study continuity across clinical programs.
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
