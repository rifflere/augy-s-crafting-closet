// ============================================================
// App.jsx — Root Component
// Fetches yarn data from the API on page load and passes it
// down to child components. Handles loading and error states.
// ============================================================
import { useState, useEffect } from 'react'
import YarnGrid from './components/YarnGrid'
import LoadingCat from './components/LoadingCat'
import './App.css'

function App() {
  // yarns      — the array of yarn objects from the database
  // loading    — true while the fetch is in flight
  // error      — holds an error message string if fetch fails
  const [yarns,   setYarns]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  // useEffect with an empty dependency array [] runs once,
  // right after the component first mounts — perfect for
  // fetching initial data
  useEffect(() => {
    // VITE_API_URL is injected at build time from the .env file
    // Vite only exposes variables prefixed with VITE_ to the browser
    const apiUrl = import.meta.env.VITE_API_URL

    fetch(`${apiUrl}/yarns`)
      .then(res => {
        // fetch() doesn't throw on HTTP errors (404, 500 etc.)
        // so we check res.ok manually
        if (!res.ok) throw new Error(`Server responded with ${res.status}`)
        return res.json()
      })
      .then(data => {
        setYarns(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch yarns:', err)
        setError('Could not load yarn data. Is the API running?')
        setLoading(false)
      })
  }, []) // empty array = run once on mount

  // ---- Render ----
  return (
    <div className="app">
      <header className="app-header">
        <h1>🧶 Augy's Crafting Closet</h1>
        <p className="subtitle">A cozy inventory of all my yarn stash</p>
      </header>

      <main>
        {/* Show a spinner while data is loading */}
        {loading && <LoadingCat />}

        {/* Show an error message if the fetch failed */}
        {error && (
          <div className="status-message error">{error}</div>
        )}

        {/* Show the yarn grid once data is ready */}
        {!loading && !error && (
          <YarnGrid yarns={yarns} />
        )}
      </main>

      <footer className="app-footer">
        <p>Made with 💛 and way too much yarn</p>
      </footer>
    </div>
  )
}

export default App