/* eslint-disable sonarjs/pseudo-random, react-hooks/purity */
'use client';

import { useRef, useMemo, FC } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Mesh = 'mesh' as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MeshBasicMaterial = 'meshBasicMaterial' as any;

interface LeafUserData {
  fallSpeed: number;
  swaySpeed: number;
  swayAmount: number;
  rotationSpeed: {
    x: number;
    y: number;
    z: number;
  };
  time: number;
  speed: number;
}

interface LeafProps {
  position: [number, number, number];
  size: number;
  color: number;
  userData: LeafUserData;
  bounds: { width: number; height: number };
  initialRotation: [number, number, number];
}

export const Leaf: FC<LeafProps> = ({ position, size, color, userData, bounds, initialRotation }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create leaf shape geometry
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();

    // Start at the stem
    shape.moveTo(0, 0);

    // Right side of leaf
    shape.bezierCurveTo(0.3, 0.3, 0.4, 0.7, 0.2, 1);

    // Tip of the leaf
    shape.bezierCurveTo(0.1, 1.1, -0.1, 1.1, -0.2, 1);

    // Left side back to stem
    shape.bezierCurveTo(-0.4, 0.7, -0.3, 0.3, 0, 0);

    return new THREE.ShapeGeometry(shape);
  }, []);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;

    const mesh = meshRef.current;
    const data = mesh.userData as LeafUserData;

    // Update time
    data.time += delta * userData.speed;

    // Fall down
    mesh.position.y -= data.fallSpeed * userData.speed * delta * 60;

    // Sway side to side
    mesh.position.x += Math.sin(data.time * data.swaySpeed) * 0.01 * data.swayAmount * userData.speed;

    // Rotate
    mesh.rotation.x += data.rotationSpeed.x * userData.speed;
    mesh.rotation.y += data.rotationSpeed.y * userData.speed;
    mesh.rotation.z += data.rotationSpeed.z * userData.speed;

    // Reset position when leaf falls below view
    if (mesh.position.y < -bounds.height / 2 - 2) {
      mesh.position.y = bounds.height / 2 + 2 + Math.random() * 10;
      mesh.position.x = (Math.random() - 0.5) * bounds.width * 1.5;
    }
  });

  return (
    <Mesh ref={meshRef} position={position} scale={[size, size, size]} rotation={initialRotation} geometry={geometry} userData={userData}>
      <MeshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.8} />
    </Mesh>
  );
};

interface FallingLeavesProps {
  numLeaves?: number;
  speed?: number;
  sizeRange?: [number, number];
}

export const FallingLeaves: FC<FallingLeavesProps> = ({ numLeaves = 150, speed = 1.5, sizeRange = [0.5, 7] }) => {
  const { viewport } = useThree();
  const [minSize, maxSize] = sizeRange;

  const bounds = useMemo(
    () => ({
      width: viewport.width,
      height: viewport.height,
    }),
    [viewport.width, viewport.height],
  );

  const leaves = useMemo(() => {
    const leafColors = [0xff_6b_35, 0xff_a5_00, 0xff_45_00, 0xd2_69_1e, 0x8b_45_13, 0xda_a5_20, 0xff_8c_00, 0xcd_85_3f];

    return Array.from({ length: numLeaves }, (_, i) => {
      const size = minSize + Math.random() * (maxSize - minSize);
      const color = leafColors[Math.floor(Math.random() * leafColors.length)];
      // Distribute leaves across the full width and height initially
      const position: [number, number, number] = [
        (Math.random() - 0.5) * bounds.width * 1.5,
        (Math.random() - 0.5) * bounds.height * 2,
        (Math.random() - 0.5) * 20,
      ];
      const initialRotation: [number, number, number] = [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI];
      const userData: LeafUserData = {
        fallSpeed: 0.01 + Math.random() * 0.02,
        swaySpeed: 0.5 + Math.random(),
        swayAmount: 0.5 + Math.random() * 1.5,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        time: Math.random() * 100,
        speed,
      };

      return { id: i, size, color, position, userData, initialRotation };
    });
  }, [numLeaves, minSize, maxSize, speed, bounds]);

  return (
    <>
      {leaves.map(leaf => (
        <Leaf
          key={leaf.id}
          position={leaf.position}
          size={leaf.size}
          color={leaf.color}
          userData={leaf.userData}
          bounds={bounds}
          initialRotation={leaf.initialRotation}
        />
      ))}
    </>
  );
};
