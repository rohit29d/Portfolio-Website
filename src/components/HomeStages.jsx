import React from 'react';
import { ArrowDown, ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react';
import Hero from './Hero';
import { EducationStage, ExperienceStage } from './Experience';

export default function HomeStages({ onOpenTerminal, onNavigate }) {
  return (
    <div className="home-stages">
      <section className="home-stage home-stage-hero" id="home-stage-home">
        <div className="home-stage-index font-mono">01 / 03</div>
        <Hero onOpenTerminal={onOpenTerminal} onNavigate={onNavigate} />
        <button
          type="button"
          className="stage-scroll-cue font-mono"
          onClick={() => document.getElementById('home-stage-experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          <span>scroll to explore</span>
          <ArrowDown size={14} />
        </button>
      </section>

      <section className="home-stage home-stage-experience" id="home-stage-experience">
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

      <section className="home-stage home-stage-education" id="home-stage-education">
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