import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';
import SpaceBackdrop from './components/SpaceBackdrop';
import LandingIntro from './components/LandingIntro';

const SECTIONS = ['home', 'works', 'about', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrubbedSection, setScrubbedSection] = useState('home');
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);
  
  // Per-frame Lerp Mouse Position for Cursor-Speed-Synced Easing
  const [lerpedMousePos, setLerpedMousePos] = useState({ x: 0, y: 0 });
  const targetMousePosRef = useRef({ x: 0, y: 0 });
  const currentMousePosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  // Wheel Action Throttle Ref (for Menu-scoped wheel scrubbing)
  const isWheelThrottledRef = useRef(false);

  // Scoped Category Rotation State (default: 'technical')
  const [activeCategory, setActiveCategory] = useState('technical');
  const [scrubbedCategory, setScrubbedCategory] = useState('technical');
  const [isBottomNavHovered, setIsBottomNavHovered] = useState(false);

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Continuous per-frame lerp animation loop (current += (target - current) * factor)
  useEffect(() => {
    const updateLerp = () => {
      const target = targetMousePosRef.current;
      const current = currentMousePosRef.current;
      
      const factor = 0.12; // Smooth catch-up factor
      current.x += (target.x - current.x) * factor;
      current.y += (target.y - current.y) * factor;

      setLerpedMousePos({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(updateLerp);
    };

    rafRef.current = requestAnimationFrame(updateLerp);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Keyboard Arrow Key Navigation (Left / Right / Up / Down)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger section jump if typing in input or terminal
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName) || isTerminalOpen) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSection((prev) => {
          const currentIdx = SECTIONS.indexOf(prev);
          const nextIdx = (currentIdx + 1) % SECTIONS.length;
          const nextSection = SECTIONS[nextIdx];
          setScrubbedSection(nextSection);
          return nextSection;
        });
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSection((prev) => {
          const currentIdx = SECTIONS.indexOf(prev);
          const prevIdx = (currentIdx - 1 + SECTIONS.length) % SECTIONS.length;
          const prevSection = SECTIONS[prevIdx];
          setScrubbedSection(prevSection);
          return prevSection;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTerminalOpen]);

  // Menu-Scoped Wheel Scrolling (Only rotates menu when mouse cursor is on header menu)
  const handleNavWheel = (e) => {
    if (Math.abs(e.deltaY) > 20 || Math.abs(e.deltaX) > 20) {
      if (isWheelThrottledRef.current) return;

      isWheelThrottledRef.current = true;
      setTimeout(() => {
        isWheelThrottledRef.current = false;
      }, 350);

      const direction = (e.deltaY > 0 || e.deltaX > 0) ? 1 : -1;
      const current = scrubbedSection || activeSection;
      const currentIdx = SECTIONS.indexOf(current);
      const nextIdx = (currentIdx + direction + SECTIONS.length) % SECTIONS.length;
      setScrubbedSection(SECTIONS[nextIdx]);
    }
  };

  // Top Nav Hover Trigger: Cursor enters top nav bar
  const handleNavMouseEnter = () => {
    setIsNavHovered(true);
    setScrubbedSection(activeSection);
  };

  // Top Nav Commit: Cursor leaves top nav bar entirely
  const handleNavMouseLeave = () => {
    setIsNavHovered(false);
    targetMousePosRef.current = { x: 0, y: 0 };
    if (scrubbedSection) {
      setActiveSection(scrubbedSection);
    }
  };

  // Top Nav Parallax Mouse Tracking (Updates target for lerp)
  const handleNavMouseMove = (pos) => {
    targetMousePosRef.current = pos;
  };

  // Top Nav Item Hover
  const handleItemHover = (sectionId) => {
    setScrubbedSection(sectionId);
  };

  // Top Nav Direct Click
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setScrubbedSection(sectionId);
    setIsNavHovered(false);
  };

  // Bottom Category Bar: Hover Trigger
  const handleBottomNavMouseEnter = () => {
    setIsBottomNavHovered(true);
    setScrubbedCategory(activeCategory);
  };

  // Bottom Category Bar: Commit on Mouse Leave
  const handleBottomNavMouseLeave = () => {
    setIsBottomNavHovered(false);
    if (scrubbedCategory) {
      setActiveCategory(scrubbedCategory);
    }
  };

  // Bottom Category Bar: Live Category Scrub
  const handleCategoryHover = (catId) => {
    setScrubbedCategory(catId);
  };

  // Bottom Category Bar: Direct Click Commit
  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setScrubbedCategory(catId);
    setIsBottomNavHovered(false);
  };

  const handleCopyCli = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText('npx rohitdubbaka');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
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
      {/* 1. Landing Greeting Animation (Multi-language solid #6B1F2A curtain reveal) */}
      <LandingIntro />

      {/* SVG Concave Spherical Distortion ClipPath Definition */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <clipPath id="concave-spherical-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 Q 0.5 0.015, 1 0 C 0.94 0.28, 0.94 0.72, 1 1 Q 0.5 0.985, 0 1 C 0.06 0.72, 0.06 0.28, 0 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* High-Definition PCB Circuitry Backdrop with Lerp-Smoothed Parallax Pan */}
      <SpaceBackdrop active={isNavHovered} mousePos={lerpedMousePos} />

      {/* Top Header Navigation */}
      <Header 
        activeSection={activeSection}
        scrubbedSection={isNavHovered ? scrubbedSection : null}
        onNavMouseEnter={handleNavMouseEnter}
        onNavMouseLeave={handleNavMouseLeave}
        onNavMouseMove={handleNavMouseMove}
        onNavWheel={handleNavWheel}
        onItemHover={handleItemHover}
        onNavClick={handleNavClick}
      />

      {/* 3D Concave Circular Carousel Viewport Container */}
      <main className="carousel-viewport">
        {/* Card 0: Home Section */}
        <div className={`carousel-card ${getCardClass('home')}`}>
          <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        </div>

        {/* Card 1: Works Section */}
        <div className={`carousel-card ${getCardClass('works')}`}>
          <Projects 
            activeCategory={activeCategory} 
            scrubbedCategory={scrubbedCategory}
            isCylinderActive={isBottomNavHovered}
          />
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

      {/* Works-Specific Vertical Category Rail (Technical, Photography, Art, Movies) */}
      <BottomNav 
        activeCategory={activeCategory} 
        scrubbedCategory={scrubbedCategory}
        isBottomNavHovered={isBottomNavHovered}
        onBottomNavMouseEnter={handleBottomNavMouseEnter}
        onBottomNavMouseLeave={handleBottomNavMouseLeave}
        onCategoryHover={handleCategoryHover}
        onCategoryClick={handleCategoryClick}
        isWorksVisible={focusedSection === 'works'}
      />

      {/* Floating Bottom-Right Terminal CLI Box Widget */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '4px'
      }}>
        <div 
          className="terminal-copy-box"
          onClick={() => setIsTerminalOpen(true)}
          style={{
            cursor: 'pointer',
            background: 'rgba(0, 0, 0, 0.94)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.85)',
            border: '1px solid var(--border-subtle)'
          }}
          title="Click to run interactive terminal"
        >
          <Terminal size={14} color="#ffffff" />
          <span style={{ color: 'var(--text-muted)' }}>%</span>
          <code style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.82rem' }}>npx rohitdubbaka</code>
          <button 
            type="button" 
            onClick={handleCopyCli}
            className="copy-btn" 
            aria-label="Copy npx command"
            title="Copy command"
          >
            {copiedCli ? <Check size={13} color="#ffffff" /> : <Copy size={13} />}
          </button>
        </div>
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', paddingRight: '4px' }}>
          {copiedCli ? '✓ copied!' : 'interactive CLI'}
        </span>
      </div>

      {/* Terminal CLI Modal Simulator */}
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
