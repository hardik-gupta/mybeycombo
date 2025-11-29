import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Stats } from "@react-three/drei";
import Experience from "./Experience";

export default function App() {
  return (
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