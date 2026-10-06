import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import FloatingObject from './FloatingObject';

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Simple WebGL availability test
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasWebGL) {
    return (
      <div className="hero-3d-fallback">
        <div className="fallback-orb" />
      </div>
    );
  }

  return (
    <div className="hero-3d-canvas-wrapper">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 6, 4]} intensity={1.4} color="#FFFFFF" />
        <pointLight position={[-4, -3, -2]} intensity={0.6} color="#4F8A68" />
        <pointLight position={[3, 4, 3]} intensity={0.5} color="#EAF4EE" />

        <Suspense fallback={null}>
          <Center>
            <FloatingObject isMobile={isMobile} />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}
