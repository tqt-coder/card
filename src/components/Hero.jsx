import React from 'react'
import { BASE } from '../config'

function Hero() {
  return (
    <section className="hero-section">
      {/* Wedding photo (behind) */}
      <div
        className="hero-photo"
        style={{ backgroundImage: `url(${BASE}/images/wedding/wedding-01.jpg)` }}
      />
      {/* Decorative border frame with teardrop mask */}
      <div className="hero-border-masked">
        <div
          className="hero-border-inner"
          style={{ backgroundImage: `url(${BASE}/images/border-frame.png)` }}
        />
      </div>
      {/* Frame overlay with transparent cutout (on top) */}
      <div
        className="hero-frame"
        style={{ backgroundImage: `url(${BASE}/images/bg_image.png)` }}
      />
      {/* Wedding Invitation curved text */}
      <div className="hero-text-overlay">
        <svg viewBox="0 0 500 200" className="hero-curved-text">
          <defs>
            <path
              id="curve"
              d="M 50,180 Q 250,40 450,180"
              fill="transparent"
            />
          </defs>
          <text>
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              W E D D I N G &nbsp;&nbsp; I N V I T A T I O N
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  )
}

export default Hero
