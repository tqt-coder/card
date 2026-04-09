import React from 'react'
import { BASE } from '../config'

function PoemOval() {
  return (
    <section className="poem-oval-section">
      <div className="poem-header-dark">
        <p className="poem-text-script">Đời anh bỗng sáng một mùa</p>
        <p className="poem-text-script">Em về như gió như thưa nắng vàng</p>
        <p className="poem-text-script">Tay em anh giữ nhẹ nhàng</p>
        <p className="poem-text-script">Trọn đời sánh bước bình an gọi về</p>
      </div>

      <div className="poem-oval-photo-wrap" data-animate>
        <div className="oval-frame">
          <img src={`${BASE}/images/wedding/wedding-07.jpg`} alt="Ảnh cưới" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default PoemOval
