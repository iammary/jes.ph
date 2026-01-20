'use client';

import { Mesh, PlaneGeometry, Group, MeshBasicMaterial, ShapeGeometry } from 'three';
import { useRef, useState, useLayoutEffect, FC, PropsWithChildren } from 'react';
import { createRoot, events, extend, ReconcilerRoot, useFrame } from '@react-three/fiber';
import { Plane, useAspect, useTexture } from '@react-three/drei';
import { LayerMaterialType } from '@/lib/layer-material';
import Image from 'next/image';
import '@/lib/layer-material';
import { FallingLeaves } from '@/layouts/FallingLeaves';

const bgUrl = '/bg.webp';
const leaves1Url = '/autumn.png';
const leaves2Url = '/autumn-1.png';

const Experience = () => {
  const aspect = useAspect(1600, 1000, 1);
  const textures = useTexture([bgUrl, leaves1Url, leaves2Url]);
  const group = useRef<Group>(null);
  const layersRef = useRef<LayerMaterialType[]>([]);
  const layers = [
    { texture: textures[0], x: 0, y: 0, z: 0, factor: 0.005, scale: aspect },
    {
      texture: textures[1],
      x: 0,
      y: 0,
      z: 40,
      factor: 0.03,
      scaleFactor: 1,
      wiggle: 0.5,
      scale: aspect,
    },
    {
      texture: textures[2],
      x: -20,
      y: -20,
      z: 49,
      factor: 0.04,
      scaleFactor: 1,
      wiggle: 0.8,
      scale: aspect,
    },
  ];

  useFrame((_state, delta) => {
    if (layersRef.current[1] && layersRef.current[2]) {
      layersRef.current[1].uniforms.time.value = layersRef.current[2].uniforms.time.value += delta;
    }
  });

  return (
    <group ref={group}>
      <FallingLeaves />
      {layers.map(({ scale, texture, factor = 0, scaleFactor = 1, wiggle = 0, x, y, z }, i) => (
        <Plane scale={scale} args={[1, 1, wiggle ? 10 : 1, wiggle ? 10 : 1]} position={[x, y, z]} key={i}>
          <layerMaterial textr={texture} factor={factor} ref={(el: LayerMaterialType) => (layersRef.current[i] = el)} wiggle={wiggle} scale={scaleFactor} />
        </Plane>
      ))}
    </group>
  );
};

const FallbackScene = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[--background]">
    <Image fill src="/fallback.jpg" alt="Jes" className="w-full h-full object-cover" />
  </div>
);

type CanvasProps = PropsWithChildren<{
  onError: (error: Error) => void;
}>;

export const Canvas: FC<CanvasProps> = ({ children, onError }) => {
  extend({ Mesh, PlaneGeometry, Group, MeshBasicMaterial, ShapeGeometry });
  const canvas = useRef<HTMLCanvasElement>(null);
  const root = useRef<ReconcilerRoot<HTMLCanvasElement> | null>(null);
  useLayoutEffect(() => {
    try {
      if (!root.current) {
        root.current = createRoot(canvas.current!);
        root.current.configure({
          events,
          orthographic: true,
          camera: { zoom: 5, position: [0, 0, 200], far: 300, near: 50 },
          onCreated: state => {
            state.events.connect?.(document.querySelector('#root'));
          },
        });
      }
      const resize = () =>
        root.current?.configure({
          size: {
            width: window.innerWidth,
            height: window.innerHeight,
            top: 0,
            left: 0,
          },
        });
      window.addEventListener('resize', resize);

      root.current?.render(children);
      return () => window.removeEventListener('resize', resize);
    } catch (error) {
      onError?.(error as Error);
    }
  }, [children, onError]);

  return <canvas ref={canvas} className="relative w-full h-full overflow-hidden block" />;
};

export const Scene = () => {
  const [error, setError] = useState<Error | null>();

  if (error) {
    return <FallbackScene />;
  }

  return (
    <Canvas onError={setError}>
      <Experience />
    </Canvas>
  );
};
