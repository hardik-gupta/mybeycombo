import { folder, useControls } from "leva";
import { FUSION_WHEEL } from "./_metadata";
import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import * as THREE from "three";

export const FusionWheel = (
    {setPosBolt, setPosRing, posY}: 
    {
        setPosBolt: Dispatch<SetStateAction<number>>, 
        setPosRing: Dispatch<SetStateAction<number>>,
        posY: number
    }
    ) => {
    const fusionRef = useRef(null);
    const { colorFw, fusionWheel, clearCoat, shiny } = useControls({
        "Fusion Wheel": folder({
            colorFw: {
                value: "#9a9a9a",
                label: "Color"
            },
            fusionWheel: {
                value: 'Flame',
                options: Object.keys(FUSION_WHEEL),
                label: 'Wheel'
            },
            clearCoat: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Clear Coat",
            },
            shiny: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Shiny",
            },
        }),
    })
    const FusionWheel = FUSION_WHEEL[fusionWheel as keyof typeof FUSION_WHEEL]

    useEffect(() => {
        if (fusionRef.current) {
            const refGroup: THREE.Group = fusionRef.current;
            const attachBolt = refGroup.getObjectByName("attach_bolt");
            const attachRing = refGroup.getObjectByName("attach_ring");

            if (attachBolt) {
                setPosBolt(attachBolt.position.y);
            }
            if (attachRing) {
                setPosRing(attachRing.position.y)
            }

        }
    }, [fusionWheel]);

    return (
        <FusionWheel ref={fusionRef} position={[0,posY,0]}>
            <meshStandardMaterial color={colorFw} metalness={shiny} roughness={clearCoat}/>
        </FusionWheel>
    )
};