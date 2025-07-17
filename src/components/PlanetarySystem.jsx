import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Sun from './Sun';
import Planet from './Planet';
import StarField from './StarField';
import PlanetCard from './PlanetCard';

const PlanetarySystem = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [cameraPosition, setCameraPosition] = useState([0, 10, 45]);

  const planets = [
    {
      name: 'About Me',
      orbitRadius: 12,
      size: 1.2,
      color: '#8b5cf6',
      orbitSpeed: 0.015,
      initialAngle: 0,
      yOffset: 2,
      content: {
        title: 'About Bhoomi Sharma',
        description: 'B.Tech CSE (AI & DS) student at Vivekananda Global University with a passion for artificial intelligence and data science.',
        details: [
          '🎓 Currently pursuing B.Tech in Computer Science Engineering (AI & DS)',
          '🏢 Intern at LinuxWorld Informatics Pvt. Ltd.',
          '🤖 Specializing in AI, Machine Learning, and Data Science',
          '💡 Passionate about innovative technology solutions',
          '🌟 Dedicated to continuous learning and growth'
        ]
      }
    },
    {
      name: 'Skills',
      orbitRadius: 18,
      size: 1.4,
      color: '#06b6d4',
      orbitSpeed: 0.012,
      initialAngle: Math.PI * 0.4,
      yOffset: -3,
      content: {
        title: 'Technical Skills',
        description: 'Comprehensive skill set in modern technologies and frameworks.',
        details: [
          '🐍 Python - Advanced proficiency in data science libraries',
          '⚛️ React.js - Modern frontend development',
          '🤖 Machine Learning - TensorFlow, PyTorch, Scikit-learn',
          '📊 Data Science - Pandas, NumPy, Matplotlib, Seaborn',
          '🗄️ Databases - SQL, MongoDB',
          '☁️ Cloud - AWS, Google Cloud Platform',
          '🔧 Tools - Git, Docker, Jupyter, VS Code'
        ]
      }
    },
    {
      name: 'Projects',
      orbitRadius: 25,
      size: 1.6,
      color: '#10b981',
      orbitSpeed: 0.008,
      initialAngle: Math.PI * 0.8,
      yOffset: 4,
      content: {
        title: 'Featured Projects',
        description: 'Innovative projects showcasing AI and web development expertise.',
        details: [
          '🧠 AI Chatbot - Intelligent conversational AI using NLP',
          '📈 Stock Price Predictor - ML model for financial forecasting',
          '🖼️ Image Classification - Deep learning for computer vision',
          '📊 Data Visualization Dashboard - Interactive analytics platform',
          '🌐 E-commerce Platform - Full-stack web application',
          '🔍 Recommendation System - Collaborative filtering algorithm'
        ]
      }
    },
    {
      name: 'Internship',
      orbitRadius: 32,
      size: 1.3,
      color: '#f59e0b',
      orbitSpeed: 0.006,
      initialAngle: Math.PI * 1.2,
      yOffset: -1,
      content: {
        title: 'LinuxWorld Informatics',
        description: 'Current internship experience in cutting-edge technology.',
        details: [
          '🏢 Company: LinuxWorld Informatics Pvt. Ltd.',
          '💼 Role: Software Development Intern',
          '🔧 Technologies: Linux, Cloud Computing, DevOps',
          '📚 Learning: Industry best practices and methodologies',
          '🤝 Collaboration: Working with experienced professionals',
          '🚀 Growth: Hands-on experience with real-world projects'
        ]
      }
    },
    {
      name: 'Contact',
      orbitRadius: 38,
      size: 1.1,
      color: '#ef4444',
      orbitSpeed: 0.004,
      initialAngle: Math.PI * 1.6,
      yOffset: 3,
      content: {
        title: 'Get In Touch',
        description: 'Let\'s connect and explore opportunities together.',
        details: [
          '📧 Email: bhoomi.sharma@example.com',
          '💼 LinkedIn: linkedin.com/in/bhoomi-sharma',
          '🐱 GitHub: github.com/bhoomi-sharma',
          '📱 Phone: +91 XXXXX XXXXX',
          '🌍 Location: India',
          '💬 Open to: Collaborations, Opportunities, Discussions'
        ]
      }
    }
  ];

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    // Zoom camera to planet
    setCameraPosition([planet.orbitRadius * 0.6, planet.yOffset + 5, planet.orbitRadius * 0.6]);
  };

  const handleCloseCard = () => {
    setSelectedPlanet(null);
    setCameraPosition([0, 10, 45]);
  };

  return (
    <div className="relative w-full h-screen">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={85}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* 3D Scene */}
        <StarField />
        <Sun />
        
        {planets.map((planet, index) => (
          <Planet
            key={planet.name}
            name={planet.name}
            orbitRadius={planet.orbitRadius}
            size={planet.size}
            color={planet.color}
            orbitSpeed={planet.orbitSpeed}
            initialAngle={planet.initialAngle}
            yOffset={planet.yOffset}
            onClick={() => handlePlanetClick(planet)}
            isSelected={selectedPlanet?.name === planet.name}
          />
        ))}
        
        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={15}
          maxDistance={80}
          autoRotate={!selectedPlanet}
          autoRotateSpeed={0.3}
        />
      </Canvas>

      {/* Planet Information Card */}
      {selectedPlanet && (
        <PlanetCard
          planet={selectedPlanet}
          onClose={handleCloseCard}
        />
      )}

      {/* Navigation Instructions */}
      <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 p-3 rounded-lg">
        <p>🖱️ Click and drag to rotate</p>
        <p>🔍 Scroll to zoom</p>
        <p>🪐 Click planets to explore</p>
      </div>
    </div>
  );
};

export default PlanetarySystem;