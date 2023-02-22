import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'

import Video from '../video/Video'
import Floor from '../floor/Floor'
import Map from '../map/Map'

import './Scene.css'

const Scene = () => {
  return (
    <Canvas camera={{ fov: 10, position: [0, 0, 7.5] }}>
      <hemisphereLight color="white" position={[0, 0, 10]} />
      <Suspense fallback={null}>

        <Video />
        <Map />
        {/* <Floor /> */}
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 1.25} />
    </Canvas>
  )
}

export default Scene