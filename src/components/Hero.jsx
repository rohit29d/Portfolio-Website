import React, { useState } from 'react';
import { Copy, Check, Terminal, Zap } from 'lucide-react';

export default function Hero({ onOpenTerminal }) {
  const [copied, setCopied] = useState(false);
  const [avatarHover, setAvatarHover] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText('npx rohitdubbaka');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      {/* 1. Curved Name Arch Header (Hugs top of avatar cleanly) */}
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

      {/* 2. Avatar Container with Matte Slate Border & Static LED */}
      <div style={{ display: 'inline-block', position: 'relative', marginBottom: '20px', zIndex: 1 }}>
        <div 
          onMouseEnter={() => setAvatarHover(true)}
          onMouseLeave={() => setAvatarHover(false)}
          onClick={onOpenTerminal}
          title="Click to run npx rohitdubbaka"
          style={{
            width: '124px',
            height: '124px',
            borderRadius: '50%',
            padding: '2px',
            background: avatarHover 
              ? 'var(--accent-slate)' 
              : 'var(--border-subtle)',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
            position: 'relative'
          }}
        >
          {/* Inner Avatar Image */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: '#050507',
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

          {/* Static Matte LED Indicator Dot */}
          <div style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'var(--accent-slate)',
            border: '2px solid #050507'
          }} title="Status: Active" />
        </div>
      </div>

      {/* 3. Role Badge Line */}
      <div style={{ marginBottom: '14px' }}>
        <span className="font-mono" style={{
          fontSize: '0.85rem',
          color: 'var(--accent-slate)',
          background: 'var(--accent-slate-soft)',
          padding: '4px 14px',
          borderRadius: '9999px',
          border: '1px solid var(--accent-slate-border)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Zap size={13} color="var(--accent-slate)" />
          embedded systems @ deltaiot
        </span>
      </div>

      {/* 4. Tagline */}
      <h1 style={{
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        marginBottom: '14px',
        color: 'var(--text-primary)'
      }}>
        i like build stuff <span style={{ color: 'var(--accent-slate)' }}>:)</span>
      </h1>

      {/* 5. Intro Description */}
      <p style={{
        fontSize: '0.96rem',
        lineHeight: '1.6',
        color: 'var(--text-secondary)',
        maxWidth: '560px',
        margin: '0 auto 24px'
      }}>
        i engineer hardware from schematic to silicon. focused on custom pcb design, 
        real-time stm32 firmware, fpga rtl in vhdl, and edge ai.
      </p>

      {/* 6. Terminal CLI Copy Box Widget */}
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div 
          className="terminal-copy-box"
          onClick={onOpenTerminal}
          style={{ cursor: 'pointer' }}
          title="Click to run interactive terminal"
        >
          <Terminal size={15} color="var(--accent-slate)" />
          <span style={{ color: 'var(--text-muted)' }}>%</span>
          <code style={{ color: 'var(--text-primary)', fontWeight: 500 }}>npx rohitdubbaka</code>
          <button 
            type="button" 
            onClick={handleCopy}
            className="copy-btn" 
            aria-label="Copy npx command"
            title="Copy command"
          >
            {copied ? <Check size={14} color="var(--accent-slate)" /> : <Copy size={14} />}
          </button>
        </div>

        <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          {copied ? '✓ copied to clipboard!' : 'click banner to execute interactive CLI'}
        </span>
      </div>

      {/* PCB Trace Line Divider */}
      <div className="pcb-divider" style={{ marginTop: '40px' }}></div>
    </section>
  );
}
