import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Phone } from 'lucide-react';

export default function AboutContact({ viewMode = 'all' }) {
  const [avatarHover, setAvatarHover] = useState(false);

  return (
    <section style={{
      padding: '40px 20px 80px',
      maxWidth: '960px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* 1. About Me Section (2-Column Sticky Split Layout) */}
      {(viewMode === 'all' || viewMode === 'about') && (
        <div id="about-section" className="about-split-container" style={{ marginBottom: '60px' }}>
          {/* Left Column: Fixed / Sticky Profile Identity Lockup */}
          <div className="about-left-sticky">
            {/* High-Mid Curved Header: "Who am i?" */}
            <div style={{ width: '240px', height: '52px', margin: '0 auto -6px', position: 'relative', zIndex: 2, overflow: 'visible' }}>
              <svg viewBox="0 0 240 60" className="hero-curve-svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <path id="about-curve" d="M 30,50 A 110,40 0 0,1 210,50" fill="transparent" />
                <text textAnchor="middle" className="hero-curve-text" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '36px', letterSpacing: '0' }}>
                  <textPath href="#about-curve" startOffset="50%">
                    Who am i?
                  </textPath>
                </text>
              </svg>
            </div>

            {/* High-Mid Centered Avatar Container with Solid Maroon LED & Border */}
            <div style={{ display: 'inline-block', position: 'relative', marginBottom: '18px', zIndex: 1 }}>
              <div
                onMouseEnter={() => setAvatarHover(true)}
                onMouseLeave={() => setAvatarHover(false)}
                style={{
                  width: '136px',
                  height: '136px',
                  borderRadius: '50%',
                  padding: '2px',
                  background: avatarHover
                    ? '#6B1F2A'
                    : 'var(--border-subtle)',
                  transition: 'background 0.3s var(--ease-smooth)',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: '#000000',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src="/avatar.png"
                    alt="Rohit Kumar Dubbaka Avatar"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Status LED */}
                <div style={{
                  position: 'absolute',
                  bottom: '4px',
                  right: '4px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#6B1F2A',
                  border: '2px solid #000000'
                }} title="Status: Active" />
              </div>
            </div>

            {/* Solid Maroon "about me" Badge */}
            <div>
              <span className="font-mono" style={{
                fontSize: '0.84rem',
                color: '#ffffff',
                fontWeight: 600,
                background: '#6B1F2A',
                padding: '5px 20px',
                borderRadius: '9999px',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2px',
                letterSpacing: '0.02em',
                boxShadow: '0 2px 12px rgba(107, 31, 42, 0.4)'
              }}>
                about me
              </span>
            </div>
          </div>

          {/* Right Column: Scrollable Personal Narrative Write-up */}
          <div className="about-right-content">
            <p style={{ color: '#ffffff', fontSize: '1.08rem', fontWeight: 500 }}>
              i am just another one of the human being walking this planet. As mundane or boring as that sounds, I think each one of us has their own flair, so here's mine:
            </p>

            <p>
              i am a hardware engineer and embedded builder (graduated in electronics &amp; communication engineering... you can probably get all that from my resume). As for my professional path, i am an upcoming embedded hardware engineer at DeltaIOT after my 6-month internship there, during which i delivered some pretty cool PCBs. Prior to that, I had some interesting builds during my bachelor's. I built ... or rather, engineered a complete wheelchair that runs on commands from your vocal muscles and the sweet part? The entire thing was done from scratch in the lab. This one laid foundations for me interest in systems as a whole. Apart from this, there are a couple of other projects (head over to the projects tab to check them out).
            </p>

            <p>
              i have an itch inside me to learn how things work... guess they call it curiosity. There is a new piece of tech? Sure, yess tell me how does it work? Your Alexa can do that... HOWWW? This intrigue drew me to electronics - from ripping apart appliances at home to laying out tight 4-layer boards capable of taking 3A bursts, writing bare-metal firmware that doesn't drop a byte, or designing analog front-ends for speech-controlled wheelchairs.
            </p>

            <p>
              many of the projects didn't work as soon as i plugged them in. That's the beauty of electronics, you may spend an hour designing it, but it might take days to debug it. After months of fine-tuning, i had that wheelchair moving on real commands, after days of probing every PCB pad, i had those boards transmitting data. So that's one side of me: i stick with things.
            </p>

            <p>
              I am not purely a techie. Sometimes the closer you get to tech, the farther you want to step away from computers. For me, it's all about creativity and making things. You will find me in the gym building myself, in the garden taking care of my plants, photographing things i find beautiful, sketching up something, or writing random stories (which i intend to film sometime :)), oh and movies—yes, i love watching movies, I'm a huge cinema geek).
            </p>

            <p>
              i love being on the creative side of things and hope I never have to leave this side. Because creativity and engineering - god, what a combo. All those magnificent buildings, airplanes, ROCKETS!!, the boards that run our phones and computers, CHIPS!! (not the ones you eat, the ones that store our data). Engineering is no less than wizardry, and I'm glad that i get to be a wizard.
            </p>

            <p>
              basically, I'm a full-circle novelty junkie: i have to balance the nerd that pays my bills and the creative that keeps me sane.
            </p>

            <p>
              Now that i've just stepped out into the world, everything feels really fast-paced and overwhelming, and I see my peers kind of feeling that way too. It feels like just yesterday i was worrying about turning in an assignment at 11:59 PM, and today I'm thinking about how to build skills and diversify my path so that 5 years down the lane, I can afford and build the things I'm dreaming of right now. Things keep changing and moving, and i've come to realize that it's not going to stop—so I'm learning to run, but on my own path and in my own direction.
            </p>

            <p>
              i'd like to think I'm a determined and ambitious person. I used to be a kid weighing 96kilos, afraid and deeply self-conscious. But I grew out of it, burned off 20+ kilos hitting the gym, running, and cycling and what not. Although that journey is continuous, it gave me firsthand proof of what consistency and putting in the work can really do.
            </p>
          </div>
        </div>
      )}

      {/* 2. Contact Section */}
      {(viewMode === 'all' || viewMode === 'contact') && (
        <div id="contact-section" style={{
          textAlign: 'center',
          padding: '48px 24px',
          background: '#000000',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          marginTop: viewMode === 'contact' ? '20px' : '40px'
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
            wanna connect<span style={{ color: '#6B1F2A' }}>?</span>
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 28px' }}>
            feel free to reach out, im always curious for anything new :)
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <a
              href="https://github.com/rohit29d"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#000000',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.88rem',
                transition: 'all 0.3s var(--ease-smooth)'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              <Github size={16} />
              <span>github.com/rohit29d</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://linkedin.com/in/rohit-kumar-dubbaka"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#000000',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.88rem',
                transition: 'all 0.3s var(--ease-smooth)'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="mailto:rohitdubbaka29@gmail.com"
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#6B1F2A',
                color: '#ffffff',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.88rem',
                boxShadow: '0 2px 12px rgba(107, 31, 42, 0.4)'
              }}
            >
              <Mail size={16} />
              <span>rohitdubbaka29@gmail.com</span>
            </a>

            <a
              href="tel:+919908422253"
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#000000',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.88rem'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              <Phone size={15} />
              <span>+91 9908422253</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
