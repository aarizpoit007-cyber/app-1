import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'
import frag from '../shaders/hero.frag.glsl?raw'
import vert from '../shaders/hero.vert.glsl?raw'
import gsap from 'gsap'

function ShaderPlane(){
  const mesh = useRef()
  const start = performance.now()
  const uniforms = useMemo(()=>({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uAccent: { value: new THREE.Color('#7cd4ff') },
    uNoiseAmp: { value: 0.35 },
    uGrain: { value: 0.035 }
  }),[])

  useFrame(()=>{
    uniforms.uTime.value = (performance.now()-start)/1000
  })

  React.useEffect(()=>{
    gsap.fromTo(uniforms.uNoiseAmp,{value:1.2},{value:0.35,duration:2.2,ease:'power3.out'})
  },[])

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2,2]} />
      <shaderMaterial
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function HeroCanvas(){
  return (
    <Canvas dpr={[1,2]} gl={{ antialias: true }} orthographic>
      <OrthographicCamera makeDefault position={[0,0,1]} zoom={1}/>
      <ShaderPlane/>
    </Canvas>
  )
}
