import React from 'react';

export default function SpaceBackdrop({ active, mousePos = { x: 0, y: 0 } }) {
  // Smooth parallax translation calculation (opposite to cursor movement)
  const parallaxX = (mousePos.x || 0) * -35;
  const parallaxY = (mousePos.y || 0) * -18;

  return (
    <div
      className={`circuit-backdrop ${active ? 'visible' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#000000',
        perspective: '1400px',
        perspectiveOrigin: '50% 40%',
        opacity: active ? 1 : 0,
        transition: 'opacity 0.38s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      {/* 3D Warped Concave Stage Wrapper for Zoomed-Out Inward Curvature */}
      <div
        style={{
          position: 'absolute',
          top: '4%',
          left: '5%',
          width: '90%',
          height: '92%',
          transformOrigin: '50% 50%',
          transformStyle: 'preserve-3d',
          transform: `translate3d(${parallaxX * 0.8}px, ${parallaxY * 0.8}px, -120px) scale(0.86)`,
          clipPath: 'url(#concave-spherical-clip)',
          WebkitClipPath: 'url(#concave-spherical-clip)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 24px 70px rgba(0, 0, 0, 0.98), 0 0 100px rgba(0, 0, 0, 0.85) inset',
          transition: 'transform 0.44s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
          overflow: 'hidden',
          backgroundColor: '#000000'
        }}
      >
        {/* Animated Looping Circuit GIF */}
        <div
          style={{
            position: 'absolute',
            inset: '-10%',
            backgroundImage: "url('/wine_circuits.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(1.18) contrast(1.15)',
            transform: 'scale(1.12)'
          }}
        />

        {/* Inward Radial Depth & Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(circle at 50% 45%, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.45) 55%, rgba(0, 0, 0, 0.95) 90%),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.85))
            `
          }}
        />
      </div>
    </div>
  );
}
