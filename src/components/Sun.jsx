import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Sun = () => {
  const sunRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= 0.003;
    }
  });

  return (
    <group>
      {/* Main Sun */}
      <Sphere ref={sunRef} args={[5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ff6600"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.1}
        />
      </Sphere>

      {/* Sun Glow Effect */}
      <Sphere ref={glowRef} args={[7, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#ffaa00"
          transparent={true}
          opacity={0.2}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Point light from sun */}
      <pointLight
        position={[0, 0, 0]}
        intensity={3}
        color="#ffaa00"
        distance={150}
        decay={2}
      />
    </group>
  );
};

export default Sun;