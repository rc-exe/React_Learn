export function WhatIsReactDemo() {
  return (
    <div>
      <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
        <li>React is a <strong>library</strong> (UI only), not a framework.</li>
        <li>Builds UI with <strong>components</strong>.</li>
        <li>Uses a <strong>Virtual DOM</strong> for efficient updates.</li>
        <li>Re-renders when <strong>state</strong> (or props) change.</li>
      </ul>
    </div>
  )
}
