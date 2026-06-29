import React from 'react';
import { certifications } from '../mock';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Company logo SVGs mapping
const companyLogos = {
  cisco: (
    <svg viewBox="0 0 24 24" className="issuer-logo" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M4 14v4M6 10v8M8 12v6M10 6v12M12 8v10M14 6v12M16 12v6M18 10v8M20 14v4" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="issuer-logo" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" className="issuer-logo" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  ),
  meta: (
    <svg viewBox="0 0 24 24" className="issuer-logo" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 6a5.5 5.5 0 0 0-4.5 2.36 5.5 5.5 0 0 0-4.5-2.36C4.47 6 2 8.5 2 12s2.47 6 5.5 6a5.5 5.5 0 0 0 4.5-2.36 5.5 5.5 0 0 0 4.5 2.36c3.03 0 5.5-2.5 5.5-6s-2.47-6-5.5-6z"/>
    </svg>
  ),
  hec: (
    <svg viewBox="0 0 24 24" className="issuer-logo" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
    </svg>
  ),
  hci: (
    <svg viewBox="0 0 24 24" className="issuer-logo" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )
};

const getIssuerLogo = (issuer) => {
  const name = issuer.toLowerCase();
  if (name.includes('cisco')) return companyLogos.cisco;
  if (name.includes('github')) return companyLogos.github;
  if (name.includes('google')) return companyLogos.google;
  if (name.includes('meta')) return companyLogos.meta;
  if (name.includes('hec') || name.includes('higher education') || name.includes('commission')) return companyLogos.hec;
  return companyLogos.hci;
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid">
      
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter text-gradient">
            Continuous <span className="text-primary italic">Learning</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Industry-recognized certifications and specialized technical engineering tracks.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto justify-items-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="w-full max-w-[340px]"
            >
              <StyledWrapper>
                <div className="ticket-wrapper">
                  <div className="ticket">
                    <div className="t-main">
                      <div className="t-content">
                        
                        {/* Logo & Cert Type */}
                        <div className="t-header">
                          <div className="t-logo">
                            {getIssuerLogo(cert.issuer)}
                          </div>
                          <div className="t-type">Verifiable</div>
                        </div>

                        {/* Title */}
                        <div className="t-title">{cert.title}</div>
                        
                        {/* Description */}
                        <div className="t-subtitle">{cert.description}</div>

                        {/* Details */}
                        <div className="t-details">
                          <div className="t-detail-item">
                            <span className="t-label">Date</span>
                            <span className="t-value">{cert.date}</span>
                          </div>
                          {cert.credentialId ? (
                            <div className="t-detail-item">
                              <span className="t-label">Credential ID</span>
                              <span className="t-value">{cert.credentialId}</span>
                            </div>
                          ) : (
                            <div className="t-detail-item">
                              <span className="t-label">Status</span>
                              <span className="t-value">Completed</span>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </StyledWrapper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  perspective: 1000px;
  width: 100%;

  .ticket-wrapper {
    --t-bg: #0c0824;
    --t-bg-light: #150f38;
    --t-accent: #a855f7;
    --t-accent-glow: rgba(168, 85, 247, 0.45);
    --t-text-main: #f8fafc;
    --t-text-muted: #94a3b8;
    font-size: 10px;
    display: block;
    width: 100%;
  }

  .ticket {
    position: relative;
    width: 100%;
    color: var(--t-text-main);
    font-family: "Space Grotesk", "Segoe UI", system-ui, sans-serif;
    transform-style: preserve-3d;
    transition:
      transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 0.6s ease;
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.8),
      0 0 0 1px rgba(255, 255, 255, 0.05);
    background: transparent;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
    border-radius: 20px;
  }

  .ticket-wrapper:hover .ticket {
    transform: rotateX(8deg) rotateY(-8deg) scale(1.03);
    box-shadow:
      20px 20px 45px rgba(0, 0, 0, 0.65),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      -5px -5px 25px var(--t-accent-glow);
  }

  /* Moving light sheen effect */
  .ticket::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    pointer-events: none;
    background: linear-gradient(
      115deg,
      transparent 0%,
      transparent 40%,
      rgba(255, 255, 255, 0.08) 45%,
      rgba(255, 255, 255, 0.25) 50%,
      rgba(255, 255, 255, 0.08) 55%,
      transparent 60%,
      transparent 100%
    );
    z-index: 10;
    background-size: 250% 250%;
    background-position: 100% 100%;
    transition: background-position 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    mix-blend-mode: overlay;
  }

  .ticket-wrapper:hover .ticket::after {
    background-position: 0% 0%;
  }

  .t-main {
    padding: 2.5em;
    position: relative;
    overflow: hidden;
    background: var(--t-bg);
    border: 1.5px solid rgba(168, 85, 247, 0.15);
    border-radius: 20px;
    transition: border-color 0.4s ease;
  }

  .ticket-wrapper:hover .t-main {
    border-color: rgba(168, 85, 247, 0.5);
  }

  /* Scrolling grid background animation */
  .t-main::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        rgba(168, 85, 247, 0.12) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(168, 85, 247, 0.12) 1px, transparent 1px);
    background-size: 2.2em 2.2em;
    opacity: 0.65;
    z-index: 0;
    pointer-events: none;
    transform: perspective(500px) rotateX(15deg) scale(1.4);
    animation: grid-scroll 25s linear infinite;
  }

  @keyframes grid-scroll {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 4.4em;
    }
  }

  .t-content {
    position: relative;
    z-index: 1;
  }

  .t-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.2em;
  }

  .t-logo {
    display: flex;
    align-items: center;
    height: 2.5em;
    color: #fff;
  }

  .t-logo svg.issuer-logo {
    width: 2.4em;
    height: 2.4em;
    stroke: var(--t-text-main);
    filter: drop-shadow(0 0 4px var(--t-accent));
    animation: logo-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes logo-pulse {
    0% {
      filter: drop-shadow(0 0 2px var(--t-accent));
      transform: scale(0.98);
    }
    100% {
      filter: drop-shadow(0 0 8px var(--t-accent)) brightness(1.25);
      transform: scale(1.02);
    }
  }

  .t-type {
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--t-accent);
    border: 1px solid var(--t-accent);
    padding: 0.4em 0.8em;
    border-radius: 99em;
    font-weight: 800;
    box-shadow: 0 0 10px rgba(168, 85, 247, 0.15);
  }

  .t-title {
    font-size: 1.8em;
    font-weight: 900;
    line-height: 1.25;
    margin-bottom: 0.8em;
    text-transform: uppercase;
    background: linear-gradient(135deg, #fff 0%, #c084fc 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    min-height: 2.5em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .t-subtitle {
    color: var(--t-text-muted);
    font-size: 1.1em;
    margin-bottom: 2em;
    line-height: 1.5;
    height: 4.5em;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .t-details {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 1.5em;
    padding-top: 1.5em;
    border-top: 1px dashed rgba(255, 255, 255, 0.1);
  }

  .t-detail-item {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }

  .t-label {
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--t-text-muted);
    font-weight: 600;
  }

  .t-value {
    font-size: 1.15em;
    font-weight: 700;
    color: var(--t-text-main);
    font-family: monospace;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ticket-wrapper:active .ticket {
    transform: rotateX(12deg) rotateY(-4deg) scale(0.98);
  }
`;

export default Certifications;
