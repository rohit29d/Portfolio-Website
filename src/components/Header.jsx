import React from 'react';

export default function Header({ 
  activeSection, 
  scrubbedSection,
  onNavMouseEnter, 
  onNavMouseLeave, 
  onNavMouseMove, 
  onItemHover, 
  onNavClick 
}) {
  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'projects', label: 'projects' },
    { id: 'about', label: 'about' },
    { id: 'resume', label: 'resume', isExternal: true },
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

  return (
    <header 
      onMouseEnter={onNavMouseEnter}
      onMouseLeave={onNavMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '20px 28px',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Minimal Typography Navigation Bar */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {navItems.map(item => {
            const isFocused = currentFocused === item.id;

            // Resume Link opens /resume.pdf in a new tab
            // swap this file to update the resume, filename must stay resume.pdf
            if (item.isExternal) {
              return (
                <a
                  key={item.id}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.86rem',
                    paddingBottom: '3px',
                    borderBottom: '1.5px solid transparent',
                    transition: 'color 0.3s var(--ease-smooth), border-color 0.3s var(--ease-smooth)'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'var(--accent-wine)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-mono"
                onClick={(e) => { e.preventDefault(); onNavClick(item.id); }}
                onMouseEnter={() => onItemHover(item.id)}
                style={{
                  color: isFocused ? '#ffffff' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  paddingBottom: '3px',
                  borderBottom: isFocused ? '1.5px solid var(--accent-wine)' : '1.5px solid transparent',
                  transition: 'color 0.3s var(--ease-smooth), border-color 0.3s var(--ease-smooth)'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
