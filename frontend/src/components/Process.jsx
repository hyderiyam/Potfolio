import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Code, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, align business goals, and establish a robust technical blueprint.',
    icon: Brain,
    color: '#A855F7', // Purple
    laserPath: 'M 150,300 C 280,300 350,75 500,75',
    telemetryTop: [
      'SYS_PHASE: 01_DISCOVERY',
      'FOCUS: REQUIREMENT_ALIGN',
      'METRIC: RISK_MINIMIZATION',
      'TARGET: PROJECT_SCOPE'
    ],
    telemetryBottom: [
      'ANALYTIC_SYS: AGENTIC_AI',
      'DOC_FORMAT: BLUEPRINT',
      'TOOLS: FIGMA_MIRO',
      'PLANNING: COMPREHENSIVE'
    ]
  },
  {
    id: '02',
    title: 'Agile Development',
    description: 'Writing clean, modular code in rapid iterations. You get weekly updates and responsive adjustments.',
    icon: Code,
    color: '#6366F1', // Indigo
    laserPath: 'M 150,300 C 250,300 350,225 500,225',
    telemetryTop: [
      'SYS_PHASE: 02_DEVELOPMENT',
      'ENGINE: FLUTTER_REACT',
      'METHODOLOGY: RAPID_SPRINT',
      'TARGET: MODULAR_CODE'
    ],
    telemetryBottom: [
      'STATE_MGMT: RIVERPOD_BLOC',
      'COMPILER: DART_V8_JIT',
      'CODE_LINT: AUTOMATED',
      'VELOCITY: SCALED_AGILE'
    ]
  },
  {
    id: '03',
    title: 'Testing & QA',
    description: 'Executing unit, integration, and manual test suites to deliver a highly secure, crash-free product.',
    icon: ShieldCheck,
    color: '#EC4899', // Pink
    laserPath: 'M 150,300 C 250,300 350,375 500,375',
    telemetryTop: [
      'SYS_PHASE: 03_QUALITY_ASSUR',
      'COVERAGE: UNIT_INTEGRATION',
      'TESTS_RUN: PIPELINE_AUTO',
      'TARGET: ZERO_CRASH'
    ],
    telemetryBottom: [
      'BUGS_FIXED: 100%_RESOLVED',
      'STABILITY: REINFORCED',
      'SEC_COMPLIANCE: VERIFIED',
      'RELEASE: PRODUCTION_READY'
    ]
  },
  {
    id: '04',
    title: 'Deployment & Launch',
    description: 'Configuring servers, deploying to app stores, setting up SSL/DNS, and monitoring post-launch operations.',
    icon: Rocket,
    color: '#06B6D4', // Cyan
    laserPath: 'M 150,300 C 280,300 350,525 500,525',
    telemetryTop: [
      'SYS_PHASE: 04_DEPLOY_LAUNCH',
      'PLATFORMS: STORES_CLOUD',
      'CI_CD_SYS: GITHUB_ACTIONS',
      'TARGET: 100%_UPTIME'
    ],
    telemetryBottom: [
      'SSL_TUNNEL: SECURE_HTTPS',
      'DNS_ROUTING: CONFIGURED',
      'TELEMETRY: LIVE_MONITOR',
      'DOWNTIME_EST: 0.00%'
    ]
  }
];

