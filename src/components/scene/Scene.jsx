import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrthographicCamera, MapControls, PerspectiveCamera } from '@react-three/drei'

import Video from '../video/Video'
import Floor from '../floor/Floor'
import Map from '../map/Map'

import './Scene.css'

const Scene = () => {
  
  return (
    <Canvas camera={{ position: [0, 100, 10], rotation: [0, Math.PI / 2, 0]}} >
      <hemisphereLight color="white" position={[0, 0, 10]} />
      <Suspense fallback={null}>
        <Video />
        <Map />
      </Suspense>
      <MapControls />
    </Canvas>
  )
}

export default Scene