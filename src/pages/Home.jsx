import React from 'react'
import HeroCanvas from '../components/HeroCanvas.jsx'
import MotionReveal from '../components/MotionReveal.jsx'

export default function Home({go}){
  return (
    <div>
      <section className="hero">
        <HeroCanvas />
        <div className="hero__content container">
          <div className="hero__kicker">Advice for teens • private • instant</div>
          <h1>Make one smart move today.</h1>
          <p style={{color:'var(--muted)',maxWidth:720,margin:'14px auto 24px'}}>
            Ask about school, friends, fitness, money, creativity—get practical advice with guardrails.
            No fluff, no doom. Just next steps.
          </p>
          <a className="btn" href="#ask" onClick={(e)=>{e.preventDefault();go('ask')}}>Ask a question</a>
        </div>
      </section>

      <section className="section container">
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
          <MotionReveal><div className="card"><h3>Private by default</h3><p>Everything happens locally in your browser in this demo.</p></div></MotionReveal>
          <MotionReveal delay={.1}><div className="card"><h3>Built-in guardrails</h3><p>Advice engine refuses unsafe topics and nudges toward healthy choices.</p></div></MotionReveal>
          <MotionReveal delay={.2}><div className="card"><h3>Actionable steps</h3><p>Each answer ends with a clear next action you can do today.</p></div></MotionReveal>
        </div>
      </section>
    </div>
  )
}
