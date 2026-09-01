import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react';
import Hero from './Hero';
import { EducationStage, ExperienceStage } from './Experience';

export default function HomeStages({ onOpenTerminal, onNavigate }) {
  const homeStagesRef = useRef(null);
  const heroAvatarAnchorRef = useRef(null);
  const experienceStageRef = useRef(null);
  const educationStageRef = useRef(null);
  const [tourPosition, setTourPosition] = useState({ left: 90, top: 180 });

  useEffect(() => {
    let frameId;

    const updateTourPosition = () => {
      const homeStages = homeStagesRef.current;
      if (!homeStages) return;

      const homeRect = homeStages.getBoundingClientRect();
      const documentTop = window.scrollY + homeRect.top;
      const scrollRange = Math.max(1, homeStages.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, (window.scrollY - documentTop) / scrollRange));
      const anchorRect = heroAvatarAnchorRef.current?.getBoundingClientRect();
      const experienceRect = experienceStageRef.current?.getBoundingClientRect();
      const educationRect = educationStageRef.current?.getBoundingClientRect();

      const stops = [
        {
          left: anchorRect ? anchorRect.left - homeRect.left + anchorRect.width / 2 : homeRect.width * 0.12,
          top: anchorRect ? anchorRect.top - homeRect.top + anchorRect.height / 2 : homeRect.height * 0.14
        },
        {
          left: homeRect.width - (window.innerWidth <= 680 ? 58 : 92),
          top: experienceRect ? experienceRect.top - homeRect.top + experienceRect.height * 0.5 : homeRect.height * 0.48
        },
        {
          left: window.innerWidth <= 680 ? 58 : 92,
          top: educationRect ? educationRect.top - homeRect.top + educationRect.height * 0.5 : homeRect.height * 0.8
        }
      ];

      const scaledProgress = progress * (stops.length - 1);
      const stopIndex = Math.min(stops.length - 2, Math.floor(scaledProgress));
      const segmentProgress = scaledProgress - stopIndex;
      const from = stops[stopIndex];
      const to = stops[stopIndex + 1];

      setTourPosition({
        left: from.left + (to.left - from.left) * segmentProgress,
        top: from.top + (to.top - from.top) * segmentProgress
      });
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateTourPosition);
    };

    updateTourPosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="home-stages" ref={homeStagesRef}>
      <div className="home-tour-track" aria-hidden="true" />
      <div
        className="home-tour-lead"
        style={{
          left: `${tourPosition.left}px`,
          top: `${tourPosition.top}px`
        }}
      >
        <button
          type="button"
          className="home-tour-avatar"
          onClick={onOpenTerminal}
          aria-label="Open Rohit's interactive terminal profile"
        >
          <span className="hero-avatar-ring hero-avatar-ring-one" />
          <span className="hero-avatar-ring hero-avatar-ring-two" />
          <img src="/avatar.png" alt="Rohit Kumar Dubbaka Avatar" />
          <span className="hero-status" title="Status: Active" />
        </button>
        <span className="home-tour-label font-mono">leading the tour</span>
      </div>

      <section className="home-stage home-stage-hero" id="home-stage-home">
        <div className="home-stage-index font-mono">01 / 03</div>
        <Hero
          showAvatar={false}
          reserveAvatar
          avatarAnchorRef={heroAvatarAnchorRef}
          onOpenTerminal={onOpenTerminal}
          onNavigate={onNavigate}
        />
        <button
          type="button"
          className="stage-scroll-cue font-mono"
          onClick={() => document.getElementById('home-stage-experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          <span>scroll to explore</span>
          <ArrowDown size={14} />
        </button>
      </section>

      <section className="home-stage home-stage-experience" id="home-stage-experience" ref={experienceStageRef}>
        <StageHeading
          index="02 / 03"
          icon={<Briefcase size={16} />}
          eyebrow="the path / practical proof"
          title={<>work that <em>ships</em><span>.</span></>}
          description="hardware ownership, systems thinking, and the tools behind the builds"
          stamp="available / 2026"
        />
        <ExperienceStage />
        <button
          type="button"
          className="stage-next-link font-mono"
          onClick={() => document.getElementById('home-stage-education')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          <span>next / education</span>
          <ArrowUpRight size={14} />
        </button>
      </section>

      <section className="home-stage home-stage-education" id="home-stage-education" ref={educationStageRef}>
        <StageHeading
          index="03 / 03"
          icon={<GraduationCap size={16} />}
          eyebrow="the foundation / always learning"
          title={<>built from <em>curiosity</em><span>.</span></>}
          description="the places, people, and questions that shaped the way I build"
        />
        <EducationStage />
      </section>
    </div>
  );
}

function StageHeading({ index, icon, eyebrow, title, description, stamp }) {
  return (
    <header className="home-stage-heading">
      <div className="home-stage-heading-copy">
        <div className="home-stage-heading-topline">
          <span className="home-stage-index font-mono">{index}</span>
          <span className="home-stage-icon">{icon}</span>
          <p className="eyebrow font-mono">{eyebrow}</p>
        </div>
        <h2>{title}</h2>
        <p className="home-stage-description font-mono">{description}</p>
      </div>
      {stamp && <span className="experience-stamp font-mono">{stamp}</span>}
    </header>
  );
}