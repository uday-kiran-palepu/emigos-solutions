import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Icosahedron, Torus, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import type { Mesh, Group } from 'three';
import { useReducedMotion } from '@/components/motion/MotionPreference';

function FloatingObject({
  position,
  scale = 1,
  speed = 1,
  color = '#2563eb',
  geometry = 'sphere',
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
  color?: string;
  geometry?: 'sphere' | 'ico' | 'torus';
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      {geometry === 'sphere' && (
        <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
          <MeshDistortMaterial
            color={color}
            distort={0.35}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      )}
      {geometry === 'ico' && (
        <Icosahedron ref={meshRef} args={[1, 0]} position={position} scale={scale}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} flatShading />
        </Icosahedron>
      )}
      {geometry === 'torus' && (
        <Torus ref={meshRef} args={[1, 0.3, 16, 64]} position={position} scale={scale}>
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.85} />
        </Torus>
      )}
    </Float>
  );
}

function CameraRig() {
  useFrame((state) => {
    const x = state.pointer.x * 0.5;
    const y = state.pointer.y * 0.3;
    state.camera.position.x += (x - state.camera.position.x) * 0.05;
    state.camera.position.y += (y - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#60a5fa" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#2dd4b5" />
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#fbbf24" />

      <group ref={groupRef}>
        <FloatingObject position={[0, 0, 0]} scale={1.8} speed={0.8} color="#2563eb" geometry="sphere" />
        <FloatingObject position={[3.5, 1.5, -2]} scale={0.7} speed={1.2} color="#0d9483" geometry="ico" />
        <FloatingObject position={[-3.5, -1, -1]} scale={0.6} speed={1} color="#60a5fa" geometry="torus" />
        <FloatingObject position={[2, -2, -3]} scale={0.5} speed={1.5} color="#fbbf24" geometry="ico" />
        <FloatingObject position={[-2.5, 2, -2]} scale={0.45} speed={1.3} color="#2563eb" geometry="torus" />
      </group>

      <CameraRig />
      <Environment preset="city" />
    </>
  );
}

export function HomeHeroScene() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-primary-500/20 blur-3xl animate-pulse-slow" />
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
