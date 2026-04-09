import React, { useState } from 'react'
import { BASE } from '../config'

function ThankYou() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="thankyou-section">
      <div className="thankyou-poem" data-animate>
        <p>Non sông một chặng đường dài</p>
        <p>Ba sinh hữu hạnh, duyên trời thành đôi</p>
        <p>Tiệc vui chưa trọn niềm vui</p>
        <p>Sơ suất điều gì, mong người bỏ qua</p>
      </div>

      <div className="thankyou-graphic" data-animate>
        <h2 className="thankyou-text">THANK YOU</h2>
        {!imgError ? (
          <img
            src={`${BASE}/images/wedding/thankyou.png`}
            alt="Thank you"
            className="thankyou-img"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <img
            src={`${BASE}/images/wedding/wedding-13.png`}
            alt="Wedding Icon"
            style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '0 auto', display: 'block' }}
          />
        )}
      </div>
    </section>
  )
}

export default ThankYou
