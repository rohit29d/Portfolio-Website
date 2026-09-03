import React, { useState } from 'react';
import { Layers, Award, X } from 'lucide-react';

const CERTIFICATIONS = [
  { name: 'PCB Design with KiCad', issuer: 'Peter Dalmaris (Udemy)', date: 'Aug 2026' },
  { name: 'Machine Learning Techniques in MATLAB', issuer: 'MathWorks', date: 'Jun 2025' },
  { name: 'SystemVerilog Fundamentals', issuer: 'Kumar Khandagle (Udemy)', date: 'Dec 2024' }
];

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
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

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
    <>
      <div 
        className={`vertical-category-nav ${!isWorksVisible ? 'hidden' : ''}`}
        onMouseEnter={onBottomNavMouseEnter}
        onMouseLeave={onBottomNavMouseLeave}
      >
        {/* 1. Oval Encapsulated "Certifications" Button sitting right above the works vertical menu */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsCertModalOpen(true);
          }}
          className="certifications-capsule-pill"
          title="Click to view certifications"
        >
          <Award size={13} color="#ffffff" />
          <span>certifications</span>
        </button>

        {/* 2. Works Navigation Rail Card */}
        <nav 
          className="vertical-category-box" 
          aria-label="Vertical Works Category Rail"
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
      </div>

      {/* 3. Certifications Modal Popup Card */}
      {isCertModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsCertModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '540px',
              padding: '24px',
              background: '#000000',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(107, 31, 42, 0.25)'
            }}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} color="#6B1F2A" />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                  Certifications
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsCertModalOpen(false)}
                className="copy-btn font-mono"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Certifications List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="corner-bracket-card" style={{ padding: '14px 18px' }}>
                  <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: '#ffffff', marginBottom: '6px' }}>
                    {cert.name}
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {cert.issuer}
                    </span>
                    <span className="font-mono" style={{
                      fontSize: '0.70rem',
                      color: '#ffffff',
                      background: '#6B1F2A',
                      padding: '2px 8px',
                      borderRadius: '3px',
                      fontWeight: 600
                    }}>
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
