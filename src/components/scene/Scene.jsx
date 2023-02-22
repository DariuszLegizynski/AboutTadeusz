import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Bounds, useBounds, OrbitControls, ContactShadows, useGLTF } from '@react-three/drei'

import './Scene.css'

const Scene = () => {
  const gltf = useLoader(GLTFLoader, 'src/assets/north_america_3d_map/scene.gltf')
  const tv = useLoader(GLTFLoader,'src/assets/tv_screen/scene.gltf')

  return (
    <Canvas camera={{ fov: 10, position: [0, 0, 10] }}>
      <hemisphereLight color="white" position={[0, 0, 10]} />
      <Suspense fallback={null}>
        <primitive scale={[1, 1, 1]} object={gltf.scene} />
        <primitive scale={[0.005, 0.005, 0.005]} position={[0, 0, 2]} rotation={[0.75, 0, 0]} object={tv.scene} />
      </Suspense>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </Canvas>
  )
}

export default Scene