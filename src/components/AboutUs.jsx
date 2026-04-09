import React, { useState, useEffect } from 'react'
import { GROOM, BRIDE, DATE_ISO, BASE } from '../config'

const WEDDING_DATE = new Date(DATE_ISO)

function getTimeLeft() {
  const diff = WEDDING_DATE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    over: false,
  }
}

function AboutUs() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="about-section">
      <div className="about-invite-text" data-animate>
        <p>
          Gửi đến gia đình và bạn bè thân mến,&nbsp;
        </p>
        <p>
          Cảm ơn bạn đã dành thời gian quý báu<br />
          để cùng chúng mình chung vui trong ngày đặc biệt này.<br />
          Chúng mình vô cùng biết ơn vì luôn có sự đồng hành và ủng hộ của bạn,<br />
          và thật vinh hạnh khi được chia sẻ niềm hạnh phúc của chúng mình cùng bạn.&nbsp;
        </p>
        <p>
          Trân trọng kính mời bạn đến dự lễ cưới của chúng mình
        </p>
      </div>

      <h2 className="about-heading" data-animate>PHÓNG SỰ</h2>

      <div className="about-photos" data-animate>
        <div className="about-photo">
          <img src={`${BASE}/images/wedding/wedding-04.jpg`} alt={BRIDE} loading="lazy" />
        </div>
        <div className="about-photo">
          <img src={`${BASE}/images/wedding/wedding-05.jpg`} alt={GROOM} loading="lazy" />
        </div>
      </div>

      {!time.over ? (
        <div className="about-countdown" data-animate>
          <div className="about-count-box">
            <span className="count-value">{time.days}</span>
            <span className="count-label">ngày</span>
          </div>
          <div className="about-count-box">
            <span className="count-value">{time.hours}</span>
            <span className="count-label">giờ</span>
          </div>
          <div className="about-count-box">
            <span className="count-value">{time.minutes}</span>
            <span className="count-label">phút</span>
          </div>
          <div className="about-count-box">
            <span className="count-value">{time.seconds}</span>
            <span className="count-label">giây</span>
          </div>
        </div>
      ) : (
        <p className="about-today" data-animate>🎊 Hôm nay là ngày trọng đại! 🎊</p>
      )}

      {/* <div className="about-names" data-animate>
        <span className="about-bride">{BRIDE}</span>
        <span className="about-amp">&amp;</span>
        <span className="about-groom">{GROOM}</span>
      </div> */}
    </section>
  )
}

export default AboutUs
