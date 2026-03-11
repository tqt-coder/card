import React from 'react'
import {
  DATE_FULL, CUNG_ONG_BA_DATE_DISPLAY,
  RESTAURANT_NAME, RESTAURANT_ADDRESS, RESTAURANT_MAP_LINK,
  BRIDE_HOME_ADDRESS, BRIDE_HOME_MAP_LINK,
  TIME_VU_QUY, TIME_CEREMONY,
} from '../config'

// Build address string: join non-empty parts with ', '
const restaurantAddress = [RESTAURANT_NAME, RESTAURANT_ADDRESS].filter(Boolean).join(', ')

const EVENTS = [
  {
    icon:    '🕯️',
    label:   'Tiệc Cúng Ông Bà',
    title:   'Tiệc Cúng Ông Bà',
    time:    `${TIME_VU_QUY} – ${CUNG_ONG_BA_DATE_DISPLAY}`,
    address: BRIDE_HOME_ADDRESS,
    mapLink: BRIDE_HOME_MAP_LINK,
  },
  {
    icon:    '💒',
    label:   'Lễ Cưới',
    title:   'Tiệc Cưới Chính Thức',
    time:    `${TIME_CEREMONY} – ${DATE_FULL}`,
    address: restaurantAddress,
    mapLink: RESTAURANT_MAP_LINK,
  },
]

function DetailCard({ icon, label, title, time, address, mapLink }) {
  return (
    <div className="detail-card" data-animate>
      <div className="detail-icon">{icon}</div>
      <span className="detail-label">{label}</span>
      <h3 className="detail-title">{title}</h3>
      <div className="detail-divider" />
      <div className="detail-info">
        <div className="detail-row">
          <span>🕙</span>
          <span>{time}</span>
        </div>
        <div className="detail-row">
          <span>📍</span>
          <span>{address}</span>
        </div>
      </div>
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline detail-btn"
      >
        Xem Bản Đồ
      </a>
    </div>
  )
}

function WeddingDetails() {
  return (
    <section id="details" className="section details-section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">Join Us</span>
          <h2 className="section-title">Thông Tin Đám Cưới</h2>
          <div className="section-divider"><span>✦</span></div>
          <p className="section-desc">
            Chúng tôi rất hân hạnh được đón tiếp quý vị tại ngày trọng đại của chúng tôi
          </p>
        </div>

        <div className="details-grid">
          {EVENTS.map((ev, i) => (
            <DetailCard key={i} {...ev} />
          ))}
        </div>

        <div className="dress-code" data-animate>
          <h3>👗 Dress Code</h3>
          <p>
            Trang phục lịch sự, màu sắc tươi sáng.<br />
            Xin không mặc màu trắng để nhường cho cô dâu 🙏
          </p>
        </div>
      </div>
    </section>
  )
}

export default WeddingDetails
