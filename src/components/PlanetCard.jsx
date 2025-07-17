import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Mail, Phone, MapPin } from 'lucide-react';

const PlanetCard = ({ planet, onClose }) => {
  const getIcon = (planetName) => {
    switch (planetName) {
      case 'Contact':
        return <Mail className="w-6 h-6" />;
      case 'Projects':
        return <Github className="w-6 h-6" />;
      default:
        return <ExternalLink className="w-6 h-6" />;
    }
  };

  const renderContactDetails = () => {
    if (planet.name === 'Contact') {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white bg-opacity-10">
            <Mail className="w-5 h-5 text-cosmic-neon" />
            <span>bhoomi.sharma@example.com</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white bg-opacity-10">
            <Phone className="w-5 h-5 text-cosmic-neon" />
            <span>+91 XXXXX XXXXX</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white bg-opacity-10">
            <MapPin className="w-5 h-5 text-cosmic-neon" />
            <span>India</span>
          </div>
          <div className="flex gap-4 justify-center pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Card */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto glass-morphism rounded-2xl p-8 text-white"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 bg-opacity-20 hover:bg-opacity-40 flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center">
            {getIcon(planet.name)}
          </div>
          <div>
            <h2 className="text-3xl font-bold glow-text">{planet.content.title}</h2>
            <p className="text-blue-300">{planet.content.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {planet.name === 'Contact' ? (
            renderContactDetails()
          ) : (
            <ul className="space-y-3">
              {planet.content.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
                >
                  <span className="text-lg">{detail.split(' ')[0]}</span>
                  <span className="flex-1">{detail.substring(detail.indexOf(' ') + 1)}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Buttons */}
        {planet.name === 'Projects' && (
          <div className="mt-8 flex gap-4 justify-center">
            <button className="cosmic-button px-6 py-3 rounded-lg flex items-center gap-2">
              <Github className="w-4 h-4" />
              View Projects
            </button>
            <button className="px-6 py-3 rounded-lg border border-cosmic-neon text-cosmic-neon hover:bg-cosmic-neon hover:text-black transition-all">
              Live Demos
            </button>
          </div>
        )}

        {planet.name === 'Skills' && (
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Python', 'React', 'AI/ML', 'Data Science', 'Cloud', 'DevOps'].map((skill, index) => (
                <div
                  key={skill}
                  className="p-3 rounded-lg cosmic-gradient text-center font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PlanetCard;