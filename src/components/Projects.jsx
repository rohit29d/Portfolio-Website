import React, { useState } from 'react';
import { Cpu, ExternalLink, Sparkles, Camera, Palette, Film, ArrowUpRight, Check, Image as ImageIcon, Plus } from 'lucide-react';

export const TECHNICAL_PROJECTS = [
  {
    id: 'wheelchair',
    subType: 'hardware',
    title: 'Hands-Free sEMG Based Speech-Controlled Wheelchair',
    hook: 'Designed a custom Analog Front-End (AFE) PCB for sEMG acquisition from laryngeal muscles, validated gain and CMRR on bench. Trained real-time ML classifiers to translate silent speech signals directly into wheelchair motor actuation with safety overrides.',
    tags: ['Custom AFE PCB', 'STM32', 'Python ML', 'LTspice', 'KiCAD'],
    link: 'https://github.com/rohit29d',
    image: '/circuit-bg.jpg'
  },
  {
    id: 'fpga-arbiter',
    subType: 'hardware',
    title: 'Priority Arbiter for Multi-Channel Bus',
    hook: 'Designed and validated a deterministic multi-channel bus priority arbiter from RTL to FPGA using encoder and sequencer-based arbitration logic. Verified timing correctness through RTL simulation on Xilinx Vivado and Basys-3 FPGA.',
    tags: ['VHDL', 'Basys-3 FPGA', 'Vivado RTL', 'Digital Logic'],
    link: 'https://github.com/rohit29d',
    image: '/circuit-bg.jpg'
  },
  {
    id: 'semg-afe',
    subType: 'hardware',
    title: 'Wearable Analog Front-End (AFE) for Biopotential Sensing',
    hook: 'Compact 60×25mm biopotential sensing board with multi-stage active analog filtering, high CMRR instrumentation amplifier, and noise suppression for microvolt biological signals.',
    tags: ['Wearable PCB', 'KiCAD', 'Analog Filtering', 'LTspice'],
    link: 'https://github.com/rohit29d',
    image: '/circuit-bg.jpg'
  },
  {
    id: 'rf-transceiver',
    subType: 'hardware',
    title: 'Discrete RF Data Transmission & Reception Module',
    hook: 'Engineered discrete 433MHz RF oscillator, ASK/FSK modulation, and receiver stages from scratch, verifying antenna impedance matching and harmonic suppression.',
    tags: ['Discrete RF', 'Hardware Design', 'LTspice', 'Oscillators'],
    link: 'https://github.com/rohit29d',
    image: '/circuit-bg.jpg'
  },
  {
    id: 'aeromesh',
    subType: 'software',
    title: 'Aeromesh — Edge AI Turbulence Detection Mesh Network',
    hook: 'Rapid-prototyped edge firmware on bare ESP32 + MPU6050 during CraftifAI Buildathon. In-situ ML classification detects turbulence on-device and transmits decentralized telemetry across adjacent mesh nodes without cloud lag.',
    tags: ['Edge AI', 'ESP32', 'ESP-IDF', 'Mesh Telemetry'],
    link: 'https://github.com/rohit29d',
    image: '/circuit-bg.jpg'
  },
  {
    id: 'radar-dsp',
    subType: 'software',
    title: 'FMCW Radar Range & Doppler 2D FFT Signal Processing',
    hook: 'Processed raw FMCW radar beat signals in MATLAB, applying Chebyshev windowing, Range FFT, and Doppler 2D FFT mapping to isolate high-noise targets with precision velocity estimation.',
    tags: ['MATLAB', 'DSP', 'Radar Algorithms', '2D FFT'],
    link: 'https://github.com/rohit29d',
    image: '/circuit-bg.jpg'
  },
  {
    id: 'plant-irrigation',
    subType: 'software',
    title: 'Autonomous Solar-Scheduled Plant Irrigation System',
    hook: 'Embedded C controller replacing traditional RTC chips by sampling solar panel ADC voltage curves to calculate diurnal solar cycles and autonomously pulse relay-driven solenoid valves.',
    tags: ['Embedded C', 'STM32 / AVR', 'Low Power', 'Control Logic'],
    link: 'https://github.com/rohit29d',
    image: '/circuit-bg.jpg'
  },
  {
    id: 'seatbelt-safety',
    subType: 'hardware',
    title: 'Automobile Seatbelt Safety Interlock State Machine',
    hook: 'Discrete TTL logic gate network implementing fail-safe ignition interlock based on pressure and latch sensors without MCU dependencies.',
    tags: ['TTL 7400 Series', 'Digital Circuits', 'Hardware Safety'],
    link: 'https://github.com/rohit29d',
    image: '/circuit-bg.jpg'
  }
];

