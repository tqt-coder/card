import React from 'react'
import { BASE } from '../config'

function LoveGallery() {
  return (
    <section className="love-gallery-section">
      <div className="love-content">
        <h3 className="love-title" data-animate>LOVE</h3>

        <div className="love-quote" data-animate>
          <p>YOU ARE MY END AND MY BEGINNING</p>
        </div>

        <div className="love-grid" data-animate>
          <div className="love-photo love-photo-1">
            <img src={`${BASE}/images/wedding/wedding-09.jpg`} alt="Ảnh cưới" loading="lazy" />
          </div>
          <div className="love-photo love-photo-2">
            <img src={`${BASE}/images/wedding/wedding-07.jpg`} alt="Ảnh cưới" loading="lazy" />
          </div>
          <div className="love-photo love-photo-3">
            <img src={`${BASE}/images/wedding/wedding-08.jpg`} alt="Ảnh cưới" loading="lazy" />
          </div>
          <div className="love-photo love-photo-4">
            <img src={`${BASE}/images/wedding/wedding-06.jpg`} alt="Ảnh cưới" loading="lazy" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default LoveGallery
