import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

const Map = () => {
  const gltf = useLoader(GLTFLoader, '/north_america_3d_map/scene.gltf')

  return <primitive scale={[1, 1, 1]} position={[0, 0, 0]} object={gltf.scene} />
}

export default Map