import React from 'react'
import { curated } from '../lib/adviceEngine.js'
import MotionReveal from '../components/MotionReveal.jsx'

export default function Library(){
  return (
    <section className="section container">
      <h2>Starter playbooks</h2>
      <p style={{color:'var(--muted)'}}>Bite-size plans you can use right away.</p>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', marginTop:18}}>
        {curated.map((c,idx)=>(
          <MotionReveal key={idx} delay={idx*0.05}>
            <div className="card">
              <h3 style={{marginTop:0}}>{c.title}</h3>
              <p>{c.body}</p>
              <ul>{c.actions.map((a,i)=><li key={i}>{a}</li>)}</ul>
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  )
}
