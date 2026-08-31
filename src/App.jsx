import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, Check, Copy, Terminal } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';
import SpaceBackdrop from './components/SpaceBackdrop';

const SCENES = [
  { id: 'home', label: 'origin', index: '01' },
  { id: 'works', label: 'selected work', index: '02' },
  { id: 'about', label: 'the person', index: '03' },
  { id: 'contact', label: 'open channel', index: '04' }
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function App() {
  const storyRef = useRef(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState('home');
  const [activeCategory, setActiveCategory] = useState('technical');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  useEffect(() => {
    let frameId;

    const measureScroll = () => {
      const story = storyRef.current;
      if (!story) return;

      const viewportHeight = window.innerHeight || 1;
      const nextProgress = clamp(
        (window.scrollY - story.offsetTop) / viewportHeight,
        0,
        SCENES.length - 1
      );
      const nextScene = SCENES[Math.round(nextProgress)].id;

      progressRef.current = nextProgress;
      setProgress(nextProgress);
      setActiveScene(nextScene);
      frameId = undefined;
    };

    const handleScroll = () => {
      if (frameId === undefined) frameId = requestAnimationFrame(measureScroll);
    };

    measureScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId !== undefined) cancelAnimationFrame(frameId);
    };
  }, []);

  const goToScene = (sceneId) => {
    const sceneIndex = SCENES.findIndex((scene) => scene.id === sceneId);
    if (sceneIndex < 0) return;

    window.scrollTo({
      top: (storyRef.current?.offsetTop || 0) + sceneIndex * window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isTerminalOpen || ['INPUT', 'TEXTAREA', 'BUTTON'].includes(event.target.tagName)) return;

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        goToScene(SCENES[Math.min(SCENES.length - 1, Math.round(progressRef.current) + 1)].id);
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        goToScene(SCENES[Math.max(0, Math.round(progressRef.current) - 1)].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  const handleStoryWheel = (event) => {
    if (event.target.closest('.project-lane')) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    event.preventDefault();
    window.scrollBy({ top: event.deltaY, behavior: 'auto' });
  };

  const copyCommand = (event) => {
    event.stopPropagation();
    navigator.clipboard.writeText('npx rohitdubbaka');
    setCopiedCli(true);
    window.setTimeout(() => setCopiedCli(false), 2000);
  };

  const sceneNumber = String(Math.round(progress) + 1).padStart(2, '0');
  const progressPercent = ((progress + 1) / SCENES.length) * 100;

  return (
    <div className="site-shell">
      <SpaceBackdrop active />

      <Header activeSection={activeScene} onNavClick={goToScene} />

      <div className="scene-scroll" ref={storyRef}>
        <main className="scene-stage" aria-label="Rohit Kumar Dubbaka portfolio">
          <div
            className="scene-track"
            style={{ transform: `translate3d(-${progress * 100}vw, 0, 0)` }}
          >
            <section className="scene-panel scene-panel-home" onWheel={handleStoryWheel}>
              <div className="scene-panel-content">
                <div className="scene-label font-mono">
                  <span>scroll to explore</span>
                  <ArrowDownRight size={13} />
                </div>
                <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
              </div>
            </section>

            <section className="scene-panel scene-panel-works" onWheel={handleStoryWheel}>
              <div className="scene-panel-content">
                <div className="scene-label font-mono">
                  <span>systems that leave the bench</span>
                  <ArrowDownRight size={13} />
                </div>
                <Projects
                  activeCategory={activeCategory}
                  scrubbedCategory={activeCategory}
                  isCylinderActive={false}
                />
              </div>
            </section>

            <section className="scene-panel scene-panel-about" onWheel={handleStoryWheel}>
              <div className="scene-panel-content">
                <div className="scene-label font-mono">
                  <span>behind the schematics</span>
                  <ArrowDownRight size={13} />
                </div>
                <AboutContact viewMode="about" />
              </div>
            </section>

            <section className="scene-panel scene-panel-contact" onWheel={handleStoryWheel}>
              <div className="scene-panel-content">
                <div className="scene-label font-mono">
                  <span>signal received?</span>
                  <ArrowDownRight size={13} />
                </div>
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
        isWorksVisible={activeScene === 'works'}
      />

      <aside className="scene-rail" aria-label="Portfolio progress">
        <div className="scene-rail-heading font-mono">
          <span>index</span>
          <span>00—04</span>
        </div>
        <div className="scene-rail-line">
          <span style={{ height: `${progressPercent}%` }} />
        </div>
        <div className="scene-rail-scenes">
          {SCENES.map((scene) => (
            <button
              key={scene.id}
              type="button"
              className={`scene-rail-scene ${activeScene === scene.id ? 'active' : ''}`}
              onClick={() => goToScene(scene.id)}
              aria-label={`Go to ${scene.label}`}
            >
              <span className="font-mono">{scene.index}</span>
              <span>{scene.label}</span>
            </button>
          ))}
        </div>
        <div className="scene-rail-current font-mono">{sceneNumber} / 04</div>
      </aside>

      <div className="terminal-trigger">
        <button
          type="button"
          className="terminal-trigger-main"
          onClick={() => setIsTerminalOpen(true)}
          aria-label="Open interactive terminal profile"
        >
          <Terminal size={14} />
          <span className="terminal-trigger-command font-mono">npx rohitdubbaka</span>
        </button>
        <button
          type="button"
          className="terminal-trigger-copy"
          onClick={copyCommand}
          aria-label="Copy terminal command"
        >
          {copiedCli ? <Check size={13} /> : <Copy size={13} />}
        </button>
        <span className="terminal-trigger-caption font-mono">
          {copiedCli ? 'copied' : 'run profile'}
        </span>
      </div>

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}