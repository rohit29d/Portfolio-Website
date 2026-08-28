import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [transitionState, setTransitionState] = useState(null); // 'entering' | null
  const [activeCategory, setActiveCategory] = useState('all');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  // Nav Click Handler: Animate 3D Plane Transition (Recede out + Unfold target plane)
  const handleNavClick = (targetSection) => {
    if (targetSection === activeSection) return;
    
    setTransitionState('entering');
    setActiveSection(targetSection);

    setTimeout(() => {
      setTransitionState(null);
    }, 550);
  };

  // Preview tilt transform on nav hover (2 to 5 degrees only, transform/opacity GPU accelerated)
  const getContainerTransform = () => {
    if (!hoveredNav) return 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
    
    switch (hoveredNav) {
      case 'home':
        return 'perspective(1200px) rotateY(-3.5deg) rotateX(2deg)';
      case 'projects':
        return 'perspective(1200px) rotateY(4deg) rotateX(-3deg)';
      case 'about':
        return 'perspective(1200px) rotateY(-4.5deg) rotateX(-2deg)';
      case 'contact':
        return 'perspective(1200px) rotateY(5deg) rotateX(2.5deg)';
      default:
        return 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
    }
  };

  return (
    <div className="plane-viewport">
      {/* Top Header Navigation - Typography First */}
      <Header 
        activeSection={activeSection}
        onNavHover={setHoveredNav} 
        onNavClick={handleNavClick} 
      />

      {/* 3D Perspective Plane Container */}
      <div 
        className="plane-container"
        style={{
          transform: getContainerTransform()
        }}
      >
        {/* Render Active Section Plane */}
        <div className={`section-plane ${transitionState === 'entering' ? 'plane-enter' : ''}`}>
          {activeSection === 'home' && (
            <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
          )}

          {activeSection === 'projects' && (
            <Projects activeCategory={activeCategory} />
          )}

          {(activeSection === 'about' || activeSection === 'contact') && (
            <AboutContact />
          )}
        </div>
      </div>

      {/* Projects-Specific Bottom Capsule Filter Bar (Only Visible on Projects Plane) */}
      <BottomNav 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        isProjectsVisible={activeSection === 'projects'}
      />

      {/* Terminal CLI Modal Simulator */}
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
