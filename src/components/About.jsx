import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import CountUp from 'react-countup';

const highlights = [
  { label: '🎓 Vivekananda Global University' },
  { label: '💻 LinuxWorld Internship' },
  { label: '💡 NCC Cadet - A Certificate (Air Wing)' },
  { label: '🔧 Python, Docker, ML, Streamlit, C/C++, Fullstack' },
  { label: '🪖 NCC Cadet' },
];

const About = () => (
  <section className="w-full min-h-[80vh] flex items-center justify-center py-16">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-3xl backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-xl border border-white/20 dark:border-black/30"
    >
      {/* Left: Bio and Highlights */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
        <h3 className="text-xl font-semibold text-teal-400 mb-1">Bhoomi Sharma</h3>
        <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 mb-2 leading-relaxed">
          Hi, I’m Bhoomi Sharma <span role="img" aria-label="wave">👋</span><br /><br />
          I’m currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Data Science at Vivekananda Global University, Jaipur.<br /><br />
          Right now, I’m doing my summer internship at LinuxWorld Informatics Pvt. Ltd., where I’m learning how real-world tech blends with AI, cloud, and automation. I enjoy turning ideas into meaningful solutions, and I’m always curious about the “why” behind the code — not just the “how.”<br /><br />
          Beyond academics, I’m an NCC Air Wing cadet and hold an A certificate — discipline and commitment are part of my DNA. Whether it’s a coding challenge, a public speaking stage, or a team project, I love putting my best into everything I do.<br /><br />
          I believe in building not just software, but impact.<br /><br />
          Let’s create something awesome together <span role="img" aria-label="rocket">🚀</span>
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.map((item, idx) => (
            <span
              key={idx}
              className="bg-[#232336] dark:bg-[#232336] text-teal-300 px-3 py-1 rounded-full text-sm font-medium shadow border border-teal-700 transition-all duration-200 cursor-pointer hover:scale-105 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-black"
            >
              {item.label}
            </span>
          ))}
        </div>
        {/* Animated Counters for Achievements */}
        <div className="flex flex-wrap gap-8 mb-4 justify-center md:justify-start">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-teal-400"><CountUp end={3} duration={2} /></span>
            <span className="text-sm text-gray-300 mt-1">NCC Badges</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-teal-400"><CountUp end={5} duration={2} /></span>
            <span className="text-sm text-gray-300 mt-1">Certifications</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-teal-400"><CountUp end={100} duration={2} suffix="+" /></span>
            <span className="text-sm text-gray-300 mt-1">Internship Hours</span>
          </div>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow transition-colors duration-200"
        >
          Resume
        </a>
      </div>
      {/* Right: Profile Image with hover/tilt */}
      <motion.div
        whileHover={{ rotate: -3, scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex flex-col items-center md:items-center justify-center h-full"
      >
        <img
          src={profileImg}
          alt="Bhoomi Sharma"
          className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-teal-400 shadow-2xl bg-[#232336] dark:bg-[#232336] transition-transform duration-300"
          style={{ filter: 'brightness(1.08) contrast(1.08)' }}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About; 