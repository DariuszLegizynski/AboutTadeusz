import { useGLTF } from '@react-three/drei'

const VideoPlayer = () => {
  const tv  = useGLTF('src/assets/tv_screen/scene.gltf')

  return <primitive scale={[0.005, 0.005, 0.005]} position={[0, 0, 2]} rotation={[0.75, 0, 0]} object={tv.scene} />
}

export default VideoPlayer