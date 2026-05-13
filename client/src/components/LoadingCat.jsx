// ============================================================
// LoadingCat.jsx — Animated loading state component
// Displays a purring cat with floating Z's while yarn data
// is being fetched from the API.
// ============================================================
import './LoadingCat.css'

function LoadingCat() {
  return (
    <div className="loader-wrap">
      <svg
        className="cat-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="A sleepy cat waiting for yarn data to load"
      >
        {/* Body */}
        <ellipse cx="50" cy="68" rx="28" ry="22" fill="#c4956a"/>

        {/* Tail — wags side to side */}
        <g className="cat-tail">
          <path
            d="M72 78 Q90 72 88 58 Q86 50 80 54"
            stroke="#c4956a"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Head */}
        <ellipse cx="50" cy="42" rx="22" ry="20" fill="#c4956a"/>

        {/* Left ear — twitches occasionally */}
        <g className="cat-ear-left">
          <polygon points="30,28 22,10 38,20" fill="#c4956a"/>
          <polygon points="30,26 25,14 36,21" fill="#e8b99a"/>
        </g>

        {/* Right ear */}
        <polygon points="68,28 76,10 60,20" fill="#c4956a"/>
        <polygon points="68,26 73,14 62,21" fill="#e8b99a"/>

        {/* Eyes — closed/sleepy lines */}
        <path d="M38 42 Q42 39 46 42" stroke="#3d2b1f" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M54 42 Q58 39 62 42" stroke="#3d2b1f" strokeWidth="1.8" strokeLinecap="round" fill="none"/>

        {/* Nose */}
        <ellipse cx="50" cy="49" rx="2.5" ry="1.8" fill="#d4788a"/>

        {/* Mouth */}
        <path
          d="M47 51 Q50 54 53 51"
          stroke="#3d2b1f"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Whiskers */}
        <line x1="52" y1="49" x2="68" y2="46" stroke="#3d2b1f" strokeWidth="0.8" opacity="0.6"/>
        <line x1="52" y1="50" x2="68" y2="51" stroke="#3d2b1f" strokeWidth="0.8" opacity="0.6"/>
        <line x1="48" y1="49" x2="32" y2="46" stroke="#3d2b1f" strokeWidth="0.8" opacity="0.6"/>
        <line x1="48" y1="50" x2="32" y2="51" stroke="#3d2b1f" strokeWidth="0.8" opacity="0.6"/>

        {/* Paws */}
        <ellipse cx="34" cy="86" rx="8" ry="5" fill="#c4956a"/>
        <ellipse cx="66" cy="86" rx="8" ry="5" fill="#c4956a"/>

        {/* Floating Z's — staggered delays so they appear one after another */}
        <text className="cat-z cat-z1" x="74" y="38">z</text>
        <text className="cat-z cat-z2" x="80" y="28">z</text>
        <text className="cat-z cat-z3" x="87" y="18">Z</text>
      </svg>

      <p className="loader-text">Loading yarn stash...</p>
    </div>
  )
}

export default LoadingCat