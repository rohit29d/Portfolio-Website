import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Phone } from 'lucide-react';

export default function AboutContact({ viewMode = 'all' }) {
  const [avatarHover, setAvatarHover] = useState(false);

  return (
    <section style={{
      padding: '40px 20px 80px',
      maxWidth: '820px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* 1. About Me Section (Matching abhijithjinnu.in/about style) */}
      {(viewMode === 'all' || viewMode === 'about') && (
        <div id="about-section" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          {/* High-Mid Curved Header: "Who am i?" */}
          <div style={{ width: '280px', height: '65px', margin: '0 auto -5px', position: 'relative', zIndex: 2 }}>
            <svg viewBox="0 0 280 70" className="hero-curve-svg" style={{ width: '100%', height: '100%' }}>
              <path id="about-curve" d="M 30,62 A 115,75 0 0,1 250,62" fill="transparent" />
              <text textAnchor="middle" className="hero-curve-text" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', letterSpacing: '0.04em' }}>
                <textPath href="#about-curve" startOffset="50%">
                  Who am i?
                </textPath>
              </text>
            </svg>
          </div>

          {/* High-Mid Centered Floating Transparent Avatar (Abhijith Style - No Background Disc) */}
          <div style={{ display: 'inline-block', position: 'relative', marginBottom: '16px', zIndex: 1 }}>
            <div 
              onMouseEnter={() => setAvatarHover(true)}
              onMouseLeave={() => setAvatarHover(false)}
              style={{
                width: '130px',
                height: '130px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transform: avatarHover ? 'translateY(-3px) scale(1.06)' : 'translateY(0) scale(1)',
                transition: 'transform 0.3s var(--ease-smooth)'
              }}
            >
              <img 
                src="/avatar.png" 
                alt="Rohit Kumar Dubbaka Face Illustration" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: avatarHover ? 'drop-shadow(0 8px 20px rgba(107, 31, 42, 0.5))' : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6))',
                  transition: 'filter 0.3s var(--ease-smooth)'
                }}
              />
            </div>
          </div>

          {/* Solid Maroon "about me" Badge */}
          <div style={{ marginBottom: '32px' }}>
            <span className="font-mono" style={{
              fontSize: '0.84rem',
              color: '#ffffff',
              fontWeight: 600,
              background: '#6B1F2A',
              padding: '5px 20px',
              borderRadius: '9999px',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              letterSpacing: '0.02em',
              boxShadow: '0 2px 12px rgba(107, 31, 42, 0.4)'
            }}>
              about me
            </span>
          </div>

          {/* In-Depth Personal Narrative Write-up */}
          <div style={{
            maxWidth: '680px',
            textAlign: 'left',
            color: 'var(--text-secondary)',
            fontSize: '1.02rem',
            lineHeight: '1.75',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <p style={{ color: '#ffffff', fontSize: '1.08rem', fontWeight: 500 }}>
              who am i if not my curiosity, the circuits i solder, and the ideas i build into the physical world?
            </p>

            <p>
              i am a hardware engineer and embedded builder (graduating in electronics & communication engineering in 2026). 
              i do everything i put my mind to — whether it's laying out tight 4-layer LTE/GPS boards capable of taking 3A bursts, writing bare-metal firmware that doesn't drop a single byte, or designing analog front-ends for speech-controlled wheelchairs.
            </p>

            <p>
              currently working as an Embedded Systems Intern at <strong style={{ color: '#ffffff' }}>DeltaIOT Pvt Ltd</strong> in Hyderabad, focusing on hardware R&D, power management breakout boards, and real-time firmware architecture where system-level ownership actually matters.
            </p>

            <p>
              i believe in craftsmanship over hype. no fluff, no AI slop — just solid engineering, clean PCB routing, disciplined firmware, and making cool things that solve real-world problems.
            </p>

            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
              when i'm not routing differential pairs or debugging UART traces, i'm probably tinkering with FPGA RTL, exploring edge ML, or building little side projects just because i can.
            </p>
          </div>
        </div>
      )}

      {/* 2. Contact Section */}
      {(viewMode === 'all' || viewMode === 'contact') && (
        <div id="contact-section" style={{
          textAlign: 'center',
          padding: '48px 24px',
          background: '#000000',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          marginTop: viewMode === 'contact' ? '20px' : '40px'
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
            wanna connect<span style={{ color: '#6B1F2A' }}>?</span>
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 28px' }}>
            feel free to reach out for embedded hardware collabs, firmware discussions, or cool project ideas :)
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <a 
              href="https://github.com/rohit29d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#000000',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.88rem',
                transition: 'all 0.3s var(--ease-smooth)'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              <Github size={16} />
              <span>github.com/rohit29d</span>
              <ArrowUpRight size={14} />
            </a>

            <a 
              href="https://linkedin.com/in/rohit-kumar-dubbaka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#000000',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.88rem',
                transition: 'all 0.3s var(--ease-smooth)'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>

            <a 
              href="mailto:rohitdubbaka29@gmail.com" 
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#6B1F2A',
                color: '#ffffff',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.88rem',
                boxShadow: '0 2px 12px rgba(107, 31, 42, 0.4)'
              }}
            >
              <Mail size={16} />
              <span>rohitdubbaka29@gmail.com</span>
            </a>

            <a 
              href="tel:+919908422253" 
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#000000',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.88rem'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              <Phone size={15} />
              <span>+91 9908422253</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
