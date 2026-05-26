import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    title: "Patient dropout delays trials.",
    description: "The hidden cost of clinical research is participant attrition. When you lose patients, you lose time, data integrity, and capital.",
    color: "bg-slate-900",
    textColor: "text-white"
  },
  {
    title: "85% of Trials Delayed",
    description: "Missing endpoints is expensive. Stop the bleeding before it starts with predictive signals and automated workflows.",
    color: "bg-rose-600",
    textColor: "text-white"
  },
  {
    title: "$8M+ Lost Revenue",
    description: "Every day a trial is delayed costs millions. Retention intelligence turns passive monitoring into proactive intervention.",
    color: "bg-blue-600",
    textColor: "text-white"
  }
];

export default function CardStackSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative bg-slate-50 h-[300vh] py-20 border-y border-slate-200">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        <div className="relative w-full h-[500px]">
          {cards.map((card, i) => {
            const targetScale = 1 - ((cards.length - i) * 0.04);
            return (
              <Card 
                key={i} 
                i={i} 
                card={card} 
                progress={scrollYProgress} 
                range={[i * 0.33, 1]} 
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Card({ i, card, progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Calculate the y slide up animation for each card
  const slideUpStart = Math.max(0, i * 0.33 - 0.1);
  const slideUpEnd = i * 0.33;
  const slideUpRange = [slideUpStart, slideUpEnd];
  const y = useTransform(progress, slideUpRange, ['100vh', '0vh']);
  
  // First card doesn't slide up, it's just there
  const yValue = i === 0 ? '0vh' : y;

  return (
    <motion.div
      style={{ 
        x: "-50%",
        scale, 
        y: yValue, 
        top: `${i * 30}px`,
        transformOrigin: "top center"
      }}
      className={`absolute w-full max-w-5xl h-[450px] p-12 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${card.color} ${card.textColor} left-1/2 flex flex-col justify-center will-change-transform`}
    >
      <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">{card.title}</h2>
      <p className="text-xl md:text-3xl font-medium opacity-90 max-w-3xl leading-relaxed">{card.description}</p>
    </motion.div>
  );
}
