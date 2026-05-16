import React, { useState } from 'react';
import { projects } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Layers } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const ProjectImage = ({ project }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-black/40">
        <Layers className="text-gray-500 w-12 h-12 mb-2 opacity-50" />
        <span className="text-4xl font-black text-gray-600 opacity-30">{project.title.charAt(0)}</span>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full glass rounded-[2.5rem] overflow-hidden transition-all duration-300 border-white/5 group-hover:border-primary/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] group-hover:shadow-primary/20"
      >
        {/* Laser Racing Border */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-purple-400 to-secondary animate-spin-slow opacity-50 blur-sm"></div>
           <div className="absolute inset-[1px] bg-black/90 rounded-[2.5rem]"></div>
        </div>

        {/* Dynamic Sheen/Reflection */}
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([x, y]) => `radial-gradient(circle at ${x * 100 + 50}% ${y * 100 + 50}%, rgba(255,255,255,0.1) 0%, transparent 80%)`
            ),
          }}
        />
        {/* Image Section */}
        <div 
          className="relative h-60 sm:h-80 overflow-hidden"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity"></div>
           <ProjectImage project={project} />
           
           {/* Category Badge */}
           <div 
             className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20"
             style={{ transform: "translateZ(50px)" }}
           >
              <div className="px-3 py-1 sm:px-4 sm:py-1.5 glass-dark rounded-full text-[8px] sm:text-[10px] font-black tracking-widest uppercase text-white border-white/20">
                {project.category}
              </div>
           </div>
        </div>

        {/* Content Section */}
        <div 
          className="p-6 sm:p-10 relative"
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        >
           <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="h-px w-6 sm:w-8 bg-primary"></span>
              <span className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary">Featured Project</span>
           </div>
           
           <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-500 leading-tight">
             {project.title}
           </h3>

           <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                {project.solution}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 border border-white/10 text-gray-300 text-[8px] sm:text-[10px] font-bold rounded-lg group-hover:border-primary/30 group-hover:text-primary transition-all duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Outcome Overlay */}
              <div className="pt-4 sm:pt-6 border-t border-white/5 flex flex-col gap-1 sm:gap-2">
                 <span className="text-[8px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Impact</span>
                 <p className="text-xs sm:text-sm font-medium text-white italic leading-snug">"{project.outcome}"</p>
              </div>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 sm:mb-20"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 border ${activeFilter === category
                ? 'bg-primary text-white border-primary shadow-[0_0_25px_rgba(168,85,247,0.5)] scale-105'
                : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/20 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
