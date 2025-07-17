import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';

const PlanetInfoPanel = ({ planet, onClose }) => {
  const panelRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (planet) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [planet, onClose]);

  if (!planet || !planet.content) return null;

  const { title, description, details } = planet.content;

  const handleDownloadCV = () => {
    // Simulate CV download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV URL
    link.download = 'Bhoomi_Sharma_CV.pdf';
    link.click();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backdropFilter: 'blur(8px)', background: 'rgba(10,16,38,0.7)' }}
      >
        <motion.div
          ref={panelRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative bg-[#181e36] border border-cyan-400/30 shadow-2xl rounded-2xl p-8 max-w-lg w-full mx-4 text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-2 font-orbitron text-cyan-300">{title}</h2>
            <p className="text-gray-300 mb-6">{description}</p>
          </motion.div>
          {/* Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ul className="space-y-3">
              {details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-cyan-400 text-lg flex-shrink-0">
                    {detail.split(' ')[0]}
                  </span>
                  <span className="text-gray-200">
                    {detail.substring(detail.indexOf(' ') + 1)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-3"
          >
            {planet.name === 'Saturn' && (
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
              >
                <Download size={16} />
                Download CV
              </button>
            )}
            {planet.name === 'Mars' && (
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all">
                <ExternalLink size={16} />
                View Projects
              </button>
            )}
            {planet.name === 'Uranus' && (
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
                <ExternalLink size={16} />
                Read Articles
              </button>
            )}
          </motion.div>
          {/* Planet Indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border-2 border-cyan-400"
            style={{ backgroundColor: planet.color }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PlanetInfoPanel;