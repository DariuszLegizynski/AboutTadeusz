import * as THREE from 'three'
import { useEffect } from 'react'

const Scene = () => {
  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      50, window.innerWidth / window.innerHeight, 1, 1000
    )
    camera.position.z = 96

    const canvas = document.querySelector('#mythreeJsCanvas')
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xfff, 0.5)
    ambientLight.castShadow = true
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0xfff, 1)
    spotLight.castShadow = true
    spotLight.position.set(0, 64, 32)
    scene.add(spotLight)

    const animate = () => {
      renderer.render(scene, camera)
      window.requestAnimationFrame(animate)
    }
    animate()
  }, [])
}

export default Scene