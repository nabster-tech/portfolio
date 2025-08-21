import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import './Scene3D.css';

const AnimatedSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#ff6b35"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005;
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="scene-3d">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        {/* Ambient light */}
        <ambientLight intensity={0.5} />
        
        {/* Directional light */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          color="#ffffff"
        />
        
        {/* Point light */}
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#ff6b35"
        />

        {/* 3D Objects */}
        <AnimatedSphere />
        <ParticleField />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
