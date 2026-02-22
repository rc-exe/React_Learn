import { useState } from 'react'

export function JSFundamentalsDemo() {
  const [result, setResult] = useState('')
  const nums = [1, 2, 3, 4, 5]

  const runMap = () => setResult('map: ' + JSON.stringify(nums.map(x => x * 2)))
  const runFilter = () => setResult('filter: ' + JSON.stringify(nums.filter(x => x > 2)))
  const runReduce = () => setResult('reduce (sum): ' + nums.reduce((acc, x) => acc + x, 0))

  return (
    <div>
      <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Array: [1, 2, 3, 4, 5]</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button onClick={runMap}>map(x =&gt; x*2)</button>
        <button onClick={runFilter}>filter(x &gt; 2)</button>
        <button onClick={runReduce}>reduce(sum)</button>
      </div>
      {result && <p style={{ marginTop: '0.75rem', color: 'var(--accent)' }}>{result}</p>}
    </div>
  )
}
