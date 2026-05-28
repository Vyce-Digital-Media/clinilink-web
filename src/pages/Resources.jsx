import { ArrowRight, BookOpen, FileText, Video, Download, ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'

/* ─── Data (unchanged) ─────────────────────────────────────────────────────── */

const insights = [
  {
    title: "Understanding Participant Dropout in Clinical Trials",
    desc: "Explore common operational and engagement-related factors that contribute to participant disengagement across clinical studies."
  },
  {
    title: "Why Retention Requires More Than Communication",
    desc: "Retention challenges often emerge through operational complexity, inconsistent engagement, and delayed follow-up visibility."
  },
  {
    title: "Improving Participant Engagement Across Multi-Site Trials",
    desc: "Learn how centralized engagement workflows can support study coordination and participant continuity."
  },
  {
    title: "The Operational Cost of Missed Visits",
    desc: "Understand how missed participant activity can affect study timelines, coordination burden, and operational continuity."
  }
]

const categories = [
  "Retention Strategy",
  "Participant Engagement",
  "Clinical Operations",
  "Study Coordination",
  "Trial Continuity",
  "Operational Workflows"
]

const thoughtLeadership = [
  "The Future of Proactive Retention Management",
  "Operational Gaps in Participant Follow-Up",
  "Building Better Engagement Infrastructure for Clinical Trials"
]

/* ─── Sub-components ────────────────────────────────────────────────────────── */

function InsightCard({ insight, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer h-full"
    >
      <div className="relative h-full rounded-[2rem] border border-slate-800 bg-slate-900 p-10 overflow-hidden
                      transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.08)] hover:-translate-y-1">

        {/* Top accent line — pure CSS, no motion */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500
                        origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

        <div className="relative z-10 flex flex-col gap-6 h-full">


          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight
                         group-hover:text-blue-300 transition-colors duration-300">
            {insight.title}
          </h3>

          <p className="text-slate-400 font-medium leading-relaxed flex-1">
            {insight.desc}
          </p>

        </div>
      </div>
    </motion.div>
  )
}

function CategoryTicker() {
  const doubled = [...categories, ...categories]
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-4 w-max will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((cat, i) => (
          <button
            key={i}
            className="px-6 py-3 rounded-full border border-slate-800 bg-slate-950
                       text-sm font-bold text-slate-400 whitespace-nowrap shrink-0 cursor-pointer
                       hover:bg-blue-500 hover:text-white hover:border-blue-500
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                       transition-all duration-250"
          >
            {cat}
          </button>
        ))}
      </motion.div>
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
    </div>
  )
}

function ThoughtLeadershipRow({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer relative"
    >
      {/* Left accent bar — CSS only */}
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-blue-400 to-indigo-500
                      origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out" />

      <div className="flex items-center gap-6 py-7 pl-8 pr-4 border-b border-slate-100 last:border-0
                      transition-colors duration-300">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0
                        group-hover:bg-blue-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110
                        text-blue-500 transition-all duration-350">
          <Video size={22} />
        </div>

        <h3 className="text-xl md:text-2xl font-black flex-1 leading-snug text-slate-900
                       group-hover:text-blue-600 transition-colors duration-300">
          {item}
        </h3>

        <div className="text-slate-300 shrink-0 group-hover:text-blue-500 group-hover:translate-x-1.5
                        transition-all duration-300">
          <ArrowRight size={22} />
        </div>
      </div>
    </motion.div>
  )
}

