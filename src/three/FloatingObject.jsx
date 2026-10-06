import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingObject({ isMobile = false }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const sphereRef1 = useRef();
  const sphereRef2 = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2 + (state.pointer.y * 0.15);
      meshRef.current.rotation.y = time * 0.25 + (state.pointer.x * 0.2);
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = time * 0.15;
      ringRef.current.rotation.z = Math.cos(time * 0.2) * 0.3;
    }

    if (sphereRef1.current) {
      sphereRef1.current.position.y = Math.sin(time * 0.8) * 0.3 + 1.2;
      sphereRef1.current.position.x = Math.cos(time * 0.5) * 0.4 - 1.2;
    }

    if (sphereRef2.current) {
      sphereRef2.current.position.y = Math.cos(time * 0.7) * 0.3 - 1.1;
      sphereRef2.current.position.x = Math.sin(time * 0.6) * 0.4 + 1.3;
    }
  });

  return (
    <group>
      {/* Central Abstract Glass Torus / Organic Sculpture */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={isMobile ? 1.05 : 1.35}>
          <torusKnotGeometry args={[1, 0.32, isMobile ? 64 : 128, isMobile ? 16 : 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#2F6B4F"
            emissive="#163928"
            emissiveIntensity={0.2}
            roughness={0.15}
            metalness={0.1}
            transmission={0.65}
            thickness={1.2}
            ior={1.45}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent={true}
            opacity={0.92}
          />
        </mesh>
      </Float>

      {/* Orbiting Fine Metallic Ribbon / Ring */}
      <mesh ref={ringRef} position={[0, 0, 0]} scale={isMobile ? 1.4 : 1.8}>
        <torusGeometry args={[1.2, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#4F8A68"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Subtle Floating Translucent Spheres */}
      <mesh ref={sphereRef1} position={[-1.2, 1.2, 0.4]} scale={0.24}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#EAF4EE"
          roughness={0.1}
          metalness={0.4}
          transparent={true}
          opacity={0.85}
        />
      </mesh>

      <mesh ref={sphereRef2} position={[1.3, -1.1, -0.3]} scale={0.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#2F6B4F"
          roughness={0.2}
          metalness={0.6}
          transparent={true}
          opacity={0.75}
        />
      </mesh>
    </group>
  );
}
