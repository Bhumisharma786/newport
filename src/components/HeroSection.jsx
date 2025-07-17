import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import StarField from './StarField';

const HeroSection = ({ onStartExploring }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(buttonRef.current, {
        boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)',
        duration: 2,
        ease: 'power2.inOut'
      });
    }
  }, []);

  const handleButtonClick = () => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: onStartExploring
    });
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(180deg, #0a1026 0%, #1a2250 100%)'}}>
      {/* Starfield Background */}
      <StarField density={400} parallax={true} />
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="hero-title mb-6 whitespace-nowrap"
        >
          WELCOME TO BHOOMI'S UNIVERSE
        </motion.h1>
        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-name mb-12"
        >
          BHOOMI SHARMA
        </motion.h2>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-xl text-blue-300 mb-16 font-light tracking-wide"
        >
          B.Tech CSE (AI & DS) • LinuxWorld Informatics Intern
        </motion.p>
        {/* Start Exploring Button */}
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleButtonClick}
          className="start-button relative overflow-hidden group"
        >
          <span className="relative z-10">START EXPLORING</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;