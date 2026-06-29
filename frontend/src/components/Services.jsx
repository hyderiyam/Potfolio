import React, { useState } from 'react';
import { services } from '../mock';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const serviceIcons = ['Smartphone', 'Globe', 'Database'];
const serviceColors = ['#A855F7', '#6366F1', '#06B6D4'];

// Fan rotations and offsets (rest state = fanned, stacked)
const fanConfig = [
  { rotate: -14, x: -44, zIndex: 1 },
  { rotate:  -4, x:   0, zIndex: 3 },
  { rotate:   8, x:  44, zIndex: 2 },
];

// Spread positions (hover state = flat, separated)
const spreadConfig = [
  { rotate: 0, x: -470, zIndex: 1 },
  { rotate: 0, x:    0, zIndex: 3 },
  { rotate: 0, x:  470, zIndex: 2 },
];

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="services"
      className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid"
    >
      {/* Animated ambient orbs */}
      {serviceColors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[130px] pointer-events-none"
          animate={
            isOpen
              ? { opacity: 0.5, scale: 1.2, x: (i - 1) * 360 }
              : { opacity: 0.18, scale: 1, x: 0 }
          }
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{
            width: 420, height: 420,
            top: '20%',
            left: `calc(50% - 210px)`,
            background: `radial-gradient(circle, ${color}28, transparent 70%)`,
            zIndex: 0,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter text-gradient">
            My <span className="text-primary italic">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            I deliver end-to-end engineering solutions that bridge the gap between
            complex AI and intuitive user experiences.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">

          {/* Hint label */}
          <motion.p
            animate={{ opacity: isOpen ? 0 : 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.25em] text-white font-mono mb-16 select-none pointer-events-none"
          >
            hover to explore
          </motion.p>

          {/*
            OUTER zone (1400px): Only responsible for CLOSING cards when cursor fully leaves.
            Does NOT open cards by itself.
          */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: '100%', maxWidth: 1400, height: 560 }}
            onMouseLeave={() => { setIsOpen(false); setActiveCard(null); }}
          >
            {/*
              INNER trigger zone (400px fan area): Hovering HERE opens the cards.
              After cards open, pointer-events are disabled so individual cards can be hovered.
            */}
            <div
              className="absolute z-20"
              style={{
                width: 400, height: 520,
                left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: isOpen ? 'none' : 'auto',
              }}
              onMouseEnter={() => setIsOpen(true)}
            />
            {services.map((service, index) => {
              const Icon = LucideIcons[serviceIcons[index % serviceIcons.length]];
              const color = serviceColors[index % serviceColors.length];
              const fan = fanConfig[index];
              const spread = spreadConfig[index];
              const isCardActive = activeCard === index;

              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => isOpen && setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  animate={{
                    rotate: isOpen ? spread.rotate : fan.rotate,
                    x: isOpen ? spread.x : fan.x,
                    y: isCardActive ? -22 : 0,
                    scale: isCardActive ? 1.04 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute"
                  style={{
                    width: 380,
                    height: 500,
                    transformOrigin: 'bottom center',
                    zIndex: isCardActive ? 10 : fan.zIndex,
                    cursor: isOpen ? 'pointer' : 'default',
                  }}
                >
                  {/* Outer glow ring on active card */}
                  <motion.div
                    className="absolute pointer-events-none"
                    animate={{
                      opacity: isCardActive ? 1 : 0,
                      boxShadow: isCardActive
                        ? `0 0 55px 8px ${color}40, 0 0 100px 12px ${color}15`
                        : '0 0 0px 0px transparent',
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      inset: -2,
                      borderRadius: '2.2rem',
                      background: `linear-gradient(135deg, ${color}30 0%, transparent 60%)`,
                    }}
                  />

                  {/* Card body */}
                  <div
                    className="relative w-full h-full flex flex-col overflow-hidden"
                    style={{
                      borderRadius: '2rem',
                      background: isCardActive
                        ? `linear-gradient(160deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 100%)`
                        : `linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)`,
                      border: `1.5px solid ${isCardActive ? color + '60' : 'rgba(255,255,255,0.08)'}`,
                      boxShadow: isCardActive
                        ? `0 40px 80px rgba(0,0,0,0.6), 0 0 40px ${color}20`
                        : '0 30px 60px rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(20px)',
                      transition: 'border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease',
                    }}
                  >
                    {/* Inner shimmer */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 35% 15%, ${color}${isCardActive ? '18' : '08'}, transparent 55%)`,
                        borderRadius: '2rem',
                        transition: 'background 0.4s ease',
                      }}
                    />

                    {/* Card Content */}
                    <div className="flex-1 flex flex-col p-9 overflow-hidden relative z-10">

                      {/* Icon */}
                      <motion.div
                        animate={{
                          opacity: isOpen ? 1 : 0.3,
                          scale: isOpen ? 1 : 0.85,
                        }}
                        transition={{ duration: 0.4, delay: isOpen ? 0.08 + index * 0.05 : 0 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 flex-shrink-0"
                        style={{
                          background: `${color}${isCardActive ? '20' : '12'}`,
                          border: `1px solid ${color}${isCardActive ? '55' : '28'}`,
                          boxShadow: isCardActive ? `0 0 28px ${color}40` : 'none',
                          transition: 'all 0.35s ease',
                        }}
                      >
                        {Icon && (
                          <Icon
                            style={{ color }}
                            size={30}
                            strokeWidth={1.5}
                          />
                        )}
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        animate={{
                          opacity: isOpen ? 1 : 0.35,
                          y: isOpen ? 0 : 8,
                        }}
                        transition={{ duration: 0.4, delay: isOpen ? 0.13 + index * 0.05 : 0 }}
                        className="text-2xl font-black text-white mb-4 tracking-tight leading-snug"
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        animate={{
                          opacity: isOpen ? (isCardActive ? 1 : 0.65) : 0,
                          y: isOpen ? 0 : 10,
                        }}
                        transition={{ duration: 0.4, delay: isOpen ? 0.18 + index * 0.05 : 0 }}
                        className="text-gray-400 text-base leading-relaxed font-medium flex-1"
                      >
                        {service.description}
                      </motion.p>

                      {/* Highlights */}
                      <motion.div
                        animate={{ opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: isOpen ? 0.25 + index * 0.05 : 0 }}
                        className="space-y-2.5 pt-6 border-t flex-shrink-0 mt-4"
                        style={{ borderColor: `${color}18` }}
                      >
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-gray-400">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{
                                backgroundColor: color,
                                boxShadow: isCardActive ? `0 0 8px ${color}` : 'none',
                                transition: 'box-shadow 0.3s ease',
                              }}
                            />
                            {h}
                          </div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Bottom label strip — like Uiverse original */}
                    <div
                      className="flex-shrink-0 h-12 flex items-center justify-center relative z-10"
                      style={{
                        background: isCardActive ? `${color}14` : 'rgba(255,255,255,0.03)',
                        borderTop: `1px solid ${isCardActive ? color + '30' : 'rgba(255,255,255,0.06)'}`,
                        transition: 'background 0.35s ease, border-color 0.35s ease',
                      }}
                    >
                      <span
                        className="text-xs font-bold uppercase tracking-[0.2em]"
                        style={{
                          color: isOpen
                            ? isCardActive ? color : 'rgba(255,255,255,0.4)'
                            : 'rgba(255,255,255,0.15)',
                          transition: 'color 0.35s ease',
                        }}
                      >
                        {service.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Minimal animated dot indicators */}
          <div className="flex items-center gap-3 mt-8">
            {services.map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  width: activeCard === idx ? 28 : 8,
                  backgroundColor: activeCard === idx
                    ? serviceColors[idx]
                    : 'rgba(255,255,255,0.15)',
                  boxShadow: activeCard === idx
                    ? `0 0 12px ${serviceColors[idx]}90`
                    : 'none',
                }}
                transition={{ duration: 0.35 }}
                style={{ height: 8, borderRadius: 99 }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
