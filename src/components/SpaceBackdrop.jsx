import React, { useMemo } from 'react';

export default function SpaceBackdrop({ active, mousePos = { x: 0, y: 0 } }) {
  // Deterministic static stars overlay
  const stars = useMemo(() => {
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const count = 70;
    const starList = [];
    for (let i = 0; i < count; i++) {
      const x = parseFloat((random() * 100).toFixed(2));
      const y = parseFloat((random() * 100).toFixed(2));
      const r = parseFloat((random() * 1.0 + 0.5).toFixed(2));
      const opacity = parseFloat((random() * 0.5 + 0.15).toFixed(2));
      starList.push({ id: i, x, y, r, opacity });
    }
    return starList;
  }, []);

  // Smooth parallax translation calculation (opposite to cursor)
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
        backgroundColor: '#000000'
      }}
    >
      {/* 1. Real NASA Hubble Ultra Deep Field Backdrop Layer (140% viewport size for parallax pan) */}
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
          filter: 'brightness(0.9) contrast(1.15)'
        }}
      />

      {/* 2. Pure Black Cosmic Vignette Overlay (Eliminating bluish tint) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 35%, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.75) 60%, rgba(0, 0, 0, 0.95) 90%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.85))
          `
        }}
      />

      {/* 3. Fine Neutral Foreground Starfield SVG Overlay */}
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
            fill="#ffffff"
            opacity={star.opacity}
          />
        ))}
      </svg>

      {/* 4. Thinned PCB Dot-Grid Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.025) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.35
        }}
      />
    </div>
  );
}
