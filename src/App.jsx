import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';

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

  // Calculate position class for each section in the carousel
  const getCardClass = (sectionId) => {
    if (!isNavHovered) {
      return sectionId === activeSection ? 'card-full' : 'card-carousel-far-right';
    }

    const currentCenter = scrubbedSection || activeSection;
    const targetIdx = SECTIONS.indexOf(currentCenter);
    const itemIdx = SECTIONS.indexOf(sectionId);
    const offset = itemIdx - targetIdx;

    if (offset === 0) return 'card-carousel-center';
    if (offset === -1) return 'card-carousel-left';
    if (offset === 1) return 'card-carousel-right';
    if (offset < -1) return 'card-carousel-far-left';
    if (offset > 1) return 'card-carousel-far-right';

    return 'card-carousel-center';
  };

  const focusedSection = isNavHovered ? (scrubbedSection || activeSection) : activeSection;

  return (
    <div className={`carousel-stage ${isNavHovered ? 'nav-active' : ''}`}>
      {/* Top Header Navigation */}
      <Header 
        activeSection={activeSection}
        scrubbedSection={isNavHovered ? scrubbedSection : null}
        onNavMouseEnter={handleNavMouseEnter}
        onNavMouseLeave={handleNavMouseLeave}
        onItemHover={handleItemHover}
        onNavClick={handleNavClick}
      />

      {/* Carousel Viewport Container */}
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
          <AboutContact />
        </div>

        {/* Card 3: Contact Section */}
        <div className={`carousel-card ${getCardClass('contact')}`}>
          <AboutContact />
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
