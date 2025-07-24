import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'home';
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 80 <= scrollY) {
          current = id;
        }
      });
      setActive(current);
      // Scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Dark mode preference
    const darkPref = localStorage.getItem('theme');
    if (darkPref === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (darkPref === 'light') {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <>
      {/* Scroll Tracker Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-teal-400 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-1 left-0 w-full z-40 bg-accent1 bg-opacity-95 shadow-md"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <span className="font-bold text-xl text-accent3 tracking-wider">Bhoomi</span>
          <ul className="flex gap-6 md:gap-10">
            {sections.map(({ id, label }) => (
              <li key={id} className="relative flex flex-col items-center">
                <button
                  onClick={() => handleClick(id)}
                  className={`text-lg font-medium px-2 py-1 rounded transition-colors duration-200 focus:outline-none ${
                    active === id ? 'bg-accent2 text-main shadow' : 'text-accent3 hover:text-accent2'
                  }`}
                >
                  {label}
                </button>
                {/* Marker for active section */}
                {active === id && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal-400 shadow-md" />
                )}
              </li>
            ))}
          </ul>
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-6 px-3 py-1 rounded-full border border-accent2 bg-accent1 text-accent3 dark:bg-accent3 dark:text-accent1 transition-colors duration-200 focus:outline-none shadow hover:bg-accent2 hover:text-white dark:hover:bg-accent2 dark:hover:text-white"
            aria-label="Toggle dark mode"
          >
            <span role="img" aria-label="moon">🌙</span>
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar; 