// Sample initial galleries (scans / displays images in public/photography, public/art, public/movies)
const SAMPLE_PHOTOS = [
  { id: 1, title: 'Urban Geometry', date: '2026', src: '/circuit-bg.jpg', caption: 'Angles and shadows in the city' },
  { id: 2, title: 'Silicon Macro', date: '2025', src: '/wine_circuits.gif', caption: 'SMD components under 40x magnification' },
  { id: 3, title: 'Night Lab Session', date: '2025', src: '/circuit-bg.jpg', caption: 'Oscilloscope waveforms at 3 AM' }
];

const SAMPLE_ART = [
  { id: 1, title: 'Schematic Abstract I', type: 'Vector / PCB Art', src: '/wine_circuits.gif', note: 'Topological trace routing aesthetics' },
  { id: 2, title: 'Silicon Dreams', type: 'Digital Illustration', src: '/avatar.png', note: 'Illustrated portrait & character design' }
];

const SAMPLE_MOVIES = [
  { id: 1, title: 'Blade Runner 2049', year: '2017', director: 'Denis Villeneuve', rating: '10/10', thoughts: 'Atmospheric perfection and sound design masterclass.' },
  { id: 2, title: 'Oppenheimer', year: '2023', director: 'Christopher Nolan', rating: '9.5/10', thoughts: 'Pacing, theoretical physics, and historical gravity.' },
  { id: 3, title: 'Ex Machina', year: '2014', director: 'Alex Garland', rating: '9/10', thoughts: 'Claustrophobic AI ethics and minimalist hardware design.' },
  { id: 4, title: 'Interstellar', year: '2014', director: 'Christopher Nolan', rating: '10/10', thoughts: 'Relativity, time dilation, and emotional resonance.' }
];

