import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

// import { OrthographicCamera, MapControls, PerspectiveCamera } from '@react-three/drei'

import Video from '../video/Video'
import Map from '../map/Map'
import Controls from '../controls/MapControls'

import './Scene.css'

const Scene = () => {
  
  return (
    <Canvas camera={{ position: [0, 1000, 10], rotation: [0, Math.PI / 2, 0], fov: 75 }} >
      <hemisphereLight color="white" position={[0, 0, 10]} />
      <Suspense fallback={null}>
        <Video />
        <Map />
      </Suspense>
      <Controls />
    </Canvas>
  )
}

export default Scene