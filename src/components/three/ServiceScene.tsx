import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import type { Mesh } from 'three';
import { useReducedMotion } from '@/components/motion/MotionPreference';

function ServiceObject({ color }: { color: string }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          distort={0.25}
          speed={1.2}
          roughness={0.15}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function ServiceOrbs({ color }: { color: string }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} color={color} />
      <pointLight position={[-5, -3, -5]} intensity={0.4} color="#60a5fa" />
      <ServiceObject color={color} />
      <Environment preset="city" />
    </>
  );
}

export function ServiceScene({ color = '#2563eb' }: { color?: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-40 h-40 rounded-full blur-3xl animate-pulse-slow" style={{ backgroundColor: `${color}30` }} />
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <ServiceOrbs color={color} />
      </Suspense>
    </Canvas>
  );
}
