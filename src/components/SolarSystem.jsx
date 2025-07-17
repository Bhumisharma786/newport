import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Planet data with realistic information
const planetData = {
  sun: { 
    name: 'About Me', 
    color: '#FDB813', 
    size: 3, 
    distance: 0,
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
  mercury: { 
    name: 'Education', 
    color: '#8C7853', 
    size: 0.4, 
    distance: 8,
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
  venus: { 
    name: 'My Hobbies', 
    color: '#FFC649', 
    size: 0.6, 
    distance: 12,
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
  earth: { 
    name: 'My Skills', 
    color: '#6B93D6', 
    size: 0.8, 
    distance: 16,
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
  mars: { 
    name: 'My Projects', 
    color: '#C1440E', 
    size: 0.7, 
    distance: 20,
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
  jupiter: { 
    name: 'Internship Experience', 
    color: '#D8CA9D', 
    size: 1.5, 
    distance: 26,
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
  saturn: { 
    name: 'My CV', 
    color: '#FAD5A5', 
    size: 1.2, 
    distance: 32,
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
  uranus: { 
    name: 'Articles and Blogs', 
    color: '#4FD0E7', 
    size: 1.0, 
    distance: 38,
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
  neptune: { 
    name: 'Certifications & Experience', 
    color: '#4B70DD', 
    size: 0.9, 
    distance: 44,
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
};

// Individual Planet Component
const Planet = ({ planetKey, data, onClick, isSelected }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      
      // Orbital motion
      if (planetKey !== 'sun') {
        const time = state.clock.getElapsedTime();
        const speed = 1 / (data.distance * 0.1);
        meshRef.current.position.x = Math.cos(time * speed) * data.distance;
        meshRef.current.position.z = Math.sin(time * speed) * data.distance;
      }
    }
  });

  return (
    <group>
      <Sphere
        ref={meshRef}
        args={[data.size, 32, 32]}
        position={planetKey === 'sun' ? [0, 0, 0] : [data.distance, 0, 0]}
        onClick={() => onClick(data)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <meshStandardMaterial
          color={data.color}
          emissive={data.color}
          emissiveIntensity={planetKey === 'sun' ? 0.3 : (hovered ? 0.2 : 0.1)}
        />
      </Sphere>
      
      {/* Planet Label */}
      <Text
        position={[
          planetKey === 'sun' ? 0 : data.distance,
          data.size + 1.5,
          0
        ]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {data.name}
      </Text>
      
      {/* Orbit Ring */}
      {planetKey !== 'sun' && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[data.distance - 0.1, data.distance + 0.1, 64]} />
          <meshBasicMaterial color="white" transparent opacity={0.1} />
        </mesh>
      )}
    </group>
  );
};

// Main Solar System Component
const SolarSystem = ({ onPlanetClick }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planetData) => {
    setSelectedPlanet(planetData);
    onPlanetClick(planetData);
  };

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 20, 50], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        
        {/* Background Stars */}
        <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade />
        
        {/* Planets */}
        {Object.entries(planetData).map(([key, data]) => (
          <Planet
            key={key}
            planetKey={key}
            data={data}
            onClick={handlePlanetClick}
            isSelected={selectedPlanet?.name === data.name}
          />
        ))}
        
        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={20}
          maxDistance={100}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default SolarSystem;