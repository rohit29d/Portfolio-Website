import React, { useMemo } from 'react';

export default function SpaceBackdrop({ active, mousePos = { x: 0, y: 0 } }) {
  // Deterministic static stars overlay
  const stars = useMemo(() => {
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const count = 75;
    const starList = [];
    for (let i = 0; i < count; i++) {
      const x = parseFloat((random() * 100).toFixed(2));
      const y = parseFloat((random() * 100).toFixed(2));
      const r = parseFloat((random() * 1.0 + 0.5).toFixed(2));
      const opacity = parseFloat((random() * 0.55 + 0.15).toFixed(2));
      starList.push({ id: i, x, y, r, opacity });
    }
    return starList;
  }, []);

  // Subtle parallax translation calculation (translates opposite to cursor)
  const parallaxX = (mousePos.x || 0) * -28;
  const parallaxY = (mousePos.y || 0) * -16;

  return (
    <div
      className={`space-backdrop ${active ? 'visible' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: active ? 1 : 0,
        transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        overflow: 'hidden',
        backgroundColor: '#05070a'
      }}
    >
      {/* 1. Real Deep-Field Astrophotography Backdrop Layer (140% viewport size for parallax pan) */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          backgroundImage: "url('/space-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
          filter: 'brightness(0.85) contrast(1.1)'
        }}
      />

      {/* 2. Matte Slate-Blue Astrophotography Color Grade Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 35%, rgba(125, 171, 196, 0.12) 0%, rgba(11, 15, 24, 0.65) 50%, rgba(5, 7, 11, 0.92) 85%),
            linear-gradient(to bottom, rgba(11, 13, 18, 0.55), rgba(7, 9, 14, 0.85))
          `
        }}
      />

      {/* 3. Soft Muted Galaxy / Nebulae Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 600px 400px at 20% 30%, rgba(125, 171, 196, 0.09) 0%, transparent 70%),
            radial-gradient(ellipse 650px 450px at 80% 65%, rgba(115, 95, 150, 0.07) 0%, transparent 70%)
          `
        }}
      />

      {/* 4. Fine Foreground Starfield SVG Overlay */}
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
            fill="#dbeafe"
            opacity={star.opacity}
          />
        ))}
      </svg>

      {/* 5. Thinned PCB Dot-Grid Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.4
        }}
      />
    </div>
  );
}
