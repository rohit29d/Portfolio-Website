import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import Header from './components/Header';
import HomeStages from './components/HomeStages';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import BottomNav from './components/BottomNav';
import TerminalModal from './components/TerminalModal';
import SpaceBackdrop from './components/SpaceBackdrop';

export const PAGES = [
  { id: 'home', label: 'home', index: '01' },
  { id: 'projects', label: 'projects', index: '02' },
  { id: 'about', label: 'about', index: '03' },
  { id: 'contact', label: 'contact', index: '04' }
];

const getPageFromHash = () => {
  const hash = window.location.hash.replace('#', '');
  return PAGES.some((page) => page.id === hash) ? hash : 'home';
};

export default function App() {
  const pageRef = useRef(null);
  const [activePage, setActivePage] = useState(() => getPageFromHash());
  const [activeCategory, setActiveCategory] = useState('technical');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    pageRef.current?.focus({ preventScroll: true });
  }, [activePage]);

  const goToPage = (pageId) => {
    if (!PAGES.some((page) => page.id === pageId)) return;

    setActivePage(pageId);
    if (window.location.hash !== `#${pageId}`) {
      window.history.pushState({}, '', `#${pageId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isTerminalOpen || ['INPUT', 'TEXTAREA', 'BUTTON'].includes(event.target.tagName)) return;

      if (event.altKey && (event.key === 'ArrowRight' || event.key === 'ArrowDown')) {
        event.preventDefault();
        const index = PAGES.findIndex((page) => page.id === activePage);
        goToPage(PAGES[Math.min(PAGES.length - 1, index + 1)].id);
      }

      if (event.altKey && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) {
        event.preventDefault();
        const index = PAGES.findIndex((page) => page.id === activePage);
        goToPage(PAGES[Math.max(0, index - 1)].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage, isTerminalOpen]);

  const copyCommand = (event) => {
    event.stopPropagation();
    navigator.clipboard.writeText('npx rohitdubbaka');
    setCopiedCli(true);
    window.setTimeout(() => setCopiedCli(false), 2000);
  };

  const activePageMeta = PAGES.find((page) => page.id === activePage) || PAGES[0];

  return (
    <div className="site-shell">
      <SpaceBackdrop active scrollLinked={activePage === 'home'} />

      <Header activeSection={activePage} onNavClick={goToPage} />

      <main
        ref={pageRef}
        className={`page-view page-view-${activePage}`}
        tabIndex="-1"
        aria-label={`${activePageMeta.label} page`}
      >
        <div className="page-view-inner">
          <div className="page-meta font-mono">
            <span>{activePageMeta.index} / {String(PAGES.length).padStart(2, '0')}</span>
            <span>{activePageMeta.label}</span>
          </div>

          {activePage === 'home' && (
            <HomeStages
              onOpenTerminal={() => setIsTerminalOpen(true)}
              onNavigate={(destination) => {
                if (destination === 'experience') {
                  document.getElementById('home-stage-experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  return;
                }
                goToPage(destination);
              }}
            />
          )}
          {activePage === 'projects' && (
            <Projects
              activeCategory={activeCategory}
            />
          )}
          {activePage === 'about' && <AboutContact viewMode="about" />}
          {activePage === 'contact' && <AboutContact viewMode="contact" />}
        </div>
      </main>

      <BottomNav
        activeCategory={activeCategory}
        onCategoryClick={(category) => {
          setActiveCategory(category);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isWorksVisible={activePage === 'projects'}
      />

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