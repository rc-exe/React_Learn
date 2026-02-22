import { useState } from 'react'

export function ConditionalRenderingDemo() {
  const [on, setOn] = useState(true)
  const [score, setScore] = useState(50)

  return (
    <div>
      <p>
        Toggle: {on && <span style={{ color: 'var(--green)' }}>ON</span>}
        {!on && <span style={{ color: 'var(--red)' }}>OFF</span>}
        <button onClick={() => setOn(!on)} style={{ marginLeft: '0.5rem' }}>Toggle</button>
      </p>
      <p>
        Score: {score} — {score >= 60 ? 'Pass' : 'Fail'}
        <button onClick={() => setScore(s => Math.min(100, s + 10))} style={{ marginLeft: '0.5rem' }}>+10</button>
      </p>
    </div>
  )
}
