import React from 'react';
import { techStack } from '../mock';
import * as LucideIcons from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

const TechCard = ({ title, items, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    <Card className={`p-6 sm:p-8 bg-white/5 backdrop-blur-md border-white/10 shadow-xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full rounded-[2rem]`}>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 mt-auto">
        {items.map((tech, techIndex) => {
          const IconComponent = LucideIcons[tech.icon];
          return (
            <div
              key={techIndex}
              className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/5 rounded-xl group-hover:border-primary/30 transition-colors"
            >
              {IconComponent && (
                <IconComponent className="text-primary w-4 h-4 sm:w-5 sm:h-5 group-hover:text-secondary transition-colors" />
              )}
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </Card>
  </motion.div>
);

const TechStack = () => {
  return (
    <section id="techstack" className="py-24 sm:py-32 px-4 sm:px-6 bg-background relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Technical <span className="text-primary italic">Arsenal</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Core technologies powering performant, scalable, and secure systems.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Main Languages / App Development - Large Block */}
          <TechCard
            title="Frontend & Mobile App Dev"
            items={techStack.frontend}
            className="col-span-1 md:col-span-8 md:row-span-2"
            delay={0.1}
          />

          {/* Backend / Architecture - Medium Block */}
          <TechCard
            title="Backend Sys"
            items={techStack.backend}
            className="col-span-1 md:col-span-4"
            delay={0.2}
          />

          {/* Database - Medium Block */}
          <TechCard
            title="Databases"
            items={techStack.database}
            className="col-span-1 md:col-span-4"
            delay={0.3}
          />

          {/* AI/ML - Horizontal Block */}
          <TechCard
            title="AI/ML Integration"
            items={techStack.aiml}
            className="col-span-1 md:col-span-6"
            delay={0.4}
          />

          {/* DevOps - Horizontal Block */}
          <TechCard
            title="DevOps & Tools"
            items={techStack.devops}
            className="col-span-1 md:col-span-6"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
