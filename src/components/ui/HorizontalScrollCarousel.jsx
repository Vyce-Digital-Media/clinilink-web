import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScrollCarousel({ items }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Move the container left by its entire width, minus the viewport width,
  // so the last item stops exactly at the right edge of the screen.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "calc(-100% + 100vw)"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title for this section */}
        <div className="absolute top-12 left-12 md:top-20 md:left-24 z-10 pointer-events-none">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white/10 tracking-tighter uppercase">
                Platform Capabilities
            </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-10 px-6 md:px-24 w-max">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative h-[65vh] w-[85vw] md:h-[70vh] md:w-[60vw] lg:w-[45vw] overflow-hidden rounded-3xl bg-slate-900 flex-shrink-0 border border-white/10 shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-slate-950/40 to-slate-950/95" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    {Icon && <Icon size={32} className="text-primary" />}
                  </div>
                  <h3 className="mb-4 text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl font-medium text-slate-300 max-w-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
