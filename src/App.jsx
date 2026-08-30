import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';
import SpaceBackdrop from './components/SpaceBackdrop';
import LandingIntro from './components/LandingIntro';

const SECTIONS = ['home', 'projects', 'about', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrubbedSection, setScrubbedSection] = useState('home');
  const [isNavHovered, setIsNavHovered] = useState(false);
  
  // Per-frame Lerp Mouse Position for Cursor-Speed-Synced Easing
  const [lerpedMousePos, setLerpedMousePos] = useState({ x: 0, y: 0 });
  const targetMousePosRef = useRef({ x: 0, y: 0 });
  const currentMousePosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  // Wheel and Keyboard Action Throttle Ref
  const isActionThrottledRef = useRef(false);

  // Scoped Category Cylinder Rotation State
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrubbedCategory, setScrubbedCategory] = useState('all');
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

  // Keyboard Arrow Key Navigation & Scroll Wheel Navigation
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

    const handleWheel = (e) => {
      // Check if user is scrolling inside a modal or terminal
      const isInsideModal = e.target.closest('.modal-content') || isTerminalOpen;
      if (isInsideModal) {
        return; // Allow native internal modal scrolling
      }

      // Detect strong wheel gesture
      if (Math.abs(e.deltaY) > 35 || Math.abs(e.deltaX) > 35) {
        if (isActionThrottledRef.current) return;

        isActionThrottledRef.current = true;
        setTimeout(() => {
          isActionThrottledRef.current = false;
        }, 500); // 500ms cooldown for smooth 1-section advance

        if (e.deltaY > 35 || e.deltaX > 35) {
          // Scroll down / right -> Next Section
          setActiveSection((prev) => {
            const currentIdx = SECTIONS.indexOf(prev);
            const nextIdx = (currentIdx + 1) % SECTIONS.length;
            const nextSection = SECTIONS[nextIdx];
            setScrubbedSection(nextSection);
            return nextSection;
          });
        } else if (e.deltaY < -35 || e.deltaX < -35) {
          // Scroll up / left -> Previous Section
          setActiveSection((prev) => {
            const currentIdx = SECTIONS.indexOf(prev);
            const prevIdx = (currentIdx - 1 + SECTIONS.length) % SECTIONS.length;
            const prevSection = SECTIONS[prevIdx];
            setScrubbedSection(prevSection);
            return prevSection;
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isTerminalOpen]);

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

      {/* Projects-Specific Vertical Category Rail with Scoped Cylinder Rotation */}
      <BottomNav 
        activeCategory={activeCategory} 
        scrubbedCategory={scrubbedCategory}
        isBottomNavHovered={isBottomNavHovered}
        onBottomNavMouseEnter={handleBottomNavMouseEnter}
        onBottomNavMouseLeave={handleBottomNavMouseLeave}
        onCategoryHover={handleCategoryHover}
        onCategoryClick={handleCategoryClick}
        isProjectsVisible={focusedSection === 'projects'}
      />

      {/* Terminal CLI Modal Simulator */}
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
