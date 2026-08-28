import React from 'react';
import { Cpu } from 'lucide-react';

export default function Header({ 
  activeSection, 
  scrubbedSection,
  onNavMouseEnter, 
  onNavMouseLeave, 
  onItemHover, 
  onNavClick 
}) {
  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'projects', label: 'projects' },
    { id: 'about', label: 'about' },
    { id: 'contact', label: 'contact' }
  ];

  // Currently focused item is either the live scrubbed item or active section
  const currentFocused = scrubbedSection || activeSection;

  return (
    <header 
      onMouseEnter={onNavMouseEnter}
      onMouseLeave={onNavMouseLeave}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(11, 13, 18, 0.88)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '18px 28px',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); onNavClick('home'); }}
          onMouseEnter={() => onItemHover('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)'
          }}
        >
          <Cpu size={16} color="var(--accent-slate)" />
          <span className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
            rohit<span style={{ color: 'var(--accent-slate)' }}>.dubbaka</span>
          </span>
        </a>

        {/* Minimal Typography Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navItems.map(item => {
            const isFocused = currentFocused === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-mono"
                onClick={(e) => { e.preventDefault(); onNavClick(item.id); }}
                onMouseEnter={() => onItemHover(item.id)}
                style={{
                  color: isFocused ? 'var(--accent-slate)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  paddingBottom: '2px',
                  borderBottom: isFocused ? '1.5px solid var(--accent-slate)' : '1.5px solid transparent',
                  transition: 'color 0.2s ease, border-color 0.2s ease'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="led-indicator"></span>
          <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            SYS_ONLINE
          </span>
        </div>
      </div>
    </header>
  );
}
