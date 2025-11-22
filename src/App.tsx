import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor, Stage, Stats } from "@react-three/drei";
import * as THREE from "three/webgpu";
import Experience from "./Experience";

export default function App() {
  const [frameloop, setFrameloop] = useState<"never" | "demand" | "always">("never");
  
  return (
    <Canvas
      frameloop={frameloop}
      gl={(canvas) => {
        const renderer = new THREE.WebGPURenderer({
          canvas,
          powerPreference: "high-performance",
          antialias: true,
          alpha: false,
          stencil: false,
          shadowMap: true,
        });
        renderer.init().then(() => {
          setFrameloop("always");
        });
        return renderer;
      }}
      camera={{ position: [0, 10, 40], fov: 75 }}
      dpr={1}
    >
      {/* <PerformanceMonitor
        onChange={(api) => {
          console.log("Performance Monitor (FPS)", api.fps);
          console.log("Performance Monitor (Factor)", api.factor);
        }}
        onIncline={() => {
          console.log("Performance Monitor (Inclined)");
        }}
        onDecline={() => {
          console.log("Performance Monitor (Declined)");
        }}
      /> */}
      <OrbitControls />
      <Stage shadows={true} adjustCamera={false} environment={"city"} intensity={1.0}>
        {/* <BeybladeProvider> */}
        <Experience />
        {/* </BeybladeProvider> */}
      </Stage>
      {/* <ambientLight intensity={Math.PI/2} /> */}
      {/* <directionalLight position={[10, 10, 10]} color="white" /> */}
      {/* <directionalLight position={[10, 10, -10]} color="white" /> */}
      {/* <directionalLight position={[-10, 10, 10]} color="white" /> */}
      {/* <directionalLight position={[-10, 10, -10]} color="white" /> */}
      {/* <directionalLight position={[0, -10, 0]} color="white" /> */}
      <Stats />
    </Canvas>
  );
}