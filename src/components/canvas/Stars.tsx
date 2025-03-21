'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import * as THREE from 'three';

export function Stars() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = 1.2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <pointsMaterial
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          transparent
          opacity={0.8}
          color="#ffffff"
        />
      </Points>
    </group>
  );
}

export default Stars;