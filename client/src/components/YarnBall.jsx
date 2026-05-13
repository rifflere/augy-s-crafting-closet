// ============================================================
// YarnBall.jsx — Individual Yarn Ball Component
// Renders one yarn ball as a colored circle with the yarn's
// label and skein count. Receives a single yarn object as a prop.
//
// yarn prop shape:
//   { id: number, color: string, label: string, quantity: string }
// ============================================================
import './YarnBall.css'

function YarnBall({ yarn }) {
  // quantity comes back from Postgres as a string (e.g. "3.0")
  // parseFloat converts it to a number so we can format it
  const skeins = parseFloat(yarn.quantity)

  // Decide skein label — "skein" vs "skeins" for grammar
  const skeinLabel = skeins === 1 ? 'skein' : 'skeins'

  return (
    <article className="yarn-ball-card">

      {/* The circular yarn ball — color comes from the database */}
      <div
        className="yarn-ball"
        style={{ backgroundColor: yarn.color }}
        aria-label={`${yarn.label} yarn ball`}
      >
        {/* Skein count displayed in the center of the circle */}
        <span className="yarn-count">
          {skeins % 1 === 0 ? skeins.toFixed(0) : skeins.toFixed(1)}
        </span>

        {/* Decorative highlight to make the circle look 3D */}
        <div className="yarn-highlight" />

        {/* Decorative yarn wrap lines */}
        <div className="yarn-wrap yarn-wrap-1" />
        <div className="yarn-wrap yarn-wrap-2" />
      </div>

      {/* Label below the ball */}
      <div className="yarn-info">
        <p className="yarn-label">{yarn.label}</p>
        <p className="yarn-quantity">{skeins} {skeinLabel}</p>
      </div>

    </article>
  )
}

export default YarnBall