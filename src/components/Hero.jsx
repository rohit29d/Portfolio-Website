import React, { useState } from 'react';
import { Zap } from 'lucide-react';

export default function Hero({ onOpenTerminal }) {
  const [avatarHover, setAvatarHover] = useState(false);

  return (
    <section style={{
      padding: '40px 20px 50px',
      maxWidth: '780px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* 1. Curved Name Arch Header */}
      <div style={{ width: '320px', height: '75px', margin: '0 auto -10px', position: 'relative', zIndex: 2 }}>
        <svg viewBox="0 0 320 80" className="hero-curve-svg" style={{ width: '100%', height: '100%' }}>
          <path id="name-curve" d="M 35,72 A 130,85 0 0,1 285,72" fill="transparent" />
          <text textAnchor="middle" className="hero-curve-text">
            <textPath href="#name-curve" startOffset="50%">
              Rohit Kumar Dubbaka
            </textPath>
          </text>
        </svg>
      </div>

      {/* 2. Avatar Container with Solid Maroon LED & Border */}
      <div style={{ display: 'inline-block', position: 'relative', marginBottom: '20px', zIndex: 1 }}>
        <div 
          onMouseEnter={() => setAvatarHover(true)}
          onMouseLeave={() => setAvatarHover(false)}
          onClick={onOpenTerminal}
          title="Click to run interactive terminal profile"
          style={{
            width: '124px',
            height: '124px',
            borderRadius: '50%',
            padding: '2px',
            background: avatarHover 
              ? '#6B1F2A' 
              : 'var(--border-subtle)',
            cursor: 'pointer',
            transition: 'background 0.3s var(--ease-smooth)',
            position: 'relative'
          }}
        >
          {/* Inner Avatar Image */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: '#000000',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img 
              src="/avatar.png" 
              alt="Rohit Kumar Dubbaka Avatar" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Solid Wine LED Indicator Dot */}
          <div style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#6B1F2A',
            border: '2px solid #000000'
          }} title="Status: Active" />
        </div>
      </div>

      {/* 3. Solid Maroon Role Badge Line (Confident Color Block) */}
      <div style={{ marginBottom: '20px' }}>
        <span className="font-mono" style={{
          fontSize: '0.84rem',
          color: '#ffffff',
          fontWeight: 600,
          background: '#6B1F2A',
          padding: '5px 18px',
          borderRadius: '9999px',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          letterSpacing: '0.02em',
          boxShadow: '0 2px 10px rgba(107, 31, 42, 0.4)'
        }}>
          <Zap size={13} color="#ffffff" />
          embedded systems @ deltaiot
        </span>
      </div>

      {/* 4. Intro Description */}
      <p style={{
        fontSize: '0.98rem',
        lineHeight: '1.6',
        color: 'var(--text-secondary)',
        maxWidth: '560px',
        margin: '0 auto 26px'
      }}>
        i engineer hardware from schematic to silicon. focused on custom pcb design, 
        real-time stm32 firmware, fpga rtl in vhdl, and edge ai.
      </p>

      {/* Divider */}
      <div className="pcb-divider" style={{ marginTop: '40px' }}></div>
    </section>
  );
}
