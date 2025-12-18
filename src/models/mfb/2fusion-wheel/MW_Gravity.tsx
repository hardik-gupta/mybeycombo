
import * as THREE from 'three'
import { type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    MW_Gravity: THREE.Mesh
  }
  materials: {}
}

export function MW_Gravity(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/models/mfb/2fusion-wheel/gravity.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="MW_Gravity"
        geometry={nodes.MW_Gravity.geometry}
        material={nodes.MW_Gravity.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/mfb/2fusion-wheel/gravity.glb')

