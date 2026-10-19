import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// 3D Procedural Enterprise Laptop Model
function EnterpriseLaptop({ mousePos }: { mousePos: { x: number; y: number } }) {
  const laptopGroup = useRef<THREE.Group>(null);
  const screenMesh = useRef<THREE.Mesh>(null);
  const lidGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!laptopGroup.current) return;
    const t = state.clock.getElapsedTime();
    // Smooth idle float + responsive mouse parallax tilt
    const targetRotX = 0.18 + mousePos.y * 0.2 + Math.sin(t * 0.6) * 0.03;
    const targetRotY = -0.45 + mousePos.x * 0.35 + Math.cos(t * 0.5) * 0.04;
    
    laptopGroup.current.rotation.x = THREE.MathUtils.lerp(laptopGroup.current.rotation.x, targetRotX, 0.05);
    laptopGroup.current.rotation.y = THREE.MathUtils.lerp(laptopGroup.current.rotation.y, targetRotY, 0.05);

    // Pulse screen glow
    if (screenMesh.current) {
      const mat = screenMesh.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = 0.8 + Math.sin(t * 2) * 0.2;
      }
    }
  });

  return (
    <group ref={laptopGroup} position={[0, -0.4, 0]} scale={1.15}>
      {/* Laptop Base */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.12, 2.2]} />
        <meshStandardMaterial
          color="#1e2c38"
          metalness={0.88}
          roughness={0.25}
        />
      </mesh>

      {/* Keyboard Bed */}
      <mesh position={[0, 0.065, -0.15]}>
        <boxGeometry args={[2.8, 0.01, 1.4]} />
        <meshStandardMaterial color="#0c1822" roughness={0.6} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.065, 0.75]}>
        <boxGeometry args={[1.1, 0.01, 0.7]} />
        <meshStandardMaterial color="#172635" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Ports / Status LEDs */}
      <mesh position={[1.61, 0, 0.3]}>
        <boxGeometry args={[0.02, 0.04, 0.18]} />
        <meshStandardMaterial color="#368C91" emissive="#368C91" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[-1.61, 0, 0.3]}>
        <boxGeometry args={[0.02, 0.04, 0.18]} />
        <meshStandardMaterial color="#009BB0" emissive="#009BB0" emissiveIntensity={1.5} />
      </mesh>

      {/* Laptop Screen Lid (Angled back at 108 degrees) */}
      <group ref={lidGroup} position={[0, 0.06, -1.08]} rotation={[-0.32, 0, 0]}>
        {/* Outer Lid Frame */}
        <mesh position={[0, 1.05, 0]} castShadow>
          <boxGeometry args={[3.2, 2.1, 0.08]} />
          <meshStandardMaterial
            color="#192836"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>

        {/* Display Bezel */}
        <mesh position={[0, 1.05, 0.042]}>
          <planeGeometry args={[3.08, 1.98]} />
          <meshStandardMaterial color="#080e14" roughness={0.9} />
        </mesh>

        {/* Glowing Screen Dashboard */}
        <mesh ref={screenMesh} position={[0, 1.05, 0.046]}>
          <planeGeometry args={[2.95, 1.85]} />
          <meshStandardMaterial
            color="#0c2033"
            emissive="#1e4d6a"
            emissiveIntensity={0.85}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>

        {/* Dynamic Topology Nodes on Screen */}
        <mesh position={[-0.6, 1.15, 0.048]}>
          <circleGeometry args={[0.08, 24]} />
          <meshStandardMaterial color="#368C91" emissive="#368C91" emissiveIntensity={2.5} />
        </mesh>
        <mesh position={[0, 1.0, 0.048]}>
          <circleGeometry args={[0.12, 24]} />
          <meshStandardMaterial color="#00A3C4" emissive="#00A3C4" emissiveIntensity={3} />
        </mesh>
        <mesh position={[0.7, 1.25, 0.048]}>
          <circleGeometry args={[0.08, 24]} />
          <meshStandardMaterial color="#368C91" emissive="#368C91" emissiveIntensity={2.5} />
        </mesh>
        <mesh position={[0.5, 0.65, 0.048]}>
          <circleGeometry args={[0.07, 24]} />
          <meshStandardMaterial color="#E9EAFE" emissive="#E9EAFE" emissiveIntensity={2} />
        </mesh>
      </group>

      {/* Fiber Optic Data Streams extending from laptop */}
      <DataStreamPoints />
    </group>
  );
}

// Optical Network Fiber Streams
function DataStreamPoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 60;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 1.6 + (i % 5) * 0.35;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle * 2) * 0.4 + (i % 3) * 0.1;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#00A3C4"
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Background Architecture Rack Unit Pillars
function DatacenterNodes() {
  return (
    <group position={[2.8, -0.2, -2.5]}>
      {/* Server Tower node */}
      <mesh castShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[0.9, 2.2, 0.9]} />
        <meshStandardMaterial color="#162534" roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Status LEDs */}
      {[0.2, 0.5, 0.8, 1.1, 1.4].map((y, idx) => (
        <mesh key={idx} position={[0, y - 0.4, 0.46]}>
          <boxGeometry args={[0.6, 0.03, 0.01]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? "#368C91" : "#00A3C4"}
            emissive={idx % 2 === 0 ? "#368C91" : "#00A3C4"}
            emissiveIntensity={1.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HardwareCanvas() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability safely
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  if (!hasWebGL) {
    return (
      <div className="relative w-full h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-[#D6E4EE] shadow-enterprise-lg bg-[#EAF4FB]">
        <img
          src="/assets/enterprise_laptop_hero.jpg"
          alt="Enterprise IT Infrastructure Workstation"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-[#D6E4EE] shadow-enterprise-lg bg-gradient-to-b from-[#EAF4FB] via-[#F2F6F8] to-[#FFFFFF]"
    >
      {/* Enterprise Status HUD Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D6E4EE] shadow-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-[#368C91] animate-pulse" />
        <span className="text-xs font-semibold text-[#17324D] tracking-wide">3D Interactive Hardware Rig</span>
        <span className="text-[10px] text-[#526477] bg-[#EAF4FB] px-2 py-0.5 rounded-full font-mono">Move Cursor to Inspect</span>
      </div>

      <Canvas
        camera={{ position: [0, 0.8, 4.6], fov: 42 }}
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[4, 7, 5]}
            intensity={1.8}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-4, 2, -2]} intensity={0.9} color="#368C91" />
          <pointLight position={[3, 3, 2]} intensity={1.2} color="#00A3C4" />

          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <EnterpriseLaptop mousePos={mousePos} />
            <DatacenterNodes />
          </Float>

          <ContactShadows
            position={[0, -1.25, 0]}
            opacity={0.35}
            scale={7}
            blur={1.8}
            far={3.5}
            color="#17324D"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
