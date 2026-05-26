import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ExpandOnHover({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-[600px] gap-4 px-6 max-w-7xl mx-auto">
      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;

        return (
          <motion.div
            key={i}
            onHoverStart={() => setHoveredIndex(i)}
            layout
            initial={{ borderRadius: "2rem" }}
            animate={{
              flex: isHovered ? 5 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative overflow-hidden cursor-pointer group flex-1 min-w-[80px]"
            style={{ borderRadius: "2rem" }}
          >
            <motion.img 
              src={item.img} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.05 : 1.1,
                filter: isHovered ? "grayscale(0%) brightness(100%)" : "grayscale(30%) brightness(70%)",
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Gradient Overlay for text readability */}
            <motion.div 
              animate={{
                opacity: isHovered ? 0.9 : 0.6
              }}
              className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent pointer-events-none transition-opacity duration-500" 
            />
            
            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
              <motion.div 
                layout="position"
                className="flex flex-col gap-3"
              >
                {/* Header Row: Badge Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md shrink-0 border border-white/10 shadow-lg">
                    {item.icon ? (
                      <item.icon size={22} className="text-white" />
                    ) : (
                      <span className="text-white font-bold">{i + 1}</span>
                    )}
                  </div>
                  
                  <div className="overflow-hidden">
                    <motion.h3 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl md:text-3xl font-black text-white whitespace-nowrap"
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </div>

                {/* Description */}
                <div className="overflow-hidden">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isHovered ? 0.9 : 0,
                      y: isHovered ? 0 : 10,
                    }}
                    transition={{ duration: 0.4, delay: isHovered ? 0.05 : 0 }}
                    className="text-sm md:text-base text-slate-200 max-w-lg font-medium leading-relaxed"
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
