import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

import Video from '../video/Video'
import Floor from '../floor/Floor'

import './Scene.css'

const Scene = () => {
  const gltf = useLoader(GLTFLoader, 'src/assets/north_america_3d_map/scene.gltf')

  return (
    <Canvas camera={{ fov: 10, position: [0, 0, 10] }}>
      <hemisphereLight color="white" position={[0, 0, 10]} />
      <Suspense fallback={null}>
        {/* <primitive scale={[1, 1, 1]} object={gltf.scene} /> */}
        <Video />
        <Floor />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default Scene