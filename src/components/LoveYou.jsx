import React from 'react'

function LoveYou() {
  return (
    <section className="loveyou-section">
      <div className="poem-header-dark poem-header-red">
        <p className="poem-text-script">Gặp anh nắng rớt vàng tơ</p>
        <p className="poem-text-script">Mây trôi cũng hóa nên thơ dịu hiền.</p>
        <p className="poem-text-script">Chiều về gió thoảng êm đềm</p>
        <p className="poem-text-script">Hình như cũng ngọt như men rượu hồng.</p>
      </div>

      <div className="loveyou-content" data-animate>
        <div className="loveyou-main">
          <img
            src="/images/wedding/wedding-11.jpg"
            alt="Ảnh cưới"
            className="loveyou-photo"
            loading="lazy"
          />
          <div className="loveyou-text-vertical">
            <span>I</span>
            <span className="loveyou-heart">♥</span>
            <span>VE</span>
            <span>YOU</span>
          </div>
        </div>
        <div className="loveyou-small-oval">
          <img src="/images/wedding/wedding-12.jpg" alt="Ảnh cưới" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default LoveYou
