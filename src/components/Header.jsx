import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'home' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'about', label: 'about' },
  { id: 'contact', label: 'contact' }
];

export default function Header({ activeSection = 'home', onNavClick }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <button
          type="button"
          className="wordmark"
          onClick={() => onNavClick?.('home')}
          aria-label="Go to Home"
        >
          <span className="wordmark-mark">RKD</span>
          <span className="wordmark-name">Rohit Kumar Dubbaka</span>
        </button>

        <nav className="primary-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`primary-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onNavClick?.(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <span className="font-mono">{item.label}</span>
              <span className="primary-nav-dot" aria-hidden="true" />
            </button>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link font-mono"
        >
          <FileText size={14} />
          <span>resume</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </header>
  );
}