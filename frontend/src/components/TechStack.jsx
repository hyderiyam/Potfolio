import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TechCard = ({ title, items, className, delay = 0 }) => {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`${className} perspective-[1000px]`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="p-10 bg-white/5 backdrop-blur-3xl border border-white/5 shadow-2xl transition-all duration-300 group flex flex-col h-full rounded-[3rem] hover:border-primary/30"
      >
        <div style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-10 tracking-tight">
            {title}
          </h3>
          <div className="flex flex-wrap gap-4 mt-auto">
            {items.map((tech, techIndex) => {
              const IconComponent = LucideIcons[tech.icon];
              return (
                <motion.div
                  key={techIndex}
                  whileHover={{ scale: 1.1, translateZ: 20 }}
                  className="flex items-center gap-3 px-5 py-3 bg-black/40 border border-white/5 rounded-2xl group-hover:border-primary/20 transition-all shadow-xl"
                >
                  {IconComponent && (
                    <IconComponent className="text-primary w-5 h-5 group-hover:text-secondary transition-colors" />
                  )}
                  <span className="text-sm font-black text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section id="techstack" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 animate-glow"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none animate-glow" style={{ animationDelay: '2s' }}></div>

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
            Technical <span className="text-primary italic">Arsenal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            A comprehensive stack of cutting-edge technologies that empower the creation of high-impact AI and Mobile ecosystems.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Main Languages / App Development - Large Block */}
          <TechCard
            title="Frontend & Mobile"
            items={techStack.frontend}
            className="col-span-1 md:col-span-8 md:row-span-2"
            delay={0.1}
          />

          {/* Backend / Architecture - Medium Block */}
          <TechCard
            title="Core Backend"
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
            title="AI/ML"
            items={techStack.aiml}
            className="col-span-1 md:col-span-6"
            delay={0.4}
          />

          {/* DevOps - Horizontal Block */}
          <TechCard
            title="Infrastructure"
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
