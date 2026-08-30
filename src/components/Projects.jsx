import React, { useState } from 'react';
import { Cpu, ExternalLink, Sparkles, Layers, Terminal, ChevronRight, X } from 'lucide-react';

export const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Hands-Free sEMG Based Speech-Controlled Wheelchair',
    category: ['firmware', 'pcb'],
    type: 'flagship',
    hook: 'custom AFE PCB, real-time ML classification, wheelchair actuation',
    tags: ['STM32', 'Python', 'LTspice', 'KiCAD'],
    link: 'https://github.com/rohit29d',
    details: 'Designed a custom Analog Front-End (AFE) PCB for sEMG acquisition from laryngeal muscles, validated for gain and CMRR on bench. Implemented real-time closed-loop firmware on STM32 integrating ADC, timers, and UART; trained a Random Forest classifier for muscle-command recognition. Delivered a full end-to-end system: wearable AFE → signal acquisition → ML inference → wheelchair actuation with safety overrides.'
  },
  {
    id: 2,
    title: 'Priority Arbiter for Multi-Channel Bus',
    category: ['fpga'],
    type: 'flagship',
    hook: 'RTL to FPGA implementation, deterministic multi-master arbitration',
    tags: ['VHDL', 'Basys-3 FPGA', 'Vivado'],
    link: 'https://github.com/rohit29d',
    details: 'Designed and validated a deterministic multi-channel bus priority arbiter from RTL to FPGA using encoder and sequencer-based arbitration logic. Verified timing correctness through RTL simulation and confirmed deterministic behavior under concurrent access on hardware.'
  },
  {
    id: 3,
    title: 'Aeromesh — CraftifAI Buildathon',
    category: ['firmware'],
    type: 'exploratory',
    hook: 'edge AI turbulence detection mesh network',
    tags: ['ESP32', 'FirmGen', 'ESP-IDF'],
    link: 'https://github.com/rohit29d',
    details: 'Rapid-prototyped firmware with FirmGen on a bare ESP32 + MPU6050, processing and detecting turbulence in-situ to avoid streaming chunks of raw sensor data. Trained an edge AI model within minutes during the buildathon to classify turbulence from live motion data. Built a diagnostic module for flight systems, designed to mesh with nearby devices and share real-time wind/air-situation data.'
  },
  {
    id: 4,
    title: 'Automatic Plant Watering System',
    category: ['firmware'],
    type: 'exploratory',
    hook: 'autonomous soil moisture sensing & relay actuation',
    tags: ['Arduino Uno', 'C', 'Embedded C'],
    link: 'https://github.com/rohit29d',
    details: 'Used a solar panel as an ambient light sensor (ADC) with a custom scheduling algorithm to replace an RTC and trigger two daily watering cycles. Actuated a relay-driven solenoid valve; serial logging enabled real-time monitoring when connected.'
  },
  {
    id: 5,
    title: 'Analog Front-End for sEMG Signal Acquisition',
    category: ['pcb'],
    type: 'exploratory',
    hook: 'low-noise biopotential amplifier & active filtering PCB',
    tags: ['LTspice', 'KiCAD', 'Wearable PCB'],
    link: 'https://github.com/rohit29d',
    details: 'Designed a wearable-size PCB (60×25 mm) for sEMG signal acquisition; bench-validated gain and CMRR performance with surface electrodes and multi-stage active analog filtering.'
  },
  {
    id: 6,
    title: 'Range and Doppler Optimization in Radar Systems',
    category: ['dsp'],
    type: 'exploratory',
    hook: 'FMCW radar signal processing & 2D FFT resolution map',
    tags: ['MATLAB', 'DSP', 'Radar Logic'],
    link: 'https://github.com/rohit29d',
    details: 'Analyzed FMCW radar beat signals in MATLAB, applying windowing functions, Range FFT, and Doppler FFT to optimize target detection resolution and velocity estimation under high noise.'
  },
  {
    id: 7,
    title: 'RF Data Transmission and Reception',
    category: ['pcb'],
    type: 'exploratory',
    hook: 'discrete RF ASK/FSK transmitter and receiver hardware',
    tags: ['Discrete RF', 'LTspice', 'KiCAD'],
    link: 'https://github.com/rohit29d',
    details: 'Designed discrete RF oscillator, modulation, and demodulation circuits for wireless data packet transmission across 433MHz frequency bands, verifying signal integrity and antenna impedance matching.'
  },
  {
    id: 8,
    title: 'Automobile Seatbelt Detection Module',
    category: ['pcb'],
    type: 'exploratory',
    hook: 'safety interlock engineered with discrete TTL logic gates',
    tags: ['Digital Logic', 'TTL 7400 Series', 'Breadboard'],
    link: 'https://github.com/rohit29d',
    details: 'Constructed a hardware safety interlock state machine using discrete TTL logic ICs (AND, OR, NOT gates) to prevent vehicle ignition unless seatbelt latch sensors and pressure pads confirm occupant safety.'
  }
];

const CATEGORIES = ['all', 'firmware', 'pcb', 'fpga', 'dsp', 'blogs'];