export default function Projects({ activeCategory = 'technical', scrubbedCategory = 'technical', isCylinderActive = false }) {
  const [techSubMenu, setTechSubMenu] = useState('hardware'); // 'hardware' or 'software'
  const [lightboxItem, setLightboxItem] = useState(null);

  const currentCategory = isCylinderActive ? (scrubbedCategory || activeCategory) : activeCategory;

  return (
    <section style={{
      padding: '30px 20px 80px',
      maxWidth: '960px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#ffffff' }}>
            {currentCategory === 'technical' && 'works & engineering'}
            {currentCategory === 'photography' && 'photography gallery'}
            {currentCategory === 'art' && 'art & design'}
            {currentCategory === 'movies' && 'film diary & watchlist'}
          </h2>
          <Sparkles size={18} color="#6B1F2A" />
        </div>
        <p className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          {currentCategory === 'technical' && 'schematic to silicon, firmware, and embedded builds'}
          {currentCategory === 'photography' && 'moments captured through the lens'}
          {currentCategory === 'art' && 'visual experiments, digital sketches, and vector art'}
          {currentCategory === 'movies' && 'cinema that inspires my perspective'}
        </p>
      </div>

      {/* 1. TECHNICAL CATEGORY VIEW */}
      {currentCategory === 'technical' && (
        <div>
          {/* Sub-Sub 2-Way Toggle Menu: [ Hardware ] / [ Software ] */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '36px'
          }}>
            <div style={{
              display: 'inline-flex',
              background: '#000000',
              border: '1px solid var(--border-subtle)',
              borderRadius: '9999px',
              padding: '4px',
              gap: '4px'
            }}>
              <button
                type="button"
                onClick={() => setTechSubMenu('hardware')}
                className="font-mono"
                style={{
                  padding: '7px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: techSubMenu === 'hardware' ? '#6B1F2A' : 'transparent',
                  color: techSubMenu === 'hardware' ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.25s var(--ease-smooth)',
                  boxShadow: techSubMenu === 'hardware' ? '0 2px 10px rgba(107, 31, 42, 0.4)' : 'none'
                }}
              >
                Hardware ({TECHNICAL_PROJECTS.filter(p => p.subType === 'hardware').length})
              </button>

              <button
                type="button"
                onClick={() => setTechSubMenu('software')}
                className="font-mono"
                style={{
                  padding: '7px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: techSubMenu === 'software' ? '#6B1F2A' : 'transparent',
                  color: techSubMenu === 'software' ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.25s var(--ease-smooth)',
                  boxShadow: techSubMenu === 'software' ? '0 2px 10px rgba(107, 31, 42, 0.4)' : 'none'
                }}
              >
                Software ({TECHNICAL_PROJECTS.filter(p => p.subType === 'software').length})
              </button>
            </div>
          </div>

          {/* Abhijith Style Project Cards (Large photo on left, details on right, whole card clickable) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {TECHNICAL_PROJECTS.filter(p => p.subType === techSubMenu).map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="corner-bracket-card"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '28px',
                  padding: '24px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease-smooth)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = '#6B1F2A';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Left Side: Featured Media Preview Photo */}
                <div style={{
                  width: '320px',
                  minWidth: '280px',
                  height: '190px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  background: '#000000',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative',
                  flexShrink: 0
                }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.95) contrast(1.05)',
                      transition: 'transform 0.5s var(--ease-smooth)'
                    }}
                    onError={(e) => {
                      e.target.src = '/wine_circuits.gif';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#ffffff',
                    fontSize: '0.72rem'
                  }} className="font-mono">
                    <span>github</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>

                {/* Right Side: Title, Description, & Stack Tags */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '10px',
                    lineHeight: '1.35',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>{project.title}</span>
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    {project.hook}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag" style={{ fontSize: '0.74rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 2. PHOTOGRAPHY CATEGORY VIEW */}
      {currentCategory === 'photography' && (
        <div>
          {/* Helper Drop-in Notice */}
          <div style={{
            background: '#000000',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '14px 20px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Camera size={16} color="#6B1F2A" />
              <span className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Drop any photos into <code style={{ color: '#ffffff' }}>public/photography/</code> to display in this gallery.
              </span>
            </div>
            <span className="font-mono" style={{ fontSize: '0.74rem', color: '#6B1F2A', fontWeight: 600 }}>
              AUTO-SYNCED
            </span>
          </div>

          {/* Photo Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {SAMPLE_PHOTOS.map((photo) => (
              <div 
                key={photo.id}
                className="corner-bracket-card"
                onClick={() => setLightboxItem(photo)}
                style={{
                  padding: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease-smooth)'
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = '#6B1F2A'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
              >
                <div style={{
                  height: '220px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  background: '#000000',
                  marginBottom: '10px'
                }}>
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: '#ffffff' }}>{photo.title}</h4>
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{photo.date}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. ART & DESIGN CATEGORY VIEW */}
      {currentCategory === 'art' && (
        <div>
          {/* Helper Drop-in Notice */}
          <div style={{
            background: '#000000',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '14px 20px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Palette size={16} color="#6B1F2A" />
              <span className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Drop your sketches, vector art, and 3D renders into <code style={{ color: '#ffffff' }}>public/art/</code>
              </span>
            </div>
            <span className="font-mono" style={{ fontSize: '0.74rem', color: '#6B1F2A', fontWeight: 600 }}>
              AUTO-SYNCED
            </span>
          </div>

          {/* Art Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {SAMPLE_ART.map((art) => (
              <div 
                key={art.id}
                className="corner-bracket-card"
                onClick={() => setLightboxItem(art)}
                style={{
                  padding: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease-smooth)'
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = '#6B1F2A'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
              >
                <div style={{
                  height: '240px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  background: '#000000',
                  marginBottom: '12px'
                }}>
                  <img 
                    src={art.src} 
                    alt={art.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>{art.title}</h4>
                  <span className="font-mono" style={{
                    fontSize: '0.70rem',
                    color: '#ffffff',
                    background: '#6B1F2A',
                    padding: '2px 7px',
                    borderRadius: '3px'
                  }}>
                    {art.type}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {art.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. MOVIES & FILM DIARY CATEGORY VIEW */}
      {currentCategory === 'movies' && (
        <div>
          <div style={{
            background: '#000000',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '14px 20px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Film size={16} color="#6B1F2A" />
            <span className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              A curated log of films, direction, and cinematography that inspire my creative thinking.
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px'
          }}>
            {SAMPLE_MOVIES.map((movie) => (
              <div 
                key={movie.id}
                className="corner-bracket-card"
                style={{ padding: '20px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff' }}>
                    {movie.title}
                  </h4>
                  <span className="font-mono" style={{
                    fontSize: '0.72rem',
                    color: '#ffffff',
                    background: '#6B1F2A',
                    padding: '2px 8px',
                    borderRadius: '3px',
                    fontWeight: 600
                  }}>
                    {movie.rating}
                  </span>
                </div>

                <p className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  {movie.year} • Dir. {movie.director}
                </p>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  "{movie.thoughts}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox / Modal for photos & art */}
      {lightboxItem && (
        <div 
          className="modal-backdrop"
          onClick={() => setLightboxItem(null)}
          style={{ zIndex: 100 }}
        >
          <div 
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '750px', padding: '16px', background: '#000000', border: '1px solid var(--border-subtle)' }}
          >
            <div style={{ width: '100%', maxHeight: '70vh', overflow: 'hidden', borderRadius: 'var(--radius-sm)', marginBottom: '12px' }}>
              <img 
                src={lightboxItem.src} 
                alt={lightboxItem.title}
                style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                {lightboxItem.title}
              </h3>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="font-mono"
                style={{
                  background: '#6B1F2A',
                  color: '#ffffff',
                  border: 'none',
                  padding: '5px 14px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="pcb-divider" style={{ marginTop: '50px' }}></div>
    </section>
  );
}
