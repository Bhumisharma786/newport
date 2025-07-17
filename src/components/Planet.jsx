import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

const Planet = ({ 
  position, 
  size, 
  color, 
  orbitRadius, 
  orbitSpeed, 
  initialAngle = 0,
  yOffset = 0,
  name, 
  onClick,
  isSelected 
}) => {
  const planetRef = useRef();
  const orbitRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [currentAngle, setCurrentAngle] = useState(initialAngle);

  useFrame((state) => {
    if (!isSelected) {
      setCurrentAngle(prev => prev + orbitSpeed);
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
  });

  // Calculate planet position based on current angle
  const planetX = Math.cos(currentAngle) * orbitRadius;
  const planetZ = Math.sin(currentAngle) * orbitRadius;
  const planetY = yOffset;

  const planetColors = {
    'About Me': '#8b5cf6',
    'Skills': '#06b6d4',
    'Projects': '#10b981',
    'Internship': '#f59e0b',
    'Contact': '#ef4444'
  };

  return (
    <group>
      {/* Orbit trail */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, yOffset, 0]}>
        <ringGeometry args={[orbitRadius - 0.1, orbitRadius + 0.1, 128]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      <group position={[planetX, planetY, planetZ]}>
        <Sphere
          ref={planetRef}
          args={[size, 16, 16]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={onClick}
          scale={hovered ? 1.2 : 1}
        >
          <meshStandardMaterial
            color={planetColors[name] || color}
            emissive={planetColors[name] || color}
            emissiveIntensity={hovered ? 0.3 : 0.1}
            roughness={0.3}
            metalness={0.1}
          />
        </Sphere>

        {/* Planet label */}
        <Text
          position={[0, size + 1, 0]}
          fontSize={0.6}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </group>
  );
};

export default Planet;