import React, { useEffect, useState } from 'react';
import PlanetInfoPanel from './PlanetInfoPanel';

const PLANETS = [
  {
    name: 'Sun', color: '#FFD700', size: 38, orbit: 0, label: 'About Me', emoji: '☀️',
    content: {
      title: 'About Bhoomi Sharma',
      description: 'B.Tech CSE (AI & DS) student passionate about artificial intelligence and space technology.',
      details: [
        '🎓 Pursuing B.Tech in Computer Science Engineering (AI & DS)',
        '🏢 Currently interning at LinuxWorld Informatics Pvt. Ltd.',
        '🚀 Fascinated by space exploration and AI applications',
        '💡 Always eager to learn and explore new technologies',
        '🌟 Dedicated to making a positive impact through technology'
      ]
    }
  },
  {
    name: 'Mercury', color: '#b1b1b1', size: 8, orbit: 60, label: 'Education', emoji: '🛰️', speed: 0.008,
    content: {
      title: 'Educational Journey',
      description: 'Academic background and continuous learning path.',
      details: [
        '🎓 B.Tech CSE (AI & DS) - Vivekananda Global University',
        '📚 Specialized in Artificial Intelligence and Data Science',
        '🏆 Consistent academic performance',
        '📖 Self-learner with passion for emerging technologies',
        '🔬 Research interests in AI and Machine Learning'
      ]
    }
  },
  {
    name: 'Venus', color: '#e6c200', size: 12, orbit: 90, label: 'My Hobbies', emoji: '🌋', speed: 0.006,
    content: {
      title: 'Hobbies & Interests',
      description: 'Personal interests that fuel creativity and innovation.',
      details: [
        '🎮 Gaming and interactive technology exploration',
        '📚 Reading sci-fi novels and tech blogs',
        '🎵 Music production and sound design',
        '📸 Photography, especially astrophotography',
        '🏃‍♀️ Fitness and outdoor activities',
        '🎨 Digital art and 3D modeling'
      ]
    }
  },
  {
    name: 'Earth', color: '#3fa7ff', size: 14, orbit: 120, label: 'My Skills', emoji: '🌍', speed: 0.0045,
    content: {
      title: 'Technical Skills',
      description: 'Comprehensive skill set in modern technologies.',
      details: [
        '🐍 Python - Advanced (AI/ML, Data Science)',
        '⚛️ React.js - Frontend Development',
        '🤖 Machine Learning - TensorFlow, PyTorch',
        '📊 Data Science - Pandas, NumPy, Matplotlib',
        '🗄️ Databases - SQL, MongoDB',
        '☁️ Cloud - AWS, Google Cloud',
        '🔧 Tools - Git, Docker, VS Code'
      ]
    }
  },
  {
    name: 'Mars', color: '#c1440e', size: 12, orbit: 150, label: 'My Projects', emoji: '🔴', speed: 0.0035,
    content: {
      title: 'Featured Projects',
      description: 'Innovative projects showcasing technical expertise.',
      details: [
        '🧠 AI Chatbot - NLP-powered conversational AI',
        '📈 Stock Predictor - ML model for financial forecasting',
        '🖼️ Image Classifier - Deep learning computer vision',
        '📊 Analytics Dashboard - Interactive data visualization',
        '🌐 E-commerce Platform - Full-stack web application',
        '🔍 Recommendation Engine - Collaborative filtering system'
      ]
    }
  },
  {
    name: 'Jupiter', color: '#e3c16f', size: 22, orbit: 190, label: 'Internship Experience', emoji: '🪐', speed: 0.0025,
    content: {
      title: 'LinuxWorld Informatics',
      description: 'Professional experience and industry exposure.',
      details: [
        '🏢 LinuxWorld Informatics Pvt. Ltd. - Current Intern',
        '💼 Role: Software Development and AI Research',
        '🔧 Technologies: Linux, Cloud Computing, DevOps',
        '📚 Learning: Industry best practices and methodologies',
        '🤝 Collaboration: Working with experienced professionals',
        '🚀 Growth: Real-world project experience'
      ]
    }
  },
  {
    name: 'Saturn', color: '#f7e7b6', size: 20, orbit: 230, label: 'My CV', emoji: '💫', speed: 0.002,
    content: {
      title: 'Curriculum Vitae',
      description: 'Complete professional profile and achievements.',
      details: [
        '📄 Download complete CV in PDF format',
        '🎯 Professional summary and objectives',
        '🏆 Academic achievements and certifications',
        '💼 Work experience and internships',
        '🛠️ Technical skills and proficiencies',
        '📞 Contact information and references'
      ]
    }
  },
  {
    name: 'Uranus', color: '#7de2fc', size: 16, orbit: 270, label: 'Articles and Blogs', emoji: '🌀', speed: 0.0015,
    content: {
      title: 'Articles & Blogs',
      description: 'Thoughts, insights, and technical writings.',
      details: [
        '✍️ Technical blog posts on AI and ML',
        '🔬 Research articles on emerging technologies',
        '💡 Tutorials and how-to guides',
        '🌟 Industry insights and trend analysis',
        '📝 Personal experiences and learnings',
        '🗣️ Speaking engagements and presentations'
      ]
    }
  },
  {
    name: 'Neptune', color: '#4062bb', size: 16, orbit: 310, label: 'Certifications & Experience', emoji: '🌊', speed: 0.001,
    content: {
      title: 'Certifications & Experience',
      description: 'Professional certifications and practical experience.',
      details: [
        '🏅 AI/ML Certifications from leading platforms',
        '☁️ Cloud computing certifications (AWS, GCP)',
        '📊 Data Science and Analytics certifications',
        '🔧 DevOps and Linux system administration',
        '🌐 Web development and modern frameworks',
        '🎯 Project management and agile methodologies'
      ]
    }
  }
];

