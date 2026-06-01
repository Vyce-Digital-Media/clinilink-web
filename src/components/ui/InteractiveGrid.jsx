import React from 'react';

export default function InteractiveGrid({ cellSize = 60, hoverColor = 'hover:bg-primary', gridColor = 'border-slate-900/10' }) {
  // A fixed large number of cells to fill any standard viewport.
  // 3000 cells is enough for up to 4K resolutions.
  const totalCells = 3000;

  return (
    <div 
      className={`absolute inset-0 w-[150vw] h-[150vh] overflow-hidden border-t border-l ${gridColor}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, ${cellSize}px)`,
        gridTemplateRows: `repeat(auto-fill, ${cellSize}px)`
      }}
    >
      {Array.from({ length: totalCells }).map((_, i) => (
        <div
          key={i}
          className={`w-full h-full border-b border-r ${gridColor} transition-colors duration-[1500ms] ease-out hover:duration-0 ${hoverColor}`}
        />
      ))}
    </div>
  );
}
