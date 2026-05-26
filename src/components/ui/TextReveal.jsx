import { motion, useTransform } from 'framer-motion';

export default function TextReveal({ text, progress, className = "" }) {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-2 ${className}`}>
      {words.map((word, i) => {
        // Calculate the range for this specific word
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // Use useTransform to map scroll progress to opacity for this word
        const opacity = useTransform(progress, [start, end], [0.15, 1]);

        return (
          <motion.span 
            key={i} 
            style={{ opacity }}
            className="font-black text-slate-900 tracking-tight"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}
