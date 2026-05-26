import { ArrowRight, BookOpen, FileText, Video, Download } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealLine } from '../components/animations/RevealLine'
import { FadeIn } from '../components/animations/FadeIn'
import MagneticButton from '../components/ui/MagneticButton'

export default function Resources() {
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

  return (
    <main className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto text-center border-b border-slate-100 relative z-10 bg-white">
        <div className="space-y-6 max-w-4xl mx-auto">
          <RevealLine>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Clinical Trial Retention Insights & Resources
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Explore perspectives, operational insights, and educational resources focused on participant engagement, retention management, and modern clinical trial operations.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="pt-8">
            <MagneticButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-2xl inline-flex group">
              <span className="flex items-center gap-2">Subscribe for Updates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1 - FEATURED INSIGHTS */}
      <section className="py-40 px-6 max-w-7xl mx-auto relative z-10 bg-white">
        <RevealLine className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-4">
            <BookOpen className="text-primary" size={40} /> Featured Insights
          </h2>
        </RevealLine>
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, i) => (
            <FadeIn key={i} delay={0.1 * i} className="group cursor-pointer">
              <div className="p-10 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <span className="inline-flex text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Insight</span>
                  <h3 className="text-3xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300">{insight.title}</h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">{insight.desc}</p>
                </div>
                <div className="mt-12 flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SECTION 2 - RESOURCE CATEGORIES */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto">
          <RevealLine className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Browse by Category</h2>
          </RevealLine>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <button className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 transform-gpu">
                  {cat}
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - THOUGHT LEADERSHIP */}
      <section className="py-40 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 relative z-10 bg-white">
        <div className="lg:col-span-1 space-y-6">
          <RevealLine>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">Perspectives on Modern Retention Operations</h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Conference participation, webinars, founder insights, operational commentary, and industry observations.
            </p>
          </FadeIn>
        </div>
        <div className="lg:col-span-2 space-y-6">
          {thoughtLeadership.map((item, i) => (
            <FadeIn key={i} delay={0.1 * i} className="group flex items-center gap-6 p-8 rounded-3xl border border-slate-200 hover:border-primary/30 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Video size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item}</h3>
              <ArrowRight className="ml-auto text-slate-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" size={24} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SECTION 4 & 5 - CASE STUDIES & DOWNLOADS */}
      <section className="py-40 px-6 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <FadeIn delay={0.2} className="bg-slate-800 rounded-3xl p-12 border border-slate-700 hover:bg-slate-800/80 hover:border-slate-600 transition-colors duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none transform-gpu origin-top-right">
              <FileText size={200} />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black tracking-tight mb-6">Case Studies & Operational Learnings</h2>
              <p className="text-slate-400 font-medium text-xl mb-12 leading-relaxed">Pilot results, workflow improvements, operational efficiencies, and engagement outcomes.</p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-bold backdrop-blur-md">
                Coming Soon
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="bg-slate-800 rounded-3xl p-12 border border-slate-700 hover:bg-slate-800/80 hover:border-slate-600 transition-colors duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none transform-gpu origin-top-right">
              <Download size={200} />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black tracking-tight mb-6">Downloadable Content</h2>
              <p className="text-slate-400 font-medium text-xl mb-12 leading-relaxed">Retention playbooks, operational checklists, sponsor guides, site workflow templates, and whitepapers.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300 font-bold hover:text-white cursor-pointer group/link hover:translate-x-2 transition-all duration-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20">
                  <Download size={24} className="text-primary" /> 
                  Retention Playbook 2026
                  <ArrowRight size={18} className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-4 text-slate-300 font-bold hover:text-white cursor-pointer group/link hover:translate-x-2 transition-all duration-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20">
                  <Download size={24} className="text-primary" /> 
                  Site Workflow Templates
                  <ArrowRight size={18} className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-40 text-center px-6 bg-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <RevealLine>
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">Stay Connected to the Future of Clinical Trial Retention</h2>
          </RevealLine>
          <FadeIn delay={0.4} className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <MagneticButton className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-slate-800 transition-colors shadow-2xl inline-flex justify-center">
              Subscribe for Updates
            </MagneticButton>
            <MagneticButton className="px-12 py-6 bg-white text-slate-900 border border-slate-200 rounded-full font-black text-xl hover:bg-slate-50 transition-colors shadow-md inline-flex justify-center group">
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
