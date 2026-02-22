import { useState, useEffect, useRef, createContext, useContext } from 'react'

const ThemeContext = createContext('dark')

function ThemedLabel() {
  const theme = useContext(ThemeContext)
  return <span style={{ color: theme === 'dark' ? 'var(--accent)' : 'var(--yellow)' }}>Theme: {theme}</span>
}

export function HooksDemo() {
  const [count, setCount] = useState(0)
  const ref = useRef(0)

  useEffect(() => {
    ref.current = count
  }, [count])

  return (
    <div>
      <p>useState: {count} <button onClick={() => setCount(c => c + 1)}>+1</button></p>
      <p>useRef (stores last count): {ref.current}</p>
      <ThemeContext.Provider value={count % 2 === 0 ? 'dark' : 'light'}>
        <p>useContext: <ThemedLabel /></p>
      </ThemeContext.Provider>
    </div>
  )
}
