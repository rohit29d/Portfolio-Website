import React, { useState } from 'react';
import { Sparkles, Camera, Palette, Film, ArrowUpRight, ExternalLink } from 'lucide-react';

export const TECHNICAL_PROJECTS = [
  // --- MAJOR BUILDS ---
  {
    id: 'aeromesh',
    tier: 'major',
    title: 'Aeromesh — Edge AI Turbulence Detection Mesh Network',
    hook: 'Rapid-prototyped edge firmware on bare ESP32 + MPU6050 during CraftifAI Buildathon. In-situ Edge-AI detects turbulence on-device and transmits decentralized telemetry across adjacent mesh nodes without cloud lag.',
    tags: ['ESP32', 'ESP-IDF', 'Firmgen', 'Edge AI', 'IMU'],
    link: 'https://github.com/rohit29d/CraftifAI_Hackathon_Aeromesh',
    image: '/aeromesh.png'
  },
  {
    id: 'wheelchair',
    tier: 'major',
    title: 'Hands-Free sEMG Based Speech-Controlled Wheelchair',
    hook: 'Engineered a complete sEMG controlled wheelchair from scratch as a part of my bachelors final year thesis. This project covered a complete end-to-product. The custom AFE realized on a PCB for signal acquisition from the laryngeal region, followed by the ML model rigorusly trained and tuned for command recognition and finally the hardware level processing and motor actuation on an STM32-H7 board',
    tags: ['PCB-Design', 'STM32', 'Python ML', 'LTspice', 'Embedded-System', 'BioMed-Healthcare'],
    link: 'https://github.com/rohit29d/Hands-Free-sEMG-based-speech-controlled-wheelchair-',
    image: '/Wheelchair.png'
  },
  {
    id: 'semg-afe-v2',
    tier: 'major',
    title: 'Analog Front-End for sEMG Signal Acquisition V2',
    hook: 'In-house analog front-end circuit designed from scratch for acquiring microvolt sEMG signals featuring low-noise instrumentation amplifiers, multi-stage active filtering, and high CMRR.',
    tags: ['Custom AFE PCB', 'KiCAD', 'Analog Filtering', 'LTspice', 'Bio-Sensors'],
    link: 'https://github.com/rohit29d/Analog-Front-End-for-sEMG-signals-Acquisition-V2',
    image: '/sEMG_AFE.png'
  },

  // --- MINOR BUILDS ---
  {
    id: 'alexa-tv',
    tier: 'minor',
    title: 'Alexa Voice-Controlled Smart TV Remote via ESP32',
    hook: 'Smart IR/Wi-Fi bridge built with ESP32 to smart-ify a TV, enabling direct voice integration via Alexa.',
    tags: ['ESP32', 'ESP-IDF', 'IoT', 'Vibe-coded'],
    link: 'https://github.com/rohit29d/Alexa-control-of-TV-with-ESP32',
    image: '/alexa_ir_tv.png'
  },
  {
    id: 'appimage-installer',
    tier: 'minor',
    title: 'Linux AppImage Desktop Integrator & Installer',
    hook: 'Shell automation script that easily turns standalone Linux AppImages into fully integrated desktop apps in the Ubuntu application tray with proper MIME types and desktop shortcuts.',
    tags: ['Bash / Shell', 'Automation', "Vibe-coded"],
    link: 'https://github.com/rohit29d/Appimage_installer',
    image: '/appimage.png'
  },
  {
    id: 'antigravity-installer',
    tier: 'minor',
    title: 'Antigravity Package Linux Desktop App Installer',
    hook: 'Shell utility to convert installed tarball application packages into native desktop applications in the Linux system app tray with desktop entries.',
    tags: ['Bash / Shell', 'Automation', "Vibe-coded"],
    link: 'https://github.com/rohit29d/Antigravity_appinstaller',
    image: '/Antigravity.jpg',
    imageCredit: {
      label: 'Image © Incrypted.com',
      url: 'https://incrypted.com/en/google-antigravity-guide-agentic-development-environment/'
    }
  },
  {
    id: 'plant-watering',
    tier: 'minor',
    title: 'Autonomous Household Plant Watering Controller',
    hook: 'Automated irrigation controller using solar ambient sensing and custom scheduling algorithms to replace traditional RTC chips and actuate relay-driven valves.',
    tags: ['Arduino', 'Solar-ADC Sensing', 'Automation'],
    link: 'https://github.com/rohit29d/House-Hold-Auto-Plant-Watering-System',
    image: '/plantwaterer.png'
  },
  {
    id: 'speech-rec-ml',
    tier: 'minor',
    title: 'Speech Recognition Using Laryngeal sEMG Signals',
    hook: 'A trained and bench-tested Random Forest ML classification pipeline translating laryngeal sEMG biosignals into discrete directional wheelchair motion commands.',
    tags: ['Python', 'ML-Models', 'Biosignal Processing'],
    link: 'https://github.com/rohit29d/Speech-recognition-using-Laryngeal-sEMG-signals',
    image: '/sEMG.png'
  },
  {
    id: 'seatbelt-safety',
    tier: 'minor',
    title: 'Automobile Seatbelt Safety Interlock State Machine',
    hook: 'A simple Gate-logic based system to detect and flag seat-belts for drivers and passengers. This is a very elementary project but since its my first official project what i did from scratch , Its on here',
    tags: ['TTL 7400 Series', 'Digital Logic'],
    link: 'https://github.com/rohit29d/Automobile-Seatbelt-Detection-Module',
    image: '/autobelt.png'
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
  // Active and hover-scrub state for Major / Minor build sub-menu
  const [activeTier, setActiveTier] = useState('major'); // 'major' or 'minor'
  const [scrubbedTier, setScrubbedTier] = useState('major');
  const [isTierHovered, setIsTierHovered] = useState(false);

  const [lightboxItem, setLightboxItem] = useState(null);

  const currentCategory = isCylinderActive ? (scrubbedCategory || activeCategory) : activeCategory;
  const currentTier = isTierHovered ? (scrubbedTier || activeTier) : activeTier;

  const majorCount = TECHNICAL_PROJECTS.filter(p => p.tier === 'major').length;
  const minorCount = TECHNICAL_PROJECTS.filter(p => p.tier === 'minor').length;

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
          {/* Sub-Sub 2-Way Hover-Select Menu: [ Major Builds ] / [ Minor Builds ] */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '36px',
              gap: '10px'
            }}
          >
            <div
              onMouseEnter={() => {
                setIsTierHovered(true);
                setScrubbedTier(activeTier);
              }}
              onMouseLeave={() => {
                setIsTierHovered(false);
                if (scrubbedTier) setActiveTier(scrubbedTier);
              }}
              style={{
                display: 'inline-flex',
                background: '#000000',
                border: '1px solid var(--border-subtle)',
                borderRadius: '9999px',
                padding: '4px',
                gap: '4px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)'
              }}
            >
              {/* Major Builds Button */}
              <button
                type="button"
                onClick={() => {
                  setActiveTier('major');
                  setScrubbedTier('major');
                  setIsTierHovered(false);
                }}
                onMouseEnter={() => setScrubbedTier('major')}
                className="font-mono"
                style={{
                  padding: '7px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.84rem',
                  fontWeight: currentTier === 'major' ? 600 : 400,
                  cursor: 'pointer',
                  background: currentTier === 'major' ? '#6B1F2A' : 'transparent',
                  color: currentTier === 'major' ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.22s var(--ease-smooth)',
                  boxShadow: currentTier === 'major' ? '0 2px 10px rgba(107, 31, 42, 0.45)' : 'none'
                }}
              >
                Major Builds ({majorCount})
              </button>

              {/* Minor Builds Button */}
              <button
                type="button"
                onClick={() => {
                  setActiveTier('minor');
                  setScrubbedTier('minor');
                  setIsTierHovered(false);
                }}
                onMouseEnter={() => setScrubbedTier('minor')}
                className="font-mono"
                style={{
                  padding: '7px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.84rem',
                  fontWeight: currentTier === 'minor' ? 600 : 400,
                  cursor: 'pointer',
                  background: currentTier === 'minor' ? '#6B1F2A' : 'transparent',
                  color: currentTier === 'minor' ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.22s var(--ease-smooth)',
                  boxShadow: currentTier === 'minor' ? '0 2px 10px rgba(107, 31, 42, 0.45)' : 'none'
                }}
              >
                Minor Builds ({minorCount})
              </button>
            </div>

            {/* Tagline below Major / Minor menu */}
            <p className="font-mono" style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              margin: 0,
              letterSpacing: '0.03em',
              transition: 'opacity 0.25s ease'
            }}>
              {currentTier === 'major'
                ? '// flagship hardware architectures, custom PCBs, and end-to-end systems'
                : '// exploratory firmware modules, automation scripts, and rapid hardware prototypes'}
            </p>
          </div>

          {/* Abhijith Style Project Cards (Large photo on left, details on right, whole card clickable) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {TECHNICAL_PROJECTS.filter(p => p.tier === currentTier).map((project) => (
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

                  {/* GitHub link indicator top right */}
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
                    fontSize: '0.72rem',
                    zIndex: 2
                  }} className="font-mono">
                    <span>github</span>
                    <ArrowUpRight size={12} />
                  </div>

                  {/* Optional Image Attribution credit badge on bottom left */}
                  {project.imageCredit && (
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.imageCredit.url, '_blank', 'noopener,noreferrer');
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        background: 'rgba(0, 0, 0, 0.82)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.66rem',
                        textDecoration: 'none',
                        zIndex: 3,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      className="font-mono"
                      title="View original image source on Incrypted.com"
                      onMouseOver={e => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#6B1F2A';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                      }}
                    >
                      <span>{project.imageCredit.label}</span>
                      <ExternalLink size={10} />
                    </span>
                  )}
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
