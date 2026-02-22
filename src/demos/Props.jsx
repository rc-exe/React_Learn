function Greeting({ name }) {
  return <p style={{ margin: 0 }}>Hello, {name}!</p>
}

export function PropsDemo() {
  return (
    <div>
      <Greeting name="World" />
      <Greeting name="React" />
    </div>
  )
}
