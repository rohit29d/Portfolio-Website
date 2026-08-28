import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, GraduationCap, Briefcase, Code } from 'lucide-react';

export default function AboutContact() {
  const skills = [
    {
      category: 'PCB & Hardware',
      items: ['KiCAD', 'LTspice', 'AFE Design', 'Discrete RF', 'Multi-Layer PCB Layout', 'Signal Integrity']
    },
    {
      category: 'Firmware & Embedded',
      items: ['STM32 (HAL/LL)', 'C', 'C++', 'ESP32', 'Arduino', 'FreeRTOS', 'SPI/I2C/UART/CAN']
    },
    {
      category: 'FPGA & Digital Logic',
      items: ['VHDL', 'Basys-3 FPGA', 'Vivado', 'RTL Simulation', 'Bus Arbitration', 'TTL Logic']
    },
    {
      category: 'DSP & Tools',
      items: ['MATLAB', 'Python', 'Git/GitHub', 'FirmGen', 'Oscilloscopes/Logic Analyzers', 'Linux']
    }
  ];

  return (
    <section id="about" style={{
      padding: '40px 20px 80px',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      {/* Bio / Intro Block */}
      <div style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
          who am i<span style={{ color: 'var(--accent-blue)' }}>?</span>
        </h2>

        <div className="corner-bracket-card" style={{ padding: '24px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '14px' }}>
            ece grad, 2026. currently working as an embedded systems intern at <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>DeltaIOT</span>. 
            i care deeply about schematic-to-silicon design, robust low-level C firmware, fpga rtl architecture, and system-level hardware ownership.
          </p>
          <p>
            i like taking ideas from physical circuit simulations to custom soldered boards, writing bare-metal & RTOS drivers, 
            and optimizing signal processing algorithms at the edge.
          </p>
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '50px'
      }}>
        {/* Experience */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Briefcase size={16} color="var(--accent-blue)" />
            <h3 className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              // Experience
            </h3>
          </div>

          <div className="corner-bracket-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Embedded Systems Intern
              </h4>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)' }}>
                2025 – Present
              </span>
            </div>
            <p className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              @ DeltaIOT
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Engineering low-level firmware modules, sensor interfacing, and PCB prototyping for IoT hardware nodes.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <GraduationCap size={16} color="var(--copper-gold)" />
            <h3 className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--copper-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              // Education
            </h3>
          </div>

          <div className="corner-bracket-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                B.Tech in Electronics & Communication (ECE)
              </h4>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--copper-gold)' }}>
                Grad 2026
              </span>
            </div>
            <p className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Specialization in Embedded Hardware, RTL & Signal Processing
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Focus on microprocessor architectures, analog circuit design, DSP algorithms, and digital VLSI.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills Matrix */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <Code size={16} color="var(--accent-blue)" />
          <h3 className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
              <h4 className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--accent-blue)', marginBottom: '12px' }}>
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

      {/* Contact Section */}
      <div id="contact" style={{
        textAlign: 'center',
        padding: '40px 24px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-accent)',
        borderRadius: 'var(--radius-md)'
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
          wanna connect<span style={{ color: 'var(--accent-blue)' }}>?</span>
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
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
              background: '#0d1117',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.88rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)'; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            <Github size={16} />
            <span>github.com/rohit29d</span>
            <ArrowUpRight size={14} />
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: 'var(--radius-sm)',
              background: '#0d1117',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.88rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)'; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
            <ArrowUpRight size={14} />
          </a>

          <a 
            href="mailto:rohit.dubbaka@example.com" 
            className="font-mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--accent-blue)',
              color: '#080a0f',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '0.88rem'
            }}
          >
            <Mail size={16} />
            <span>rohit.dubbaka@example.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
