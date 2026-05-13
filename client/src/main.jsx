// ============================================================
// main.jsx — Entry Point
// Mounts the React app into the #root div in index.html.
// StrictMode helps catch bugs during development by rendering
// components twice in dev mode (doesn't affect production).
// ============================================================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)