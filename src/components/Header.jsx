import React from 'react';
import { Cpu } from 'lucide-react';

export default function Header({ onNavHover, onNavClick }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 90,
      background: 'rgba(11, 13, 18, 0.88)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '14px 24px'
    }}>
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
          onClick={() => onNavClick('home')}
          onMouseEnter={() => onNavHover('home')}
          onMouseLeave={() => onNavHover(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'var(--text-primary)'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '4px',
            background: 'var(--accent-blue-soft)',
            border: '1px solid var(--accent-blue-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Cpu size={18} color="var(--accent-blue)" />
          </div>
          <span className="font-mono" style={{ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
            rohit<span style={{ color: 'var(--accent-blue)' }}>.dubbaka</span>
          </span>
        </a>

        {/* Top Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a 
            href="#home" 
            className="font-mono"
            onClick={() => onNavClick('home')}
            onMouseEnter={() => onNavHover('home')}
            onMouseLeave={() => onNavHover(null)}
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s'
            }} 
            onMouseOver={e => e.target.style.color = 'var(--accent-blue)'} 
            onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
          >
            home
          </a>
          <a 
            href="#projects" 
            className="font-mono"
            onClick={() => onNavClick('projects')}
            onMouseEnter={() => onNavHover('projects')}
            onMouseLeave={() => onNavHover(null)}
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s'
            }} 
            onMouseOver={e => e.target.style.color = 'var(--accent-blue)'} 
            onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
          >
            projects
          </a>
          <a 
            href="#about" 
            className="font-mono"
            onClick={() => onNavClick('about')}
            onMouseEnter={() => onNavHover('about')}
            onMouseLeave={() => onNavHover(null)}
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s'
            }} 
            onMouseOver={e => e.target.style.color = 'var(--accent-blue)'} 
            onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
          >
            about
          </a>
          <a 
            href="#contact" 
            className="font-mono"
            onClick={() => onNavClick('contact')}
            onMouseEnter={() => onNavHover('contact')}
            onMouseLeave={() => onNavHover(null)}
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s'
            }} 
            onMouseOver={e => e.target.style.color = 'var(--accent-blue)'} 
            onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
          >
            contact
          </a>
        </nav>

        {/* System Online Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="led-indicator"></span>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            SYS_ONLINE
          </span>
        </div>
      </div>
    </header>
  );
}
