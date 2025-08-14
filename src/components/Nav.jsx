import React from 'react'

export default function Nav({route,go}){
  return (
    <div className="nav">
      <div className="nav__inner container">
        <div className="nav__brand">AdviceOrbit</div>
        <div className="nav__links">
          <a href="#home" onClick={e=>{e.preventDefault();go('home')}} className="btn">Home</a>
          <a href="#ask" onClick={e=>{e.preventDefault();go('ask')}} className="btn">Ask</a>
          <a href="#library" onClick={e=>{e.preventDefault();go('library')}} className="btn">Library</a>
        </div>
      </div>
    </div>
  )
}
