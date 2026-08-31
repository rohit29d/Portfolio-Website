import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';
import SpaceBackdrop from './components/SpaceBackdrop';
import LandingIntro from './components/LandingIntro';

const SECTIONS = ['home', 'works', 'about', 'contact'];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function App() {
  const storyRef = useRef(null);
  const scrollProgressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('technical');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  useEffect(() => {
    let frameId;

    const updateProgress = () => {
      const story = storyRef.current;
      if (!story) return;

      const viewportHeight = window.innerHeight || 1;
      const storyTop = story.offsetTop;
      const progress = clamp((window.scrollY - storyTop) / viewportHeight, 0, SECTIONS.length - 1);
      const nextSection = SECTIONS[Math.round(progress)];

      scrollProgressRef.current = progress;
      setScrollProgress(progress);
      setActiveSection(nextSection);
      frameId = undefined;
    };

    const handleScroll = () => {
      if (frameId === undefined) frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId !== undefined) cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const sectionIndex = SECTIONS.indexOf(sectionId);
    if (sectionIndex < 0) return;

    window.scrollTo({
      top: (storyRef.current?.offsetTop || 0) + sectionIndex * window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(event.target.tagName) || isTerminalOpen) return;

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        scrollToSection(SECTIONS[Math.min(SECTIONS.length - 1, Math.round(scrollProgressRef.current) + 1)]);
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        scrollToSection(SECTIONS[Math.max(0, Math.round(scrollProgressRef.current) - 1)]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  const handleCopyCli = (event) => {
    event.stopPropagation();
    navigator.clipboard.writeText('npx rohitdubbaka');
    setCopiedCli(true);
    window.setTimeout(() => setCopiedCli(false), 2000);
  };

  const progressPercent = ((scrollProgress + 1) / SECTIONS.length) * 100;

  const handleStoryWheel = (event) => {
    if (event.target.closest('.project-lane')) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    event.preventDefault();
    window.scrollBy({ top: event.deltaY, behavior: 'auto' });
  };

  return (
    <div className="story-shell">
      <LandingIntro />
      <SpaceBackdrop active={activeSection === 'works'} />

      <Header
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />

      <div className="story-scroll" ref={storyRef}>
        <main className="story-stage" aria-label="Portfolio narrative">
          <div
            className="story-track"
            style={{ transform: `translate3d(-${scrollProgress * 100}vw, 0, 0)` }}
          >
            <section className="story-panel story-panel-home" aria-labelledby="home-scene-title" onWheel={handleStoryWheel}>
              <div className="story-panel-inner">
                <span id="home-scene-title" className="story-scene-kicker font-mono">
                  01 / introduction
                </span>
                <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
              </div>
            </section>

            <section className="story-panel story-panel-works" aria-labelledby="works-scene-title" onWheel={handleStoryWheel}>
              <div className="story-panel-inner">
                <span id="works-scene-title" className="story-scene-kicker font-mono">
                  02 / selected work
                </span>
                <Projects
                  activeCategory={activeCategory}
                  scrubbedCategory={activeCategory}
                  isCylinderActive={false}
                />
              </div>
            </section>

            <section className="story-panel story-panel-about" aria-labelledby="about-scene-title" onWheel={handleStoryWheel}>
              <div className="story-panel-inner">
                <span id="about-scene-title" className="story-scene-kicker font-mono">
                  03 / the person behind the board
                </span>
                <AboutContact viewMode="about" />
              </div>
            </section>

            <section className="story-panel story-panel-contact" aria-labelledby="contact-scene-title" onWheel={handleStoryWheel}>
              <div className="story-panel-inner">
                <span id="contact-scene-title" className="story-scene-kicker font-mono">
                  04 / open channel
                </span>
                <AboutContact viewMode="contact" />
              </div>
            </section>
          </div>
        </main>
      </div>

      <BottomNav
        activeCategory={activeCategory}
        scrubbedCategory={activeCategory}
        isBottomNavHovered={false}
        onCategoryHover={setActiveCategory}
        onCategoryClick={setActiveCategory}
        isWorksVisible={activeSection === 'works'}
      />

      <div className="story-progress" aria-label={`Scene ${Math.round(scrollProgress) + 1} of ${SECTIONS.length}`}>
        <span className="story-progress-current font-mono">
          {String(Math.round(scrollProgress) + 1).padStart(2, '0')}
        </span>
        <div className="story-progress-track" aria-hidden="true">
          <span style={{ height: `${progressPercent}%`, '--progress': `${progressPercent}%` }} />
        </div>
        <span className="story-progress-total font-mono">04</span>
      </div>

      <div className="terminal-widget">
        <div
          className="terminal-copy-box"
          onClick={() => setIsTerminalOpen(true)}
          title="Click to run interactive terminal"
        >
          <Terminal size={14} color="#ffffff" />
          <span className="terminal-prompt">% </span>
          <code>npx rohitdubbaka</code>
          <button
            type="button"
            onClick={handleCopyCli}
            className="copy-btn"
            aria-label="Copy npx command"
            title="Copy command"
          >
            {copiedCli ? <Check size={13} color="#ffffff" /> : <Copy size={13} />}
          </button>
        </div>
        <span className="font-mono terminal-caption">
          {copiedCli ? '✓ copied!' : 'interactive CLI'}
        </span>
      </div>

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}