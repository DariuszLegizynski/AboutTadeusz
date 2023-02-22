import { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

import videoURL from '../../assets/videos/TadeuszKosciuszko.webm'

const VideoPlayer = () => {
  const tv = useGLTF('src/assets/tv_screen/scene.gltf')

  const [video] = useState(() => {
    const vid = document.createElement('video')
    vid.src = videoURL
    vid.crossOrigin = 'Anon'
    vid.loop = true
    vid.muted = true
    // vid.controls = true
    vid.play()
    return vid
  })

  return (
    <group position={[0, 0, 2]}>
      <primitive scale={[0.005, 0.005, 0.005]} position={[0, 0, 0]} rotation={[0.75, 0, 0]} object={tv.scene} />
      <mesh scale={[0.075, 0.075, 0.075]} rotation={[0.75, 0, 0]} position={[0, 0, 0.01]}>
        <planeGeometry args={[3.2, 1.9]} />
        <meshStandardMaterial side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
    )
}

export default VideoPlayer