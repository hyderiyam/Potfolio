import React, { useState } from 'react';
import { services } from '../mock';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const serviceIcons = ['Smartphone', 'Globe', 'Database'];
const serviceColors = ['#A855F7', '#6366F1', '#06B6D4'];

const Services = () => {
  const [[activeIndex, direction], setPage] = useState([0, 0]);

  const paginate = (dir) => {
    const nextIndex = (activeIndex + dir + services.length) % services.length;
    setPage([nextIndex, dir]);
  };

  const service = services[activeIndex];
  const IconComponent = LucideIcons[serviceIcons[activeIndex % serviceIcons.length]];
  const activeColor = serviceColors[activeIndex % serviceColors.length];

  // Magnetic tilt for front card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  // Drag to swipe
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) paginate(1);
    else if (info.offset.x > 100) paginate(-1);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 380 : -380, opacity: 0, scale: 0.88, rotateY: dir > 0 ? 15 : -15 }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0, zIndex: 10 },
    exit: (dir) => ({ x: dir < 0 ? 380 : -380, opacity: 0, scale: 0.88, rotateY: dir < 0 ? 15 : -15, zIndex: 0 }),
  };

  return (
    <section id="services" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid">

      {/* Floating animated background orbs that move */}
      <motion.div
        className="absolute rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 500, height: 500,
          top: '15%', left: '-5%',
          background: `radial-gradient(circle, ${activeColor}18, transparent 70%)`,
        }}
      />
      <motion.div
        className="absolute rounded-full blur-[140px] pointer-events-none"
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 40, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          width: 450, height: 450,
          bottom: '10%', right: '-5%',
          background: `radial-gradient(circle, ${activeColor}12, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter text-gradient">
            My <span className="text-primary italic">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            I deliver end-to-end engineering solutions that bridge the gap between complex AI and intuitive user experiences.
          </p>
        </motion.div>

        {/* Card Stage */}
        <div className="flex flex-col items-center">
          
          {/* Subtle shadow depth hint — barely visible cards behind */}
          <div className="relative w-full max-w-[520px] md:max-w-[620px]" style={{ minHeight: 480 }}>
            
            {/* Ghost depth shadows — not actual cards, just visual depth */}
            <div
              className="absolute inset-x-0 top-0 mx-auto rounded-[2.5rem] pointer-events-none"
              style={{
                width: 'calc(100% - 56px)',
                height: '100%',
                background: `${activeColor}06`,
                border: `1px solid ${activeColor}10`,
                transform: 'translateY(16px) scale(0.94)',
                zIndex: 1,
                borderRadius: '2.5rem',
                transition: 'background 0.6s ease, border-color 0.6s ease',
              }}
            />
            <div
              className="absolute inset-x-0 top-0 mx-auto rounded-[2.5rem] pointer-events-none"
              style={{
                width: 'calc(100% - 100px)',
                height: '100%',
                background: `${activeColor}03`,
                border: `1px solid ${activeColor}07`,
                transform: 'translateY(30px) scale(0.88)',
                zIndex: 0,
                borderRadius: '2.5rem',
                transition: 'background 0.6s ease, border-color 0.6s ease',
              }}
            />

            {/* The Active Slide Card */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d", zIndex: 10, perspective: 1000, cursor: 'grab' }}
                className="relative w-full"
              >
                {/* Glow border */}
                <div
                  className="absolute -inset-[1.5px] rounded-[2.5rem] opacity-60 transition-all duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${activeColor}70, transparent 50%, ${activeColor}30)`,
                    zIndex: -1,
                    borderRadius: '2.5rem',
                  }}
                />

                <div
                  className="w-full rounded-[2.5rem] p-10 md:p-14 flex flex-col select-none"
                  style={{
                    background: 'linear-gradient(145deg, #0d0a22 0%, #07041a 100%)',
                    border: `1px solid ${activeColor}25`,
                    boxShadow: `0 40px 80px -20px rgba(3,0,20,0.85), 0 0 60px -20px ${activeColor}25`,
                    transform: "translateZ(0)",
                  }}
                >
                  {/* Floating inner shimmer */}
                  <div
                    className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 30% 20%, ${activeColor}10, transparent 60%)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    key={`icon-${activeIndex}`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10"
                    style={{
                      background: `${activeColor}12`,
                      border: `1px solid ${activeColor}30`,
                      boxShadow: `0 0 30px ${activeColor}20`,
                    }}
                  >
                    {IconComponent && (
                      <IconComponent style={{ color: activeColor }} size={34} strokeWidth={1.5} />
                    )}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    key={`title-${activeIndex}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tight"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    key={`desc-${activeIndex}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-gray-400 text-lg leading-relaxed mb-10 font-medium"
                  >
                    {service.description}
                  </motion.p>

                  {/* Highlights */}
                  <motion.div
                    key={`highlights-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.28 }}
                    className="space-y-3 pt-8 border-t mt-auto"
                    style={{ borderColor: `${activeColor}15` }}
                  >
                    {service.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.07 }}
                        className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-400"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mr-4 flex-shrink-0"
                          style={{
                            backgroundColor: activeColor,
                            boxShadow: `0 0 8px ${activeColor}`,
                          }}
                        />
                        {highlight}
                      </motion.div>
                    ))}
                  </motion.div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal Dot Navigation Only */}
          <div className="flex items-center gap-3 mt-10">
            {services.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
                className="focus:outline-none"
                animate={{
                  width: idx === activeIndex ? 28 : 8,
                  backgroundColor: idx === activeIndex ? activeColor : 'rgba(255,255,255,0.15)',
                }}
                transition={{ duration: 0.4 }}
                style={{
                  height: 8,
                  borderRadius: 99,
                  boxShadow: idx === activeIndex ? `0 0 12px ${activeColor}90` : 'none',
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
