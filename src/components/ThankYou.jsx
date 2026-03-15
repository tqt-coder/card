import React, { useState } from 'react'
import { BASE } from '../config'

function ThankYou() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="thankyou-section">
      <div className="thankyou-poem" data-animate>
        <p>Non sông một chặng đường dài</p>
        <p>Ba sinh hữu hạnh, duyên này thành đôi.</p>
        <p>Tiệc vui ngắn ngủi mà thôi</p>
        <p>Nếu điều sơ suất, mong người lượng thương.</p>
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
          <div className="thankyou-emoji">💒</div>
        )}
      </div>
    </section>
  )
}

export default ThankYou
