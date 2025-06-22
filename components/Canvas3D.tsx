"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Effects } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function RotatingTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.0035;
      torusRef.current.rotation.y += 0.0045;
    }
  });

  return (
    <mesh ref={torusRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.0, 0.25, 32, 120]} />
      <meshStandardMaterial
        color="#00BFFF"
        metalness={1}
        roughness={0.05}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

export default function Canvas3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true }}
      >
        {/* Lights */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 3D Model */}
        <RotatingTorus />

        {/* Luxury Visual FX */}
        <EffectComposer>
          <Bloom
            intensity={0.3}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>

        {/* Realistic Environment */}
        <Environment preset="sunset" />

        {/* Interactions */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />

        {/* Optional: fog for soft background fade */}
        <fog attach="fog" args={["#000000", 5, 12]} />
      </Canvas>
    </div>
  );
}
