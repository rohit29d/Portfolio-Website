import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, GraduationCap, Briefcase, Code, Award, Phone } from 'lucide-react';

export default function AboutContact({ viewMode = 'all' }) {
  const skills = [
    {
      category: 'Hardware & Microcontrollers',
      items: ['ESP32', 'STM32', 'Basys-3 FPGA', 'Analog Front-End (AFE)', 'Digital Circuits', 'Sensors']
    },
    {
      category: 'EDA & Simulation Tools',
      items: ['Altium Designer', 'KiCAD', 'STM32CubeIDE', 'ESP-IDF', 'Xilinx Vivado', 'LTspice']
    },
    {
      category: 'Domains & Protocols',
      items: ['4-Layer PCB Design', 'Embedded Systems', 'Power Management', 'SPI/I2C/UART/LTE', 'OTA Firmware']
    },
    {
      category: 'Programming & RTL',
      items: ['C', 'Python', 'Verilog/VHDL', 'Embedded C', 'MATLAB', 'FreeRTOS']
    }
  ];

  const certifications = [
    { name: 'PCB Design with KiCad', issuer: 'Peter Dalmaris (Udemy)', date: 'Aug 2026' },
    { name: 'Machine Learning Techniques in MATLAB', issuer: 'MathWorks', date: 'Jun 2025' },
    { name: 'SystemVerilog Fundamentals', issuer: 'Kumar Khandagle (Udemy)', date: 'Dec 2024' }
  ];

  return (
    <section style={{
      padding: '30px 20px 80px',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      {/* Bio / Intro Block */}
      {(viewMode === 'all' || viewMode === 'about') && (
        <div id="about-section" style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', marginBottom: '16px' }}>
            who am i<span style={{ color: 'var(--accent-wine)' }}>?</span>
          </h2>

          <div className="corner-bracket-card" style={{ padding: '24px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '14px' }}>
              Electronics & Communication graduate (2026) with exposure and contributions across the embedded-IoT development lifecycle — 
              schematic design, PCB layout, fabrication, firmware stack, cloud integration, and field deployment.
            </p>
            <p>
              currently working as an Embedded Systems Intern at <span style={{ color: '#ffffff', fontWeight: 600 }}>DeltaIOT Pvt Ltd</span>, 
              focusing on hardware R&D, 4-layer LTE/GPS module boards, hot-swappable power breakout boards, and real-time firmware architecture where system-level ownership matters.
            </p>
          </div>
        </div>
      )}

      {/* Experience & Education Grid */}
      {(viewMode === 'all' || viewMode === 'about') && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {/* Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Briefcase size={16} color="var(--accent-wine)" />
              <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                // Experience
              </h3>
            </div>

            <div className="corner-bracket-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                  Embedded Systems Intern
                </h4>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-wine-hover)' }}>
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

          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <GraduationCap size={16} color="var(--accent-wine)" />
              <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                // Education
              </h3>
            </div>

            <div className="corner-bracket-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: '#ffffff' }}>
                    Amrita Vishwa Vidyapeetham
                  </h4>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-wine-hover)' }}>
                    Grad 2026
                  </span>
                </div>
                <p className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  B.Tech in Electronics & Communication Engineering • CGPA: 7.6 / 10
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
      )}

      {/* Technical Skills Matrix */}
      {(viewMode === 'all' || viewMode === 'about') && (
        <div style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Code size={16} color="var(--accent-wine)" />
            <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              // Hardware & Software Stack
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {skills.map((group, idx) => (
              <div key={idx} className="corner-bracket-card" style={{ padding: '16px' }}>
                <h4 className="font-mono" style={{ fontSize: '0.82rem', color: '#ffffff', marginBottom: '12px' }}>
                  {group.category}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map((item, i) => (
                    <span key={i} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {(viewMode === 'all' || viewMode === 'about') && (
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Award size={16} color="var(--accent-wine)" />
            <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--accent-wine-hover)' }}>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {(viewMode === 'all' || viewMode === 'contact') && (
        <div id="contact-section" style={{
          textAlign: 'center',
          padding: '50px 24px',
          background: '#000000',
          border: '1px solid var(--accent-wine-border)',
          borderRadius: 'var(--radius-md)',
          marginTop: viewMode === 'contact' ? '20px' : '0'
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
            wanna connect<span style={{ color: 'var(--accent-wine)' }}>?</span>
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
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-wine)'; }}
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
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-wine)'; }}
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
                background: 'var(--accent-wine)',
                color: '#ffffff',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.88rem'
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
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-wine)'; }}
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
