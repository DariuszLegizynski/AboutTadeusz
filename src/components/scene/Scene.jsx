import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// import MapModel from '../mapModel/mapModel'

import './Scene.css'

const Scene = () => {
  const gltf = useLoader(GLTFLoader, 'src/assets/north_america_3d_map/scene.gltf')
  return (
    <Canvas>
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
    </Canvas>
  )
}

export default Scene