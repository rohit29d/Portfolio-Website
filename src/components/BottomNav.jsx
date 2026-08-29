import React from 'react';
import { Layers } from 'lucide-react';

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
    { id: 'all', label: 'all', count: '8' },
    { id: 'firmware', label: 'firmware', count: '3' },
    { id: 'pcb', label: 'pcb', count: '4' },
    { id: 'fpga', label: 'fpga', count: '1' },
    { id: 'dsp', label: 'dsp', count: '1' },
    { id: 'blogs', label: 'blogs', count: 'soon' }
  ];

  const currentFocused = isBottomNavHovered ? (scrubbedCategory || activeCategory) : activeCategory;

  return (
    <nav 
      className={`vertical-category-nav ${!isProjectsVisible ? 'hidden' : ''}`} 
      aria-label="Vertical Projects Category Rail"
      onMouseEnter={onBottomNavMouseEnter}
      onMouseLeave={onBottomNavMouseLeave}
    >
      {/* Rail Header Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 10px 8px',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '4px'
      }}>
        <Layers size={13} color="var(--accent-slate)" />
        <span className="font-mono" style={{
          fontSize: '0.68rem',
          color: 'var(--accent-slate)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontWeight: 600
        }}>
          // Categories
        </span>
      </div>

      {/* Vertical Rail Category Items */}
      {tabs.map((tab) => {
        const isFocused = currentFocused === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onCategoryClick(tab.id)}
            onMouseEnter={() => onCategoryHover(tab.id)}
            className={`category-rail-item ${isFocused ? 'active' : ''}`}
            title={tab.id === 'blogs' ? 'Technical blogs coming soon' : `Filter by ${tab.label}`}
          >
            <span>{tab.label}</span>
            <span className="font-mono" style={{
              fontSize: '0.65rem',
              opacity: isFocused ? 0.9 : 0.45,
              padding: '1px 5px',
              borderRadius: '3px',
              background: isFocused ? 'rgba(0,0,0,0.2)' : 'var(--bg-elevated)'
            }}>
              {tab.count}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
