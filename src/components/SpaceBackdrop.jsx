import React, { useEffect, useState } from 'react';

export default function SpaceBackdrop({ active = true, scrollLinked = false }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!scrollLinked) {
      setScrollProgress(0);
      return undefined;
    }

    let frameId;
    const updateScrollProgress = () => {
      const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(Math.max(0, Math.min(1, window.scrollY / scrollRange)));
    };
    const handleScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [scrollLinked]);

  return (
    <div
      className={`environment-backdrop ${active ? 'active' : ''}`}
      style={{ '--orbit-scroll-turn': `${scrollProgress * 22}deg` }}
      aria-hidden="true"
    >
      <div className="environment-grid" />
      <div className="environment-vignette" />
      <div className="environment-orbit environment-orbit-one" />
      <div className="environment-orbit environment-orbit-two" />
    </div>
  );
}