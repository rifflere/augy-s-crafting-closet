// ============================================================
// YarnBall.jsx — Individual yarn ball with wooly texture
// Uses concentric dashed ellipses + soft wisps inside an SVG
// overlay to create a matte, textile feel instead of a
// shiny metallic look.
// ============================================================
import './YarnBall.css'

function YarnBall({ yarn }) {
  const skeins = parseFloat(yarn.quantity)
  const skeinLabel = skeins === 1 ? 'skein' : 'skeins'

  return (
    <article className="yarn-ball-card">

      <div
        className="yarn-ball"
        style={{ backgroundColor: yarn.color }}
        aria-label={`${yarn.label} yarn ball`}
      >
        {/* Wooly texture overlay — SVG with concentric dashed rings
            that suggest wound yarn strands, plus a few wispy paths
            for a fluffy/fibrous feel. overflow:hidden clips to circle. */}
        <svg
          className="yarn-texture"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          {/* Concentric dashed ellipses — like layers of wound yarn */}
          <ellipse cx="60" cy="60" rx="56" ry="56" fill="none"
            stroke="rgba(255,255,255,0.09)" strokeWidth="8" strokeDasharray="6 4"/>
          <ellipse cx="60" cy="60" rx="42" ry="42" fill="none"
            stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeDasharray="5 5"/>
          <ellipse cx="60" cy="60" rx="28" ry="28" fill="none"
            stroke="rgba(255,255,255,0.07)" strokeWidth="5" strokeDasharray="4 5"/>
          <ellipse cx="60" cy="60" rx="14" ry="14" fill="none"
            stroke="rgba(255,255,255,0.06)" strokeWidth="4" strokeDasharray="3 4"/>

          {/* Wispy fiber paths — give a fluffy, fibrous surface feel */}
          <path d="M28 52 Q38 46 34 58 Q44 52 40 63"
            stroke="rgba(255,255,255,0.13)" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
          <path d="M74 32 Q80 43 71 40 Q77 51 69 49"
            stroke="rgba(255,255,255,0.11)" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
          <path d="M54 82 Q64 77 60 87 Q70 82 66 90"
            stroke="rgba(255,255,255,0.10)" strokeWidth="1.5"
            fill="none" strokeLinecap="round"/>

          {/* Soft diffuse highlight — a wide, low-opacity ellipse
              rather than a hard specular dot, so it looks matte */}
          <ellipse cx="44" cy="38" rx="22" ry="15"
            fill="rgba(255,255,255,0.07)"
            transform="rotate(-20 44 38)"/>
        </svg>

        {/* Skein count in the center */}
        <span className="yarn-count">
          {skeins % 1 === 0 ? skeins.toFixed(0) : skeins.toFixed(1)}
        </span>
      </div>

      <div className="yarn-info">
        <p className="yarn-label">{yarn.label}</p>
        <p className="yarn-quantity">{skeins} {skeinLabel}</p>
      </div>

    </article>
  )
}

export default YarnBall