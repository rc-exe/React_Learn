import { useState } from 'react'

export function PerformanceDemo() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  return (
    <div>
      <p>Re-renders happen when state (or props) change. Both buttons live in the same component, so both pieces of state cause this whole demo to re-render.</p>
      <p>Count: {count} <button onClick={() => setCount(c => c + 1)}>+1</button></p>
      <p>Other: {other} <button onClick={() => setOther(o => o + 1)}>+1</button></p>
    </div>
  )
}
