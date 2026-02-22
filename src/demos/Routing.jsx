import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'

function Home() {
  return <p>Home. <Link to="/topic/1">Go to Topic 1</Link> or <Link to="/topic/2">Topic 2</Link>.</p>
}

function Topic() {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <p>Topic ID: <strong>{id}</strong></p>
      <button onClick={() => navigate('/')}>Back home</button>
    </div>
  )
}

export function RoutingDemo() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topic/:id" element={<Topic />} />
    </Routes>
  )
}
