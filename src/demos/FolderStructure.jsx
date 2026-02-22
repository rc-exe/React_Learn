export function FolderStructureDemo() {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
      <pre style={{ margin: 0, color: 'var(--text-muted)' }}>{`src/
  main.jsx
  App.jsx
  index.css
  components/
    Section.jsx
  demos/
    State.jsx
    ...
  topics.js`}</pre>
    </div>
  )
}
