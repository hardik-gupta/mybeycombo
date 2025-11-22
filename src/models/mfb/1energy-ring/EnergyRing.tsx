import { folder, useControls } from "leva";
import { ENERGY_RING } from "../metadata";
import { useRef } from "react";
import { MeshTransmissionMaterial, useTexture } from "@react-three/drei";

const EnergyRing = ({posY}:{posY: number}) => {
    const ringRef = useRef(null);
    const [normalMap, colorMap] = useTexture([
        "models/mfb/textures/CW_Striker_N.png", 
        "models/mfb/textures/CW_Striker_S.png"
    ])
    const { colorEr, clearEr, energyRing, transparency, clearCoat, resolution } = useControls({
        "Energy Ring": folder({
            colorEr: {
                value: "#41cf41",
                label: "Color"
            },
            clearEr: {
                value: true,
                label: "Clear?"
            },
            energyRing: {
                value: 'Libra',
                options: Object.keys(ENERGY_RING),
                label: 'Ring'
            },
            transparency: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Transparency",
                render: (get) => {
                    return get('Energy Ring.clearEr');
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
                    return get('Energy Ring.clearEr');
                }
            },
        }),
    });
    const EnergyRing = ENERGY_RING[energyRing as keyof typeof ENERGY_RING]
    return (
        <EnergyRing ref={ringRef} position={[0,posY, 0]}>
            {
                clearEr ?
                    <MeshTransmissionMaterial
                        samples={1} 
                        resolution={resolution} 
                        transmission={transparency} 
                        roughness={clearCoat} 
                        color={colorEr} 
                        normalMap={normalMap} 
                    /> :
                    <meshStandardMaterial roughness={clearCoat} color={colorEr} normalMap={normalMap} />
            }
        </EnergyRing>
    )
};

export {EnergyRing};