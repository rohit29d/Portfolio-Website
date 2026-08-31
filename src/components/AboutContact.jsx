import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function AboutContact({ viewMode = 'all' }) {
  const [avatarHover, setAvatarHover] = useState(false);

  if (viewMode === 'contact') {
    return <ContactPanel />;
  }

  return (
    <section className="about-scene">
      <div className="about-intro">
        <div className="about-portrait">
          <span className={`about-avatar ${avatarHover ? 'is-hovered' : ''}`}>
            <img
              src="/avatar.png"
              alt="Rohit Kumar Dubbaka Avatar"
              onMouseEnter={() => setAvatarHover(true)}
              onMouseLeave={() => setAvatarHover(false)}
            />
            <span className="hero-status" title="Status: Active" />
          </span>
          <span className="about-portrait-note font-mono">built with curiosity / 2026</span>
        </div>
        <div className="about-title">
          <p className="eyebrow font-mono">a short transmission</p>
          <h1>who am <em>i</em><span>?</span></h1>
          <p className="about-title-note font-mono">the human layer behind the hardware</p>
        </div>
      </div>

      <div className="about-copy">
        <p className="about-lead">
          who am i if not my curiosity, the circuits i solder, and the ideas i build into the physical world?
        </p>
        <p>
          i am a hardware engineer and embedded builder (graduating in electronics & communication engineering in 2026).
          i do everything i put my mind to — whether it's laying out tight 4-layer LTE/GPS boards capable of taking 3A bursts,
          writing bare-metal firmware that doesn't drop a single byte, or designing analog front-ends for speech-controlled wheelchairs.
        </p>
        <p>
          currently working as an Embedded Systems Intern at <strong>DeltaIOT Pvt Ltd</strong> in Hyderabad, focusing on
          hardware R&D, power management breakout boards, and real-time firmware architecture where system-level ownership actually matters.
        </p>
        <p>
          i believe in craftsmanship over hype. no fluff, no AI slop — just solid engineering, clean PCB routing, disciplined firmware,
          and making cool things that solve real-world problems.
        </p>
        <p className="about-aside">
          when i'm not routing differential pairs or debugging UART traces, i'm probably tinkering with FPGA RTL,
          exploring edge ML, or building little side projects just because i can.
        </p>
      </div>
    </section>
  );
}

function ContactPanel() {
  return (
    <section className="contact-scene">
      <div className="contact-copy">
        <p className="eyebrow font-mono">final frame / open channel</p>
        <h1>let's make<br /><em>something</em> real<span>.</span></h1>
        <p className="contact-lede">
          feel free to reach out for embedded hardware collabs, firmware discussions, or cool project ideas :)
        </p>
      </div>

      <div className="contact-links">
        <ContactLink href="https://github.com/rohit29d" icon={<Github size={16} />} label="github.com/rohit29d" />
        <ContactLink href="https://linkedin.com/in/rohit-kumar-dubbaka" icon={<Linkedin size={16} />} label="linkedin" />
        <ContactLink href="mailto:rohitdubbaka29@gmail.com" icon={<Mail size={16} />} label="rohitdubbaka29@gmail.com" accent />
        <ContactLink href="tel:+919908422253" icon={<Phone size={15} />} label="+91 9908422253" />
      </div>

      <p className="contact-signoff font-mono">signal received / Rohit Kumar Dubbaka / Hyderabad, IN</p>
    </section>
  );
}

function ContactLink({ href, icon, label, accent = false }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`contact-link ${accent ? 'accent' : ''}`}
    >
      <span className="contact-link-icon">{icon}</span>
      <span className="font-mono">{label}</span>
      <ArrowUpRight size={14} />
    </a>
  );
}