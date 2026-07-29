import { ArrowRight, Activity, Users, Building2, Workflow, Eye, Clock, LayoutGrid, ShieldCheck } from 'lucide-react'
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import HoverButton from '../components/ui/HoverButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'

const DASHBOARD_IMG_CRO = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80'
const DASHBOARD_IMG_SPONSOR = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80'
import DASHBOARD_IMG_SITE from '../assets/research.png'

const crossStudyBenefits = [
  { title: 'Centralized Engagement Management', icon: LayoutGrid },
  { title: 'Predictive Retention Visibility', icon: Eye },
  { title: 'Automated communication workflows', icon: Workflow },
  { title: 'Proactive Participant Intervention', icon: Activity },
  { title: 'Reduced Manual Coordination', icon: Clock },
  { title: 'Scalable Multi-Study Support', icon: ShieldCheck }
]

const audiences = [
  {
    tag: 'For CROs',
    tagIcon: Building2,
    tagColor: 'bg-blue-50 text-blue-600',
    accentColor: 'border-blue-500',
    dimColor: 'border-blue-200 group-hover:border-blue-500',
    title: 'Standardize Retention Operations Across Sites and Studies',
    desc: 'CROs need consistent execution across complex, multi-site trials. CliniLink helps teams monitor engagement activity, coordinate workflows, and give sponsors clearer visibility into retention risk.',
    bullets: [
      { head: 'Operational Visibility', body: 'Monitor engagement activity, follow-ups, alerts, and retention workflows across active studies..' },
      { head: 'Standardized Engagement Processes', body: 'Create consistent participant communication and retention workflows across sites and programs.' },
      { head: 'Reduced Coordinator Burden', body: 'Automate reminders, outreach, and follow-up steps to reduce repetitive manual work.' },
      { head: 'Sponsor Transparency', body: 'Give sponsors a clearer view of retention activity, risk signals, and intervention progress.' }
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
    desc: 'Earlier Retention Risk with better visibility, proactive monitoring, and scalable operational oversight.',
    bullets: [
      { head: 'Centralized Retention Oversight', body: 'See participant engagement activity and retention risk across studies and sites.' },
      { head: 'Improved Study Continuity', body: 'Reduce disruption from missed visits, disengagement, and participant dropout.' },
      { head: 'Proactive Engagement Management', body: 'Support earlier interventions through alerts, workflows, and follow-up tracking.' },
      { head: 'Multi-Study Operational Support', body: 'Manage retention visibility across complex clinical programs and study portfolios.' }
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
    desc: 'Reduce manual follow-up burden and simplify communication workflows for site teams.',
    bullets: [
      { head: 'Streamlined Participant Outreach', body: 'Coordinate reminders, updates, and follow-ups from one centralized workflow.' },
      { head: 'Workflow Efficiency', body: 'Reduce repetitive communication tasks through configurable automation.' },
      { head: 'Coordinator Visibility', body: 'See communication history, engagement activity, and pending actions in one place.' },
      { head: 'Simplified Retention Management', body: 'Help site teams stay ahead of disengagement before it becomes dropout.' }
    ],
    image: DASHBOARD_IMG_SITE,
    imgAlt: 'Site Dashboard'
  }
]

/* ── Sub-components ──────────────────────────────────────────────────────── */

function BulletRow({ head, body, accent, dim, index }) {
  return (
    <div
      className={`group border-l-2 pl-4 transition-colors duration-300 ${index === 0 ? accent : dim} overflow-hidden`}
    >
      <h4 className="font-black text-base text-slate-900 truncate">{head}</h4>
      <p className="text-sm text-slate-600 font-medium mt-0.5 truncate">{body}</p>
    </div>
  )
}

function AudienceBlock({ a, index }) {
  const TagIcon = a.tagIcon

  return (
    <section
      className={`w-full max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-center px-6 lg:px-16`}
    >
      {/* Text side */}
      <div className="space-y-4 md:space-y-6 lg:col-span-7">
        <RevealLine delay={0.08}>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">{a.title}</h2>
        </RevealLine>
        <FadeIn delay={0.2}>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">{a.desc}</p>
        </FadeIn>
        <div className="space-y-4 pt-1">
          {a.bullets.map((b, i) => (
            <BulletRow key={i} head={b.head} body={b.body} accent={a.accentColor} dim={a.dimColor} index={i} />
          ))}
        </div>
      </div>

      {/* Image side */}
      <div
        className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 h-[380px] lg:h-[460px] relative group lg:col-span-5"
      >
        <img
          src={a.image}
          alt={a.imgAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}

function BenefitCard({ benefit }) {
  const Icon = benefit.icon

  return (
    <div
      className="group bg-slate-800 border border-slate-700 p-10 rounded-[2rem]
                 hover:bg-slate-750 hover:border-slate-600
                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                 transition-all duration-400 cursor-default"
    >
      <Icon
        size={40}
        className="text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
      />
      <h3 className="text-2xl font-black leading-tight text-white">{benefit.title}</h3>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function Solutions() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666666%"])
  const [activeTab, setActiveTab] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveTab(0)
    } else if (latest < 0.66) {
      setActiveTab(1)
    } else {
      setActiveTab(2)
    }
  })

  return (
    <main className="bg-white overflow-clip selection:bg-primary/20 selection:text-primary">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen px-6 overflow-hidden flex flex-col justify-center items-center border-b border-slate-900 bg-slate-950">

        {/* Floating Dashboard Image in Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none px-6 md:mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[85rem] h-[80vh] rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.15)] border border-slate-800 bg-slate-900 relative opacity-40"
          >
            {/* Glossy top bar */}
            <div className="absolute top-0 inset-x-0 h-12 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-10 flex items-center px-6 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              </div>
            </div>
            <img
              src={DASHBOARD_IMG_CRO}
              alt="Dashboard Background"
              className="w-full h-full object-cover object-top pt-12"
            />
            {/* Subtle dark overlay so text is still legible over the image */}
            <div className="absolute inset-0 bg-slate-950/40" />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 max-w-5xl mx-auto text-center relative z-10 w-full drop-shadow-2xl md:mt-20">
          <RevealLine delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95] uppercase">
              Retention Solutions{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 pr-2 pb-1">
                for
              </span>
              <br />
              Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.4} className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed drop-shadow-md">
              CliniLink helps CROs, sponsors, and research sites detect retention risk earlier, coordinate follow-up, and keep studies on track.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} className="pt-2 flex justify-center gap-4">
            <HoverButton onClick={() => window.open('https://calendly.com/pkshah-zsk7', '_blank')} className="px-8 py-4 bg-white text-slate-900 rounded-full font-black
                                       hover:bg-blue-50 transition-all duration-500
                                       shadow-[0_0_40px_rgba(59,130,246,0.3)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-2 relative z-10">
                Schedule a Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </HoverButton>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY RETENTION MATTERS ─────────────────────────────────────────────── */}
      <section className="pt-48 pb-16 bg-slate-50 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <RevealLine>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Retention Challenges Impact Every Trial Stakeholder
            </h2>
          </RevealLine>
          <FadeIn delay={0.2} className="text-xl text-slate-600 font-medium leading-relaxed">
            <p>Participant disengagement affects timelines, site workload, sponsor visibility, and study continuity. CliniLink gives trial teams a proactive way to identify risk, manage follow-up, and reduce avoidable dropout.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── AUDIENCE BLOCKS (CROs / Sponsors / Sites) ─────────────────────────── */}
      <section ref={targetRef} className="relative h-[300vh] bg-slate-50 z-10">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20 lg:pt-24">
          
          {/* Sticky Tags Navigation */}
          <div className="z-20 flex justify-center gap-4 md:gap-12 px-6 flex-wrap mb-8 md:mb-10">
            {audiences.map((a, i) => {
              const TagIcon = a.tagIcon
              const isActive = activeTab === i
              return (
                <button 
                  key={i}
                  onClick={() => {
                    if (targetRef.current) {
                      window.scrollTo({
                        top: targetRef.current.offsetTop + (window.innerHeight * i),
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer
                              ${isActive ? a.tagColor + ' shadow-md scale-105 ring-2 ' + a.accentColor.replace('border-', 'ring-') : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50 hover:text-slate-600 hover:shadow-sm'}`}
                >
                  <TagIcon size={16} /> {a.tag}
                </button>
              )
            })}
          </div>

          <motion.div style={{ x }} className="flex w-[300vw] items-center">
            {audiences.map((a, i) => (
              <div key={i} className="w-screen flex-shrink-0 flex items-center justify-center">
                <AudienceBlock a={a} index={i} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CROSS-STUDY BENEFITS ──────────────────────────────────────────────── */}
      <section className="py-36 bg-slate-900 text-white px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Built to Support Better Trial Operations</h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
                CliniLink connects retention intelligence with operational workflows, helping teams move from reactive follow-up to proactive retention management.
              </p>
            </FadeIn>
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
        <div className="w-full max-w-[1600px] mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">
              See How CliniLink Supports<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 pr-2 pb-1">
                Retention Operations
              </span>
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto">
              Explore how CliniLink helps CROs, sponsors, and sites improve engagement, streamline workflows, and protect study continuity.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-6 flex justify-center">
            <HoverButton onClick={() => window.open('https://calendly.com/pkshah-zsk7', '_blank')} className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl
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
