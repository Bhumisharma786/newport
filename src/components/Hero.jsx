import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const particlesOptions = {
  background: { color: { value: '#181824' } },
  fpsLimit: 60,
  interactivity: {
    events: { onClick: { enable: false }, onHover: { enable: false } },
    modes: {}
  },
  particles: {
    color: { value: '#6f6fff' },
    links: { enable: false },
    move: { enable: true, speed: 0.2 },
    number: { value: 60 },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 2 } }
  },
  detectRetina: true
};

const Hero = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#181824] overflow-hidden">
      <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 z-0" />
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">Bhoomi Sharma</h1>
        <p className="text-xl md:text-2xl text-teal-300 mb-8 font-medium">B.Tech AI & Data Science Student</p>
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: '#6f6fff', color: '#fff' }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold text-lg shadow-lg transition-all duration-300 focus:outline-none"
          onClick={onExplore}
        >
          Explore
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 