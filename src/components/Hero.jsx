import React, { useState } from 'react';
import { Zap, Briefcase, GraduationCap, Code, Award } from 'lucide-react';

export default function Hero({ onOpenTerminal }) {
  const [avatarHover, setAvatarHover] = useState(false);

  const skills = [
    {
      category: 'Hardware',
      items: ['ESP32', 'STM32', 'Basys-3 FPGA', 'Analog and Digital Circuits']
    },
    {
      category: 'EDA & Simulation Tools',
      items: ['Altium Designer', 'KiCAD', 'STM32CubeIDE', 'ESP-IDF', 'Xilinx Vivado', 'LTspice']
    },
    {
      category: 'Domains',
      items: ['PCB Design', 'Embedded Systems']
    },
    {
      category: 'Programming & RTL',
      items: ['C', 'Embedded C', 'FreeRTOS', 'Verilog/VHDL']
    }
  ];

  const certifications = [
    { name: 'PCB Design with KiCad', issuer: 'Peter Dalmaris (Udemy)', date: 'Aug 2026' },
    { name: 'Machine Learning Techniques in MATLAB', issuer: 'MathWorks', date: 'Jun 2025' },
    { name: 'SystemVerilog Fundamentals', issuer: 'Kumar Khandagle (Udemy)', date: 'Dec 2024' }
  ];

  return (
    <section style={{
      padding: '40px 20px 80px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Top Intro Lockup */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* 1. Curved Name Arch Header with Increased Font Size */}
        <div style={{ width: '380px', height: '90px', margin: '0 auto -12px', position: 'relative', zIndex: 2 }}>
          <svg viewBox="0 0 380 90" className="hero-curve-svg" style={{ width: '100%', height: '100%' }}>
            <path id="name-curve" d="M 25,82 A 160,105 0 0,1 355,82" fill="transparent" />
            <text textAnchor="middle" className="hero-curve-text">
              <textPath href="#name-curve" startOffset="50%">
                Rohit Kumar Dubbaka
              </textPath>
            </text>
          </svg>
        </div>

        {/* 2. Avatar Container with Solid Maroon Background Disc & LED Status */}
        <div style={{ display: 'inline-block', position: 'relative', marginBottom: '20px', zIndex: 1 }}>
          <div
            onMouseEnter={() => setAvatarHover(true)}
            onMouseLeave={() => setAvatarHover(false)}
            onClick={onOpenTerminal}
            title="Click to run interactive terminal profile"
            style={{
              width: '136px',
              height: '136px',
              borderRadius: '50%',
              padding: '2px',
              background: avatarHover
                ? '#6B1F2A'
                : 'var(--border-subtle)',
              cursor: 'pointer',
              transition: 'all 0.3s var(--ease-smooth)',
              position: 'relative'
            }}
          >
            {/* Inner Avatar Image with Maroon Disc */}
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

        {/* 3. Solid Maroon Role Badge Line */}
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
          fontSize: '1.02rem',
          lineHeight: '1.65',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          I engineer ideas and bring them to life.<br />
          I design PCBs and build embedded systems for a living and
          make cool little projects to solve problems .... or maybe cuz i just want to.
        </p>
      </div>

      {/* Divider Separator */}
      <div className="pcb-divider" style={{ margin: '48px auto' }}></div>

      {/* 5. Experience & Education Section (Directly on Home Page) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '48px'
      }}>
        {/* Experience Card */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Briefcase size={16} color="#ffffff" />
            <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              // My Experience
            </h3>
          </div>

          <div className="corner-bracket-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                Embedded Systems Intern
              </h4>
              <span className="font-mono" style={{
                fontSize: '0.72rem',
                color: '#ffffff',
                background: '#6B1F2A',
                padding: '2px 8px',
                borderRadius: '3px',
                fontWeight: 600
              }}>
                Feb 2026 – Present
              </span>
            </div>
            <p className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              @ DeltaIOT Pvt Ltd (Hyderabad)
            </p>
            <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '18px' }}>
              <li>Delivered a compact 4-Layer LTE/GPS module board capable of handling 3A current bursts for mainstream product.</li>
              <li>Delivered full PCB design for IC-based hot-swappable power management breakout board (2.5A bursts) from schematic to production.</li>
              <li>Conducted pin-by-pin hardware reverse-engineering on industry IoT devices for reference architecture.</li>
              <li>Participated in field deployments and remote firmware OTA lifecycle updates.</li>
            </ul>
          </div>
        </div>

        {/* Education Card */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <GraduationCap size={16} color="#ffffff" />
            <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              // My Education
            </h3>
          </div>

          <div className="corner-bracket-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: '#ffffff' }}>
                  Amrita Vishwa Vidyapeetham
                </h4>
                <span className="font-mono" style={{
                  fontSize: '0.72rem',
                  color: '#ffffff',
                  background: '#6B1F2A',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  fontWeight: 600
                }}>
                  Grad 2026
                </span>
              </div>
              <p className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                B.Tech in Electronics & Communication Engineering
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 500, color: '#ffffff' }}>
                  VINJEE Junior College, Hyderabad
                </h5>
                <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  2022
                </span>
              </div>
              <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Class XII - Telangana Board of Intermediate Education
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 500, color: '#ffffff' }}>
                  The Hyderabad Public School, Begumpet
                </h5>
                <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  2020
                </span>
              </div>
              <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Class X - ICSE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Hardware & Software Stack Section (Centered Alignment) */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', justifyContent: 'flex-start' }}>
          <Code size={16} color="#ffffff" />
          <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            // Skill cart
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {skills.map((group, idx) => (
            <div 
              key={idx} 
              className="corner-bracket-card" 
              style={{ 
                padding: '18px 14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <h4 className="font-mono" style={{ 
                fontSize: '0.84rem', 
                color: '#ffffff', 
                marginBottom: '14px',
                textAlign: 'center',
                fontWeight: 600
              }}>
                {group.category}
              </h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px', 
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {group.items.map((item, i) => (
                  <span key={i} className="tech-tag" style={{ textAlign: 'center' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Certifications Section */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Award size={16} color="#ffffff" />
          <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            // Certifications
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          {certifications.map((cert, idx) => (
            <div key={idx} className="corner-bracket-card" style={{ padding: '14px 18px' }}>
              <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                {cert.name}
              </h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{cert.issuer}</span>
                <span className="font-mono" style={{
                  fontSize: '0.70rem',
                  color: '#ffffff',
                  background: '#6B1F2A',
                  padding: '2px 7px',
                  borderRadius: '3px',
                  fontWeight: 600
                }}>
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
