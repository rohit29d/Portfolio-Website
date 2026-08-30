import React from 'react';
import { FileText } from 'lucide-react';

export default function Header({ 
  activeSection, 
  scrubbedSection,
  onNavMouseEnter, 
  onNavMouseLeave, 
  onNavMouseMove, 
  onNavWheel,
  onItemHover, 
  onNavClick 
}) {
  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'projects', label: 'projects' },
    { id: 'about', label: 'about' },
    { id: 'contact', label: 'contact' }
  ];

  const currentFocused = scrubbedSection || activeSection;

  const handleMouseMove = (e) => {
    if (!onNavMouseMove) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    onNavMouseMove({ x: Math.max(-1, Math.min(1, normX)), y: Math.max(-1, Math.min(1, normY)) });
  };

  const handleWheel = (e) => {
    if (onNavWheel) {
      onNavWheel(e);
    }
  };

  return (
    <header 
      onMouseEnter={onNavMouseEnter}
      onMouseLeave={onNavMouseLeave}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '16px 32px',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        {/* Left Spacer to keep the center nav capsule balanced */}
        <div style={{ width: '100px' }} className="nav-spacer" />

        {/* 1. Solid Maroon Encapsulated Navigation Capsule (abhijithjinnu.in style) */}
        <nav className="header-capsule-nav" aria-label="Main Navigation">
          {navItems.map(item => {
            const isFocused = currentFocused === item.id;

            return (
              <button
                key={item.id}
                onClick={(e) => { e.preventDefault(); onNavClick(item.id); }}
                onMouseEnter={() => onItemHover(item.id)}
                className={`header-capsule-item ${isFocused ? 'active' : ''}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* 2. Solid Maroon Resume Pill Button on Extreme Right */}
        {/* swap this file to update the resume, filename must stay resume.pdf */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100px' }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header-resume-pill"
            title="Open Resume PDF in new tab"
          >
            <FileText size={14} color="#ffffff" />
            <span>resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
