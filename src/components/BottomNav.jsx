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
        <Layers size={13} color="#ffffff" />
        <span className="font-mono" style={{
          fontSize: '0.68rem',
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontWeight: 600
        }}>
          // Categories
        </span>
      </div>

      {/* Vertical Rail Category Items (Solid #6B1F2A on Active) */}
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
            <span style={{ fontWeight: isFocused ? 600 : 400 }}>{tab.label}</span>
            <span className="font-mono" style={{
              fontSize: '0.65rem',
              fontWeight: 600,
              padding: '2px 6px',
              borderRadius: '3px',
              background: isFocused ? 'rgba(0, 0, 0, 0.35)' : 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff'
            }}>
              {tab.count}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
