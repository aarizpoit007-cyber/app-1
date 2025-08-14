import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function MotionReveal({children, y=40, delay=0}){
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    gsap.fromTo(el,
      { autoAlpha:0, y },
      {
        autoAlpha:1, y:0, duration:1.1, ease:'power3.out', delay,
        scrollTrigger:{ trigger: el, start: 'top 85%' }
      }
    )
  },[y,delay])
  return <div ref={ref}>{children}</div>
}