const SolarSystem2D = ({ onPlanetClick, orbitScale = 1 }) => {
  const [time, setTime] = useState(0);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [sunScale, setSunScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 30);
    return () => clearInterval(interval);
  }, []);

  // Animate sun scale when selected
  useEffect(() => {
    if (selectedPlanet && selectedPlanet.name === 'Sun') {
      setSunScale(1.3);
    } else {
      setSunScale(1);
    }
  }, [selectedPlanet]);

  const center = 400;
  const svgSize = 800;

  // Enhanced planet click handler
  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    if (onPlanetClick) onPlanetClick(planet);
  };

  return (
    <div className="w-full h-full flex items-center justify-center select-none relative">
      <svg width={svgSize} height={svgSize} style={{ display: 'block', margin: '0 auto', background: 'none' }}>
        {/* Orbits */}
        {PLANETS.filter(p => p.orbit > 0).map((planet, i) => (
          <circle
            key={planet.name + '-orbit'}
            cx={center}
            cy={center}
            r={planet.orbit * orbitScale}
            fill="none"
            stroke="#3a4a6b"
            strokeDasharray="4 6"
            strokeWidth={1.5}
            opacity={0.25}
          />
        ))}
        {/* Planets and Labels */}
        {PLANETS.map((planet, i) => {
          if (planet.orbit === 0) {
            // Sun
            return (
              <g key={planet.name} style={{ cursor: 'pointer' }} onClick={() => handlePlanetClick(planet)}>
                <circle
                  cx={center}
                  cy={center}
                  r={planet.size * sunScale}
                  fill="url(#sun-gradient)"
                  filter="url(#sun-glow)"
                  style={{ transition: 'r 0.4s cubic-bezier(.4,2,.6,1)', boxShadow: '0 0 60px 20px #FFD70088' }}
                />
                <text
                  x={center}
                  y={center + planet.size * sunScale + 28}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="20"
                  fontFamily="Orbitron, sans-serif"
                  style={{ pointerEvents: 'none', textShadow: '0 0 12px #FFD700' }}
                >{planet.label}</text>
              </g>
            );
          }
          // Calculate position
          const angle = (time * planet.speed) % (2 * Math.PI);
          const x = center + planet.orbit * orbitScale * Math.cos(angle);
          const y = center + planet.orbit * orbitScale * Math.sin(angle);
          // Label position (slightly outside planet)
          const labelX = center + (planet.orbit * orbitScale + planet.size + 22) * Math.cos(angle);
          const labelY = center + (planet.orbit * orbitScale + planet.size + 22) * Math.sin(angle);
          // Realistic gradient id
          const gradId = `planet-gradient-${planet.name}`;
          return (
            <g key={planet.name} style={{ cursor: 'pointer' }} onClick={() => handlePlanetClick(planet)}>
              <circle
                cx={x}
                cy={y}
                r={planet.size}
                fill={`url(#${gradId})`}
                stroke={selectedPlanet?.name === planet.name ? '#00d4ff' : '#fff'}
                strokeWidth={selectedPlanet?.name === planet.name ? 3 : (planet.name === 'Earth' ? 2 : 1)}
                filter={selectedPlanet?.name === planet.name ? 'url(#planet-glow)' : ''}
                style={{ transition: 'stroke 0.2s, filter 0.2s' }}
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                fill="#fff"
                fontSize="15"
                fontFamily="Orbitron, sans-serif"
                alignmentBaseline="middle"
                style={{ pointerEvents: 'none', userSelect: 'none', textShadow: '0 0 8px #000' }}
              >{planet.emoji} {planet.label}</text>
            </g>
          );
        })}
        {/* Sun and planet gradients */}
        <defs>
          <radialGradient id="sun-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbe6" />
            <stop offset="60%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#ffb300" />
          </radialGradient>
          {PLANETS.filter(p => p.orbit > 0).map((planet) => (
            <radialGradient key={planet.name} id={`planet-gradient-${planet.name}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="60%" stopColor={planet.color} stopOpacity="0.95" />
              <stop offset="100%" stopColor="#222" stopOpacity="0.8" />
            </radialGradient>
          ))}
          <filter id="sun-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="planet-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* Info Panel Modal */}
      <PlanetInfoPanel planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />
    </div>
  );
};

export default SolarSystem2D; 