import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import VortexTransition from './components/VortexTransition';
import StarField from './components/StarField';
import PlanetInfoPanel from './components/PlanetInfoPanel';
import SolarSystem2D from './components/SolarSystem2D';

/**
 * BHOOMI'S UNIVERSE - IMMERSIVE SPACE PORTFOLIO
 * 
 * A cinematic, interactive space-themed portfolio experience where visitors
 * journey through Bhoomi Sharma's professional universe. Each planet in the
 * solar system represents a different aspect of her skills and experience.
 * 
 * EXPERIENCE FLOW:
 * 1. Hero Section - Welcome to Bhoomi's Universe with starfield background
 * 2. Vortex Transition - Cinematic space travel animation with Three.js
 * 3. Solar System - Interactive 3D planets representing portfolio sections
 * 
 * FEATURES:
 * - Immersive vortex transition with particle effects and tunnel animation
 * - 3D solar system with realistic planet orbits
 * - Interactive planet information panels
 * - Smooth animations and transitions throughout
 * 
 * TECH STACK:
 * - React.js with hooks for state management
 * - Framer Motion for smooth animations
 * - React Three Fiber for 3D rendering and vortex effects
 * - GSAP-inspired CSS animations
 */

function App() {
  // Application state
  const [currentView, setCurrentView] = useState('hero'); // 'hero' | 'transition' | 'solar-system'
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isInWormhole, setIsInWormhole] = useState(false);

  /**
   * Handle the start exploring button click
   * Initiates the vortex transition sequence
   */
  const handleStartExploring = () => {
    setCurrentView('transition');
    setIsInWormhole(true);
  };

  /**
   * Handle vortex transition completion
   * Transitions to the solar system view
   */
  const handleTransitionComplete = () => {
    setCurrentView('solar-system');
    setIsInWormhole(false);
  };

  /**
   * Handle planet click in solar system
   * Opens the planet information panel
   */
  const handlePlanetClick = (planetData) => {
    setSelectedPlanet(planetData);
  };

  /**
   * Close planet information panel
   */
  const closePlanetPanel = () => {
    setSelectedPlanet(null);
  };

  /**
   * Return to hero section
   */
  const returnToHero = () => {
    setCurrentView('hero');
    setSelectedPlanet(null);
    setIsInWormhole(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Starfield background for all pages */}
      {currentView === 'hero' ? (
        <StarField density={600} background="black" />
      ) : (
        <StarField density={600} background="linear-gradient(180deg, #0a1026 0%, #1a2250 100%)" />
      )}
      {/* Main Content with View Transitions */}
      <AnimatePresence mode="wait">
        {currentView === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection onStartExploring={handleStartExploring} />
          </motion.div>
        )}

        {currentView === 'solar-system' && (
          <motion.div
            key="solar-system"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full flex flex-col"
          >
            <div className="flex-1">
              <SolarSystem2D onPlanetClick={handlePlanetClick} orbitScale={1.18} />
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.5 }}
                onClick={returnToHero}
                className="absolute top-6 left-6 z-10 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
              >
                ← Return to Universe
              </motion.button>
            </div>
            {/* Footer */}
            <footer className="w-full py-4 bg-[#10162a] bg-opacity-80 border-t border-cyan-900 flex flex-col md:flex-row items-center justify-center gap-6 text-cyan-200 text-lg z-20">
              <a href="https://github.com/bhoomisharma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/bhoomisharma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                LinkedIn
              </a>
              <a href="mailto:bhoomi@example.com" className="hover:text-white transition-colors flex items-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z"/></svg>
                Email
              </a>
              <a href="https://instagram.com/bhoomisharma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                Instagram
              </a>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vortex Transition Overlay */}
      <VortexTransition
        isActive={currentView === 'transition'}
        onComplete={handleTransitionComplete}
      />

      {/* Planet Information Panel */}
      <PlanetInfoPanel
        planet={selectedPlanet}
        onClose={closePlanetPanel}
      />
    </div>
  );
}

export default App;