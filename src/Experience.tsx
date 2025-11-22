import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { folder, useControls } from "leva";
import { FaceBolt } from "./models/mfb/Facebolt";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { PerfTip } from "./models/mfb/4performance-tip/PerfTip";
import { SpinTrack } from "./models/mfb/3spin-track/SpinTrack";
import { FusionWheel } from "./models/mfb/2fusion-wheel/FusionWheel";
import { EnergyRing } from "./models/mfb/1energy-ring/EnergyRing";

// import { DG } from "./models/Dg";

const Experience = () => {
    const boltRef = useRef(null);
    const tipRef = useRef(null);

    const [posBolt, setPosBolt] = useState<number>(0);
    const [posRing, setPosRing] = useState<number>(0);
    const [posWheel, setPosWheel] = useState<number>(0);
    const [posTip, setPosTip] = useState<number>(0);

    const { colorFb, clearFb, transparency, clearCoat, resolution } = useControls({
        "Face Bolt": folder({
            colorFb: {
                value: "orange",
                label: "Color"
            },
            clearFb: {
                value: false,
                label: "Clear?",
            },
            transparency: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Transparency",
                render: (get) => {
                    return get('Face Bolt.clearFb');
                }
            },
            clearCoat: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Clear Coat",
                render: (get) => {
                    return get('Face Bolt.clearFb');
                }
            },
            resolution: {
                value: 256,
                min: 32,
                max: 2048,
                step: 1,
                label: "Resolution",
                render: (get) => {
                    return get('Face Bolt.clearFb');
                }
            },
        })
    })

    // const {position, rotation} = useControls("Transform",{
    //     position: {
    //         x: 0,
    //         y: 0,
    //         z: 0
    //     },
    //     rotation: {
    //         x: 0,
    //         y: 0,
    //         z: 0,
    //     }
    // })

    useEffect(() => {
        if (boltRef.current) {
            const refGroup: THREE.Group = boltRef.current;
            if (refGroup.children[0] && refGroup.children[0] instanceof THREE.Mesh) {
                if (refGroup.children[0].material instanceof THREE.MeshStandardMaterial) {
                    const color = new THREE.Color(colorFb);
                    refGroup.children[0].material.color = color;
                }
            }
        }
    }, [colorFb]);

    return (
        <group scale={0.5} position={[0, 0, 0]}>
            <FaceBolt ref={boltRef} position={[0, posBolt, 0]}>
                {
                    clearFb ?
                        <MeshTransmissionMaterial samples={1} resolution={resolution} transmission={transparency} roughness={clearCoat} color={colorFb} /> :
                        <meshStandardMaterial color={colorFb} roughness={resolution} />
                }
            </FaceBolt>
            <EnergyRing posY={posRing} />
            <FusionWheel posY={posWheel} setPosBolt={setPosBolt} setPosRing={setPosRing} />
            <SpinTrack setPosWheel={setPosWheel} setPosTip={setPosTip} />
            <PerfTip ref={tipRef} position={[0, posTip, 0]} />
        </group>
    )
};

export default Experience;
