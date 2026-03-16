import React from 'react'
import { GROOM, BRIDE, RESTAURANT_NAME, TIME_CEREMONY, WEDDING_DAY_NAME, WEDDING_DAY, WEDDING_MONTH, WEDDING_YEAR, BASE } from '../config'

function InvitationInfo() {
  return (
    <section className="invitation-section">
      <h2 className="invitation-names" data-animate>
        {/* {GROOM} &amp; {BRIDE} */}
      </h2>

      <div className="invitation-date-row" data-animate>
        <div className="invitation-date-item">
          <span className="date-label">{WEDDING_DAY_NAME}</span>
          <span className="date-label">{TIME_CEREMONY}</span>
        </div>
        <div className="invitation-date-number">{WEDDING_DAY}</div>
        <div className="invitation-date-item">
          <span className="date-label">{WEDDING_MONTH}</span>
          <span className="date-label">{WEDDING_YEAR}</span>
        </div>
      </div>

      <div className="invitation-vertical-text">INVITATION</div>

      <div className="invitation-address" data-animate>
        <span className="address-script">Address /</span>
        <span className="address-value">{RESTAURANT_NAME}</span>
      </div>

      <div className="invitation-photos">
        <div className="invitation-photo" data-animate>
          <img src={`${BASE}/images/wedding/wedding-02.jpg`} alt="Ảnh cưới" loading="lazy" />
        </div>
        <div className="invitation-photo" data-animate>
          <img src={`${BASE}/images/wedding/wedding-03.jpg`} alt="Ảnh cưới" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default InvitationInfo
