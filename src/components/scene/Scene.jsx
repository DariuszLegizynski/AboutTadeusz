import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

import './Scene.css'

const Scene = () => {
  const gltf = useLoader(GLTFLoader, 'src/assets/north_america_3d_map/scene.gltf')

  // const deg2rad = degrees => degrees * (Math.PI / 180);

  // useThree(({camera}) => {
  //   camera.rotation.set(deg2rad(30), 0, 0)
  // });

  return (
    <Canvas camera={{ fov: 10, position: [0, 0, 5] }}>
      <hemisphereLight color="white" position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <primitive scale={[1, 1, 1]} object={gltf.scene} />
      </Suspense>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </Canvas>
  )
}

export default Scene