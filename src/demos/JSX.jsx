export function JSXDemo() {
  const name = 'React'
  const count = 42
  const isReady = true

  return (
    <div>
      <p>Expression {'{name}'}: <strong>{name}</strong></p>
      <p>Expression {'{count}'}: {count}</p>
      <p>Boolean {'{isReady}'}: {isReady ? 'yes' : 'no'}</p>
      <p>Self-closing: <input type="text" placeholder="input" readOnly style={{ width: 120 }} /></p>
    </div>
  )
}
