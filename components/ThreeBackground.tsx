// 1. Create this 3D Canvas in a new file: components/ThreeBackground.tsx

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Stars
          radius={100} // Sphere radius
          depth={50} // Star depth
          count={5000} // Number of stars
          factor={4} // Star size factor
          saturation={0}
          fade
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
