import React from 'react';
import { about, personalInfo } from '../mock';
import { CheckCircle2, MapPin, ShieldCheck, Cpu, Zap, Users } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TrustItem = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 p-6 glass rounded-[2rem] border-white/5 hover:border-primary/30 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      <Icon className="text-primary w-6 h-6" />
    </div>
    <div>
      <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">{title}</h4>
      <p className="text-gray-500 text-xs font-medium leading-relaxed group-hover:text-gray-400 transition-colors">{desc}</p>
    </div>
  </div>
);

const About = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
    <section id="about" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid">

      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center mb-24">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 mb-6">
               <span className="h-px w-8 bg-primary"></span>
               <span className="text-xs font-black tracking-[0.3em] uppercase text-primary">Identity</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-10 tracking-tighter text-gradient leading-[0.9]">
              Behind the <span className="text-primary italic">Code</span>
            </h2>
            
            <div className="space-y-8 text-lg sm:text-xl text-gray-400 leading-relaxed font-medium">
              {about.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-white font-bold" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Location */}
            <div className="mt-16 pt-10 border-t border-white/5 flex items-center gap-6 text-white font-bold">
              <div className="w-16 h-16 rounded-3xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shadow-2xl">
                <MapPin className="text-secondary w-8 h-8" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mb-1">Global Presence</span>
                <span className="text-lg">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8 perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="glass rounded-[3rem] p-10 sm:p-12 shadow-2xl relative overflow-hidden border-white/5"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div style={{ transform: "translateZ(50px)" }}>
                <h3 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
                   <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                   </span>
                   Highlights
                </h3>
                
                <ul className="space-y-6">
                  {about.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mt-1.5 mr-4 h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-transform"></div>
                      <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="bg-primary/5 backdrop-blur-3xl border border-primary/20 p-10 sm:p-12 rounded-[3rem] shadow-2xl"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-xl font-black text-white mb-10 uppercase tracking-[0.3em] text-center">Core Values</h3>
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  {['Clean Code', 'Transparency', 'Scalability', 'Agile'].map((val, i) => (
                     <div key={i} className="flex flex-col items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,1)]"></div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{val}</span>
                     </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust & Engineering Excellence Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <TrustItem 
            icon={ShieldCheck} 
            title="Secure by Design" 
            desc="Industry-standard protocols and robust security architectures for every project." 
          />
          <TrustItem 
            icon={Cpu} 
            title="Performance First" 
            desc="Optimized algorithms and scalable infrastructures for zero-lag ecosystems." 
          />
          <TrustItem 
            icon={Zap} 
            title="Rapid Delivery" 
            desc="Agile execution ensuring high-quality MVPs and production deployments." 
          />
          <TrustItem 
            icon={Users} 
            title="Client Focused" 
            desc="Direct engineering partnership with transparent communication at every step." 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
