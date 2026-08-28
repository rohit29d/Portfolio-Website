import React from 'react';

export default function BottomNav({ activeCategory, setActiveCategory, isProjectsVisible }) {
  const tabs = [
    { id: 'all', label: 'all', enabled: true },
    { id: 'firmware', label: 'firmware', enabled: true },
    { id: 'pcb', label: 'pcb', enabled: true },
    { id: 'fpga', label: 'fpga', enabled: true },
    { id: 'dsp', label: 'dsp', enabled: true },
    { id: 'blogs', label: 'blogs', enabled: false }
  ];

  return (
    <nav 
      className={`bottom-capsule-nav ${!isProjectsVisible ? 'hidden' : ''}`} 
      aria-label="Projects Filter Navigation"
    >
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
            onClick={() => setActiveCategory(tab.id)}
            className={`capsule-item ${isActive ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
