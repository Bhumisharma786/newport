import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WormholeTransition = ({ isActive, onComplete }) => {
  const [stage, setStage] = useState('entering'); // entering -> tunnel -> exiting
  
  useEffect(() => {
    if (!isActive) return;
    
    const timer1 = setTimeout(() => setStage('tunnel'), 500);
    const timer2 = setTimeout(() => setStage('exiting'), 2500);
    const timer3 = setTimeout(() => onComplete(), 3500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="wormhole-container"
      >
        {/* Wormhole Tunnel Effect */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ 
            scale: stage === 'tunnel' ? [1, 3, 5] : 1,
            rotate: 360 * 3
          }}
          transition={{ 
            duration: stage === 'tunnel' ? 2 : 0.5,
            ease: "easeInOut"
          }}
          className="wormhole-tunnel"
        />
        
        {/* Spiral Particles */}
        <div className="wormhole-particles">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                top: '50%',
                left: '50%',
              }}
              animate={{
                rotate: 360 * 4,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                ease: "linear",
                repeat: stage === 'tunnel' ? Infinity : 0,
              }}
            />
          ))}
        </div>
        
        {/* Transition Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="transition-text"
        >
          {stage === 'entering' && "Initiating Space Jump..."}
          {stage === 'tunnel' && "Entering Bhoomi's Solar System..."}
          {stage === 'exiting' && "Welcome to the Universe!"}
        </motion.div>
        
        {/* Radial Energy Waves */}
        {stage === 'tunnel' && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 4, 1],
              opacity: [0.8, 0.2, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-32 h-32 border-4 border-cyan-400 rounded-full" />
          </motion.div>
        )}
        
        {/* Background Distortion Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-conic from-purple-500 via-blue-500 to-purple-500"
          animate={{
            rotate: stage === 'tunnel' ? 360 * 2 : 0,
            scale: stage === 'tunnel' ? [1, 1.5, 1] : 1,
          }}
          transition={{
            duration: stage === 'tunnel' ? 2 : 0.5,
            ease: "easeInOut"
          }}
          style={{
            mixBlendMode: 'multiply',
            opacity: 0.3,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default WormholeTransition;