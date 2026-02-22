import { useState } from 'react'

export function ControlledComponentsDemo() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type here"
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <button type="submit">Submit</button>
      {submitted && <p style={{ margin: '0.5rem 0 0', color: 'var(--accent)' }}>Submitted: {submitted}</p>}
    </form>
  )
}
