import { MeshTransmissionMaterial } from "@react-three/drei";
import { SPIN_TRACKS } from "../metadata";
import { useEffect, useRef, type SetStateAction, type Dispatch } from "react";
import { folder, useControls } from "leva";
import * as THREE from "three";

export const SpinTrack = ({setPosWheel, setPosTip}: {setPosWheel:  Dispatch<SetStateAction<number>>, setPosTip:  Dispatch<SetStateAction<number>>}) => {
    const trackRef = useRef(null);
    const { clearSt, colorSt1, colorSt2, spinTrack, transparency, clearCoat, resolution } = useControls({
        "Spin Track": folder({
            clearSt: {
                value: false,
                label: "Clear?",
            },
            colorSt1: {
                value: "orange",
                label: "Color"
            },
            colorSt2: {
                value: "orange",
                label: "Color",
                render: (get) => {
                    const track = get('Spin Track.spinTrack');
                    return track === 'SW145';
                }
            },
            spinTrack: {
                value: "TRT125",
                options: Object.keys(SPIN_TRACKS),
                label: 'Track'
            },
            transparency: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Transparency",
                render: (get) => {
                    return get('Spin Track.clearSt');
                }
            },
            clearCoat: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Clear Coat",
            },
            resolution: {
                value: 256,
                min: 32,
                max: 2048,
                step: 1,
                label: "Resolution",
                render: (get) => {
                    return get('Spin Track.clearSt');
                }
            },
        }),
    })
    const SpinTrack = SPIN_TRACKS[spinTrack as keyof typeof SPIN_TRACKS];
    
    useEffect(() => {
        if (trackRef.current) {
            const refGroup: THREE.Group = trackRef.current;
            const attachWheel = refGroup.getObjectByName("attach_wheel");
            const attachTip = refGroup.getObjectByName("attach_tip");
            if (attachWheel) {
                setPosWheel(attachWheel.position.y)
            }
            if (attachTip) {
                setPosTip(attachTip.position.y);
            }
        }
    }, [spinTrack]);

    return (
        <SpinTrack ref={trackRef}
            secondary={
                clearSt ? 
                <MeshTransmissionMaterial samples={1} resolution={resolution} transmission={transparency} roughness={clearCoat} color={colorSt2}/> : 
                <meshStandardMaterial roughness={clearCoat} color={colorSt2}/>
            }
        >
            {
                clearSt ?
                    <MeshTransmissionMaterial samples={1} resolution={resolution} transmission={transparency} roughness={clearCoat} color={colorSt1} /> :
                    <meshStandardMaterial roughness={clearCoat} color={colorSt1} />
            }
        </SpinTrack>
    )
};