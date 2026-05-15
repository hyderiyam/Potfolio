import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

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
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-10 tracking-tighter text-gradient">
              Behind the <span className="text-primary italic">Code</span>
            </h2>
            <div className="space-y-8 text-xl text-gray-400 leading-relaxed font-medium">
              {about.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Location */}
            <div className="mt-16 pt-10 border-t border-white/5 flex items-center gap-6 text-white font-bold">
              <div className="w-16 h-16 rounded-3xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shadow-2xl">
                <MapPin className="text-secondary w-8 h-8" />
              </div>
              <div>
                <span className="block text-xs text-gray-500 font-black uppercase tracking-[0.2em] mb-1">Global Presence</span>
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
              className="glass rounded-[3rem] p-12 shadow-2xl relative overflow-hidden border-white/5"
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
              className="bg-primary/5 backdrop-blur-3xl border border-primary/20 p-12 rounded-[3rem] shadow-2xl"
            >
              <div style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-xl font-black text-white mb-10 uppercase tracking-[0.3em] text-center">Core Values</h3>
                <div className="grid grid-cols-2 gap-8">
                  {['Clean Code', 'Transparency', 'Scalability', 'Agile'].map((val, i) => (
                     <div key={i} className="flex flex-col items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,1)]"></div>
                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{val}</span>
                     </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
