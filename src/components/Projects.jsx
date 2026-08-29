import React, { useState } from 'react';
import { Cpu, ExternalLink, Sparkles, Layers, Terminal, ChevronRight, X } from 'lucide-react';

export const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Hands-Free sEMG Speech-Controlled Wheelchair',
    category: ['firmware', 'pcb'],
    type: 'flagship',
    hook: 'custom AFE PCB, real-time ML classification, wheelchair actuation',
    tags: ['STM32', 'Python', 'LTspice', 'KiCAD'],
    link: 'https://github.com/rohit29d',
    details: 'Designed a custom Analog Front-End (AFE) PCB to capture biopotential sEMG signals from facial/vocal muscles. Implemented real-time machine learning inference on STM32 microcontroller to translate signal patterns into wheelchair motor control actuation with safety interlocks.'
  },
  {
    id: 2,
    title: 'Priority Arbiter for Multi-Channel Bus',
    category: ['fpga'],
    type: 'flagship',
    hook: 'RTL to FPGA implementation, deterministic multi-master arbitration',
    tags: ['VHDL', 'Basys-3 FPGA', 'Vivado'],
    link: 'https://github.com/rohit29d',
    details: 'Architected a deterministic priority arbitration IP core in VHDL for shared multi-channel bus communication. Simulated logic timing, synthesized RTL onto a Xilinx Basys-3 FPGA board, and validated collision-free bus master access under full load.'
  },
  {
    id: 3,
    title: 'Aeromesh — CraftifAI Buildathon',
    category: ['firmware'],
    type: 'exploratory',
    hook: 'edge AI turbulence detection mesh network',
    tags: ['ESP32', 'FirmGen', 'C++'],
    link: 'https://github.com/rohit29d',
    details: 'Built an edge AI mesh network of ESP32 sensor nodes to detect atmospheric turbulence and environmental anomalies in real-time. Automated firmware generation using FirmGen during the CraftifAI Buildathon.'
  },
  {
    id: 4,
    title: 'Automatic Plant Watering System',
    category: ['firmware'],
    type: 'exploratory',
    hook: 'autonomous soil moisture sensing & relay actuation',
    tags: ['Arduino Uno', 'C', 'Embedded C'],
    link: 'https://github.com/rohit29d',
    details: 'Engineered an autonomous irrigation control system using capacitive soil moisture sensors, analog-to-digital sampling, and relay drive circuitry to maintain optimal soil hydration.'
  },
  {
    id: 5,
    title: 'Analog Front-End for sEMG Acquisition',
    category: ['pcb'],
    type: 'exploratory',
    hook: 'low-noise biopotential amplifier & active filtering PCB',
    tags: ['LTspice', 'KiCAD', 'Analog Circuit'],
    link: 'https://github.com/rohit29d',
    details: 'Simulated and designed a multi-stage analog front-end PCB featuring high-CMRR instrumentation amplification, notch filtering at 50Hz/60Hz, and active bandpass filtering (20Hz–500Hz) for clean EMG acquisition.'
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

  // Compute 3D cylinder class for each category panel
  const getPanelClass = (catId) => {
    if (!isCylinderActive) {
      return catId === activeCategory ? 'panel-flat' : 'panel-hidden';
    }

    const currentCenter = scrubbedCategory || activeCategory;
    const targetIdx = CATEGORIES.indexOf(currentCenter);
    const itemIdx = CATEGORIES.indexOf(catId);
    const total = CATEGORIES.length; // 6

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
        {/* Category Indicator Tag when in 3D Cylinder Mode */}
        {isCylinderActive && (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="font-mono" style={{
              fontSize: '0.85rem',
              color: 'var(--accent-slate)',
              background: 'var(--accent-slate-soft)',
              padding: '4px 14px',
              borderRadius: '9999px',
              border: '1px solid var(--accent-slate-border)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>
              // Category: {catId}
            </span>
          </div>
        )}

        {/* Flagship Projects Section */}
        {flagship.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Cpu size={16} color="var(--accent-slate)" />
              <h3 className="font-mono" style={{
                fontSize: '0.82rem',
                color: 'var(--accent-slate)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
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
                    borderLeft: '3px solid var(--accent-slate)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.3' }}>
                      {project.title}
                    </h4>
                    <span className="font-mono" style={{
                      fontSize: '0.68rem',
                      color: 'var(--accent-slate)',
                      background: 'var(--accent-slate-soft)',
                      padding: '2px 6px',
                      borderRadius: '3px',
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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--accent-slate)' }} className="font-mono">
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
              <Layers size={16} color="var(--copper-gold)" />
              <h3 className="font-mono" style={{
                fontSize: '0.82rem',
                color: 'var(--copper-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
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
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: '1.4' }}>
                    {project.title}
                  </h4>

                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '12px' }}>
                    {project.hook}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
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
            background: 'var(--bg-card)',
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
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            highlights<span style={{ color: 'var(--accent-slate)' }}>!</span>
          </h2>
          <Sparkles size={18} color="var(--accent-slate)" />
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
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-slate)', background: 'var(--accent-slate-soft)', padding: '2px 8px', borderRadius: '3px' }}>
                {selectedProject.type.toUpperCase()} BUILD
              </span>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                ID: #{selectedProject.id}
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
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
                  <span key={idx} className="tech-tag" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
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
                  background: 'var(--accent-slate)',
                  color: '#000000',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PCB Divider */}
      <div className="pcb-divider" style={{ marginTop: '50px' }}></div>
    </section>
  );
}
