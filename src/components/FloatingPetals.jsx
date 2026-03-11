import React, { useMemo } from 'react'

const PETAL_CHARS = ['🌸', '🌺', '❧', '❤', '✿', '🌼', '💞', '♥']
const TOTAL = 22

function FloatingPetals() {
  // Pre-compute so values are stable across renders
  const petals = useMemo(
    () =>
      Array.from({ length: TOTAL }, (_, i) => ({
        id: i,
        char: PETAL_CHARS[i % PETAL_CHARS.length],
        left: `${2 + (i * 4.3) % 96}%`,
        duration: `${10 + (i * 1.3) % 11}s`,
        delay: `-${(i * 0.7) % 14}s`,
        size: `${0.8 + (i * 0.12) % 1.2}rem`,
        opacity: 0.22 + (i * 0.022) % 0.32,
      })),
    []
  )

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size,
            opacity: p.opacity,
          }}
        >
          {p.char}
        </div>
      ))}
    </div>
  )
}

export default FloatingPetals
