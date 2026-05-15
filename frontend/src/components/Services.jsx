import React from 'react';
import { services } from '../mock';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import * as LucideIcons from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Using names that match Lucide icons exactly
const serviceIcons = ['Smartphone', 'Globe', 'Database', 'GitBranch', 'Wrench'];

const ServiceCard = ({ service, index, iconName }) => {
  const IconComponent = LucideIcons[iconName];
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
        className="h-full glass rounded-[2.5rem] p-12 flex flex-col transition-all duration-300 border-white/5 group-hover:border-primary/30 shadow-2xl"
      >
        <div 
          className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500 group-hover:rotate-6"
          style={{ transform: "translateZ(50px)" }}
        >
          {IconComponent && <IconComponent className="text-primary" size={36} strokeWidth={1.5} />}
        </div>
        
        <div style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-3xl font-black text-white mb-6 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
            {service.description}
          </p>
        </div>

        <div 
          className="space-y-4 pt-10 border-t border-white/5 mt-auto"
          style={{ transform: "translateZ(30px)" }}
        >
          {service.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start text-sm text-gray-500 font-bold uppercase tracking-widest group-hover:text-gray-300 transition-colors">
              <span className="w-2 h-2 bg-primary rounded-full mr-4 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
              <span className="leading-snug">{highlight}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-glow"></div>

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
            My <span className="text-primary italic">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            I deliver end-to-end engineering solutions that bridge the gap between complex AI and intuitive user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              iconName={serviceIcons[index % serviceIcons.length]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
