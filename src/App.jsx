import { useState, useEffect } from 'react'
import { topics } from './topics'
import { Section } from './components/Section'
import './App.css'

function App() {
  const [activeId, setActiveId] = useState(topics[0].id)

  useEffect(() => {
    const blocks = topics.map((t) => ({ id: t.id, el: document.getElementById(t.id) })).filter((b) => b.el)

    const onScroll = () => {
      const threshold = 120
      for (let i = blocks.length - 1; i >= 0; i--) {
        const rect = blocks[i].el.getBoundingClientRect()
        if (rect.top <= threshold) {
          setActiveId(blocks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setActiveId(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <header className="sidebar-header">
          <h1>React Basics</h1>
          <p>Code &amp; examples side by side</p>
        </header>
        <nav className="sidebar-nav" aria-label="Quick navigation">
          <h2 className="sidebar-nav-title">Quick navigation</h2>
          <ul className="sidebar-nav-list">
            {topics.map((t, i) => (
              <li key={t.id}>
                <button
                  className={`nav-item ${activeId === t.id ? 'active' : ''}`}
                  onClick={() => scrollTo(t.id)}
                  aria-current={activeId === t.id ? 'true' : undefined}
                >
                  <span className="nav-item-num">{i + 1}</span>
                  {t.shortTitle}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="main">
        {topics.map((t) => (
          <div key={t.id} id={t.id} className="topic-block">
            <Section {...t} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
