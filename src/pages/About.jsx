import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Users2 } from 'lucide-react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import HoverButton from '../components/ui/HoverButton'
import InteractiveGrid from '../components/ui/InteractiveGrid'

export default function About() {
  const containerRef = useRef(null)
  const foundersRef = useRef(null)

  const { scrollYProgress: foundersProgressRaw } = useScroll({
    target: foundersRef,
    offset: ['start start', 'end end']
  })

  const foundersProgress = useSpring(foundersProgressRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const img1Opacity = useTransform(foundersProgress, [0, 0.45, 0.55, 1], [1, 1, 0, 0])
  const img1Scale = useTransform(foundersProgress, [0, 0.45, 0.55, 1], [1, 1, 1.05, 1.05])

  const img2Opacity = useTransform(foundersProgress, [0, 0.45, 0.55, 1], [0, 0, 1, 1])
  const img2Scale = useTransform(foundersProgress, [0, 0.45, 0.55, 1], [1.05, 1.05, 1, 1])

  const box1Opacity = useTransform(foundersProgress, [0, 0.08, 0.42, 0.5], [0, 1, 1, 0])
  const box1Y = useTransform(foundersProgress, [0, 0.08, 0.42, 0.5], [50, 0, 0, -50])

  const box2Opacity = useTransform(foundersProgress, [0.5, 0.58, 1], [0, 1, 1])
  const box2Y = useTransform(foundersProgress, [0.5, 0.58, 1], [50, 0, 0])

  const focusAreas = [
    "Participant Engagement",
    "Retention Operations",
    "Workflow Coordination",
    "Operational Visibility",
    "Study Continuity",
    "Clinical Trial Support"
  ]

  const whyParagraphs = [
    "Participant disengagement is a persistent challenge in clinical research.",
    "Missed visits and delayed follow-ups impact study continuity and increase costs.",
    "CliniLink helps trial teams gain visibility into engagement and proactively manage retention."
  ]

  const approachParagraphs = [
    "Retention requires more than isolated communication tools.",
    "Trials need centralized workflows, visibility, and coordinated management to support teams and participants.",
    "CliniLink unifies engagement, coordination, and operational support into one platform."
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
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
          </div>

          {/* Right: Image Composition */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[80px]" />

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute top-10 right-10 w-[80%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Laboratory" className="w-full h-full object-cover grayscale-[10%]" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-10 left-0 w-[60%] aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20"
            >
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" alt="Team" className="w-full h-full object-cover grayscale-[10%]" />
            </motion.div>

            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute top-12 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-30 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Users2 className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dedicated</p>
                <p className="text-lg font-black text-slate-900 leading-tight">Study Teams</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 1 - WHY WE EXIST (TIMELINE LAYOUT) */}
      <section className="py-24 px-6 md:px-12 bg-slate-50/50 relative z-10">
        <TimelineSection
          tag="Why CliniLink"
          title="Why We Exist"
          paragraphs={whyParagraphs}
        />
      </section>

      {/* SECTION 2 - OUR APPROACH (TIMELINE LAYOUT) */}
      <section className="py-24 px-6 md:px-12 bg-white relative z-10">
        <TimelineSection
          tag="Our Approach"
          title="How We Work"
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
              Core Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-white">
              Our Focus Areas
            </h2>
          </RevealLine>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <FocusAreaCard key={i} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - LEADERSHIP / FOUNDERS (CINEMATIC STICKY WIPE) */}
      <section className="relative z-10 bg-black" ref={foundersRef} style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* Background Image 1 (Dr. James) */}
          <motion.div
            style={{ opacity: img1Opacity, willChange: 'opacity' }}
            className="absolute inset-0 z-0 bg-[#0a0a0a]"
          >
            <motion.img
              style={{ scale: img1Scale, willChange: 'transform' }}
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1920&q=80"
              alt="Dr. James Founder"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-60 grayscale-[10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />
          </motion.div>

          {/* Background Image 2 (Sarah) */}
          <motion.div
            style={{ opacity: img2Opacity, willChange: 'opacity' }}
            className="absolute inset-0 z-0 bg-[#0a0a0a]"
          >
            <motion.img
              style={{ scale: img2Scale, willChange: 'transform' }}
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1920&q=80"
              alt="Sarah Technical"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-60 grayscale-[10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />
          </motion.div>

          {/* Sticky Section Heading */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
            <span className="text-blue-500 font-mono text-xs md:text-sm tracking-[0.35em] uppercase mb-2 block font-bold">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-none">
              Leadership
            </h2>
          </div>

          {/* Details Box 1 (Dr. James) - Left Bottom */}
          <motion.div
            style={{ opacity: box1Opacity, y: box1Y, willChange: 'transform, opacity' }}
            className="absolute left-6 md:left-24 bottom-6 md:bottom-24 max-w-[calc(100vw-3rem)] sm:max-w-md bg-black/45 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl text-left shadow-2xl z-10"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 uppercase">
              Dr. James Founder
            </h3>
            <p className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 font-mono">
              Co-Founder & CEO
            </p>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Focused on improving engagement and retention workflows through modern technology.
            </p>
          </motion.div>

          {/* Details Box 2 (Sarah) - Right Bottom */}
          <motion.div
            style={{ opacity: box2Opacity, y: box2Y, willChange: 'transform, opacity' }}
            className="absolute right-6 md:right-24 bottom-6 md:bottom-24 max-w-[calc(100vw-3rem)] sm:max-w-md bg-black/45 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl text-left shadow-2xl z-10"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 uppercase">
              Sarah Technical
            </h3>
            <p className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 font-mono">
              Co-Founder & CTO
            </p>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Bringing over a decade of experience to build secure platforms for clinical trials.
            </p>
          </motion.div>

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
            <p>The future of trial retention relies on proactive engagement, coordination, and visibility.</p>
            <p>CliniLink builds infrastructure for connected, efficient retention operations.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA (MAGNETIC BUTTONS) */}
      <section className="py-32 text-center px-6 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase">
              Learn More About CliniLink
            </h2>
          </RevealLine>
          <FadeIn delay={0.4} className="pt-6 flex justify-center">
            <HoverButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-primary transition-all duration-500 shadow-[0_20px_50px_rgba(15,23,42,0.15)] inline-flex group relative overflow-hidden">
              <span className="flex items-center gap-3 relative z-10">
                Book a Demo <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>

            </HoverButton>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}

/* ────────── SUB-COMPONENTS ────────── */

function TimelineSection({ tag, title, paragraphs }) {
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
  const words = text.split(" ")

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

      {/* Paragraph Text with Word-by-Word Smooth Highlight */}
      <p className="text-xl sm:text-2xl font-semibold leading-relaxed flex flex-wrap gap-x-[6px] gap-y-1">
        {words.map((word, i) => (
          <TimelineWord
            key={i}
            word={word}
            index={i}
            totalWords={words.length}
            startRange={startRange}
            endRange={endRange}
            progress={progress}
          />
        ))}
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
      className="relative overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-slate-800/80 p-10 transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/5 group cursor-default"
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

      <div className="flex items-center gap-3 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors duration-300">
          {area}
        </h3>
      </div>
      <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
        CLINILINK CAPABILITY
      </p>
    </div>
  )
}

// FounderCard removed (no longer used) i am