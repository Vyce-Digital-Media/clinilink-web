import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function RollingText({ text, direction = "left", baseVelocity = 5, invert = false }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [0, -600] : [-600, 0]
  );

  return (
    <div ref={containerRef} className="flex whitespace-nowrap overflow-hidden py-4 md:py-8 lg:py-12">
      <motion.div
        style={{ x: xTranslate }}
        className="flex gap-12 md:gap-24 lg:gap-32 px-12 md:px-24"
      >
        <span className={invert ? "text-[5rem] font-black uppercase tracking-tighter text-slate-200 sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.8]" : "text-[5rem] font-black uppercase tracking-tighter text-slate-900 sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.8]"}>
          {text}
        </span>
        <span className={invert ? "text-[5rem] font-black uppercase tracking-tighter text-slate-900 sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.8]" : "text-[5rem] font-black uppercase tracking-tighter text-slate-200 sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.8]"}>
          {text}
        </span>
        <span className="text-[5rem] font-black uppercase tracking-tighter text-slate-100 sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.8]">
          {text}
        </span>
      </motion.div>
    </div>
  );
}

export default function ScrollingText() {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-16 md:py-24 lg:py-32 border-y border-slate-100">
      <div className="flex flex-col gap-0 -space-y-4 md:-space-y-8 lg:-space-y-12">
        <RollingText text="Proactive" direction="left" />
        <RollingText text="Operational" direction="right" invert />
        <RollingText text="Intelligence" direction="left" />
      </div>
      
      <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
