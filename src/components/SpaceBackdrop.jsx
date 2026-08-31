import React from 'react';

export default function SpaceBackdrop({ active = true }) {
  return (
    <div className={`environment-backdrop ${active ? 'active' : ''}`} aria-hidden="true">
      <div className="environment-grid" />
      <div className="environment-vignette" />
      <div className="environment-orbit environment-orbit-one" />
      <div className="environment-orbit environment-orbit-two" />
    </div>
  );
}