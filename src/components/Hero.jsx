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
      padding: '50px 20px 40px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Curved SVG Name Header */}
      <div style={{ width: '100%', maxWidth: '440px', margin: '0 auto -20px' }}>
        <svg viewBox="0 0 320 120" className="hero-curve-svg" style={{ width: '100%', height: 'auto' }}>
          <path id="name-curve" d="M 30,110 A 130,130 0 0,1 290,110" fill="transparent" />
          <text textAnchor="middle" className="hero-curve-text">
            <textPath href="#name-curve" startOffset="50%">
              Rohit Kumar Dubbaka
            </textPath>
          </text>
        </svg>
      </div>

      {/* Avatar Container with Matte Slate Border & Static LED */}
      <div style={{ display: 'inline-block', position: 'relative', margin: '10px 0 24px' }}>
        <div 
          onMouseEnter={() => setAvatarHover(true)}
          onMouseLeave={() => setAvatarHover(false)}
          onClick={onOpenTerminal}
          title="Click to run npx rohitdubbaka"
          style={{
            width: '126px',
            height: '126px',
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

      {/* Role Badge Line */}
      <div style={{ marginBottom: '14px' }}>
        <span className="font-mono" style={{
          fontSize: '0.88rem',
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

      {/* Tagline */}
      <h1 style={{
        fontSize: '1.8rem',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        marginBottom: '16px',
        color: 'var(--text-primary)'
      }}>
        i like build stuff <span style={{ color: 'var(--accent-slate)' }}>:)</span>
      </h1>

      {/* Intro Description */}
      <p style={{
        fontSize: '0.98rem',
        lineHeight: '1.6',
        color: 'var(--text-secondary)',
        maxWidth: '580px',
        margin: '0 auto 28px'
      }}>
        i engineer hardware from schematic to silicon. focused on custom pcb design, 
        real-time stm32 firmware, fpga rtl in vhdl, and edge ai.
      </p>

      {/* Terminal CLI Copy Box Widget */}
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
      <div className="pcb-divider" style={{ marginTop: '50px' }}></div>
    </section>
  );
}
