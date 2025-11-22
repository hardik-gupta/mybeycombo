import { folder, useControls } from "leva";
import { FUSION_WHEEL } from "../metadata";
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
    const { colorFw, fusionWheel } = useControls({
        "Fusion Wheel": folder({
            colorFw: {
                value: "grey",
                label: "Color"
            },
            fusionWheel: {
                value: 'Flame',
                options: Object.keys(FUSION_WHEEL),
                label: 'Wheel'
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
            <meshStandardMaterial color={colorFw}/>
        </FusionWheel>
    )
};