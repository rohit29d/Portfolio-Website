import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenTerminal, onNavigate, showAvatar = true, reserveAvatar = false, avatarAnchorRef }) {
  const [avatarHover, setAvatarHover] = useState(false);

  return (
    <section className="hero-scene">
      <div className={`hero-intro ${showAvatar || reserveAvatar ? 'hero-intro-tour' : 'hero-intro-no-avatar'}`}>
        {(showAvatar || reserveAvatar) && (
          <div className="hero-identity">
            <p className="eyebrow font-mono">embedded systems engineer / hyderabad, india</p>
            {showAvatar ? (
              <button
                type="button"
                className={`hero-avatar ${avatarHover ? 'is-hovered' : ''}`}
                onMouseEnter={() => setAvatarHover(true)}
                onMouseLeave={() => setAvatarHover(false)}
                onClick={onOpenTerminal}
                aria-label="Open Rohit's interactive terminal profile"
              >
                <span className="hero-avatar-ring hero-avatar-ring-one" />
                <span className="hero-avatar-ring hero-avatar-ring-two" />
                <img src="/avatar.png" alt="Rohit Kumar Dubbaka Avatar" />
                <span className="hero-status" title="Status: Active" />
              </button>
            ) : (
              <div ref={avatarAnchorRef} className="hero-avatar-space" aria-hidden="true" />
            )}
            <p className="hero-availability font-mono">
              <span className="led-indicator" /> available for curious problems
            </p>
          </div>
        )}

        <div className="hero-copy">
          <h1>
            Rohit <em>Kumar</em>
            <span>Dubbaka</span>
          </h1>
          <div className="hero-role">
            <span className="hero-role-line" />
            <span className="font-mono">embedded systems @ deltaiot</span>
          </div>
          <p className="hero-lede">
            I engineer ideas and bring them to life. I design PCBs and build embedded systems
            for a living and make cool little projects to solve problems .... or maybe cuz i just want to.
          </p>
          <div className="hero-actions">
            <button type="button" className="soft-action soft-action-primary" onClick={() => onNavigate?.('experience')}>
              <span>see experience</span>
              <ArrowUpRight size={15} />
            </button>
            <button type="button" className="soft-action" onClick={() => onNavigate?.('projects')}>
              <span>browse projects</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}