export default function Projects({ activeCategory = 'all', scrubbedCategory = 'all', isCylinderActive = false }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const getPanelClass = (catId) => {
    if (!isCylinderActive) {
      return catId === activeCategory ? 'panel-flat' : 'panel-hidden';
    }

    const currentCenter = scrubbedCategory || activeCategory;
    const targetIdx = CATEGORIES.indexOf(currentCenter);
    const itemIdx = CATEGORIES.indexOf(catId);
    const total = CATEGORIES.length;

    let offset = (itemIdx - targetIdx) % total;
    if (offset > 3) offset -= total;
    if (offset < -2) offset += total;

    if (offset === 0) return 'panel-center';
    if (offset === -1) return 'panel-left';
    if (offset === 1) return 'panel-right';
    if (offset === -2) return 'panel-outer-left';
    if (offset === 2) return 'panel-outer-right';
    if (offset === 3 || offset === -3) return 'panel-far';

    return 'panel-center';
  };

  const renderProjectGrid = (catId) => {
    const filtered = catId === 'all' 
      ? ALL_PROJECTS 
      : ALL_PROJECTS.filter(p => p.category.includes(catId));

    const flagship = filtered.filter(p => p.type === 'flagship');
    const exploratory = filtered.filter(p => p.type === 'exploratory');

    return (
      <div style={{ width: '100%' }}>
        {/* Solid #6B1F2A Category Indicator Badge */}
        {isCylinderActive && (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="font-mono" style={{
              fontSize: '0.82rem',
              color: '#ffffff',
              background: '#6B1F2A',
              padding: '5px 16px',
              borderRadius: '9999px',
              border: 'none',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              boxShadow: '0 2px 10px rgba(107, 31, 42, 0.4)'
            }}>
              // Category: {catId}
            </span>
          </div>
        )}

        {/* Flagship Projects Section */}
        {flagship.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Cpu size={16} color="#ffffff" />
              <h3 className="font-mono" style={{
                fontSize: '0.82rem',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600
              }}>
                // Flagship Builds
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '18px'
            }}>
              {flagship.map(project => (
                <div 
                  key={project.id}
                  className="corner-bracket-card"
                  onClick={() => setSelectedProject(project)}
                  style={{
                    padding: '22px',
                    cursor: 'pointer',
                    borderLeft: '3px solid #6B1F2A'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', lineHeight: '1.3' }}>
                      {project.title}
                    </h4>
                    <span className="font-mono" style={{
                      fontSize: '0.68rem',
                      color: '#ffffff',
                      background: '#6B1F2A',
                      padding: '3px 7px',
                      borderRadius: '3px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}>
                      FLAGSHIP
                    </span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '14px' }}>
                    {project.hook}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#ffffff' }} className="font-mono">
                    <span>inspect schematic / details</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exploratory Projects Section */}
        {exploratory.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Layers size={16} color="#ffffff" />
              <h3 className="font-mono" style={{
                fontSize: '0.82rem',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600
              }}>
                // Exploratory Builds
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px'
            }}>
              {exploratory.map(project => (
                <div 
                  key={project.id}
                  className="corner-bracket-card"
                  onClick={() => setSelectedProject(project)}
                  style={{
                    padding: '18px',
                    cursor: 'pointer'
                  }}
                >
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: '#ffffff', marginBottom: '8px', lineHeight: '1.4' }}>
                    {project.title}
                  </h4>

                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '12px' }}>
                    {project.hook}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--text-muted)' }} className="font-mono">
                    <span>view build specs</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State when Category has no items */}
        {filtered.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '50px 20px',
            background: '#000000',
            border: '1px dashed var(--border-subtle)',
            borderRadius: 'var(--radius-md)'
          }}>
            <Terminal size={30} color="var(--text-muted)" style={{ marginBottom: '12px' }} />
            <p className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '4px' }}>
              // no builds published yet under "{catId}"
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
              technical writeup / hardware specs coming soon!
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section style={{
      padding: '30px 20px 60px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff' }}>
            highlights<span style={{ color: '#6B1F2A' }}>!</span>
          </h2>
          <Sparkles size={18} color="#6B1F2A" />
        </div>
        <p className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          some things i built because i could
        </p>
      </div>

      {/* Scoped Projects Horizontal Cylinder Stage */}
      <div className="projects-cylinder-stage">
        <div className="projects-cylinder-viewport">
          {CATEGORIES.map((catId) => {
            const panelClass = getPanelClass(catId);
            if (panelClass === 'panel-hidden') return null;

            return (
              <div key={catId} className={`category-panel ${panelClass}`}>
                {renderProjectGrid(catId)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="font-mono" style={{
                fontSize: '0.75rem',
                color: '#ffffff',
                background: '#6B1F2A',
                padding: '3px 9px',
                borderRadius: '3px',
                fontWeight: 600
              }}>
                {selectedProject.type.toUpperCase()} BUILD
              </span>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                ID: #{selectedProject.id}
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
              {selectedProject.title}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedProject.details}
            </p>

            <div style={{ marginBottom: '20px' }}>
              <h5 className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                // Tech Stack & Hardware Components
              </h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#6B1F2A',
                  color: '#ffffff',
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  boxShadow: '0 2px 10px rgba(107, 31, 42, 0.4)'
                }}
              >
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="pcb-divider" style={{ marginTop: '50px' }}></div>
    </section>
  );
}
