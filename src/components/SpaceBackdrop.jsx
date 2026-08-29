import React, { useMemo } from 'react';

export default function SpaceBackdrop({ active }) {
  // Generate a deterministic static set of stars once (no runtime overhead, no layout shifts)
  const stars = useMemo(() => {
    // Deterministic pseudo-random seed generator for consistent rendering
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const count = 90;
    const starList = [];
    for (let i = 0; i < count; i++) {
      const x = parseFloat((random() * 100).toFixed(2));
      const y = parseFloat((random() * 100).toFixed(2));
      const r = parseFloat((random() * 1.1 + 0.6).toFixed(2));
      const opacity = parseFloat((random() * 0.65 + 0.2).toFixed(2));
      starList.push({ id: i, x, y, r, opacity });
    }
    return starList;
  }, []);

  return (
    <div
      className={`space-backdrop ${active ? 'visible' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: active ? 1 : 0,
        transition: 'opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        overflow: 'hidden'
      }}
    >
      {/* 1. Deep Space Base Layer with Soft Nebulae */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 650px 450px at 18% 30%, rgba(95, 140, 175, 0.08) 0%, rgba(50, 85, 120, 0.03) 45%, transparent 75%),
            radial-gradient(ellipse 700px 500px at 82% 65%, rgba(115, 95, 150, 0.07) 0%, rgba(65, 55, 105, 0.02) 45%, transparent 75%),
            radial-gradient(circle at 50% 35%, rgba(18, 24, 36, 0.75) 0%, rgba(7, 9, 14, 0.96) 80%)
          `
        }}
      />

      {/* 2. Static Pre-rendered Starfield SVG */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%'
        }}
      >
        {stars.map((star) => (
          <circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.r}
            fill="#e2e8f0"
            opacity={star.opacity}
          />
        ))}
      </svg>

      {/* 3. Thinned Subtle PCB Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.6
        }}
      />
    </div>
  );
}
