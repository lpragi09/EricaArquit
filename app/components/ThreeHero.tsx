"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const MODEL_URL = "/kitchen-transformed.glb";

function Scene() {
  const { scene } = useGLTF(MODEL_URL);
  
  return (
    <primitive 
      object={scene} 
      scale={1.65} 
      position={[0.2, -1.0, 0]} 
      rotation={[0, 1.57, 0]} 
    />
  );
}

function CameraRig() {
  useFrame((state, delta) => {
    // AUMENTANDO A LIBERDADE DE EXPLORAÇÃO:
    
    // xRange: Aumentei de 0.2 para 0.6
    // Agora você consegue girar bem mais para a esquerda e direita.
    const xRange = 0.6; 
    
    // yRange: Aumentei de 0.1 para 0.35
    // Agora você consegue olhar bem pro teto (lustres) e bem pro chão (tapete).
    const yRange = 0.35; 

    const targetAzimuth = state.pointer.x * xRange; 
    const targetPolar = (Math.PI / 2) + (state.pointer.y * yRange); 

    const distance = 6.5; 

    const x = Math.sin(targetAzimuth) * distance;
    const z = Math.cos(targetAzimuth) * distance;
    const y = Math.cos(targetPolar) * distance * 0.3 + 0.4;

    // Aumentei levemente o lerp para 0.04 para a câmera acompanhar 
    // a distância maior sem ficar "atrasada" demais.
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x, 0.04);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, z, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y, 0.04);

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function CanvasLoader() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-800 backdrop-blur-sm">
        Carregando...
      </div>
    </div>
  );
}

export function ThreeHero() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-[40px] bg-[#e8e6e1]">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, toneMappingExposure: 1.1 }}
          camera={{ position: [0, 0.5, 6.5], fov: 40, near: 0.1, far: 50 }}
        >
          <Stage
            intensity={0.6}
            environment="city"
            adjustCamera={false}
            shadows={{ type: "contact", opacity: 0.4, blur: 2, color: "#2a2a2a" }}
          >
            <Scene />
          </Stage>

          <CameraRig />
        </Canvas>
      </Suspense>
    </div>
  );
}

useGLTF.preload(MODEL_URL);