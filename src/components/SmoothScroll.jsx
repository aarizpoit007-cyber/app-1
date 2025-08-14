import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({children}){
  const rafRef = useRef(null)
  useEffect(()=>{
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    function raf(time){
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)
    return ()=>{
      cancelAnimationFrame(rafRef.current)
      lenis.destroy()
    }
  },[])
  return children
}
