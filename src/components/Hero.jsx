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
    <section id="home" style={{
      padding: '60px 20px 40px',
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

      {/* Avatar Container with Matte Border & Status LED */}
      <div style={{ display: 'inline-block', position: 'relative', margin: '10px 0 24px' }}>
        <div 
          onMouseEnter={() => setAvatarHover(true)}
          onMouseLeave={() => setAvatarHover(false)}
          onClick={onOpenTerminal}
          title="Click to run npx rohitdubbaka"
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            padding: '3px',
            background: avatarHover 
              ? 'linear-gradient(135deg, var(--accent-blue), var(--copper-gold))' 
              : 'linear-gradient(135deg, var(--border-accent), var(--border-subtle))',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
        >
          {/* Inner Avatar Image */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: '#0d1117',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img 
              src="/avatar.png" 
              alt="Rohit Kumar Dubbaka Avatar" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: avatarHover ? 'brightness(1.1) contrast(1.05)' : 'brightness(1)',
                transition: 'filter 0.3s ease'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Glowing Status LED Badge */}
          <div style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: avatarHover ? '#5b9ef7' : '#34d399',
            border: '2px solid #0d1117',
            transition: 'all 0.3s ease'
          }} title={avatarHover ? "LED Active: Interactive Mode" : "Status: Active"} />
        </div>
      </div>

      {/* Role Line */}
      <div style={{ marginBottom: '12px' }}>
        <span className="font-mono" style={{
          fontSize: '0.9rem',
          color: 'var(--accent-blue)',
          background: 'var(--accent-blue-soft)',
          padding: '4px 14px',
          borderRadius: '9999px',
          border: '1px solid var(--accent-blue-border)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Zap size={13} color="var(--accent-blue)" />
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
        i like build stuff <span style={{ color: 'var(--accent-blue)' }}>:)</span>
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
          <Terminal size={15} color="var(--accent-blue)" />
          <span style={{ color: 'var(--text-muted)' }}>%</span>
          <code style={{ color: 'var(--text-primary)', fontWeight: 500 }}>npx rohitdubbaka</code>
          <button 
            type="button" 
            onClick={handleCopy}
            className="copy-btn" 
            aria-label="Copy npx command"
            title="Copy command"
          >
            {copied ? <Check size={14} color="var(--accent-blue)" /> : <Copy size={14} />}
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
