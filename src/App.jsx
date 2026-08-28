import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isGlobeSpinning, setIsGlobeSpinning] = useState(false);

  // 3D Globe Rotation State & Physics Engine
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  // Mouse Move 3D Globe Rotation Controller
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize mouse coordinates to [-0.5, 0.5]
      const nx = (e.clientX / innerWidth) - 0.5;
      const ny = (e.clientY / innerHeight) - 0.5;

      // Rotate globe around X and Y axes smoothly
      targetRot.current.y = nx * 22; // -11deg to +11deg Y rotation
      targetRot.current.x = ny * -16; // -8deg to +8deg X rotation
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Physics Animation Loop (Lerp for silky smooth 60fps movement)
    const updateGlobeRotation = () => {
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.08;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.08;

      setRot({
        x: parseFloat(currentRot.current.x.toFixed(2)),
        y: parseFloat(currentRot.current.y.toFixed(2))
      });

      animFrameId.current = requestAnimationFrame(updateGlobeRotation);
    };

    animFrameId.current = requestAnimationFrame(updateGlobeRotation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Top Nav Hover handlers setting 3D Globe target coordinates
  const handleNavHover = (section) => {
    if (!section) return;
    if (section === 'home') {
      targetRot.current = { x: 4, y: -12 };
    } else if (section === 'projects') {
      targetRot.current = { x: -6, y: 14 };
    } else if (section === 'about') {
      targetRot.current = { x: 6, y: -14 };
    } else if (section === 'contact') {
      targetRot.current = { x: -8, y: 10 };
    }
  };

  // Nav Click Handler triggering 3D Globe Spherical Spin
  const handleNavClick = (sectionOrCategory) => {
    setIsGlobeSpinning(true);
    setTimeout(() => {
      setIsGlobeSpinning(false);
    }, 750);
  };

  return (
    <div className="globe-stage">
      {/* Top Header - Fixed & Stable */}
      <Header 
        onNavHover={handleNavHover} 
        onNavClick={handleNavClick} 
      />

      {/* 3D Globe Surface (Smooth Lerp Rotated Plane) */}
      <div 
        className={`globe-surface ${isGlobeSpinning ? 'globe-spin-active' : ''}`}
        style={{
          transform: isGlobeSpinning
            ? undefined
            : `perspective(1400px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(0px)`
        }}
      >
        {/* Main Content Area */}
        <main style={{ minHeight: '100vh', paddingBottom: '100px' }}>
          <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
          <Projects activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          <AboutContact />
        </main>
      </div>

      {/* Floating Bottom Capsule Nav - Fixed & Stable */}
      <BottomNav 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        onNavHover={handleNavHover}
        onNavClick={handleNavClick}
      />

      {/* Terminal CLI Modal Simulator */}
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
