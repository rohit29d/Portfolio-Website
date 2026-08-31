import React from 'react';
import { Layers } from 'lucide-react';

const TABS = [
  { id: 'technical', label: 'technical', count: '08' },
  { id: 'photography', label: 'photography', count: '03' },
  { id: 'art', label: 'art', count: '02' },
  { id: 'movies', label: 'movies', count: '04' }
];

export default function BottomNav({
  activeCategory = 'technical',
  onCategoryHover,
  onCategoryClick,
  isWorksVisible
}) {
  return (
    <nav className={`category-dock ${isWorksVisible ? 'visible' : ''}`} aria-label="Work categories">
      <div className="category-dock-label font-mono">
        <Layers size={13} />
        <span>works / index</span>
      </div>
      <div className="category-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`category-tab ${activeCategory === tab.id ? 'active' : ''}`}
            onMouseEnter={() => onCategoryHover?.(tab.id)}
            onFocus={() => onCategoryHover?.(tab.id)}
            onClick={() => onCategoryClick?.(tab.id)}
          >
            <span className="font-mono">{tab.label}</span>
            <small className="font-mono">{tab.count}</small>
          </button>
        ))}
      </div>
    </nav>
  );
}