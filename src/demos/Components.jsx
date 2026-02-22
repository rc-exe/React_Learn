function Welcome() {
  return <h3 style={{ margin: 0 }}>Hello from Welcome</h3>
}

function Label({ text }) {
  return <span style={{ color: 'var(--accent)' }}>{text}</span>
}

export function ComponentsDemo() {
  return (
    <div>
      <Welcome />
      <p style={{ margin: '0.5rem 0 0' }}>
        Component composition: <Label text="reusable Label" /> inside a paragraph.
      </p>
    </div>
  )
}
