import React from 'react'

function PoemPhoto() {
  return (
    <section className="poem-photo-section">
      <div className="poem-header-dark">
        <p className="poem-text-script">Đời này quý giá vô ngần</p>
        <p className="poem-text-script">Có anh chung bước, muôn phần đẹp tươi.</p>
      </div>

      <div className="poem-photo-content" data-animate>
        <img
          src="/images/wedding/wedding-08.jpg"
          alt="Ảnh cưới"
          className="poem-main-photo"
          loading="lazy"
        />
      </div>

      <div className="poem-bottom-text" data-animate>
        <p>Đường đời muôn dặm thênh thang</p>
        <p>Bao nhiều phong cảnh rõ ràng trước sau.</p>
        <p>Quan trọng vẫn mãi bên lâu</p>
        <p>Là người sánh bước, cùng nhau vui buồn.</p>
      </div>
    </section>
  )
}

export default PoemPhoto
