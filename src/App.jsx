import { useState, useEffect } from 'react'
import { topics } from './topics'
import { Section } from './components/Section'
import './App.css'

function App() {
  const [activeId, setActiveId] = useState(topics[0].id)
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  const scrollTo = (id) => {
    setActiveId(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setSidebarOpen(false)
  }

  return (
    <div className={`app ${sidebarOpen ? 'menu-open' : ''}`}>
      <header className="mobile-header">
        <button
          type="button"
          className={`burger ${sidebarOpen ? 'open' : ''}`}
          onClick={() => setSidebarOpen((o) => !o)}
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={sidebarOpen}
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
        <span className="mobile-header-title">React Basics</span>
      </header>

      <div
        className="sidebar-backdrop"
        aria-hidden="true"
        onClick={() => setSidebarOpen(false)}
      />

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
