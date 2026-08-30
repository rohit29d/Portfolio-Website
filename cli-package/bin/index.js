#!/usr/bin/env node

const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  wine: '\x1b[38;2;107;31;42m',
  wineBright: '\x1b[38;2;200;70;90m',
  white: '\x1b[38;2;255;255;255m',
  green: '\x1b[32m',
  gray: '\x1b[90m'
};

const output = `
${c.green}✔${c.reset} hardware curiosity confirmed.

${c.bold}${c.white}Rohit Kumar Dubbaka${c.reset}
${c.wineBright}Embedded Systems Intern @ DeltaIOT Pvt Ltd (Hyderabad)${c.reset}
${c.dim}B.Tech in Electronics & Communication Engineering (2026)${c.reset}

${c.bold}${c.white}strengths?${c.reset}
  ${c.wineBright}•${c.reset} 4-Layer LTE/GPS PCB design & 3A burst power breakout boards
  ${c.wineBright}•${c.reset} Low-level STM32 C firmware, ADC, UART, SPI, and RTOS
  ${c.wineBright}•${c.reset} VHDL FPGA RTL priority arbiter architectures
  ${c.wineBright}•${c.reset} Custom wearable sEMG Analog Front-End (AFE) PCB

${c.bold}${c.white}my stack?${c.reset}
  ${c.white}Altium Designer • KiCAD • STM32CubeIDE • ESP-IDF • Vivado • LTspice • C/C++ • Python • VHDL${c.reset}

${c.bold}${c.white}flagship proof${c.reset}
  ${c.wineBright}•${c.reset} Hands-Free sEMG Speech-Controlled Wheelchair (Custom AFE PCB + Real-time ML)
  ${c.wineBright}•${c.reset} Priority Arbiter for Multi-Channel Bus (RTL to Basys-3 FPGA)
  ${c.wineBright}•${c.reset} Aeromesh Turbulence Sensor Mesh Network (CraftifAI Buildathon)

${c.bold}${c.white}links & contact${c.reset}
  ${c.gray}Website:${c.reset}  https://portfolio-website-ochre-six-99.vercel.app
  ${c.gray}GitHub:${c.reset}   https://github.com/rohit29d
  ${c.gray}LinkedIn:${c.reset} https://linkedin.com/in/rohit-kumar-dubbaka
  ${c.gray}Email:${c.reset}    rohitdubbaka29@gmail.com
  ${c.gray}Phone:${c.reset}    +91 9908422253
  ${c.gray}Resume:${c.reset}   https://portfolio-website-ochre-six-99.vercel.app/resume.pdf

${c.wineBright}Status: 0 errors, system operational. What do you want to build next?${c.reset}
`;

console.log(output);
