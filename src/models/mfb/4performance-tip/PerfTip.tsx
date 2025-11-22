import { forwardRef } from "react";
import { PERFORMANCE_TIPS } from "../metadata";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { folder, useControls } from "leva";

export const PerfTip = forwardRef(function DynamicPerfTip(props: {position?: [number, number, number]}, ref){
    const { colorPt1, colorPt2, clearPt, performanceTip, transparency, clearCoat, resolution } = useControls({
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
                    return tip === 'ES'|| tip === 'BO_ES';
                }
            },
            performanceTip: {
                value: "BO_ES",
                options: Object.keys(PERFORMANCE_TIPS),
                label: 'Tip'
            },
            transparency: {
                value: 0.2,
                min: 0,
                max: 1,
                step: 0.05,
                label: "Transparency",
                render: (get) => {
                    return get('Performance Tip.clearPt');
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
                    return get('Performance Tip.clearPt');
                }
            },
        })
    })
    const PerformanceTip = PERFORMANCE_TIPS[performanceTip as keyof typeof PERFORMANCE_TIPS]
    return (
        <PerformanceTip {...props} 
            ref={ref} 
            position={props.position}
            secondary={
                clearPt ? 
                <MeshTransmissionMaterial samples={1} resolution={resolution} transmission={transparency} roughness={clearCoat} color={colorPt2}/> : 
                <meshStandardMaterial roughness={clearCoat} color={colorPt2}/>
            }
        >
            {
                clearPt ? 
                <MeshTransmissionMaterial samples={1} resolution={resolution} transmission={transparency} roughness={clearCoat} color={colorPt1}/> : 
                <meshStandardMaterial roughness={clearCoat} color={colorPt1}/>
            }
        </PerformanceTip>
    )
});