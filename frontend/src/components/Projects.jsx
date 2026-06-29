import React, { useState } from 'react';
import { projects } from '../mock';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, Layers, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentIndex(0);
    setHoveredCardId(null);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    setHoveredCardId(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    setHoveredCardId(null);
  };

  const getStackedProjects = () => {
    if (filteredProjects.length === 0) return [];
    if (filteredProjects.length === 1) {
      return [{ ...filteredProjects[0], stackClass: 'one' }];
    }
    if (filteredProjects.length === 2) {
      return [
        { ...filteredProjects[currentIndex % filteredProjects.length], stackClass: 'one' },
        { ...filteredProjects[(currentIndex + 1) % filteredProjects.length], stackClass: 'two' }
      ];
    }
    return [
      { ...filteredProjects[currentIndex % filteredProjects.length], stackClass: 'one' },
      { ...filteredProjects[(currentIndex + 1) % filteredProjects.length], stackClass: 'two' },
      { ...filteredProjects[(currentIndex + 2) % filteredProjects.length], stackClass: 'three' }
    ];
  };

  const stackedList = getStackedProjects();

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid">

      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-glow"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-glow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tighter text-gradient">
            Selected <span className="text-primary italic">Works</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            A showcase of production-ready systems, intelligent AI pipelines, and high-performance mobile applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-24"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 border ${activeFilter === category
                ? 'bg-primary text-white border-primary shadow-[0_0_25px_rgba(168,85,247,0.5)] scale-105'
                : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Stacked Cards Area */}
        <div className="flex flex-col items-center justify-center min-h-[580px] relative">
          {filteredProjects.length > 0 ? (
            <>
              <StyledWrapper className={hoveredCardId !== null ? 'has-hovered' : ''}>
                <div className="cards-container">
                  <div className="cards">
                    {stackedList.map((project, idx) => {
                      const isHovered = hoveredCardId === project.id;
                      return (
                        <div
                          key={`${project.id}-${idx}`}
                          className={`card ${project.stackClass} ${isHovered ? 'is-hovered' : ''}`}
                          onMouseEnter={() => setHoveredCardId(project.id)}
                          onMouseLeave={() => setHoveredCardId(null)}
                          style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          <div className="cardDetails">
                            <div className="flex flex-col gap-2 w-full">
                              <span className="category-tag">{project.category}</span>
                              <div className="cardDetailsHeader">{project.title}</div>
                              <p className="cardDetailsDesc">{project.solution}</p>
                            </div>

                            <div className="w-full">
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.tech.slice(0, 3).map((t, i) => (
                                  <span key={i} className="tech-badge">{t}</span>
                                ))}
                              </div>
                              <button
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                                className="cardDetailsButton flex items-center justify-center gap-2"
                              >
                                <span>Details</span>
                                <ExternalLink size={13} />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </StyledWrapper>

              {/* Navigation Controls */}
              {filteredProjects.length > 1 && (
                <div className="flex items-center gap-6 mt-20 z-20 relative">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 text-white hover:text-primary transition-all duration-300"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-sm font-mono font-bold text-gray-400">
                    {(currentIndex % filteredProjects.length) + 1} / {filteredProjects.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary/50 text-white hover:text-primary transition-all duration-300"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center text-center text-gray-500 py-16">
              <Layers size={48} className="mb-4 opacity-35" />
              <p className="text-lg font-semibold">No works found in this track.</p>
            </div>
          )}
        </div>

      </div>
      {/* ── Project Details Modal ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-2xl rounded-[2rem] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(12,7,36,0.99) 0%, rgba(6,3,22,0.98) 100%)',
              border: '1px solid rgba(168,85,247,0.25)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.9), 0 0 50px rgba(168,85,247,0.15)'
            }}
          >
            {/* Top image strip */}
            {selectedProject.image && (
              <div className="relative h-44 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0720] via-transparent to-transparent" />
              </div>
            )}

            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-black text-white mt-1 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-4 mt-1 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* Problem */}
              <div className="mb-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 mb-1">Problem</p>
                <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Solution</p>
                <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.solution}</p>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-1">Outcome</p>
                <p className="text-gray-300 text-sm leading-relaxed italic">"{selectedProject.outcome}"</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-gray-200 border border-white/10 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 rounded-full text-center text-sm font-black uppercase tracking-widest bg-primary text-white hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  Work Together
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest bg-white/5 border border-white/10 text-gray-300 hover:border-white/25 hover:text-white transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 750px;
  height: 460px;

  &.has-hovered {
    position: relative;
    z-index: 50;
  }

  .cards-container {
    position: relative;
    width: 560px;
    height: 380px;
    margin-left: 120px;
  }

  @media (max-width: 768px) {
    .cards-container {
      width: 400px;
      height: 280px;
      margin-left: 80px;
    }
  }

  @media (max-width: 640px) {
    .cards-container {
      width: 280px;
      height: 210px;
      margin-left: 55px;
    }
  }

  .cards {
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* === Base card === */
  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.10);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.80);
    cursor: pointer;

    /* Default stacked tilt */
    transform: perspective(905px) rotateZ(-8deg);
    transition:
      transform 0.5s ease-out,
      opacity  0.45s ease-out,
      filter   0.45s ease-out,
      border-color 0.4s ease-out,
      box-shadow   0.4s ease-out,
      z-index  0s;
  }

  /* Dark overlay on the right side so left text area pops */
  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(3,0,20,0.88) 0%, rgba(3,0,20,0.18) 100%);
    z-index: 1;
    pointer-events: none;
  }

  /* Stack offsets */
  .card.one   { top: -80px; left: -100px; z-index: 3; }
  .card.two   { top: -40px; left: -50px;  z-index: 2; }
  .card.three { top:   0px; left:   0px;  z-index: 1; }

  @media (max-width: 768px) {
    .card.one   { top: -55px; left: -70px; }
    .card.two   { top: -28px; left: -35px; }
  }
  @media (max-width: 640px) {
    .card.one   { top: -40px; left: -50px; }
    .card.two   { top: -20px; left: -25px; }
  }

  /* ── When ANY card is hovered, dim the siblings ── */
  &.has-hovered .card:not(.is-hovered) {
    opacity: 0.28;
    filter: blur(3px) saturate(0.4);
  }

  /* ── The hovered card pops forward ── */
  .card.is-hovered {
    z-index: 50 !important;
    transform: perspective(1000px) rotateZ(0deg) scale(1.12) !important;
    border-color: rgba(168, 85, 247, 0.55);
    box-shadow:
      0 50px 100px rgba(0, 0, 0, 0.90),
      0 0 50px rgba(168, 85, 247, 0.30);
    opacity: 1 !important;
    filter: none !important;
  }

  /* ── Details panel ── */
  .cardDetails {
    position: relative;
    z-index: 2;
    width: 62%;
    height: 100%;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(135deg, rgba(10,5,32,0.99) 0%, rgba(6,3,22,0.97) 100%);
    border-right: 1px solid rgba(255, 255, 255, 0.05);

    /* Slide-in from left on hover */
    transform-origin: left center;
    transform: perspective(2000px) rotateY(-90deg);
    transition: transform 0.5s ease-out;
  }

  @media (max-width: 640px) {
    .cardDetails {
      width: 88%;
      padding: 16px;
    }
  }

  .card.is-hovered .cardDetails {
    transform: perspective(2000px) rotateY(0deg);
  }

  /* Typography */
  .category-tag {
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #a855f7;
  }

  .cardDetailsHeader {
    font-size: 2rem;
    font-weight: 900;
    color: #fff;
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin-top: 6px;
  }

  .cardDetailsDesc {
    font-size: 1.05rem;
    color: #94a3b8;
    line-height: 1.55;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .cardDetailsHeader { font-size: 1.6rem; }
    .cardDetailsDesc   { font-size: 0.95rem; }
  }
  @media (max-width: 640px) {
    .cardDetailsHeader { font-size: 1.2rem; }
    .cardDetailsDesc   { font-size: 0.85rem; -webkit-line-clamp: 2; }
  }

  /* Tech chips */
  .tech-badge {
    font-size: 0.8rem;
    font-weight: 700;
    color: #cbd5e0;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.09);
    padding: 4px 10px;
    border-radius: 6px;
  }

  /* CTA button */
  .cardDetailsButton {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 22px;
    border-radius: 999px;
    background: #a855f7;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
    box-shadow: 0 4px 14px rgba(168, 85, 247, 0.35);
  }

  .cardDetailsButton:hover {
    background: #b56eff;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(168, 85, 247, 0.50);
  }
`;

export default Projects;
