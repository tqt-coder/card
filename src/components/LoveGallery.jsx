import React from 'react'

function LoveGallery() {
  return (
    <section className="love-gallery-section">
      <div className="poem-header-dark">
        <p className="poem-text-script">Đường tới muôn dặm thênh thang</p>
        <p className="poem-text-script">Bao nhiều phong cảnh rõ ràng trước sau.</p>
        <p className="poem-text-script">Quan trọng vẫn mãi bên lâu</p>
        <p className="poem-text-script">Là người sánh bước, cùng nhau vui buồn.</p>
      </div>

      <div className="love-content">
        <h3 className="love-title" data-animate>LOVE</h3>

        <div className="love-quote" data-animate>
          <p>YOU ARE MY END</p>
          <p>AND MY</p>
          <p>BEGINNING</p>
        </div>

        <div className="love-grid" data-animate>
          <div className="love-photo love-photo-1">
            <img src="/images/wedding/wedding-07.jpg" alt="Ảnh cưới" loading="lazy" />
          </div>
          <div className="love-photo love-photo-2">
            <img src="/images/wedding/wedding-08.jpg" alt="Ảnh cưới" loading="lazy" />
          </div>
          <div className="love-photo love-photo-3">
            <img src="/images/wedding/wedding-09.jpg" alt="Ảnh cưới" loading="lazy" />
          </div>
          <div className="love-photo love-photo-4">
            <img src="/images/wedding/wedding-10.jpg" alt="Ảnh cưới" loading="lazy" />
          </div>
        </div>

        <p className="love-freedom" data-animate>LOVE AND FREEDOM</p>
      </div>
    </section>
  )
}

export default LoveGallery
