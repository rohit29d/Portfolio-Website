import React, { useState } from 'react';
import { ArrowUpRight, Camera, ExternalLink, Film, Palette, Sparkles, X } from 'lucide-react';

export const TECHNICAL_PROJECTS = [
  {
    id: 'aeromesh',
    tier: 'major',
    title: 'Aeromesh — Edge AI Turbulence Detection Mesh Network',
    hook: 'Rapid-prototyped edge firmware on bare ESP32 + MPU6050 during CraftifAI Buildathon. In-situ ML classification detects turbulence on-device and transmits decentralized telemetry across adjacent mesh nodes without cloud lag.',
    tags: ['Edge AI', 'ESP32', 'ESP-IDF', 'Mesh Telemetry', 'IMU'],
    link: 'https://github.com/rohit29d/CraftifAI_Hackathon_Aeromesh',
    image: '/aeromesh.png'
  },
  {
    id: 'wheelchair',
    tier: 'major',
    title: 'Hands-Free sEMG Based Speech-Controlled Wheelchair',
    hook: 'Designed a custom Analog Front-End (AFE) PCB for sEMG acquisition from laryngeal muscles, validated gain and CMRR on bench. Trained real-time ML classifiers to translate silent speech signals directly into wheelchair motor actuation with safety overrides.',
    tags: ['Custom AFE PCB', 'STM32', 'Python ML', 'LTspice', 'KiCAD'],
    link: 'https://github.com/rohit29d/Hands-Free-sEMG-based-speech-controlled-wheelchair-',
    image: '/Wheelchair.png'
  },
  {
    id: 'semg-afe-v2',
    tier: 'major',
    title: 'Analog Front-End for sEMG Signal Acquisition V2',
    hook: 'In-house analog front-end circuit designed from scratch for acquiring microvolt sEMG signals, featuring low-noise instrumentation amplifiers, multi-stage active filtering, and high CMRR.',
    tags: ['Custom AFE PCB', 'KiCAD', 'Analog Filtering', 'LTspice', 'Bio-Sensors'],
    link: 'https://github.com/rohit29d/Analog-Front-End-for-sEMG-signals-Acquisition-V2',
    image: '/sEMG_AFE.png'
  },
  {
    id: 'alexa-tv',
    tier: 'minor',
    title: 'Alexa Voice-Controlled Smart TV Remote via ESP32',
    hook: 'Smart IR/Wi-Fi bridge built with ESP32 to smart-ify legacy non-smart household devices and appliances, enabling direct voice integration via Amazon Alexa.',
    tags: ['ESP32', 'ESP-IDF', 'IoT', 'IR Blaster', 'Alexa API'],
    link: 'https://github.com/rohit29d/Alexa-control-of-TV-with-ESP32',
    image: '/alexa_ir_tv.png'
  },
  {
    id: 'appimage-installer',
    tier: 'minor',
    title: 'Linux AppImage Desktop Integrator & Installer',
    hook: 'Shell automation script that seamlessly turns standalone Linux AppImages into fully integrated desktop apps in the Ubuntu application tray with proper MIME types and desktop shortcuts.',
    tags: ['Bash / Shell', 'Linux / Ubuntu', 'Automation', 'CLI Tool'],
    link: 'https://github.com/rohit29d/Appimage_installer',
    image: '/appimage.png'
  },
  {
    id: 'antigravity-installer',
    tier: 'minor',
    title: 'Antigravity Package Linux Desktop App Installer',
    hook: 'Shell utility to convert installed tarball application packages into native desktop applications in the Linux system app tray with desktop entries.',
    tags: ['Bash / Shell', 'Linux / Ubuntu', 'Desktop Integration'],
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
    tags: ['Embedded C', 'ADC Sensing', 'Automation', 'Actuation'],
    link: 'https://github.com/rohit29d/House-Hold-Auto-Plant-Watering-System',
    image: '/plantwaterer.png'
  },
  {
    id: 'speech-rec-ml',
    tier: 'minor',
    title: 'Speech Recognition Using Laryngeal sEMG Signals',
    hook: 'A trained and bench-tested Random Forest ML classification pipeline translating laryngeal sEMG biosignals into discrete directional wheelchair motion commands.',
    tags: ['Python', 'Random Forest', 'scikit-learn', 'Biosignal Processing'],
    link: 'https://github.com/rohit29d/Speech-recognition-using-Laryngeal-sEMG-signals',
    image: '/sEMG.png'
  },
  {
    id: 'seatbelt-safety',
    tier: 'minor',
    title: 'Automobile Seatbelt Safety Interlock State Machine',
    hook: 'Hardware safety interlock network engineered purely through discrete TTL 7400 digital logic gates to prevent vehicle ignition without occupant safety confirmation.',
    tags: ['TTL 7400 Series', 'Digital Logic', 'Hardware Safety', 'Interlock'],
    link: 'https://github.com/rohit29d/Automobile-Seatbelt-Detection-Module',
    image: '/autobelt.png'
  }
];

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

const categoryCopy = {
  technical: ['selected systems', 'schematic to silicon, firmware, and embedded builds'],
  photography: ['photography gallery', 'moments captured through the lens'],
  art: ['art & design', 'visual experiments, digital sketches, and vector art'],
  movies: ['film diary & watchlist', 'cinema that inspires my perspective']
};

export default function Projects({ activeCategory = 'technical' }) {
  const [activeTier, setActiveTier] = useState('major');
  const [lightboxItem, setLightboxItem] = useState(null);
  const currentCategory = activeCategory || 'technical';
  const [heading, subheading] = categoryCopy[currentCategory];
  const visibleProjects = TECHNICAL_PROJECTS.filter((project) => project.tier === activeTier);

  return (
    <section className="projects-scene">
      <header className="projects-heading">
        <div>
          <p className="eyebrow font-mono">the workbench / field notes</p>
          <h1>{heading}<span>.</span></h1>
          <p className="projects-subheading font-mono">{subheading}</p>
        </div>
        <Sparkles className="projects-heading-icon" size={20} />
      </header>

      {currentCategory === 'technical' && (
        <div className="technical-work">
          <div className="work-filter-row">
            <span className="work-filter-label font-mono">// filter by scale</span>
            <div className="work-filters" role="tablist" aria-label="Project scale">
              {['major', 'minor'].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  role="tab"
                  aria-selected={activeTier === tier}
                  className={`work-filter font-mono ${activeTier === tier ? 'active' : ''}`}
                  onClick={() => setActiveTier(tier)}
                >
                  {tier === 'major' ? 'major builds' : 'minor builds'}
                  <span>{TECHNICAL_PROJECTS.filter((project) => project.tier === tier).length}</span>
                </button>
              ))}
            </div>
            <span className="work-filter-hint font-mono">scroll / drag →</span>
          </div>

          <div
            className="project-lane"
            onWheel={(event) => {
              event.stopPropagation();
              if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                event.currentTarget.scrollLeft += event.deltaY;
              }
            }}
          >
            {visibleProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(event) => { event.currentTarget.src = '/wine_circuits.gif'; }}
                  />
                  <span className="project-media-index font-mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-media-link font-mono">github <ArrowUpRight size={12} /></span>
                  {project.imageCredit && (
                    <span
                      className="image-credit font-mono"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        window.open(project.imageCredit.url, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      {project.imageCredit.label} <ExternalLink size={10} />
                    </span>
                  )}
                </div>
                <div className="project-copy">
                  <span className="project-kicker font-mono">{project.tier} / {String(index + 1).padStart(2, '0')}</span>
                  <h2>{project.title}</h2>
                  <p>{project.hook}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}
                  </div>
                  <span className="project-open font-mono">open repository <ArrowUpRight size={13} /></span>
                </div>
              </a>
            ))}
            <div className="project-lane-end">
              <span className="font-mono">more experiments<br />in the logbook</span>
            </div>
          </div>
        </div>
      )}

      {currentCategory === 'photography' && (
        <GalleryNotice icon={<Camera size={15} />} text="Drop any photos into public/photography/ to display in this gallery." />
      )}
      {currentCategory === 'photography' && (
        <div className="gallery-grid">
          {SAMPLE_PHOTOS.map((photo) => (
            <button className="gallery-card" type="button" key={photo.id} onClick={() => setLightboxItem(photo)}>
              <img src={photo.src} alt={photo.title} />
              <span className="font-mono">{photo.date}</span>
              <h2>{photo.title}</h2>
              <p>{photo.caption}</p>
            </button>
          ))}
        </div>
      )}

      {currentCategory === 'art' && (
        <>
          <GalleryNotice icon={<Palette size={15} />} text="Drop your sketches, vector art, and 3D renders into public/art/." />
          <div className="gallery-grid art-grid">
            {SAMPLE_ART.map((art) => (
              <button className="gallery-card" type="button" key={art.id} onClick={() => setLightboxItem(art)}>
                <img src={art.src} alt={art.title} />
                <span className="font-mono">{art.type}</span>
                <h2>{art.title}</h2>
                <p>{art.note}</p>
              </button>
            ))}
          </div>
        </>
      )}

      {currentCategory === 'movies' && (
        <>
          <GalleryNotice icon={<Film size={15} />} text="A curated log of films, direction, and cinematography that inspire my creative thinking." />
          <div className="movie-grid">
            {SAMPLE_MOVIES.map((movie) => (
              <article className="movie-card" key={movie.id}>
                <div className="movie-card-topline">
                  <span className="font-mono">{movie.year} / {movie.director}</span>
                  <strong className="font-mono">{movie.rating}</strong>
                </div>
                <h2>{movie.title}</h2>
                <p>“{movie.thoughts}”</p>
              </article>
            ))}
          </div>
        </>
      )}

      {lightboxItem && (
        <div className="lightbox" onClick={() => setLightboxItem(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setLightboxItem(null)} aria-label="Close image">
              <X size={18} />
            </button>
            <img src={lightboxItem.src} alt={lightboxItem.title} />
            <div>
              <span className="font-mono">visual log</span>
              <h2>{lightboxItem.title}</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryNotice({ icon, text }) {
  return (
    <div className="gallery-notice">
      <span className="gallery-notice-icon">{icon}</span>
      <span className="font-mono">{text}</span>
      <strong className="font-mono">auto-synced</strong>
    </div>
  );
}