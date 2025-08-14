import React, { useState } from 'react'
import { getAdvice } from '../lib/adviceEngine.js'
import MotionReveal from '../components/MotionReveal.jsx'

export default function Ask(){
  const [q,setQ] = useState('')
  const [res,setRes] = useState(null)
  const [loading,setLoading] = useState(false)

  async function handleAsk(e){
    e.preventDefault()
    if(!q.trim()) return
    setLoading(true)
    await new Promise(r=>setTimeout(r,300))
    const ans = getAdvice(q)
    setRes(ans)
    setLoading(false)
  }

  return (
    <section className="section container">
      <h2>Ask for advice</h2>
      <p style={{color:'var(--muted)'}}>Keep it specific. Example: <span className="kbd">I’m 16, struggling to focus for IBDP — what should I do this week?</span></p>
      <form onSubmit={handleAsk} className="grid" style={{marginTop:16}}>
        <textarea rows="5" className="input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Type your question..." />
        <div>
          <button className="btn" disabled={loading}>{loading ? 'Thinking…':'Get advice'}</button>
        </div>
      </form>

      {res && (
        <MotionReveal>
          <div className="card" style={{marginTop:18}}>
            <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:12}}>
              {res.tags.map(t=> <span key={t} className="kbd">#{t}</span>)}
            </div>
            <h3 style={{marginTop:0}}>{res.title}</h3>
            <p style={{whiteSpace:'pre-wrap'}}>{res.body}</p>
            <ol>
              {res.actions.map((a,i)=><li key={i}>{a}</li>)}
            </ol>
          </div>
        </MotionReveal>
      )}
    </section>
  )
}