function DarkCard({ delay, icon: Icon, title, desc, footer }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[2rem] border border-slate-800 bg-slate-900 p-10 md:p-14 overflow-hidden
                 hover:border-indigo-500/30 transition-colors duration-500"
    >
      {/* Watermark icon — CSS transitions only */}
      <div className="absolute -bottom-8 -right-8 text-white/[0.03] group-hover:text-white/[0.07]
                      group-hover:scale-110 transition-all duration-700 pointer-events-none origin-bottom-right">
        <Icon size={160} />
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20
                        flex items-center justify-center mb-8">
          <Icon size={26} className="text-indigo-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">{title}</h2>
        <p className="text-slate-400 font-medium text-lg leading-relaxed mb-10">{desc}</p>
        {footer}
      </div>
    </motion.div>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function Resources() {
  return (
    <main className="bg-white overflow-clip selection:bg-primary/20 selection:text-primary">

      {/* ── HERO — matches About page style ──────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-40 pb-32 px-6 overflow-hidden bg-white border-b border-slate-100">
        {/* Interactive cell grid background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <InteractiveGrid cellSize={60} hoverColor="hover:bg-slate-50" gridColor="border-slate-200/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white z-10" />
        </div>

        <div className="space-y-8 max-w-5xl mx-auto text-center relative z-10">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase">
              Retention Insights &{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Resources
              </span>{' '}
              for Clinical Trials
            </h1>
          </RevealLine>

          <FadeIn delay={0.4} className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
              Explore perspectives, operational insights, and educational resources focused on participant engagement,
              retention management, and modern clinical trial operations.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="pt-4 flex justify-center">
            <MagneticButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold
                                       hover:bg-primary transition-all duration-500
                                       shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-2 relative z-10">
                Subscribe for Updates
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURED INSIGHTS ─────────────────────────────────────────────────── */}
      <section className="py-36 px-6 max-w-7xl mx-auto relative z-10 bg-white">
        <div className="mb-20">
          <RevealLine>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                <BookOpen className="text-blue-500" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Featured Insights</h2>
            </div>
          </RevealLine>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, i) => (
            <InsightCard key={i} insight={insight} index={i} />
          ))}
        </div>
      </section> 

      {/* ── THOUGHT LEADERSHIP ───────────────────────────────────────────────── */}
      <section className="py-36 px-6 max-w-7xl mx-auto relative z-10 bg-white">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left sticky column */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 h-fit space-y-5">
            <RevealLine>
              <div>
                <span className="text-primary font-mono text-xs tracking-[0.35em] uppercase font-bold block mb-3">
                  Perspectives
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  Perspectives on Modern Retention Operations
                </h2>
              </div>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Conference participation, webinars, founder insights, operational commentary, and industry observations.
              </p>
            </FadeIn>
          </div>

          {/* Right scrolling rows */}
          <div className="lg:col-span-8">
            {thoughtLeadership.map((item, i) => (
              <ThoughtLeadershipRow key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES & DOWNLOADS ─────────────────────────────────────────── */}
      <section className="py-36 px-6 bg-slate-950 relative z-10 border-y border-slate-900">
        {/* Subtle static ambient glow — no animation loop */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full
                        bg-indigo-500/5 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full
                        bg-blue-500/5 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-8">
          <DarkCard
            delay={0.1}
            icon={FileText}
            title="Case Studies & Operational Learnings"
            desc="Pilot results, workflow improvements, operational efficiencies, and engagement outcomes."
            footer={
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                              bg-white/5 border border-white/10 text-slate-400 text-sm font-bold">
                Coming Soon
              </div>
            }
          />
          <DarkCard
            delay={0.2}
            icon={Download}
            title="Downloadable Content"
            desc="Retention playbooks, operational checklists, sponsor guides, site workflow templates, and whitepapers."
            footer={
              <div className="space-y-3">
                {['Retention Playbook 2026', 'Site Workflow Templates'].map((label, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-slate-300 font-bold cursor-pointer group/link
                               bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/5
                               hover:border-indigo-500/30 hover:translate-x-1.5
                               transition-all duration-300"
                  >
                    <Download size={20} className="text-indigo-400 shrink-0" />
                    <span className="flex-1 text-sm">{label}</span>
                    <ArrowRight size={16}
                      className="text-slate-600 group-hover/link:text-indigo-400 transition-colors" />
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </section>

      {/* ── FINAL CTA — matches About page style exactly ──────────────────────── */}
      <section className="py-32 text-center px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">
              Stay Connected to the Future of{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Clinical Trial Retention
              </span>
            </h2>
          </RevealLine>

          <FadeIn delay={0.4} className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl
                                       hover:bg-primary transition-all duration-500
                                       shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-3 relative z-10">
                Subscribe for Updates
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </MagneticButton>
            <MagneticButton className="px-12 py-6 bg-white text-slate-900 border border-slate-200 rounded-full
                                       font-black text-xl hover:bg-slate-50 transition-colors shadow-md
                                       inline-flex justify-center group gap-3 items-center">
              Book a Demo
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
