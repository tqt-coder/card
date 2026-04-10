import React from 'react'
import { BASE } from '../config'

function ThankYou() {
  const bridePhone = import.meta.env.VITE_BRIDE_PHONE
  const groomPhone = import.meta.env.VITE_GROOM_PHONE
  const brideName = import.meta.env.VITE_BRIDE_NAME
  const groomName = import.meta.env.VITE_GROOM_NAME

  return (
    <section className="thankyou-section">
      <div className="thankyou-poem animated" data-animate="true">
        <p>Non sông một chặng đường dài</p>
        <p>Ba sinh hữu hạnh, duyên trời thành đôi</p>
        <p>Tiệc vui chưa trọn niềm vui</p>
        <p>Sơ suất điều gì, mong người bỏ qua</p>
      </div>

      <div className="thankyou-graphic animated" data-animate="true">
        <h2 className="thankyou-text">THANK YOU</h2>
        <img
          src={`${BASE}/images/wedding/wedding-13.png`}
          alt="Wedding Icon"
          style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '0px auto', display: 'block' }}
        />
      </div>

      <div className="thankyou-contact" data-animate>
        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <div className="contact-info">
            <div className="contact-label">Chú rể</div>
            <div className="contact-name">{groomName}</div>
            <a href={`tel:${groomPhone}`} className="contact-number">{groomPhone}</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <div className="contact-info">
            <div className="contact-label">Cô dâu</div>
            <div className="contact-name">{brideName}</div>
            <a href={`tel:${bridePhone}`} className="contact-number">{bridePhone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThankYou
