import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';
import SpaceBackdrop from './components/SpaceBackdrop';

const SECTIONS = ['home', 'projects', 'about', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrubbedSection, setScrubbedSection] = useState('home');
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Trigger: Cursor enters top nav bar
  const handleNavMouseEnter = () => {
    setIsNavHovered(true);
    setScrubbedSection(activeSection);
  };

  // Commit: Cursor leaves top nav bar entirely
  const handleNavMouseLeave = () => {
    setIsNavHovered(false);
    if (scrubbedSection) {
      setActiveSection(scrubbedSection);
    }
  };

  // Scrub: Cursor moves over specific nav item
  const handleItemHover = (sectionId) => {
    setScrubbedSection(sectionId);
  };

  // Direct Click on nav item
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setScrubbedSection(sectionId);
    setIsNavHovered(false);
  };

  // Calculate 3D concave position class for each section in the continuous circular ring
  const getCardClass = (sectionId) => {
    if (!isNavHovered) {
      return sectionId === activeSection ? 'card-full' : 'card-carousel-far';
    }

    const currentCenter = scrubbedSection || activeSection;
    const targetIdx = SECTIONS.indexOf(currentCenter);
    const itemIdx = SECTIONS.indexOf(sectionId);
    const total = SECTIONS.length; // 4

    // Modulo circular shortest offset calculation in range [-1, 2]:
    let offset = (itemIdx - targetIdx) % total;
    if (offset > 2) offset -= total;
    if (offset < -1) offset += total;

    if (offset === 0) return 'card-carousel-center';
    if (offset === -1) return 'card-carousel-left';
    if (offset === 1) return 'card-carousel-right';
    if (offset === 2 || offset === -2) return 'card-carousel-far';

    return 'card-carousel-center';
  };

  const focusedSection = isNavHovered ? (scrubbedSection || activeSection) : activeSection;

  return (
    <div className={`carousel-stage ${isNavHovered ? 'nav-active' : ''}`}>
      {/* SVG Concave Spherical Distortion ClipPath Definition */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <clipPath id="concave-spherical-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 Q 0.5 0.015, 1 0 C 0.94 0.28, 0.94 0.72, 1 1 Q 0.5 0.985, 0 1 C 0.06 0.72, 0.06 0.28, 0 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Deep Space Starfield & Galaxy Backdrop (Fades in during zoom-out) */}
      <SpaceBackdrop active={isNavHovered} />

      {/* Top Header Navigation */}
      <Header 
        activeSection={activeSection}
        scrubbedSection={isNavHovered ? scrubbedSection : null}
        onNavMouseEnter={handleNavMouseEnter}
        onNavMouseLeave={handleNavMouseLeave}
        onItemHover={handleItemHover}
        onNavClick={handleNavClick}
      />

      {/* 3D Concave Circular Carousel Viewport Container */}
      <main className="carousel-viewport">
        {/* Card 0: Home Section */}
        <div className={`carousel-card ${getCardClass('home')}`}>
          <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        </div>

        {/* Card 1: Projects Section */}
        <div className={`carousel-card ${getCardClass('projects')}`}>
          <Projects activeCategory={activeCategory} />
        </div>

        {/* Card 2: About Section */}
        <div className={`carousel-card ${getCardClass('about')}`}>
          <AboutContact viewMode="about" />
        </div>

        {/* Card 3: Contact Section */}
        <div className={`carousel-card ${getCardClass('contact')}`}>
          <AboutContact viewMode="contact" />
        </div>
      </main>

      {/* Projects-Specific Bottom Capsule Filter (Only Visible when Projects Plane is Focused) */}
      <BottomNav 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        isProjectsVisible={focusedSection === 'projects'}
      />

      {/* Terminal CLI Modal Simulator */}
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
