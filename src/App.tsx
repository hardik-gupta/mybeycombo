import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Stats } from "@react-three/drei";
import Experience from "./Experience";
import { useState } from "react";
import * as THREE from "three";
import { FabricPanel } from "./models/death_gargoyl";

export default function App() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null)
  return (
            <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
    <FabricPanel onTexture={setTexture} />
    <Canvas
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
      <Stage
        preset="rembrandt"
        // shadows={false}
        // shadows={{ type: "contact", color: "white", colorBlend: 2, opacity: 1.0 }}
        adjustCamera={false}
        environment={"city"}
        intensity={1.0}
      >
        {/* <BeybladeProvider> */}
        <Experience texture={texture}/>
        {/* </BeybladeProvider> */}
      </Stage>
      {/* <ambientLight intensity={Math.PI/2} /> */}
      {/* <directionalLight position={[10, 10, 10]} color="white" /> */}
      {/* <directionalLight position={[10, 10, -10]} color="white" /> */}
      {/* <directionalLight position={[-10, 10, 10]} color="white" /> */}
      {/* <directionalLight position={[-10, 10, -10]} color="white" /> */}
      {/* <directionalLight position={[0, -10, 0]} color="white" /> */}
      {/* <Stats /> */}
    </Canvas>
    </div>
  );
}