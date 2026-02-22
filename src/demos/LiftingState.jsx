import { useState } from 'react'

function ChildA({ value, onChange }) {
  return (
    <div>
      <label>A: </label>
      <input value={value} onChange={e => onChange(e.target.value)} />
    </div>
  )
}

function ChildB({ value }) {
  return <p>B sees: <strong>{value}</strong></p>
}

export function LiftingStateDemo() {
  const [shared, setShared] = useState('shared state')

  return (
    <div>
      <ChildA value={shared} onChange={setShared} />
      <ChildB value={shared} />
    </div>
  )
}
