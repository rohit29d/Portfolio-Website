import React from 'react';

export default function BottomNav({ 
  activeCategory, 
  scrubbedCategory,
  isBottomNavHovered,
  onBottomNavMouseEnter,
  onBottomNavMouseLeave,
  onCategoryHover,
  onCategoryClick,
  isProjectsVisible 
}) {
  const tabs = [
    { id: 'all', label: 'all', enabled: true },
    { id: 'firmware', label: 'firmware', enabled: true },
    { id: 'pcb', label: 'pcb', enabled: true },
    { id: 'fpga', label: 'fpga', enabled: true },
    { id: 'dsp', label: 'dsp', enabled: true },
    { id: 'blogs', label: 'blogs', enabled: true }
  ];

  const currentFocused = isBottomNavHovered ? (scrubbedCategory || activeCategory) : activeCategory;

  return (
    <nav 
      className={`bottom-capsule-nav ${!isProjectsVisible ? 'hidden' : ''}`} 
      aria-label="Projects Filter Navigation"
      onMouseEnter={onBottomNavMouseEnter}
      onMouseLeave={onBottomNavMouseLeave}
    >
      {tabs.map((tab) => {
        const isFocused = currentFocused === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onCategoryClick(tab.id)}
            onMouseEnter={() => onCategoryHover(tab.id)}
            className={`capsule-item ${isFocused ? 'active' : ''}`}
            title={tab.id === 'blogs' ? 'Blogs & Technical Writeups' : `Filter by ${tab.label}`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
