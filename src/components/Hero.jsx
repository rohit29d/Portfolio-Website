import React, { useState } from 'react';
import { Zap, Briefcase, GraduationCap, Code, BookOpen, Award } from 'lucide-react';

export default function Hero() {
  const [avatarHover, setAvatarHover] = useState(false);

  const skills = [
    {
      category: 'Analog & PCB Design',
      items: ['KiCad (Multi-Layer, RF)', 'Altium Designer', 'LTspice', 'AFE Architecture', 'Bessel/Butterworth/KRC Filters', 'CMRR & Noise Optimization', 'Mixed-Signal Layout']
    },
    {
      category: 'Digital & RTL',
      items: ['VHDL', 'Verilog', 'SystemVerilog', 'RTL Synthesis', 'Xilinx Vivado', 'Artix-7 FPGA', 'Basys-3 FPGA', 'ModelSim']
    },
    {
      category: 'Embedded & Firmware',
      items: ['Embedded C', 'STM32CubeIDE (HAL)', 'ESP-IDF', 'I2C / SPI / UART / RS-485', 'Bare-Metal C', 'TinyML', 'Bash']
    },
    {
      category: 'Test & Bench',
      items: ['DSO', 'Logic Analyzer', 'FFT Spectrum Analysis', 'SMD Rework', 'Charmhigh SMT PnP', 'Python ML', 'MATLAB']
    }
  ];

  return (
    <section style={{
      padding: '55px 20px 80px',
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
        {/* 1. Curved Name Arch Header (Increased font, gracefully framed directly above avatar) */}
        <div style={{
          width: '460px',
          maxWidth: '95vw',
          height: '75px',
          margin: '0 auto -10px',
          position: 'relative',
          zIndex: 2,
          overflow: 'visible'
        }}>
          <svg viewBox="0 0 460 85" className="hero-curve-svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <path id="name-curve" d="M 35,76 A 210,64 0 0,1 425,76" fill="transparent" />
            <text textAnchor="middle" className="hero-curve-text hero-name-text">
              <textPath href="#name-curve" startOffset="50%">
                Rohit Kumar Dubbaka
              </textPath>
            </text>
          </svg>
        </div>

        {/* 2. Avatar Container (Snugly positioned ~1cm below curved name arch) */}
        <div style={{ display: 'inline-block', position: 'relative', marginBottom: '20px', zIndex: 1 }}>
          <div
            onMouseEnter={() => setAvatarHover(true)}
            onMouseLeave={() => setAvatarHover(false)}
            style={{
              width: '136px',
              height: '136px',
              borderRadius: '50%',
              padding: '2px',
              background: avatarHover
                ? '#6B1F2A'
                : 'var(--border-subtle)',
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
          <span className="font-mono hero-role-badge" style={{
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
            Embedded Systems Engineer @ Delta IoT Solutions
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
      <div className="hero-experience-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
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

          <div className="corner-bracket-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Full-Time Role */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                  Embedded Systems Engineer
                </h4>
                <span className="font-mono" style={{
                  fontSize: '0.72rem',
                  color: '#ffffff',
                  background: '#6B1F2A',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  fontWeight: 600
                }}>
                  Oct 2026 – Present
                </span>
              </div>
              <p className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                @ Delta IoT Solutions Pvt. Ltd. (Hyderabad)
              </p>
              <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '18px' }}>
                <li>Managing PCB assembly quality across a 235-unit IoT customer batch; authored BOMs, cost models, and assembly documentation adopted as team standard.</li>
                <li>Diagnosed and restored a Charmhigh SMT pick-and-place machine and 3D printer, bringing in-house assembly capability back online.</li>
                <li>Handled design update and procurement for a new version of the in-house IO-expander.</li>
              </ul>
            </div>

            {/* Internship Role */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: '#ffffff' }}>
                  Embedded Hardware Intern
                </h4>
                <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Feb 2026 – Aug 2026
                </span>
              </div>
              <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '18px' }}>
                <li>Engineered a pluggable 4-layer LTE/GPS module (55×44mm) in KiCad with 50Ω controlled-impedance RF layout; achieved full LTE signal strength on bench.</li>
                <li>Developed ultra-compact hot-swappable power board (21×24mm) sustaining 2.5A transient bursts for a micro DSBGA/WLCSP buck converter IC; integrated into company's upcoming IoT board.</li>
                <li>Reconstructed competitor industrial IoT device schematic via DMM and datasheets, identifying power topology inefficiencies driving a strategic BOM upgrade.</li>
                <li>Built breakout and test boards for LTE module and BGA/QFN devices; assembled and revived prototype boards for bench bring-up.</li>
              </ul>
            </div>
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
                  2022 – 2026
                </span>
              </div>
              <p className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                B.Tech in Electronics & Communication Engineering (Coimbatore)
              </p>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: '#ffffff', background: 'rgba(107, 31, 42, 0.4)', padding: '1px 6px', borderRadius: '3px', border: '1px solid rgba(107, 31, 42, 0.6)' }}>
                  CGPA: 7.64 / 10 • First Class
                </span>
              </div>
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

      {/* 7. Research Focus & Publications */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', justifyContent: 'flex-start' }}>
          <BookOpen size={16} color="#ffffff" />
          <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            // Research & Publications
          </h3>
        </div>

        <div className="corner-bracket-card" style={{ padding: '22px' }}>
          <div style={{ marginBottom: '18px' }}>
            <h4 className="font-mono" style={{ fontSize: '0.82rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px', fontWeight: 600 }}>
              Primary Research Interests
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'Analog & Mixed-Signal IC Design',
                'Bio-Potential Analog Front-Ends (AFEs)',
                'Low-Noise Sensor Interfaces',
                'Hardware-Software Co-Design'
              ].map((interest, idx) => (
                <span key={idx} className="tech-tag" style={{ fontSize: '0.78rem', color: '#ffffff', background: 'rgba(107, 31, 42, 0.25)', border: '1px solid rgba(107, 31, 42, 0.5)' }}>
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: '#ffffff' }}>
                Manuscript in Preparation
              </h4>
              <span className="font-mono" style={{
                fontSize: '0.72rem',
                color: '#ffffff',
                background: '#6B1F2A',
                padding: '2px 8px',
                borderRadius: '3px',
                fontWeight: 600
              }}>
                Draft 2026
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '6px' }}>
              <strong style={{ color: '#ffffff' }}>Hands-Free sEMG-Based Speech-Controlled Wheelchair</strong>
            </p>
            <p className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              R. K. Dubbaka, A. Isukapalli, S. Harshath, and L. Vidhya • Amrita Vishwa Vidyapeetham
            </p>
          </div>
        </div>
      </div>

      {/* 8. Certifications Section (Consistent with GitHub) */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', justifyContent: 'flex-start' }}>
          <Award size={16} color="#ffffff" />
          <h3 className="font-mono" style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            // Certifications
          </h3>
        </div>

        <div className="corner-bracket-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <a
                href="https://www.udemy.com/certificate/UC-0fc10863-10c9-44f7-9250-5c2836f6288a/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.94rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}
                onMouseOver={e => e.currentTarget.style.color = '#e07a86'}
                onMouseOut={e => e.currentTarget.style.color = '#ffffff'}
              >
                PCB Design with KiCad (Updated for KiCad 9) ↗
              </a>
              <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Aug 2026</span>
            </div>
            <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              Udemy • Dr. Peter Dalmaris (32 hrs)
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#ffffff' }}>
                Machine Learning Techniques in MATLAB
              </span>
              <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Jun 2025</span>
            </div>
            <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              MathWorks Training Services • Classification, Regression, Clustering
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <a
                href="https://www.udemy.com/certificate/UC-25b24238-b221-426a-874c-8f043a3646df/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.94rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}
                onMouseOver={e => e.currentTarget.style.color = '#e07a86'}
                onMouseOut={e => e.currentTarget.style.color = '#ffffff'}
              >
                SystemVerilog Fundamentals (Verification Series) ↗
              </a>
              <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Dec 2024</span>
            </div>
            <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              Udemy • Kumar Khandagle (14.5 hrs)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
