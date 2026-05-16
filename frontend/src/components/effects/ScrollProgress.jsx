import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-purple-400 to-secondary z-[9999] origin-left"
      style={{ 
        scaleX,
        boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
      }}
    />
  );
};

export default ScrollProgress;
