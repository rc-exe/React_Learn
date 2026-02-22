import { useState, useEffect } from 'react'

export function UseEffectDemo() {
  const [count, setCount] = useState(0)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    document.title = `Count: ${count}`
    return () => { document.title = 'React Basics' }
  }, [count])

  return (
    <div>
      <p>Count: {count} <button onClick={() => setCount(c => c + 1)}>+1</button></p>
      <p>Timer (runs once on mount, cleanup on unmount): {tick}s</p>
    </div>
  )
}