const Process = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  
  // Set default active step if nothing is hovered, to keep reactor glowing
  const activeIndex = hoveredStep !== null ? hoveredStep : 0;
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="process" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid scroll-mt-24">
      
      {/* Inline styles for HUD spin and laser animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes hud-rotate-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hud-rotate-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes laser-flow {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .hud-spin-cw {
          animation: hud-rotate-cw 22s linear infinite;
        }
        .hud-spin-ccw {
          animation: hud-rotate-ccw 14s linear infinite;
        }
        .hud-spin-fast {
          animation: hud-rotate-cw 8s linear infinite;
        }
        .laser-flow-active {
          stroke-dasharray: 8, 12;
          animation: laser-flow 1.2s linear infinite;
        }
        .glow-filter-purple {
          filter: drop-shadow(0px 0px 15px rgba(168, 85, 247, 0.7));
        }
        .glow-filter-indigo {
          filter: drop-shadow(0px 0px 15px rgba(99, 102, 241, 0.7));
        }
        .glow-filter-pink {
          filter: drop-shadow(0px 0px 15px rgba(236, 72, 153, 0.7));
        }
        .glow-filter-cyan {
          filter: drop-shadow(0px 0px 15px rgba(6, 182, 212, 0.7));
        }
      `}} />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter text-gradient">
            Workflow <span className="text-primary italic">Reactor</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Hover over the phases to power up the core and trigger database & pipeline connections.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 justify-between">
          
          {/* Left Column: Cyberpunk HUD Reactor (Hidden on small screens, shown above lg) */}
          <div className="relative w-[500px] h-[600px] flex-shrink-0 hidden lg:block select-none">
            <svg
              width="500"
              height="600"
              viewBox="0 0 500 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              <defs>
                {/* Glow Filter */}
                <filter id="hud-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Laser connecting lines */}
              {steps.map((step, index) => {
                const isActive = activeIndex === index;
                return (
                  <g key={`laser-${step.id}`}>
                    {/* Background dark laser path */}
                    <path
                      d={step.laserPath}
                      stroke="rgba(255, 255, 255, 0.04)"
                      strokeWidth="2"
                      fill="none"
                    />
                    
                    {/* Active glowing laser path */}
                    <path
                      d={step.laserPath}
                      stroke={step.color}
                      strokeWidth={isActive ? "3.5" : "1.5"}
                      fill="none"
                      className={isActive ? "laser-flow-active" : ""}
                      style={{
                        opacity: isActive ? 0.95 : 0.1,
                        filter: isActive ? 'drop-shadow(0px 0px 6px ' + step.color + ')' : 'none',
                        transition: 'opacity 0.4s ease, stroke-width 0.4s ease'
                      }}
                    />
                  </g>
                );
              })}

              {/* Reactor Outer HUD System (Centered at 150, 300) */}
              <g className="hud-spin-cw" style={{ transformOrigin: '150px 300px' }}>
                {/* Outer Dashed Orbit */}
                <circle
                  cx="150"
                  cy="300"
                  r="110"
                  stroke={activeStep.color}
                  strokeWidth="1.5"
                  strokeDasharray="6 14"
                  opacity="0.25"
                  style={{ transition: 'stroke 0.5s ease' }}
                />
                
                {/* Outer Tickmarks Circle */}
                <circle
                  cx="150"
                  cy="300"
                  r="95"
                  stroke={activeStep.color}
                  strokeWidth="3"
                  strokeDasharray="2 30"
                  opacity="0.4"
                  style={{ transition: 'stroke 0.5s ease' }}
                />
              </g>

              <g className="hud-spin-ccw" style={{ transformOrigin: '150px 300px' }}>
                {/* Middle Tech HUD Ring */}
                <circle
                  cx="150"
                  cy="300"
                  r="80"
                  stroke={activeStep.color}
                  strokeWidth="1.5"
                  strokeDasharray="40 10 5 10 50 15"
                  opacity="0.3"
                  style={{ transition: 'stroke 0.5s ease' }}
                />
                
                {/* Detailed crosshairs inside the ring */}
                <path
                  d="M 150,210 L 150,225 M 150,375 L 150,390 M 60,300 L 75,300 M 225,300 L 240,300"
                  stroke={activeStep.color}
                  strokeWidth="1.5"
                  opacity="0.2"
                  style={{ transition: 'stroke 0.5s ease' }}
                />
              </g>

              <g className="hud-spin-fast" style={{ transformOrigin: '150px 300px' }}>
                {/* Inner dashboard ring */}
                <circle
                  cx="150"
                  cy="300"
                  r="62"
                  stroke={activeStep.color}
                  strokeWidth="2"
                  strokeDasharray="4 8"
                  opacity="0.5"
                  style={{ transition: 'stroke 0.5s ease' }}
                />
              </g>

              {/* Central Core Aura */}
              <circle
                cx="150"
                cy="300"
                r="46"
                fill={`${activeStep.color}15`}
                stroke={activeStep.color}
                strokeWidth="1.5"
                opacity="0.8"
                style={{
                  transition: 'stroke 0.5s ease, fill 0.5s ease',
                  filter: 'url(#hud-glow)'
                }}
              />

              {/* Solid Reactor Core */}
              <circle
                cx="150"
                cy="300"
                r="38"
                fill="#030014"
                stroke={activeStep.color}
                strokeWidth="3.5"
                style={{ transition: 'stroke 0.5s ease' }}
              />
            </svg>

            {/* Central Holographic Icon */}
            <div
              className="absolute left-[150px] top-[300px] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none transition-all duration-500"
              style={{
                color: activeStep.color,
                filter: `drop-shadow(0px 0px 8px ${activeStep.color})`
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                  animate={{ scale: 1.1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ActiveIcon size={34} strokeWidth={1.5} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Futuristic floating readout coordinates (DYNAMIC Top Block) */}
            <div className="absolute left-[10px] top-[140px] font-mono text-[9px] space-y-1 select-none">
              {activeStep.telemetryTop.map((item, idx) => (
                <div 
                  key={idx} 
                  style={{
                    color: idx === 0 ? activeStep.color : 'rgba(156, 163, 175, 0.45)',
                    transition: 'color 0.4s ease',
                    textShadow: idx === 0 ? `0 0 6px ${activeStep.color}50` : 'none'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Futuristic floating readout coordinates (DYNAMIC Bottom Block) */}
            <div className="absolute left-[20px] bottom-[140px] font-mono text-[9px] space-y-1 select-none">
              {activeStep.telemetryBottom.map((item, idx) => (
                <div 
                  key={idx} 
                  style={{
                    color: idx === 2 ? activeStep.color : 'rgba(156, 163, 175, 0.45)',
                    transition: 'color 0.4s ease',
                    textShadow: idx === 2 ? `0 0 6px ${activeStep.color}50` : 'none'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Reactor Header View (Stays stacked at top for screen < lg) */}
          <div className="lg:hidden flex flex-col items-center justify-center relative select-none mb-4">
            <div className="relative w-48 h-48 flex items-center justify-center border border-white/5 bg-black/35 rounded-full p-2">
              {/* Rotating outer rings */}
              <div
                className="absolute inset-1 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"
                style={{ borderColor: `${activeStep.color}30`, transition: 'border-color 0.5s' }}
              />
              <div
                className="absolute inset-4 rounded-full border border-dashed border-secondary/20"
                style={{
                  borderColor: `${activeStep.color}60`,
                  animation: 'hud-rotate-ccw 10s linear infinite',
                  transition: 'border-color 0.5s'
                }}
              />
              
              {/* Core reactor */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center border-4 relative"
                style={{
                  borderColor: activeStep.color,
                  backgroundColor: `${activeStep.color}08`,
                  boxShadow: `inset 0 0 15px ${activeStep.color}30, 0 0 20px ${activeStep.color}20`,
                  transition: 'all 0.5s ease'
                }}
              >
                <div style={{ color: activeStep.color, filter: `drop-shadow(0px 0px 8px ${activeStep.color})`, transition: 'color 0.5s' }}>
                  <ActiveIcon size={32} />
                </div>
              </div>
            </div>
            
            {/* Mobile dynamic status badge */}
            <div className="mt-4 px-4 py-1 rounded-full border border-white/10 glass-dark text-xs font-mono tracking-widest text-center" style={{ color: activeStep.color, transition: 'color 0.5s' }}>
              PHASE_0{activeStep.id}: {activeStep.title.toUpperCase()}
            </div>
          </div>

          {/* Right Column: Process Glassmorphism cards */}
          <div className="flex-1 flex flex-col gap-6 w-full lg:max-w-2xl">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCurrent = index === activeIndex;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    isCurrent
                      ? 'scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.02)]'
                      : 'hover:scale-[1.01]'
                  }`}
                >
                  {/* Glowing background gradient border on active/hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${step.color}80, transparent 80%)`,
                      opacity: isCurrent ? 1 : 0
                    }}
                  />
                  
                  {/* Card Content container */}
                  <div
                    className="relative rounded-3xl p-6 md:p-8 bg-[#07041a]/90 backdrop-blur-xl border border-white/5 flex gap-5 md:gap-6 items-center transition-colors duration-500"
                    style={{
                      borderColor: isCurrent ? `${step.color}40` : 'rgba(255,255,255,0.05)',
                      boxShadow: isCurrent ? `inset 0 0 12px ${step.color}05` : 'none'
                    }}
                  >
                    {/* Glowing index number on the left */}
                    <div
                      className="text-4xl md:text-5xl font-black font-mono transition-colors duration-500 flex-shrink-0"
                      style={{
                        color: isCurrent ? step.color : 'rgba(255, 255, 255, 0.05)',
                        filter: isCurrent ? `drop-shadow(0px 0px 8px ${step.color}60)` : 'none'
                      }}
                    >
                      {step.id}
                    </div>

                    {/* Step details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500"
                          style={{
                            backgroundColor: isCurrent ? `${step.color}15` : 'rgba(255, 255, 255, 0.03)',
                            color: isCurrent ? step.color : '#9ca3af'
                          }}
                        >
                          <Icon size={16} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
