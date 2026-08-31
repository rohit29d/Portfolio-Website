import React from 'react';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';

const SKILLS = [
  { category: 'Hardware', items: ['ESP32', 'STM32', 'Basys-3 FPGA', 'Analog and Digital Circuits'] },
  { category: 'EDA & Simulation Tools', items: ['Altium Designer', 'KiCAD', 'STM32CubeIDE', 'ESP-IDF', 'Xilinx Vivado', 'LTspice'] },
  { category: 'Domains', items: ['PCB Design', 'Embedded Systems'] },
  { category: 'Programming & RTL', items: ['C', 'Embedded C', 'FreeRTOS', 'Verilog/VHDL'] }
];

const CERTIFICATIONS = [
  { name: 'PCB Design with KiCad', issuer: 'Peter Dalmaris (Udemy)', date: 'Aug 2026' },
  { name: 'Machine Learning Techniques in MATLAB', issuer: 'MathWorks', date: 'Jun 2025' },
  { name: 'SystemVerilog Fundamentals', issuer: 'Kumar Khandagle (Udemy)', date: 'Dec 2024' }
];

export default function Experience() {
  return (
    <section className="experience-scene">
      <header className="experience-heading">
        <div>
          <p className="eyebrow font-mono">the path / practical proof</p>
          <h1>work that <em>ships</em><span>.</span></h1>
          <p className="experience-subheading font-mono">
            hardware ownership, systems thinking, and the tools behind the builds
          </p>
        </div>
        <span className="experience-stamp font-mono">available / 2026</span>
      </header>

      <div className="experience-grid">
        <div className="info-block">
          <div className="info-heading">
            <Briefcase size={17} />
            <span className="font-mono">// experience</span>
          </div>
          <article className="info-card experience-card">
            <div className="info-card-topline">
              <h2>Embedded Systems Intern</h2>
              <span className="font-mono info-date">Feb 2026 — Present</span>
            </div>
            <p className="font-mono info-muted">@ DeltaIOT Pvt Ltd (Hyderabad)</p>
            <ul>
              <li>Delivered a compact 4-Layer LTE/GPS module board capable of handling 3A current bursts for mainstream product.</li>
              <li>Delivered full PCB design for IC-based hot-swappable power management breakout board (2.5A bursts) from schematic to production.</li>
              <li>Conducted pin-by-pin hardware reverse-engineering on industry IoT devices for reference architecture.</li>
              <li>Participated in field deployments and remote firmware OTA lifecycle updates.</li>
            </ul>
          </article>
        </div>

        <div className="info-block">
          <div className="info-heading">
            <GraduationCap size={17} />
            <span className="font-mono">// education</span>
          </div>
          <article className="info-card education-card">
            <div>
              <div className="info-card-topline">
                <h2>Amrita Vishwa Vidyapeetham</h2>
                <span className="font-mono info-date">Grad 2026</span>
              </div>
              <p className="font-mono info-muted">B.Tech in Electronics & Communication Engineering</p>
            </div>
            <div className="education-row">
              <h3>VINJEE Junior College, Hyderabad</h3>
              <span className="font-mono info-muted">2022</span>
              <p className="font-mono info-muted">Class XII — Telangana Board of Intermediate Education</p>
            </div>
            <div className="education-row">
              <h3>The Hyderabad Public School, Begumpet</h3>
              <span className="font-mono info-muted">2020</span>
              <p className="font-mono info-muted">Class X — ICSE</p>
            </div>
          </article>
        </div>
      </div>

      <div className="experience-lower-grid">
        <div className="info-block">
          <div className="info-heading">
            <Code size={17} />
            <span className="font-mono">// skill cart</span>
          </div>
          <div className="skill-grid">
            {SKILLS.map((group) => (
              <article className="skill-card" key={group.category}>
                <h2 className="font-mono">{group.category}</h2>
                <div className="tag-list">
                  {group.items.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="info-block certification-block">
          <div className="info-heading">
            <Award size={17} />
            <span className="font-mono">// certifications</span>
          </div>
          <div className="cert-list">
            {CERTIFICATIONS.map((cert) => (
              <article className="cert-card" key={cert.name}>
                <h2>{cert.name}</h2>
                <div>
                  <span className="font-mono info-muted">{cert.issuer}</span>
                  <span className="font-mono info-date">{cert.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}