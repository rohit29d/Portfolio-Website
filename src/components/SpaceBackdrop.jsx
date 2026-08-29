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
      {/* 1. Animated Looping Circuits GIF Background with Parallax Pan */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          backgroundImage: "url('/circuits.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
          filter: 'brightness(1.15) contrast(1.12)'
        }}
      />

      {/* 2. Soft Neutral Vignette Overlay to preserve foreground card readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 38%, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0.88) 92%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75))
          `
        }}
      />

      {/* 3. Subtle Technical Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.025) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.4
        }}
      />
    </div>
  );
}
