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
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Featured <span className="text-primary italic">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Production-grade systems delivering real business value
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeFilter === category
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={project.id}
            >
              <Card
                className="group border border-white/10 bg-[#0F0721] shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 flex flex-col rounded-[2rem] overflow-hidden relative"
              >
                {/* Subtle top border glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Image Panel */}
                <div className="relative h-64 sm:h-80 bg-black/40 overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0721] to-transparent z-10 pointer-events-none"></div>
                  <ProjectImage project={project} />

                  {/* Floating Glassmorphism Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20 font-bold px-3 py-1 text-xs shadow-xl">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="flex-1 flex flex-col p-6 sm:p-8 relative z-20 -mt-16 sm:-mt-20 mx-4 sm:mx-6 mb-4 sm:mb-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
                  <CardHeader className="p-0 mb-6">
                    <div className="text-primary text-sm font-bold mb-2 tracking-widest uppercase">Featured Project</div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6 flex-1 flex flex-col">
                    {/* Problem & Solution Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                        <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]"></span>
                          Problem
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{project.problem}</p>
                      </div>

                      <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                        <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                          Solution
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex-1"></div>

                    <div className="pt-6 border-t border-white/10 space-y-6">
                      {/* Outcome */}
                      <div>
                        <h4 className="text-sm font-bold text-white mb-2">Business Outcome</h4>
                        <p className="text-sm font-medium text-emerald-400">{project.outcome}</p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Core Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 font-bold text-xs rounded-lg shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
