import React, { useState, useEffect } from 'react';

const GREETINGS = [
  { text: 'Hello', sub: null },
  { text: 'नमस्ते', sub: null },
  { text: 'నమస్కారం', sub: null },
  { text: 'வணக்கம்', sub: 'konjam konjam' },
  { text: 'Bonjour', sub: 'en cours' },
  { text: 'Hola', sub: 'en curso' }
];

export default function LandingIntro({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // 1. Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // 2. Check session storage (play once per browser session)
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');

    if (prefersReducedMotion || hasSeenIntro) {
      setShouldRender(false);
      onComplete?.();
      return;
    }

    sessionStorage.setItem('hasSeenIntro', 'true');

    // 3. Step through each greeting holding for 1 whole second (1000ms)
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < GREETINGS.length) {
        setCurrentIndex(step);
      } else {
        clearInterval(interval);
        // Short pause after final greeting before lifting curtain
        setTimeout(() => {
          setIsSlidingUp(true);
        }, 300);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isSlidingUp) {
      const timer = setTimeout(() => {
        setShouldRender(false);
        onComplete?.();
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [isSlidingUp]);

  if (!shouldRender) return null;

  const currentGreeting = GREETINGS[currentIndex];

  return (
    <div
      className="landing-curtain-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#6B1F2A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isSlidingUp ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
        willChange: 'transform',
        pointerEvents: isSlidingUp ? 'none' : 'auto'
      }}
    >
      <div style={{
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '130px'
      }}>
        {/* Main Greeting Row */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            opacity: 0.7
          }} />
          <h1 style={{
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: 0,
            lineHeight: 1.2
          }}>
            {currentGreeting.text}
          </h1>
        </div>

        {/* Subtitle Line for Tamil, French, Spanish */}
        <div style={{ height: '24px', marginTop: '8px' }}>
          {currentGreeting.sub ? (
            <p className="font-mono" style={{
              fontSize: '0.88rem',
              color: 'rgba(255, 255, 255, 0.75)',
              margin: 0,
              letterSpacing: '0.04em'
            }}>
              [{currentGreeting.sub}]
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
