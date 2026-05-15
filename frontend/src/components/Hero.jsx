import React from 'react';
import { personalInfo, contact } from '../mock';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

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
          className="flex flex-col items-start text-left"
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 glass rounded-full mb-8 shadow-2xl"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{personalInfo.availability}</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] text-gradient">
            Engineering <br />
            <span className="text-primary italic">3D-Intelligent</span> <br />
            Systems.
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-gray-300 mb-8 max-w-xl leading-relaxed">
            I'm <span className="text-white font-bold tracking-tight">Syed Hyder Abbas</span>, building the next generation of <span className="text-primary font-bold">AI & Mobile Architectures</span> with depth and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Button
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, '_blank')}
              className="bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] duration-300 px-10 py-7 text-lg rounded-full font-bold"
            >
              Start a Project <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('#projects')}
              variant="outline"
              className="border-2 border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300 px-10 py-7 text-lg rounded-full font-bold"
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Main Glass Frame */}
          <div 
            className="relative w-full max-w-md aspect-square glass rounded-[3rem] p-1 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden group"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50"></div>
            
            <div className="relative z-10 w-full h-full bg-black/60 backdrop-blur-3xl rounded-[2.8rem] p-8 grid grid-cols-2 gap-6 items-stretch">
              {[
                { label: 'AI', sub: 'Deep Learning', color: 'primary' },
                { label: 'APP', sub: 'Flutter Expert', color: 'secondary' },
                { label: 'API', sub: 'Node Backend', color: 'primary' },
                { label: 'WEB', sub: 'React Systems', color: 'secondary' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, translateZ: 30 }}
                  className="glass-dark rounded-3xl p-6 flex flex-col justify-center items-center group/card transition-all cursor-default border border-white/5 hover:border-primary/30"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`text-4xl font-black text-white mb-2 group-hover/card:text-${item.color}`}>
                    {item.label}
                  </div>
                  <div className={`text-[10px] uppercase tracking-[0.2em] font-black text-${item.color}/70 text-center`}>
                    {item.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative floating elements with different depths */}
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [12, 8, 12] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-28 h-28 glass rounded-3xl flex items-center justify-center shadow-2xl z-20"
            style={{ transform: "translateZ(100px)" }}
          >
             <div className="text-3xl font-black text-primary">5.0</div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [-12, -8, -12] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-36 h-36 glass rounded-3xl p-6 flex flex-col justify-center shadow-2xl z-20"
            style={{ transform: "translateZ(80px)" }}
          >
             <div className="text-xs font-black text-gray-500 uppercase mb-1 tracking-widest">Success</div>
             <div className="text-2xl font-black text-white">100%</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
