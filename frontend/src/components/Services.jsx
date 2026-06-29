import React, { useState } from 'react';
import { services } from '../mock';
import * as LucideIcons from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

// Mapping icons for the 3 services
const serviceIcons = ['Smartphone', 'Globe', 'Database'];

const Services = () => {
  const [cards, setCards] = useState(services);
  const [exitDirection, setExitDirection] = useState(null); // 'left' | 'right' | null
  const [isDragging, setIsDragging] = useState(false);

  // Rotate deck forward (next card)
  const handleNext = () => {
    if (exitDirection) return;
    setExitDirection('left');
    setTimeout(() => {
      setCards((prev) => {
        const copy = [...prev];
        const first = copy.shift();
        copy.push(first);
        return copy;
      });
      setExitDirection(null);
    }, 250);
  };

  // Rotate deck backward (prev card)
  const handlePrev = () => {
    if (exitDirection) return;
    setExitDirection('right');
    setTimeout(() => {
      setCards((prev) => {
        const copy = [...prev];
        const last = copy.pop();
        copy.unshift(last);
        return copy;
      });
      setExitDirection(null);
    }, 250);
  };

  // Drag handler for gestures
  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const threshold = 140;
    if (info.offset.x > threshold) {
      // Swipe right
      setExitDirection('right');
      setTimeout(() => {
        setCards((prev) => {
          const copy = [...prev];
          const last = copy.pop();
          copy.unshift(last);
          return copy;
        });
        setExitDirection(null);
      }, 250);
    } else if (info.offset.x < -threshold) {
      // Swipe left
      setExitDirection('left');
      setTimeout(() => {
        setCards((prev) => {
          const copy = [...prev];
          const first = copy.shift();
          copy.push(first);
          return copy;
        });
        setExitDirection(null);
      }, 250);
    }
  };

  // Active index for dot indicators (matching original ID)
  const activeOriginalIndex = cards[0] ? cards[0].id - 1 : 0;

  return (
    <section id="services" className="py-32 px-4 sm:px-6 bg-[#030014] relative overflow-hidden bg-grid">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-glow"></div>

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
            Drag left/right or use the controls below to navigate the architectural capabilities of our engineering team.
          </p>
        </motion.div>

        {/* 3D Stacked Deck Slider Container */}
        <div className="relative w-full flex flex-col items-center justify-center min-h-[560px] md:min-h-[580px]">
          
          <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[620px] h-[440px] md:h-[460px] flex items-center justify-center">
            {cards.map((service, index) => {
              const IconComponent = LucideIcons[serviceIcons[(service.id - 1) % serviceIcons.length]];
              const isFront = index === 0;
              const isMiddle = index === 1;
              const isBack = index === 2;

              // Card styling/position properties based on stack depth
              let cardX = 0;
              let cardY = 0;
              let cardScale = 1;
              let cardOpacity = 1;
              let cardZ = 30;

              if (isMiddle) {
                cardY = -28;
                cardScale = 0.93;
                cardOpacity = 0.6;
                cardZ = 20;
              } else if (isBack) {
                cardY = -56;
                cardScale = 0.86;
                cardOpacity = 0.3;
                cardZ = 10;
              }

              // Handle exit animations
              if (isFront && exitDirection === 'left') {
                cardX = -450;
                cardY = 20;
                cardOpacity = 0;
              } else if (isFront && exitDirection === 'right') {
                cardX = 450;
                cardY = 20;
                cardOpacity = 0;
              }

              return (
                <motion.div
                  key={service.id}
                  drag={isFront && !exitDirection}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  style={{
                    zIndex: cardZ,
                    cursor: isFront ? (isDragging ? 'grabbing' : 'grab') : 'default',
                    touchAction: 'none'
                  }}
                  animate={{
                    x: cardX,
                    y: cardY,
                    scale: cardScale,
                    opacity: cardOpacity,
                    rotate: isFront && isDragging ? 0 : 0
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 24
                  }}
                  className="absolute w-full h-full"
                >
                  {/* Card Border & Background */}
                  <div 
                    className={`w-full h-full p-[1.5px] rounded-[2.5rem] overflow-hidden transition-all duration-500 bg-gradient-to-b ${
                      isFront 
                        ? 'from-primary/20 via-white/5 to-white/0 shadow-[0_30px_60px_-15px_rgba(3,0,20,0.8)]' 
                        : 'from-white/5 to-transparent'
                    }`}
                  >
                    {/* Inner Content */}
                    <div className="w-full h-full rounded-[2.5rem] p-8 md:p-12 flex flex-col bg-[#07041a]/95 backdrop-blur-xl border border-white/5 select-none relative">
                      
                      {/* Active Card interactive shine effect */}
                      {isFront && (
                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-primary/5 via-transparent to-cyan-500/5 pointer-events-none" />
                      )}

                      {/* Card Content with stagger on mount */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={service.id}
                          initial={isFront ? { opacity: 0, y: 15 } : {}}
                          animate={isFront ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.05 }}
                          className="h-full flex flex-col"
                        >
                          {/* Icon Header */}
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center mb-6 md:mb-10 shadow-2xl group-hover:bg-primary/20 transition-all duration-500">
                            {IconComponent && (
                              <IconComponent 
                                className="text-primary" 
                                size={isFront ? 32 : 24} 
                                strokeWidth={1.5} 
                              />
                            )}
                          </div>

                          {/* Card Text details */}
                          <div>
                            <h3 className="text-2xl md:text-3.5xl font-black text-white mb-3 md:mb-5 tracking-tight group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                              {service.description}
                            </p>
                          </div>

                          {/* Highlights section (Fades out when not at front to optimize visual hierarchy) */}
                          <div className="space-y-3 pt-6 border-t border-white/5 mt-auto">
                            {service.highlights.map((highlight, idx) => (
                              <div 
                                key={idx} 
                                className={`flex items-start text-xs md:text-sm font-bold uppercase tracking-widest transition-opacity duration-300 ${
                                  isFront ? 'text-gray-300 opacity-100' : 'text-gray-500 opacity-40'
                                }`}
                              >
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-3 md:mr-4 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                                <span className="leading-snug">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Swipe Deck Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 sm:mt-12 select-none">
          
          <div className="flex items-center gap-4">
            {/* Prev button */}
            <button
              onClick={handlePrev}
              disabled={!!exitDirection}
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
            >
              <LucideIcons.ChevronLeft size={20} />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {services.map((_, idx) => (
                <div
                  key={idx}
                  className="transition-all duration-500 rounded-full"
                  style={{
                    width: idx === activeOriginalIndex ? '20px' : '8px',
                    height: '8px',
                    backgroundColor: idx === activeOriginalIndex ? '#A855F7' : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: idx === activeOriginalIndex ? '0 0 10px rgba(168, 85, 247, 0.8)' : 'none'
                  }}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              disabled={!!exitDirection}
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
            >
              <LucideIcons.ChevronRight size={20} />
            </button>
          </div>

          <div className="text-xs font-mono text-gray-500 tracking-wider uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">
            Tip: Drag / Swipe the card left or right
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
