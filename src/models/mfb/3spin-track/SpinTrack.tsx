import { useEffect, useRef, type SetStateAction, type Dispatch, useState } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { SPIN_TRACKS } from "./_metadata";

export const SpinTrack = ({ setPosWheel, setPosTip }: { setPosWheel: Dispatch<SetStateAction<number>>, setPosTip: Dispatch<SetStateAction<number>> }) => {
    const trackRef = useRef(null);
    const [trackModes, setTrackMode] = useState({});

    const [{ spinTrack, clearSt, colorSt1, colorSt2, transparency, clearCoat, resolution, mode }, set] = useControls('Spin Track', () => ({
        spinTrack: {
            value: "T125",
            options: Object.keys(SPIN_TRACKS),
            label: 'Track',
            onChange: ( track ) => {
                const trackMeta = SPIN_TRACKS[track as keyof typeof SPIN_TRACKS];
                const modes = trackMeta.modes ?? {};
                setTrackMode(modes);
            },
            transient: false
        },
        mode: {
            value: Object.keys(trackModes)[0],
            options: Object.keys(trackModes),
            label: "Mode",
            render: (get) => {
                const track = get('Spin Track.spinTrack');
                const trackMeta = SPIN_TRACKS[track as keyof typeof SPIN_TRACKS];
                if(trackMeta.modes && Object.keys(trackMeta.modes).length > 0){
                    return true;
                }
                return false;
            },
        },
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
            label: "Secondary",
            render: (get) => {
                const track = get('Spin Track.spinTrack');
                return track === 'SW145' || track === "BD145";
            }
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
    }), [trackModes]);
    const SpinTrackComponent = SPIN_TRACKS[spinTrack as keyof typeof SPIN_TRACKS].component;

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
        set({
            mode: Object.keys(trackModes)[0]
        })
    }, [spinTrack, setPosWheel, setPosTip]);  // Added dependencies

    return (
        <SpinTrackComponent
            ref={trackRef}
            mode={mode}
            secondary={
                clearSt ?
                    <MeshTransmissionMaterial
                        samples={1}
                        resolution={resolution}
                        transmission={transparency}
                        clearcoat={clearCoat}
                        color={colorSt2}
                        thickness={0.5}
                    /> :
                    <meshStandardMaterial
                        roughness={clearCoat}
                        color={colorSt2}
                    />
            }
        >
            {
                clearSt ?
                    <MeshTransmissionMaterial
                        samples={1}
                        resolution={resolution}
                        transmission={transparency}
                        clearcoat={clearCoat}
                        color={colorSt1}
                    /> :
                    <meshStandardMaterial
                        color={colorSt1}
                        roughness={ 1 - clearCoat }
                    />
            }
        </SpinTrackComponent>
    )
};