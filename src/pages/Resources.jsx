import { ArrowRight, BookOpen, FileText, Video, Download, ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import HoverButton from '../components/ui/HoverButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'
import SubscribeForm from '../components/ui/SubscribeForm'
import RESOURCES_IMG from '../assets/resources_infographic.png'

/* ─── Data (unchanged) ─────────────────────────────────────────────────────── */

const insights = [
  {
    title: "Participant Retention",
    desc: "How trial teams can identify disengagement earlier and reduce avoidable dropout."
  },
  {
    title: "Site Workflows",
    desc: "Ways to reduce manual follow-up and help coordinators prioritize participant outreach."
  },
  {
    title: "Retention Intelligence",
    desc: "How early signals, risk scoring, and centralized oversight can support better study continuity."
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

function InsightCard({ insight }) {
  return (
    <div className="group cursor-pointer h-full">
      <div className="bg-white border border-slate-200 rounded-[2rem] p-10 cursor-default h-full
                      transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.08)]">

        {/* Top accent line — pure CSS, no motion */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500
                        origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

        <div className="relative z-10 flex flex-col gap-6 h-full">


          <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
            {insight.title}
          </h3>

          <p className="text-slate-400 font-medium leading-relaxed flex-1">
            {insight.desc}
          </p>

        </div>
      </div>
    </div>
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

function ThoughtLeadershipRow({ item }) {
  return (
    <div className="group cursor-pointer relative">
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
    </div>
  )
}


/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function Resources() {
  return (
    <main className="bg-white overflow-clip selection:bg-primary/20 selection:text-primary">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100vh] lg:h-screen flex items-center pt-32 pb-24 lg:pt-24 lg:pb-12 px-6 overflow-hidden bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <RevealLine delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.05]">
                Insights & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pr-2 pb-1">Resources</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-6">
                Practical ideas for improving clinical trial retention.
              </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mt-4">
                Explore short insights, tools, and updates on participant engagement, retention risk, and proactive trial operations.
              </p>
            </FadeIn>

          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden rounded-3xl mt-8 lg:mt-0">
            <FadeIn delay={0.4} className="w-full h-full p-4">
              <img
                src={RESOURCES_IMG}
                alt="Insights & Resources Infographic"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FEATURED TOPICS ─────────────────────────────────────────────────── */}
      <section className="py-36 px-6 max-w-7xl mx-auto relative z-10 bg-white">
        <div className="mb-20">
          <RevealLine>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                <BookOpen className="text-blue-500" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Featured Topics</h2>
            </div>
          </RevealLine>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
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
                Insights, commentary, and observations on clinical trial retention.
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


      {/* ── FINAL CTA — matches About page style exactly ──────────────────────── */}
      <section className="py-32 text-center px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">
              Stay Connected to the Future of{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 pr-2 pb-1">
                Clinical Trial Retention
              </span>
            </h2>
          </RevealLine>

          <FadeIn delay={0.4} className="pt-6 flex flex-col items-center gap-6">
            <SubscribeForm 
              containerClassName="w-full max-w-2xl mx-auto"
              showIcon={false}
              inputClassName="flex-1 w-full px-6 py-5 bg-white border border-slate-300 rounded-full text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm font-medium text-lg"
              buttonClassName="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-primary transition-all duration-500 shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex justify-center items-center group relative overflow-hidden"
            />
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
