import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Enhanced Vortex Tunnel Component
const VortexTunnel = ({ isActive, onComplete }) => {
  const meshRef = useRef();
  const [particles, setParticles] = useState([]);
  const [tunnelRings, setTunnelRings] = useState([]);

  useEffect(() => {
    if (isActive) {
      // Generate particles for the vortex
      const newParticles = [];
      for (let i = 0; i < 2000; i++) {
        newParticles.push({
          position: new THREE.Vector3(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            Math.random() * 200 - 100
          ),
          velocity: new THREE.Vector3(0, 0, -2),
          size: Math.random() * 3 + 0.5,
          color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.6, 1, 0.7),
          rotationSpeed: Math.random() * 0.1 + 0.05
        });
      }
      setParticles(newParticles);

      // Generate tunnel rings
      const newRings = [];
      for (let i = 0; i < 20; i++) {
        newRings.push({
          position: new THREE.Vector3(0, 0, -i * 10),
          radius: 5 + i * 0.5,
          opacity: 1 - i * 0.05,
          rotationSpeed: 0.02 + i * 0.001
        });
      }
      setTunnelRings(newRings);
    }
  }, [isActive]);

  useFrame((state) => {
    if (!isActive || !meshRef.current) return;

    const time = state.clock.getElapsedTime();
    
    // Rotate the entire tunnel
    meshRef.current.rotation.z = time * 0.5;
    
    // Animate particles in spiral motion
    particles.forEach((particle, i) => {
      particle.position.z -= 2;
      if (particle.position.z < -100) {
        particle.position.z = 100;
      }
      
      // Complex spiral motion
      const angle = time * 3 + i * 0.1;
      const radius = 3 + Math.sin(time * 2 + i) * 2;
      particle.position.x = Math.cos(angle) * radius;
      particle.position.y = Math.sin(angle) * radius;
      
      // Add some randomness
      particle.position.x += Math.sin(time + i) * 0.5;
      particle.position.y += Math.cos(time + i) * 0.5;
    });

    // Animate tunnel rings
    tunnelRings.forEach((ring, i) => {
      ring.position.z -= 1;
      if (ring.position.z < -100) {
        ring.position.z = 100;
      }
      ring.radius += 0.1;
      if (ring.radius > 15) ring.radius = 5;
    });
  });

  if (!isActive) return null;

  return (
    <group ref={meshRef}>
      {/* Swirling Particles */}
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial 
            color={particle.color}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      
      {/* Energy Rings */}
      {tunnelRings.map((ring, i) => (
        <mesh key={`ring-${i}`} position={ring.position}>
          <ringGeometry args={[ring.radius, ring.radius + 0.5, 64]} />
          <meshBasicMaterial 
            color="#00d4ff"
            transparent
            opacity={ring.opacity}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      
      {/* Central Energy Core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial 
          color="#00d4ff"
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Light Rays */}
      {[...Array(8)].map((_, i) => (
        <mesh key={`ray-${i}`} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 50, 8]} />
          <meshBasicMaterial 
            color="#00d4ff"
            transparent
            opacity={0.3}
          />
          <mesh rotation={[0, 0, (i * Math.PI) / 4]} />
        </mesh>
      ))}
    </group>
  );
};

// Main Vortex Transition Component
const VortexTransition = ({ isActive, onComplete }) => {
  const [stage, setStage] = useState('entering');
  const [showText, setShowText] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timer1 = setTimeout(() => {
      setStage('tunnel');
      setShowText(true);
      setTextOpacity(1);
    }, 500);

    const timer2 = setTimeout(() => {
      setStage('exiting');
      setTextOpacity(0);
    }, 3500);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black"
    >
      {/* Three.js Canvas for Vortex */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <VortexTunnel isActive={isActive} onComplete={onComplete} />
      </Canvas>

      {/* Transition Text Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: textOpacity, y: 0 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
      >
        <motion.h2
          animate={{ 
            scale: [1, 1.1, 1],
            textShadow: [
              "0 0 10px rgba(0, 212, 255, 0.5)",
              "0 0 20px rgba(0, 212, 255, 0.8)",
              "0 0 10px rgba(0, 212, 255, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl md:text-4xl font-bold text-white font-orbitron tracking-wider"
        >
          {stage === 'entering' && "Initiating Space Jump..."}
          {stage === 'tunnel' && "Entering Bhoomi's Solar System..."}
          {stage === 'exiting' && "Welcome to the Universe!"}
        </motion.h2>
      </motion.div>

      {/* Multiple Radial Energy Waves */}
      {stage === 'tunnel' && (
        <>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 3, 1],
              opacity: [0.8, 0.2, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-32 h-32 border-4 border-cyan-400 rounded-full" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 5, 1],
              opacity: [0.6, 0.1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="w-16 h-16 border-2 border-blue-400 rounded-full" />
          </motion.div>
        </>
      )}

      {/* Background Distortion Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: stage === 'tunnel' 
            ? "conic-gradient(from 0deg, #00d4ff, #7c3aed, #ff6b6b, #00d4ff)"
            : "radial-gradient(circle, #000 0%, #000 100%)"
        }}
        transition={{
          duration: stage === 'tunnel' ? 2 : 0.5,
          ease: "easeInOut"
        }}
        style={{
          mixBlendMode: 'multiply',
          opacity: 0.4,
        }}
      />
      
      {/* Particle Overlay */}
      {stage === 'tunnel' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`overlay-particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default VortexTransition; 