import React, { useState } from 'react';
import { projects } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Layers } from 'lucide-react';
import { motion } from 'framer-motion';

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
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 will-change-transform"
      loading="lazy"
      onError={() => setHasError(true)}
    />
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
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter text-gradient">
            Selected <span className="text-primary italic">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            A showcase of production-ready systems, intelligent AI pipelines, and high-performance mobile applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-3 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 border ${activeFilter === category
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
            <motion.div
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={project.id}
              className="group"
            >
              <div className="relative h-full glass rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)] hover:-translate-y-2 border-white/5 hover:border-primary/30">
                
                {/* Image Section */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                   <ProjectImage project={project} />
                   
                   {/* Category Badge */}
                   <div className="absolute top-6 right-6 z-20">
                      <div className="px-4 py-1.5 glass-dark rounded-full text-[10px] font-black tracking-widest uppercase text-white border-white/20">
                        {project.category}
                      </div>
                   </div>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-10 relative">
                   <div className="flex items-center gap-3 mb-4">
                      <span className="h-px w-8 bg-primary"></span>
                      <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Featured Project</span>
                   </div>
                   
                   <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 group-hover:text-primary transition-colors duration-500">
                     {project.title}
                   </h3>

                   <div className="space-y-6">
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {project.solution}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold rounded-lg group-hover:border-primary/30 group-hover:text-primary transition-all duration-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Outcome Overlay - Shows on Hover */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-x-8 bottom-8 pt-6 border-t border-white/5 flex flex-col gap-2"
                      >
                         <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Impact</span>
                         <p className="text-sm font-medium text-white italic">"{project.outcome}"</p>
                      </motion.div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
