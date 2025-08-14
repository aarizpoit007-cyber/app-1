import React, { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import Ask from './pages/Ask.jsx'
import Library from './pages/Library.jsx'
import Nav from './components/Nav.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

export default function App(){
  const [route,setRoute] = useState(window.location.hash.replace('#','') || 'home')
  useEffect(()=>{
    const onHash=()=>setRoute(window.location.hash.replace('#','')||'home')
    window.addEventListener('hashchange',onHash)
    return ()=>window.removeEventListener('hashchange',onHash)
  },[])
  const go=(r)=>{ window.location.hash = r }

  return (
    <SmoothScroll>
      <Nav route={route} go={go}/>
      {route==='home' && <Home go={go}/>}
      {route==='ask' && <Ask/>}
      {route==='library' && <Library/>}
      <footer className="footer container">
        Built with ♥ — original code inspired by modern WebGL/GSAP portfolio patterns.
      </footer>
    </SmoothScroll>
  )
}
