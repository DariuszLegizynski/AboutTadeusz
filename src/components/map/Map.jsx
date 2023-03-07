import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

const Map = () => {
  const gltf = useLoader(GLTFLoader, '/north_america_flat/north_america_flat.glb')

  return <primitive object={gltf.scene} scale={[100, 100, 100]} rotation={[-Math.PI / 2, 0, 0]} />
}

export default Map