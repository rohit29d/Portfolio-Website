import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Check, Copy } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [outputLines, setOutputLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  const fullSequence = [
    { text: '- checking hardware curiosity...', color: 'var(--accent-wine-hover)' },
    { text: '✔ hardware curiosity confirmed.', color: 'var(--accent-wine-hover)' },
    { text: ' ', color: '' },
    { text: 'name? Rohit Kumar Dubbaka', color: '#ffffff' },
    { text: 'embedded systems intern @ deltaiot pvt ltd (hyderabad)', color: 'var(--accent-wine-hover)' },
    { text: 'education: B.Tech ECE (2026) @ Amrita Vishwa Vidyapeetham', color: '#ffffff' },
    { text: ' ', color: '' },
    { text: 'strengths?', color: '#ffffff' },
    { text: '• 4-layer LTE/GPS PCB design & 3A burst power management', color: 'var(--text-secondary)' },
    { text: '• low-level stm32 C firmware, ADC/UART/SPI & RTOS', color: 'var(--text-secondary)' },
    { text: '• vhdl fpga rtl architecture (basys-3 priority arbiter)', color: 'var(--text-secondary)' },
    { text: '• wearable sEMG analog front-end (AFE) & edge ai classification', color: 'var(--text-secondary)' },
    { text: ' ', color: '' },
    { text: 'hardware & software stack?', color: '#ffffff' },
    { text: 'altium designer • kicad • stm32cubeide • esp-idf • vivado • ltspice • C/C++ • python • vhdl', color: '#ffffff' },
    { text: ' ', color: '' },
    { text: 'flagship proof', color: '#ffffff' },
    { text: '• hands-free sEMG speech wheelchair AFE PCB & real-time ML', color: 'var(--text-secondary)' },
    { text: '• priority arbiter VHDL logic synthesized on basys-3 FPGA', color: 'var(--text-secondary)' },
    { text: '• aeromesh edge AI turbulence detection nodes (craftifai buildathon)', color: 'var(--text-secondary)' },
    { text: ' ', color: '' },
    { text: 'links & contact', color: 'var(--accent-wine-hover)' },
    { text: 'github: https://github.com/rohit29d', color: '#ffffff' },
    { text: 'email: rohitdubbaka29@gmail.com', color: '#ffffff' },
    { text: 'phone: +91 9908422253', color: '#ffffff' },
    { text: 'resume: /resume.pdf', color: 'var(--accent-wine-hover)' },
    { text: ' ', color: '' },
    { text: 'status: 0 errors, system operational. what do you want to build next?', color: 'var(--accent-wine-hover)' }
  ];

  useEffect(() => {
    if (!isOpen) {
      setOutputLines([]);
      setIsTyping(false);
      return;
    }

    setOutputLines([]);
    setIsTyping(true);
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullSequence.length) {
        setOutputLines(prev => [...prev, fullSequence[index]]);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleCopyLogs = () => {
    const textToCopy = fullSequence.map(s => s.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{
        background: '#000000',
        border: '1px solid var(--accent-wine-border)',
        padding: '0',
        overflow: 'hidden'
      }}>
        {/* Terminal Header */}
        <div style={{
          background: '#0a0405',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TerminalIcon size={16} color="var(--accent-wine)" />
            <span className="font-mono" style={{ fontSize: '0.82rem', color: '#ffffff', fontWeight: 600 }}>
              bash — npx rohitdubbaka
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleCopyLogs}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem'
              }}
              className="font-mono"
            >
              {copied ? <Check size={14} color="var(--accent-wine)" /> : <Copy size={14} />}
              <span>{copied ? 'copied' : 'copy'}</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Terminal Screen Output */}
        <div className="font-mono" style={{
          padding: '22px',
          minHeight: '340px',
          maxHeight: '480px',
          overflowY: 'auto',
          fontSize: '0.88rem',
          lineHeight: '1.6',
          color: '#ffffff'
        }}>
          <div style={{ marginBottom: '14px', color: 'var(--text-muted)' }}>
            <span style={{ color: 'var(--accent-wine)' }}>rohit@embedded-node</span>:<span style={{ color: '#ffffff' }}>~</span>$ npx rohitdubbaka
          </div>

          {outputLines.map((line, idx) => (
            <div key={idx} style={{ color: line.color || '#ffffff', whiteSpace: 'pre-wrap' }}>
              {line.text}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'inline-block', width: '8px', height: '15px', background: 'var(--accent-wine)', marginLeft: '4px' }} className="led-indicator" />
          )}
        </div>
      </div>
    </div>
  );
}
