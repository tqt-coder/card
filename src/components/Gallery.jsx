import React, { useState } from 'react'
import { BASE } from '../config'

// ── Gallery image list ──────────────────────────────────────
const IMAGES = [
  { src: `${BASE}/images/wedding/wedding-02.jpg`, alt: 'Ảnh cưới 1' },
  { src: `${BASE}/images/wedding/wedding-03.jpg`, alt: 'Ảnh cưới 2' },
  { src: `${BASE}/images/wedding/wedding-06.jpg`, alt: 'Ảnh cưới 3' },
  { src: `${BASE}/images/wedding/wedding-11.jpg`, alt: 'Ảnh cưới 4' },
  { src: `${BASE}/images/wedding/wedding-12.jpg`, alt: 'Ảnh cưới 5' },
  { src: `${BASE}/images/wedding/wedding-13.jpg`, alt: 'Ảnh cưới 6' },
  { src: `${BASE}/images/wedding/wedding-14.jpg`, alt: 'Ảnh cưới 7' },
  { src: `${BASE}/images/wedding/wedding-15.jpg`, alt: 'Ảnh cưới 8' },
  { src: `${BASE}/images/wedding/wedding-09.jpg`, alt: 'Ảnh cưới 9' },
]
// ────────────────────────────────────────────────────────────

function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  function getSrc(i) {
    return IMAGES[i].src
  }

  function prev(e) {
    e.stopPropagation()
    setLightbox((n) => (n - 1 + IMAGES.length) % IMAGES.length)
  }
  function next(e) {
    e.stopPropagation()
    setLightbox((n) => (n + 1) % IMAGES.length)
  }

  // Keyboard navigation
  function onKeyDown(e) {
    if (e.key === 'Escape') setLightbox(null)
    if (e.key === 'ArrowLeft')  setLightbox((n) => (n - 1 + IMAGES.length) % IMAGES.length)
    if (e.key === 'ArrowRight') setLightbox((n) => (n + 1) % IMAGES.length)
  }

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">Our Memories</span>
          <h2 className="section-title">Bộ Sưu Tập Ảnh</h2>
          <div className="section-divider"><span>✿</span></div>
          <p className="section-desc">
            Những khoảnh khắc đẹp đẽ trong hành trình tình yêu của chúng tôi
          </p>
        </div>

        <div className="gallery-grid">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`Xem ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
              data-animate
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <img
                src={getSrc(i)}
                alt={img.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-note">
          📸 Khoảnh khắc đáng nhớ của chúng tôi
        </p>
      </div>

      {lightbox !== null && (
        /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          onKeyDown={onKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh"
          tabIndex={-1}
        >
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Đóng">✕</button>
          <button className="lightbox-prev"  onClick={prev} aria-label="Ảnh trước">‹</button>
          <img
            src={getSrc(lightbox)}
            alt={IMAGES[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-next" onClick={next} aria-label="Ảnh tiếp">›</button>
        </div>
      )}
    </section>
  )
}

export default Gallery
