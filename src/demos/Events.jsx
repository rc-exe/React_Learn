import { useState } from 'react'

export function EventsDemo() {
  const [log, setLog] = useState([])

  const handleClick = () => setLog(l => [...l, 'Clicked!'])
  const handleWithArg = (msg) => () => setLog(l => [...l, msg])

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        <button onClick={handleClick}>Click</button>
        <button onClick={handleWithArg('Yes')}>Pass "Yes"</button>
        <button onClick={handleWithArg('No')}>Pass "No"</button>
      </div>
      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Log: {log.length ? log.join(', ') : '(none)'}
      </p>
    </div>
  )
}
