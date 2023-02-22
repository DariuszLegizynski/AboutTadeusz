import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const MapModel = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('src/assets/north_america_3d_map/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('src/assets/north_america_3d_map/scene.gltf')

export default MapModel