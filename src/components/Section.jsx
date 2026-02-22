export function Section({ title, description, code, Demo }) {
  return (
    <section className="card">
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
      <div className="split-layout">
        <div>
          <label>Code</label>
          <pre className="code-block"><code>{code}</code></pre>
        </div>
        <div>
          <label>Live example</label>
          <div className="demo-box">
            {Demo ? <Demo /> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

