import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    tag: "AI Prediction",
    title: "Risk scoring",
    desc: "AI models identify participants at elevated risk of dropout before it affects trial progress.",
    img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Predictive risk signals",
      "Historical behavior model",
      "Custom risk thresholds",
      "Live score updates"
    ]
  },
  {
    tag: "Outreach Automation",
    title: "Workflow automation",
    desc: "Trigger automated personalized outreach workflows across email, SMS, and messaging channels.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Automated communication",
      "Site escalation alerts",
      "Coordinator notification",
      "Standardized protocols"
    ]
  },
  {
    tag: "Site Management",
    title: "Site oversight",
    desc: "Empower research sites and coordinators with centralized visibility, reducing administrative burden.",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Multi-site dashboard",
      "Coordinator workflow tools",
      "Site-level compliance",
      "Performance tracking"
    ]
  },
  {
    tag: "Patient Engagement",
    title: "Engagement tracking",
    desc: "Continuously monitor participant interaction levels, diaries, and communication responses.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Real-time engagement feed",
      "Communication analytics",
      "Response tracking",
      "Adherence alerts"
    ]
  },
  {
    tag: "Chronological Record",
    title: "Participant timelines",
    desc: "Visualize the entire participant history, milestone completion progress, and touchpoints.",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Interactive journey map",
      "Visit history tracking",
      "Milestone predictions",
      "Engagement history"
    ]
  },
  {
    tag: "Performance Insights",
    title: "Reporting visibility",
    desc: "Provide sponsors and CROs with portfolio-level retention dashboards and exportable audit-ready data.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Portfolio analytics",
      "Exportable trial reports",
      "Audit trail log",
      "Real-time analytics pipelines"
    ]
  }
];

export default function StickyScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when the item is center-aligned in the viewport
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      // If we are currently executing a programmatic click-to-scroll, let that finish without manual updates
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index"), 10);
          if (!isNaN(index)) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll("[data-scroll-item]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (index) => {
    isScrollingRef.current = true;
    setActiveIndex(index);

    const targetEl = document.getElementById(`feature-card-${index}`);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

    // Release observer block after smooth scroll completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <section className="relative bg-slate-950 text-white w-full py-24 px-6 md:px-12 lg:px-24 border-y border-slate-900" id="platform">
      {/* Background ambient glow matching premium theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: STICKY TITLE & STEP NAVIGATION */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-[calc(100vh-200px)] flex flex-col justify-between py-4">
          <div>
            <span className="text-primary font-mono text-xs md:text-sm tracking-[0.35em] uppercase mb-4 font-bold block">
              Platform Snapshot
            </span>
            <div className="space-y-1">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none uppercase">
                Operational
              </h2>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-500 leading-none uppercase">
                Retention
              </h2>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none uppercase">
                Intelligence
              </h2>
            </div>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-6 max-w-sm font-medium">
              Operational retention intelligence in one centralized platform.
            </p>
          </div>

          {/* STEP INDICATORS (Matching the visual style from reference image 2) */}
          <div className="flex flex-col gap-5 mt-12 lg:mt-0">
            {items.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => scrollToSection(idx)}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <span
                    className={`font-mono text-xs transition-all duration-300 tracking-wider ${
                      isActive ? "text-white font-extrabold" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  
                  {/* Indicator Line with width animation */}
                  <div
                    className={`h-[1.5px] transition-all duration-500 rounded-full ${
                      isActive
                        ? "w-16 bg-gradient-to-r from-blue-500 to-sky-400"
                        : "w-4 bg-slate-800 group-hover:bg-slate-700"
                    }`}
                  />
                  
                  {/* Optional short label that fades in/out for premium experience */}
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-500 ${
                      isActive
                        ? "text-blue-400 opacity-100 translate-x-0"
                        : "text-slate-600 opacity-0 -translate-x-2 pointer-events-none"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLABLE FEATURE CARDS */}
        <div className="lg:col-span-7 flex flex-col">
          {items.map((item, idx) => (
            <div
              key={idx}
              id={`feature-card-${idx}`}
              data-scroll-item
              data-index={idx}
              className={`border-t border-slate-900/60 pt-20 pb-20 lg:pb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-opacity duration-700 ${
                activeIndex === idx ? "opacity-100" : "opacity-40"
              }`}
            >
              {/* Feature Details Content (Left inside card) */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <span className="text-6xl font-black text-blue-500/5 font-mono mb-4 block select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-blue-400 font-mono tracking-[0.2em] uppercase mb-2 font-bold">
                  {item.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>

                {/* Bullets Grid (checked options matching reference) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10 shrink-0">
                        <svg
                          className="w-2.5 h-2.5 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase leading-none">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Image Mockup (Right inside card) */}
              <div className="md:col-span-5">
                <div className="relative group/img overflow-hidden rounded-2xl aspect-[4/3] w-full shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-slate-900 bg-slate-900/20">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    draggable={false}
                  />
                  {/* Subtle vignette/gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
