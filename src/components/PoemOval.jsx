import React from 'react'

function PoemOval() {
  return (
    <section className="poem-oval-section">
      <div className="poem-header-dark">
        <p className="poem-text-script">Đời dài muôn mảnh bình yên</p>
        <p className="poem-text-script">Em mang lãng mạn dịu hiền bước qua.</p>
        <p className="poem-text-script">Sáng ngời dáng ngọc ngọc ngà</p>
        <p className="poem-text-script">Cùng anh sánh bước chan hòa trọn đời.</p>
      </div>

      <div className="poem-oval-photo-wrap" data-animate>
        <div className="oval-frame">
          <img src="/images/wedding/wedding-06.jpg" alt="Ảnh cưới" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default PoemOval
