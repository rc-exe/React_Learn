import { useState, useEffect } from 'react'

export function APICallsDemo() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchExample = () => {
    setLoading(true)
    setError(null)
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.ok ? res.json() : Promise.reject(new Error('Failed')))
      .then(json => { setData(json); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }

  return (
    <div>
      <button onClick={fetchExample} disabled={loading}>Fetch user</button>
      {loading && <p style={{ color: 'var(--yellow)' }}>Loading...</p>}
      {error && <p style={{ color: 'var(--red)' }}>Error: {error}</p>}
      {data && !loading && (
        <p style={{ marginTop: '0.5rem' }}>Name: {data.name}, Email: {data.email}</p>
      )}
    </div>
  )
}
