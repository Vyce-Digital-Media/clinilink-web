import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
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
    "Participant disengagement remains one of the most persistent operational challenges in clinical research.",
    "Missed visits, inconsistent communication, and delayed follow-up workflows can impact study continuity, increase operational burden, and contribute to costly trial delays.",
    "CliniLink was created to help sponsors, CROs, and research sites improve visibility into participant engagement activity and support more proactive retention operations across clinical studies."
  ]

  const approachParagraphs = [
    "We believe participant retention requires more than isolated communication tools.",
    "Modern clinical trials need centralized engagement workflows, operational visibility, and coordinated retention management designed to support both participants and study teams throughout the trial lifecycle.",
    "CliniLink combines participant engagement infrastructure, workflow coordination, and retention-focused operational support into a unified platform built for modern clinical operations."
  ]

  return (
    <main ref={containerRef} className="bg-white overflow-clip selection:bg-primary/20 selection:text-primary">

      {/* HERO SECTION WITH CELLS GRID */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-40 pb-32 px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <InteractiveGrid cellSize={60} hoverColor="hover:bg-slate-50" gridColor="border-slate-200/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white z-10" />
        </div>

        <div className="space-y-8 max-w-5xl mx-auto text-center relative z-10">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase">
              Building Better <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">
                Retention Infrastructure
              </span> <br />
              for Clinical Trials
            </h1>
          </RevealLine>
          <FadeIn delay={0.4} className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed">
              CliniLink was founded to help clinical organizations take a more proactive, coordinated, and operationally efficient approach to participant engagement and retention management.
            </p>
          </FadeIn>
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
              Focused on improving participant engagement and operational retention workflows across clinical research through technology infrastructure and modern engagement systems.
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
              Bringing over a decade of enterprise software architecture experience to build secure, HIPAA-compliant platforms for the clinical trial industry.
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
            <p>We believe the future of clinical trial retention will be driven by more proactive engagement strategies, better operational coordination, and improved visibility into participant activity throughout the study lifecycle.</p>
            <p>CliniLink is building infrastructure designed to support more connected and efficient retention operations across modern clinical research.</p>
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

// FounderCard removed (no longer used)