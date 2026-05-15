import React from 'react';
import { personalInfo, contact } from '../mock';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import MatrixText from './effects/MatrixText';
import { fireConfetti } from '../lib/confetti';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    fireConfetti();
    setTimeout(() => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, '_blank');
    }, 500);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden bg-grid"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center perspective-[2000px]">

        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 glass rounded-full mb-6 sm:mb-8 shadow-2xl"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{personalInfo.availability}</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[1] sm:leading-[0.9] text-gradient">
            Architecting <br className="hidden sm:block" />
            <span className="text-primary italic">the Future of</span> <br className="hidden sm:block" />
            Intelligent Systems.
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-gray-300 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            We are an <span className="text-white font-bold tracking-tight">elite collective</span> architecting the next generation of <span className="text-primary font-bold">AI & Mobile Systems.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Button
              onClick={handleStartProject}
              className="bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] duration-300 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full font-bold shadow-2xl active:scale-95"
            >
              Start a Project <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              onClick={() => scrollToSection('#projects')}
              variant="outline"
              className="border-2 border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full font-bold active:scale-95"
            >
              See My Work
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Visual/Stats */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0] // Floating effect for mobile
          }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          className="relative flex justify-center items-center mt-12 lg:mt-0"
        >
          {/* Main Glass Frame */}
          <div 
            className="relative w-full max-w-[280px] sm:max-w-md aspect-square glass rounded-[2.5rem] sm:rounded-[3rem] p-1 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden group"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50"></div>
            
            <div className="relative z-10 w-full h-full bg-black/60 backdrop-blur-3xl rounded-[2.3rem] sm:rounded-[2.8rem] p-6 sm:p-8 grid grid-cols-2 gap-4 sm:gap-6 items-stretch">
              {[
                { label: 'AI', sub: 'Deep Learning', color: 'primary' },
                { label: 'APP', sub: 'Flutter Expert', color: 'secondary' },
                { label: 'API', sub: 'Node Backend', color: 'primary' },
                { label: 'WEB', sub: 'React Systems', color: 'secondary' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, translateZ: 30 }}
                  className="glass-dark rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-center items-center group/card transition-all cursor-default border border-white/5 hover:border-primary/30"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`text-2xl sm:text-4xl font-black text-white mb-1 sm:mb-2 group-hover/card:text-${item.color}`}>
                    {item.label}
                  </div>
                  <div className={`text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-black text-${item.color}/70 text-center`}>
                    {item.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative floating elements - Tight Overlap */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [12, 8, 12] }}
            whileHover={{ scale: 1.2, rotate: 0, zIndex: 50, transition: { duration: 0.2 } }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-24 h-24 sm:w-28 sm:h-28 glass rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl z-20 border border-white/20 scale-110 cursor-pointer group/badge"
            style={{ transform: "translateZ(120px)" }}
          >
             <div className="text-3xl sm:text-4xl font-black text-primary drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover/badge:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all">5.0</div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [-12, -8, -12] }}
            whileHover={{ scale: 1.2, rotate: 0, zIndex: 50, transition: { duration: 0.2 } }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-28 h-28 sm:w-36 sm:h-36 glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-center shadow-2xl z-20 border border-white/20 scale-110 cursor-pointer group/badge"
            style={{ transform: "translateZ(100px)" }}
          >
             <div className="text-[8px] sm:text-xs font-black text-gray-500 uppercase mb-1 tracking-widest text-center sm:text-left">Success</div>
             <div className="text-2xl sm:text-3xl font-black text-white text-center sm:text-left group-hover/badge:text-primary transition-colors">100%</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
