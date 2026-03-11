import React from 'react';
import { Button } from './ui/button';
import { personalInfo, contact } from '../mock';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">

      {/* Absolute Radial Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full mb-8 border border-white/10">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            <span className="text-sm font-semibold text-gray-300">{personalInfo.availability}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-6 tracking-tighter leading-[1.1]">
            A Developer who judges a book by its
            <br className="hidden sm:block" />
            <span className="relative inline-block mt-2 sm:mt-4 ml-0 sm:ml-4">
              <span className="relative z-10 px-6 py-1 text-white bg-primary rounded-full border-2 border-primary/50 shadow-[0_0_30px_rgba(168,85,247,0.4)]">code</span>
            </span>...
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-gray-300 mb-6 mt-4">
            I'm <span className="text-white font-bold tracking-tight">Syed Hyder Abbas</span>,<br className="sm:hidden" /> a <span className="text-primary font-bold">Full Stack AI Developer</span>
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, '_blank')}
              className="bg-primary text-white hover:bg-primary/90 transition-transform hover:scale-105 duration-300 px-8 py-6 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Get In Touch <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('#projects')}
              variant="outline"
              className="border-2 border-white/10 bg-transparent text-white hover:bg-white/10 transition-colors duration-300 px-8 py-6 text-lg rounded-full font-bold"
            >
              View My Work
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Visual/Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center mt-12 lg:mt-0"
        >
          {/* Glass pane for tech stack summary with floating animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-lg aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 sm:p-8 flex flex-col shadow-2xl overflow-hidden group"
          >

            {/* Inner ambient glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] group-hover:bg-secondary/40 transition-colors duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500"></div>

            <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
              <div className="bg-black/40 rounded-3xl p-6 flex flex-col justify-center items-center border border-white/5 hover:border-primary/50 transition-colors group/card">
                <div className="text-4xl font-black text-white mb-2 group-hover/card:scale-110 transition-transform">AI</div>
                <div className="text-xs sm:text-sm text-primary font-bold tracking-wider text-center">Deep Learning</div>
              </div>
              <div className="bg-black/40 rounded-3xl p-6 flex flex-col justify-center items-center border border-white/5 hover:border-secondary/50 transition-colors group/card">
                <div className="text-4xl font-black text-white mb-2 group-hover/card:scale-110 transition-transform">App</div>
                <div className="text-xs sm:text-sm text-secondary font-bold tracking-wider text-center">Flutter Mobile</div>
              </div>
              <div className="bg-black/40 rounded-3xl p-6 flex flex-col justify-center items-center border border-white/5 hover:border-secondary/50 transition-colors group/card">
                <div className="text-4xl font-black text-white mb-2 group-hover/card:scale-110 transition-transform">API</div>
                <div className="text-xs sm:text-sm text-secondary font-bold tracking-wider text-center">Node Backend</div>
              </div>
              <div className="bg-black/40 rounded-3xl p-6 flex flex-col justify-center items-center border border-white/5 hover:border-primary/50 transition-colors group/card">
                <div className="text-4xl font-black text-white mb-2 group-hover/card:scale-110 transition-transform">Web</div>
                <div className="text-xs sm:text-sm text-primary font-bold tracking-wider text-center">React Single Page</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
