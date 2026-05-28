import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SPRING = { stiffness: 55, damping: 22, mass: 1 };

export default function FloatingGallery({ items }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Buttery smooth spring-wrapped progress
  const p = useSpring(scrollYProgress, SPRING);

  // ─────────────────────────────────────────────
  // WAVE 1  — images 0 & 1  (scroll 0 → 0.33)
  //   Enter:   0.00 → 0.14
  //   Hold:    0.14 → 0.24
  //   Exit ↑:  0.24 → 0.35
  // ─────────────────────────────────────────────
  // Image 0 – bottom-left origin
  const y0 = useTransform(p, [0, 0.14, 0.24, 0.36], ["120vh", "0vh", "0vh", "-120vh"]);
  const x0 = useTransform(p, [0, 0.14], ["-8vw", "0vw"]);
  const op0 = useTransform(p, [0, 0.06, 0.28, 0.36], [0, 1, 1, 0]);
  const scale0 = useTransform(p, [0, 0.14, 0.24, 0.36], [0.85, 1, 1, 0.9]);

  // Image 1 – bottom-right origin
  const y1 = useTransform(p, [0.03, 0.16, 0.24, 0.36], ["120vh", "0vh", "0vh", "-120vh"]);
  const x1 = useTransform(p, [0.03, 0.16], ["8vw", "0vw"]);
  const op1 = useTransform(p, [0.03, 0.09, 0.28, 0.36], [0, 1, 1, 0]);
  const scale1 = useTransform(p, [0.03, 0.16, 0.24, 0.36], [0.85, 1, 1, 0.9]);

  // ─────────────────────────────────────────────
  // WAVE 2  — images 2 & 3  (scroll 0.30 → 0.65)
  //   Enter:   0.33 → 0.47
  //   Hold:    0.47 → 0.56
  //   Exit ↑:  0.56 → 0.67
  // ─────────────────────────────────────────────
  // Image 2 – bottom-center-left origin
  const y2 = useTransform(p, [0.33, 0.47, 0.56, 0.67], ["120vh", "0vh", "0vh", "-120vh"]);
  const x2 = useTransform(p, [0.33, 0.47], ["-5vw", "0vw"]);
  const op2 = useTransform(p, [0.33, 0.40, 0.60, 0.67], [0, 1, 1, 0]);
  const scale2 = useTransform(p, [0.33, 0.47, 0.56, 0.67], [0.85, 1, 1, 0.9]);

  // Image 3 – bottom-center-right origin
  const y3 = useTransform(p, [0.36, 0.50, 0.56, 0.67], ["120vh", "0vh", "0vh", "-120vh"]);
  const x3 = useTransform(p, [0.36, 0.50], ["5vw", "0vw"]);
  const op3 = useTransform(p, [0.36, 0.43, 0.60, 0.67], [0, 1, 1, 0]);
  const scale3 = useTransform(p, [0.36, 0.50, 0.56, 0.67], [0.85, 1, 1, 0.9]);

  // ─────────────────────────────────────────────
  // WAVE 3  — images 4 & 5  (scroll 0.64 → 1.0)
  //   Enter:   0.65 → 0.80
  //   Hold:    0.80 → 1.00  (stays — section ends)
  // ─────────────────────────────────────────────
  // Image 4 – bottom-far-left origin
  const y4 = useTransform(p, [0.65, 0.82], ["120vh", "0vh"]);
  const x4 = useTransform(p, [0.65, 0.82], ["-10vw", "0vw"]);
  const op4 = useTransform(p, [0.65, 0.73], [0, 1]);
  const scale4 = useTransform(p, [0.65, 0.82], [0.85, 1]);

  // Image 5 – bottom-far-right origin
  const y5 = useTransform(p, [0.68, 0.84], ["120vh", "0vh"]);
  const x5 = useTransform(p, [0.68, 0.84], ["10vw", "0vw"]);
  const op5 = useTransform(p, [0.68, 0.76], [0, 1]);
  const scale5 = useTransform(p, [0.68, 0.84], [0.85, 1]);

  // ─────────────────────────────────────────────
  // TITLE — fades in immediately, stays throughout
  const titleOp = useTransform(p, [0, 0.08], [0, 1]);
  const titleY = useTransform(p, [0, 0.08], ["40px", "0px"]);

  // Wave label — different text per wave
  const labelOp0 = useTransform(p, [0, 0.06, 0.28, 0.36], [0, 1, 1, 0]);
  const labelOp1 = useTransform(p, [0.33, 0.40, 0.60, 0.67], [0, 1, 1, 0]);
  const labelOp2 = useTransform(p, [0.65, 0.73], [0, 1]);

  // Scroll hint
  const hintOp = useTransform(p, [0, 0.05], [1, 0]);

  const waves = [
    { label: "Predictive Intelligence", labelOp: labelOp0 },
    { label: "Automated Workflows", labelOp: labelOp1 },
    { label: "Global Compliance", labelOp: labelOp2 },
  ];

  // Per-image motion values
  const motions = [
    { x: x0, y: y0, op: op0, scale: scale0 },
    { x: x1, y: y1, op: op1, scale: scale1 },
    { x: x2, y: y2, op: op2, scale: scale2 },
    { x: x3, y: y3, op: op3, scale: scale3 },
    { x: x4, y: y4, op: op4, scale: scale4 },
    { x: x5, y: y5, op: op5, scale: scale5 },
  ];

  // Final resting positions — top = (100% - height) / 2 so each image is vertically centered
  const layouts = [
    // Wave 1  (42vh → top 29%,  50vh → top 25%)
    { left: "5%", top: "29%", width: "30vw", height: "42vh", rotate: -2 },
    { right: "5%", top: "25%", width: "26vw", height: "50vh", rotate: 2.5 },
    // Wave 2  (45vh → top 27%,  40vh → top 30%)
    { left: "8%", top: "27%", width: "28vw", height: "45vh", rotate: 1.5 },
    { right: "7%", top: "30%", width: "32vw", height: "40vh", rotate: -2 },
    // Wave 3  (46vh → top 27%,  42vh → top 29%)
    { left: "6%", top: "27%", width: "26vw", height: "46vh", rotate: -1.5 },
    { right: "4%", top: "29%", width: "30vw", height: "42vh", rotate: 2 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-slate-950"
      style={{ height: "550vh" }}
      id="platform"
    >
      {/* ── STICKY CANVAS ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(14,165,233,0.07)_0%,transparent_70%)] pointer-events-none" />

        {/* ── CENTERED TITLE ── */}
        <motion.div
          style={{ opacity: titleOp, y: titleY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-6 text-center"
        >
          <p className="text-primary/70 font-mono text-xs md:text-sm tracking-[0.35em] uppercase mb-5 font-bold">
            Platform Capabilities
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-white leading-[0.88] uppercase">
            The Science<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-300 to-secondary">
              of Retention
            </span>
          </h2>

          {/* Dynamic wave label — switches between the 3 waves */}
          {waves.map((w, i) => (
            <motion.p
              key={i}
              style={{ opacity: w.labelOp }}
              className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-lg md:text-2xl font-bold text-white/80 tracking-widest uppercase font-mono whitespace-nowrap"
            >
              {w.label}
            </motion.p>
          ))}
        </motion.div>

        {/* ── IMAGE TILES ── */}
        {items.slice(0, 6).map((item, i) => {
          const m = motions[i];
          const l = layouts[i];
          return (
            <motion.div
              key={i}
              style={{
                x: m.x,
                y: m.y,
                opacity: m.op,
                scale: m.scale,
                rotate: l.rotate,
                left: l.left,
                right: l.right,
                top: l.top,
                width: l.width,
                height: l.height,
                position: "absolute",
                willChange: "transform, opacity",
              }}
              className="overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Hover caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-white text-xs font-black uppercase tracking-widest">
                  {item.title}
                </p>
              </div>
            </motion.div>
          );
        })}


      </div>
    </section>
  );
}
