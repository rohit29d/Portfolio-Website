import React from 'react';

export default function BottomNav({ activeCategory, setActiveCategory, onNavHover, onNavClick }) {
  const tabs = [
    { id: 'all', label: 'all', enabled: true },
    { id: 'firmware', label: 'firmware', enabled: true },
    { id: 'pcb', label: 'pcb', enabled: true },
    { id: 'fpga', label: 'fpga', enabled: true },
    { id: 'dsp', label: 'dsp', enabled: true },
    { id: 'writing', label: 'writing', enabled: false },
    { id: 'misc', label: 'misc', enabled: false }
  ];

  return (
    <nav className="bottom-capsule-nav" aria-label="Project Category Navigation">
      {tabs.map((tab) => {
        const isActive = activeCategory === tab.id;

        if (!tab.enabled) {
          return (
            <button
              key={tab.id}
              className="capsule-item disabled"
              disabled
              title="Coming Soon!"
            >
              {tab.label} <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>[soon]</span>
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onMouseEnter={() => onNavHover && onNavHover('projects')}
            onMouseLeave={() => onNavHover && onNavHover(null)}
            onClick={() => {
              setActiveCategory(tab.id);
              if (onNavClick) onNavClick(tab.id);
              const projSec = document.getElementById('projects');
              if (projSec) {
                projSec.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`capsule-item ${isActive ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
