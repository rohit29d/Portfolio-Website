import React from 'react';
import { Layers } from 'lucide-react';

export default function BottomNav({ 
  activeCategory = 'technical', 
  scrubbedCategory = 'technical', 
  isBottomNavHovered,
  onBottomNavMouseEnter, 
  onBottomNavMouseLeave, 
  onCategoryHover, 
  onCategoryClick, 
  isWorksVisible 
}) {
  // =========================================================================
  // CATEGORY TABS CONFIGURATION:
  // Toggle `enabled: true` or `enabled: false` to enable/disable any category.
  // Disabled tabs appear greyed out with a disabled cursor and ignore clicks/hovers.
  // =========================================================================
  const tabs = [
    { id: 'technical', label: 'technical', count: '8', enabled: true },
    { id: 'photography', label: 'photography', count: 'gallery', enabled: true },
    { id: 'art', label: 'art', count: 'gallery', enabled: false }, // <-- Toggle true/false to enable/disable
    { id: 'movies', label: 'movies', count: 'log', enabled: false }   // <-- Toggle true/false to enable/disable
  ];

  const currentFocused = isBottomNavHovered ? (scrubbedCategory || activeCategory) : activeCategory;

  return (
    <nav 
      className={`vertical-category-nav ${!isWorksVisible ? 'hidden' : ''}`} 
      aria-label="Vertical Works Category Rail"
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
          // Works
        </span>
      </div>

      {/* Vertical Rail Category Items (Solid #6B1F2A on Active, Greyed out if Disabled) */}
      {tabs.map((tab) => {
        const isEnabled = tab.enabled !== false;
        const isFocused = isEnabled && currentFocused === tab.id;

        return (
          <button
            key={tab.id}
            disabled={!isEnabled}
            onClick={() => {
              if (isEnabled) onCategoryClick(tab.id);
            }}
            onMouseEnter={() => {
              if (isEnabled) onCategoryHover(tab.id);
            }}
            className={`category-rail-item ${isFocused ? 'active' : ''} ${!isEnabled ? 'disabled' : ''}`}
            title={isEnabled ? `View ${tab.label}` : `${tab.label} (coming soon)`}
          >
            <span style={{ fontWeight: isFocused ? 600 : 400 }}>{tab.label}</span>
            <span className="font-mono" style={{
              fontSize: '0.65rem',
              fontWeight: 600,
              padding: '2px 6px',
              borderRadius: '3px',
              background: isFocused ? 'rgba(0, 0, 0, 0.35)' : 'rgba(255, 255, 255, 0.08)',
              color: isEnabled ? '#ffffff' : 'var(--text-muted)'
            }}>
              {tab.count}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
