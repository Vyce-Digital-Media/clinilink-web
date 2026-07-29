import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Users2 } from 'lucide-react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import HoverButton from '../components/ui/HoverButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'
import SubscribeForm from '../components/ui/SubscribeForm'
import ABOUT_IMG from '../assets/about_infographic.png'

export default function About() {
  const containerRef = useRef(null)

  const focusAreas = [
    {
      title: "Participant Engagement",
      desc: "Support consistent communication and engagement throughout the study journey."
    },
    {
      title: "Retention Risk Detection",
      desc: "Identify early signs of disengagement before dropout occurs."
    },
    {
      title: "Coordinator Workflows",
      desc: "Help site teams manage reminders, follow-ups, alerts, and intervention steps."
    },
    {
      title: "Operational Visibility",
      desc: "Give study leaders a clearer view of participant risk, site activity, and follow-up status."
    },
    {
      title: "Study Continuity",
      desc: "Help teams reduce disruption caused by missed visits, disengagement, and participant dropout."
    }
  ]

  const whyParagraphs = [
    "Clinical trials depend on participants staying engaged through study completion.",
    "But retention is difficult to manage when risk signals are scattered across communication tools, site notes, visit schedules, and coordinator follow-up.",
    "By the time a participant misses a visit or stops responding, the opportunity for early intervention may already be closing.",
    "CliniLink exists to help clinical trial teams move from reactive follow-up to proactive retention management."
  ]

  const missionParagraphs = [
    "Our mission is to give sponsors, CROs, and research sites earlier visibility into participant-level retention risk.",
    {
      title: "We help teams answer three important questions:",
      text: "Who may be at risk? <br> Why are they at risk? <br> What action should happen next?"
    }
  ]

  const approachParagraphs = [
    "Retention requires more than reminders.",
    "Trial teams need a connected way to monitor engagement, prioritize risk, coordinate follow-up, and track whether interventions are working.",
    "CliniLink brings retention signals, alerts, workflows, and oversight into one platform designed for clinical trial operations."
  ]

  const founderParagraphs = [
    "CliniLink is founder-led and focused on solving a practical operational challenge in clinical research: helping trial teams retain participants more effectively.",
    "We are building the platform around the realities of trial execution — site workload, participant communication gaps, missed visits, and limited visibility across studies and sites.",
    "Our goal is to work closely with sponsors, CROs, research sites, and clinical operations leaders to validate retention workflows that are practical, scalable, and useful in real trial settings."
  ]

  return (
    <main ref={containerRef} className="bg-white overflow-clip selection:bg-primary/20 selection:text-primary">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col justify-center pt-24 pb-12 px-6 overflow-hidden bg-[#F8F9FA] border-b border-slate-200">

        {/* Abstract Background pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left: Text Content */}
          <div className="space-y-8">

            <RevealLine delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05] uppercase">
                Building Better <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pr-2 pb-1">
                  Retention
                </span>
                <br /> Infrastructure.
              </h1>
            </RevealLine>

            <FadeIn delay={0.4}>
              <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-lg border-l-4 border-blue-500 pl-6">
                CliniLink helps clinical organizations take a proactive and efficient approach to engagement and retention.
              </p>
            </FadeIn>

            {/* Mission Badges */}
            <FadeIn delay={0.6} className="flex flex-wrap gap-4 pt-4">
              {["Technology-Driven", "Participant-First", "Operationally-Focused"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-bold text-sm bg-white px-4 py-2 rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  {badge}
                </div>
              ))}
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.8} className="pt-4 w-full">
              <SubscribeForm
                buttonText="Let's Connect"
                containerClassName="w-full max-w-2xl"
                inputClassName="flex-1 w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-none text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-0 transition-all font-medium"
                buttonClassName="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-none font-bold text-sm tracking-wide uppercase hover:bg-blue-600 transition-all duration-500 inline-flex items-center justify-center group relative overflow-hidden shrink-0"
              />
            </FadeIn>
          </div>

          {/* Right Hero Image */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center">
            <FadeIn delay={0.4} className="w-full h-full p-12 xl:p-16">
              <img
                src={ABOUT_IMG}
                alt="Built to Help Trials Stay on Track"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </FadeIn>
          </div>

        </div>
      </section>

      {/* SECTION 1 - WHY WE EXIST (TIMELINE LAYOUT) */}
      <section className="py-24 px-6 md:px-12 bg-slate-50/50 relative z-10">
        <TimelineSection
          tag="Why CliniLink"
          title="Why We Exist"
          rightTitle="Retention Risk Is an Execution Problem"
          paragraphs={whyParagraphs}
        />
      </section>

      {/* SECTION 1.5 - OUR MISSION (TIMELINE LAYOUT) */}
      <section className="py-24 px-6 md:px-12 bg-white relative z-10">
        <TimelineSection
          tag="Mission"
          title="Our Mission"
          rightTitle="Help Trial Teams Intervene Earlier"
          paragraphs={missionParagraphs}
        />
      </section>

      {/* SECTION 2 - OUR APPROACH (TIMELINE LAYOUT) */}
      <section className="py-24 px-6 md:px-12 bg-white relative z-10">
        <TimelineSection
          tag="Our Approach"
          title="How We Work"
          rightTitle="Earlier Signals. Clearer Workflows. Better Continuity."
          paragraphs={approachParagraphs}
        />
      </section>

      {/* SECTION 3 - WHAT WE FOCUS ON (SPOTLIGHT GRID) */}
      <section className="py-40 px-6 bg-slate-950 text-white relative z-10 border-y border-slate-900">
        {/* Ambient top/bottom glows */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/[0.02] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-indigo-500/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <RevealLine className="mb-20 text-center">
            <span className="text-primary font-mono text-xs md:text-sm tracking-[0.35em] uppercase mb-4 block font-bold">
              Built Around the Real Work of Retention
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-white">
              What We Focus On
            </h2>
          </RevealLine>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {focusAreas.map((area, i) => {
              // 3 items on top row, 2 items on bottom row centered for large screens
              let colClass = "col-span-1 md:col-span-1 lg:col-span-2"
              if (i === 3) colClass += " lg:col-start-2"
              return (
                <div key={i} className={colClass}>
                  <FocusAreaCard area={area} index={i} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - FOUNDER LED */}
      <section className="py-32 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <RevealLine className="mb-12 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-slate-900">
              Founder-Led
            </h2>
          </RevealLine>

          <div className="space-y-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-blue-600 uppercase">
              Built for the Next Generation of Trial Operations
            </h3>
            <div className="space-y-6">
              {founderParagraphs.map((para, idx) => (
                <p key={idx} className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5 - WHO WE SERVE */}
      <section className="py-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <RevealLine className="mb-16 text-center">
            <span className="text-primary font-mono text-xs md:text-sm tracking-[0.35em] uppercase mb-4 block font-bold">
              Designed for the Teams Responsible for Retention
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none text-slate-900">
              Who We Serve
            </h2>
          </RevealLine>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Sponsors",
                desc: "Gain earlier visibility into retention risk and study continuity."
              },
              {
                title: "CROs",
                desc: "Standardize retention workflows across sites and studies."
              },
              {
                title: "Research Sites",
                desc: "Reduce manual follow-up burden and help coordinators prioritize outreach."
              },
              {
                title: "Study Teams",
                desc: "Track participant risk, follow-up activity, and intervention outcomes in one place."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed pl-5">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - VISION (GLASSMORPHIC DASHBOARD) */}
      <section className="py-32 px-6 max-w-5xl mx-auto relative z-10 my-12">
        <div className="relative p-10 sm:p-20 rounded-[3rem] border border-slate-200 bg-gradient-to-br from-slate-50/60 to-white/80 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.03)] overflow-hidden">
          {/* Subtle neon blue accent lines */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

          <RevealLine>
            <span className="text-primary font-mono text-xs md:text-sm tracking-[0.35em] uppercase mb-4 block font-bold">
              Looking Forward
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-10 uppercase leading-none">
              Our Vision
            </h2>
          </RevealLine>
          <div className="space-y-8 text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">A More Proactive Future for Trial Retention</h3>
            <p>We believe clinical trial retention should be proactive, coordinated, and data-informed.</p>
            <p>The future of retention will not depend only on reminders or late-stage escalation. It will depend on earlier signals, better workflows, and clearer operational visibility.</p>
            <p>CliniLink is building toward that future.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA (MAGNETIC BUTTONS) */}
      <section className="py-32 text-center px-6 relative z-10 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <RevealLine>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase">
              Partner With Us to Improve Trial Retention
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              We are looking to work with clinical research partners who want to improve participant engagement, reduce avoidable dropout, and create more proactive retention workflows.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-6 flex flex-col items-center justify-center gap-6 w-full">
            <SubscribeForm
              buttonText="Let's Connect"
              containerClassName="w-full max-w-2xl mx-auto"
              inputClassName="flex-1 w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-none text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-0 transition-all font-medium"
              buttonClassName="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-none font-bold text-sm tracking-wide uppercase hover:bg-blue-600 transition-all duration-500 inline-flex items-center justify-center group relative overflow-hidden shrink-0"
            />
            <button onClick={() => window.open('https://calendly.com/pkshah-zsk7', '_blank')} className="px-10 py-5 bg-transparent text-slate-900 rounded-none font-bold text-base tracking-wide uppercase hover:text-blue-600 border-2 border-slate-900 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3">
              Schedule a Demo
            </button>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}

/* ────────── SUB-COMPONENTS ────────── */

function TimelineSection({ tag, title, rightTitle, paragraphs }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative py-12">
      {/* Left Column (Sticky Title) */}
      <div className="lg:col-span-4 lg:sticky lg:top-36 h-fit z-10">
        <span className="text-primary font-mono text-xs md:text-sm tracking-[0.35em] uppercase mb-3 block font-bold">
          {tag}
        </span>
        <RevealLine>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
            {title}
          </h2>
        </RevealLine>
      </div>

      {/* Right Column (Scroll Timeline & Text) */}
      <div className="lg:col-span-8 relative pl-8 sm:pl-12">
        {/* Timeline Line */}
        <div className="absolute left-3 sm:left-4 top-4 bottom-4 w-[2px] bg-slate-200/80 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="w-full h-full bg-gradient-to-b from-blue-500 to-sky-400"
          />
        </div>

        {/* Paragraph blocks */}
        <div className="space-y-16">
          {rightTitle && (
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
              {rightTitle}
            </h3>
          )}
          {paragraphs.map((p, idx) => {
            return (
              <TimelineParagraph key={idx} text={p} index={idx} total={paragraphs.length} progress={scrollYProgress} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function TimelineWord({ word, index, totalWords, startRange, endRange, progress }) {
  const wordStart = startRange + (index / totalWords) * (endRange - startRange)
  const wordEnd = startRange + ((index + 1) / totalWords) * (endRange - startRange)
  const wordMid = (wordStart + wordEnd) / 2

  const color = useTransform(
    progress,
    [wordStart - 0.01, wordMid, wordEnd + 0.01],
    ["rgb(148, 163, 184)", "rgb(59, 130, 246)", "rgb(15, 23, 42)"]
  )

  return (
    <motion.span style={{ color }} className="inline-block">
      {word}
    </motion.span>
  )
}

function TimelineParagraph({ text, index, total, progress }) {
  const isObject = typeof text === 'object'
  const title = isObject ? text.title : null
  const content = isObject ? text.text : text
  const words = content.split(" ")

  // Calculate activation range based on parent scroll progress
  const startRange = index / total
  const endRange = (index + 0.8) / total

  const dotBg = useTransform(progress, [startRange, endRange], ["#cbd5e1", "#3b82f6"])
  const dotScale = useTransform(progress, [startRange, endRange], [1, 1.25])
  const dotGlow = useTransform(progress, [startRange, endRange], ["rgba(59,130,246,0)", "rgba(59,130,246,0.3)"])

  // Smooth paragraph translation (slide right when active)
  const activePercent = useTransform(progress, [startRange - 0.05, (startRange + endRange) / 2, endRange + 0.05], [0, 1, 0])
  const x = useTransform(activePercent, [0, 1], [0, 8])
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 })

  return (
    <motion.div
      style={{ x: smoothX }}
      className="relative flex flex-col gap-2 group transition-all duration-300"
    >
      {/* Timeline Dot Indicator */}
      <motion.div
        style={{
          backgroundColor: dotBg,
          scale: dotScale,
          boxShadow: `0 0 16px ${dotGlow}`
        }}
        className="absolute -left-[37px] sm:-left-[53px] top-2.5 w-4 h-4 rounded-full border-4 border-white z-20 transition-all duration-300"
      />

      {title && (
        <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6">
          {title}
        </h4>
      )}

      {/* Paragraph Text with Word-by-Word Smooth Highlight */}
      <p className="text-xl sm:text-2xl font-semibold leading-relaxed flex flex-wrap gap-x-[6px] gap-y-1">
        {words.map((word, i) => {
          if (word === '<br>') return <div key={i} className="basis-full h-4" />;
          return (
            <TimelineWord
              key={i}
              word={word}
              index={i}
              totalWords={words.length}
              startRange={startRange}
              endRange={endRange}
              progress={progress}
            />
          )
        })}
      </p>
    </motion.div>
  )
}

function FocusAreaCard({ area, index }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-slate-800/80 p-10 transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-blue-500/5 group cursor-default"
    >
      {/* Cursor spotlight glow */}
      <div
        className="absolute pointer-events-none rounded-full transition-opacity duration-300"
        style={{
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          left: `${coords.x - 125}px`,
          top: `${coords.y - 125}px`,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Decorative Index number in corner */}
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-800 font-extrabold select-none transition-colors duration-500 group-hover:text-blue-500/20">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="flex items-start gap-3 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 flex-shrink-0" />
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors duration-300">
          {area.title}
        </h3>
      </div>
      <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mb-4 pl-4.5">
        CLINILINK CAPABILITY
      </p>
      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 pl-4.5">
        {area.desc}
      </p>
    </div>
  )
}

// FounderCard removed (no longer used) i am