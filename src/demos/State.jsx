import { useState } from 'react'

export function StateDemo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p style={{ margin: '0 0 0.5rem 0' }}>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment (functional update)</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '0.5rem' }}>Reset</button>
    </div>
  )
}
