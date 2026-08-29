import React from 'react';

export default function SpaceBackdrop({ active, mousePos = { x: 0, y: 0 } }) {
  // Smooth parallax translation calculation (opposite to cursor movement)
  const parallaxX = (mousePos.x || 0) * -32;
  const parallaxY = (mousePos.y || 0) * -18;

  return (
    <div
      className={`circuit-backdrop ${active ? 'visible' : ''}`}
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
      {/* 1. High-Definition Macro Circuitry / PCB Hardware Backdrop (Brightened & Vivid) */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          backgroundImage: "url('/circuit-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
          filter: 'brightness(1.18) contrast(1.12) saturate(1.1)'
        }}
      />

      {/* 2. Soft Neutral Vignette to preserve foreground card readability while keeping circuitry bright */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 38%, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.45) 55%, rgba(0, 0, 0, 0.85) 90%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75))
          `
        }}
      />

      {/* 3. Subtle Clean Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.5
        }}
      />
    </div>
  );
}
