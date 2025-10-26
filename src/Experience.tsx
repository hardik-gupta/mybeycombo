import * as THREE from "three";
import { forwardRef, useEffect, useRef, useState } from "react";
import { folder, useControls } from "leva";
import { FaceBolt } from "./models/mfb/Facebolt";
import { ENERGY_RING, FUSION_WHEEL, SPIN_TRACKS, PERFORMANCE_TIPS } from "./models/mfb/metadata";
import { MeshTransmissionMaterial } from "@react-three/drei";
// import { DG } from "./models/Dg";

const Experience = () => {
    const boltRef = useRef(null!);
    const ringRef = useRef(null!);
    const wheelRef = useRef(null!);
    const trackRef = useRef(null!);
    const tipRef = useRef(null!);

    const [posBolt, setPosBolt] = useState<number>(0);
    const [posRing, setPosRing] = useState<number>(0);
    const [posWheel, setPosWheel] = useState<number>(0);
    const [posTip, setPosTip] = useState<number>(0);

    const { colorFb, clearFb, transparency, blur } = useControls({
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
            blur: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Blur",
                render: (get) => {
                    return get('Face Bolt.clearFb');
                }
            },
        })
    })
    const { colorEr, energyRing } = useControls({
        "Energy Ring": folder({
            colorEr: {
                value: "#41cf41",
                label: "Color"
            },
            energyRing: {
                value: 'Libra',
                options: Object.keys(ENERGY_RING),
                label: 'Ring'
            },
        }),
    });
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
    const { colorSt, spinTrack } = useControls({
        "Spin Track": folder({
            colorSt: {
                value: "orange",
                label: "Color"
            },
            spinTrack: {
                value: 'T125',
                options: Object.keys(SPIN_TRACKS),
                label: 'Track'
            },
        }),
    })
    const { colorPt1, colorPt2, clearPt, performanceTip } = useControls({
        "Performance Tip": folder({
            clearPt: {
                value: false,
                label: "Clear?",
            },
            colorPt1: {
                value: "orange",
                label: "Color"
            },
            colorPt2: {
                value: "orange",
                label: "Secondary",
                render: (get) => {
                    const tip = get('Performance Tip.performanceTip');
                    return tip === 'ES';
                }
            },
            performanceTip: {
                value: 'ES',
                options: Object.keys(PERFORMANCE_TIPS),
                label: 'Tip'
            },
        })
    })


    useEffect(() => {
        if (wheelRef.current) {
            const refGroup: THREE.Group = wheelRef.current;
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

    useEffect(() => {
        if (ringRef.current) {
            const refGroup: THREE.Group = ringRef.current;
            if (refGroup.children[0] && refGroup.children[0] instanceof THREE.Mesh) {
                if (refGroup.children[0].material instanceof THREE.MeshStandardMaterial) {
                    const color = new THREE.Color(colorEr);
                    refGroup.children[0].material.color = color;
                }
            }
        }
    }, [colorEr]);

    useEffect(() => {
        if (wheelRef.current) {
            const refGroup: THREE.Group = wheelRef.current;
            if (refGroup.children[0] && refGroup.children[0] instanceof THREE.Mesh) {
                if (refGroup.children[0].material instanceof THREE.MeshStandardMaterial) {
                    const color = new THREE.Color(colorFw);
                    refGroup.children[0].material.color = color;
                }
            }
        }
    }, [colorFw]);

    useEffect(() => {
        if (trackRef.current) {
            const refGroup: THREE.Group = trackRef.current;
            if (refGroup.children[0] && refGroup.children[0] instanceof THREE.Mesh) {
                if (refGroup.children[0].material instanceof THREE.MeshStandardMaterial) {
                    const color = new THREE.Color(colorSt);
                    refGroup.children[0].material.color = color;
                }
            }
        }
    }, [colorSt]);

    useEffect(() => {
        if (tipRef.current) {
            const refGroup: THREE.Group = tipRef.current;
            if (refGroup.children[0] && refGroup.children[0] instanceof THREE.Mesh) {
                if (refGroup.children[0].material instanceof THREE.MeshStandardMaterial) {
                    refGroup.children[0].material.color = new THREE.Color(colorPt1);

                }
            }
            if (refGroup.children[0].children[0] && refGroup.children[0].children[0] instanceof THREE.Mesh) {
                if (refGroup.children[0].children[0].material instanceof THREE.MeshStandardMaterial) {
                    refGroup.children[0].children[0].material.color = new THREE.Color(colorPt2);
                }
            }
        }
    }, [colorPt1, colorPt2]);

    const EnergyRing = ENERGY_RING[energyRing as keyof typeof ENERGY_RING]
    const FusionWheel = FUSION_WHEEL[fusionWheel as keyof typeof FUSION_WHEEL]
    const SpinTrack = SPIN_TRACKS[spinTrack as keyof typeof SPIN_TRACKS]
    // const PerformaneTip = PERFORMANCE_TIPS[performanceTip as keyof typeof PERFORMANCE_TIPS]

    return (
        <>
            <group scale={0.5}>
                <FaceBolt ref={boltRef} position={[0, posBolt, 0]}>
                    {clearFb ? <MeshTransmissionMaterial samples={1} resolution={128} transmission={transparency} roughness={blur} color={colorFb} /> : <meshStandardMaterial color={colorFb} roughness={0.1}/>}
                </FaceBolt>
                <EnergyRing ref={ringRef} position={[0, posRing, 0]} />
                <FusionWheel ref={wheelRef} position={[0, posWheel, 0]} />
                <SpinTrack ref={trackRef} />
                {/* <PerformaneTip ref={tipRef} position={[0, posTip, 0]} /> */}
                <DynamicPerfTip ref={tipRef} position={[0, posTip, 0]} clear={clearPt} performanceTip={performanceTip} />
            </group>
        </>
    )
};

export default Experience;

const DynamicPerfTip = forwardRef(function DynamicPerfTip(props: { performanceTip?: string, clear: boolean, position?: [number, number, number] }, ref){
    const PerformanceTip = PERFORMANCE_TIPS[props.performanceTip as keyof typeof PERFORMANCE_TIPS]
    return (
        <PerformanceTip {...props} ref={ref} position={props.position} >
            {props.clear ? <MeshTransmissionMaterial samples={1} resolution={128} transmission={0.3} roughness={0.3} /> : <meshStandardMaterial roughness={0.1}/>}
        </PerformanceTip>
    )
});