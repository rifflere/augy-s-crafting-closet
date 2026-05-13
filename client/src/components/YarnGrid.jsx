// ============================================================
// YarnGrid.jsx — Grid Container Component
// Receives the yarns array as a prop and renders a YarnBall
// for each one. Handles the empty-stash edge case.
// ============================================================
import YarnBall from './YarnBall'
import './YarnGrid.css'

function YarnGrid({ yarns }) {
  // Edge case: database exists but has no rows
  if (yarns.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#8c6244' }}>
        No yarn in the stash yet!
      </p>
    )
  }

  return (
    <section className="yarn-grid">
      {/* Map over the yarns array, rendering one YarnBall per item.
          The key prop helps React efficiently update the list
          when data changes — always use a stable unique ID */}
      {yarns.map(yarn => (
        <YarnBall key={yarn.id} yarn={yarn} />
      ))}
    </section>
  )
}

export default YarnGrid