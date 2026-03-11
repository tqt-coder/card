import React from 'react'
import { GROOM, BRIDE, RESTAURANT_NAME, TIME_CEREMONY } from '../config'

function InvitationInfo() {
  return (
    <section className="invitation-section">
      <h2 className="invitation-names" data-animate>
        {GROOM} &amp; {BRIDE}
      </h2>

      <div className="invitation-date-row" data-animate>
        <div className="invitation-date-item">
          <span className="date-label">Chủ Nhật</span>
          <span className="date-label">{TIME_CEREMONY}</span>
        </div>
        <div className="invitation-date-number">26</div>
        <div className="invitation-date-item">
          <span className="date-label">Tháng 04</span>
          <span className="date-label">2026</span>
        </div>
      </div>

      <div className="invitation-vertical-text">INVITATION</div>

      <div className="invitation-address" data-animate>
        <span className="address-script">Address /</span>
        <span className="address-value">{RESTAURANT_NAME}</span>
      </div>

      <div className="invitation-photos">
        <div className="invitation-photo" data-animate>
          <img src="/images/wedding/wedding-02.jpg" alt="Ảnh cưới" loading="lazy" />
        </div>
        <div className="invitation-photo" data-animate>
          <img src="/images/wedding/wedding-03.jpg" alt="Ảnh cưới" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default InvitationInfo
