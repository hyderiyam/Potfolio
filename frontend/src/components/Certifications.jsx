import React from 'react';
import { certifications } from '../mock';
import { Award } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const CertCard = ({ cert, index }) => {
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
      initial={{ opacity: 0, y: 30 }}
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
        className="h-full glass rounded-[2.5rem] p-10 flex flex-col transition-all duration-300 border-white/5 group-hover:border-primary/30 shadow-2xl"
      >
        <div 
          className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 shadow-2xl group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110"
          style={{ transform: "translateZ(50px)" }}
        >
          <Award className="text-primary w-8 h-8" />
        </div>

        <div style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors leading-tight">
            {cert.title}
          </h3>
          <p className="text-base text-gray-400 font-bold mb-6 italic">{cert.issuer}</p>
        </div>

        <div className="space-y-6 mt-auto">
            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                {cert.description}
            </p>
            
            <div 
              className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5"
              style={{ transform: "translateZ(30px)" }}
            >
              <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{cert.date}</span>
              {cert.credentialId && (
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-black text-primary uppercase tracking-tighter">ID:</span>
                   <span className="text-[10px] font-mono font-bold text-white bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
                      {cert.credentialId}
                   </span>
                </div>
              )}
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
    return (
        <section id="certifications" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid">
            
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-glow"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter text-gradient">
                        Continuous <span className="text-primary italic">Learning</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Industry-recognized certifications and specialized technical engineering tracks.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <CertCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
