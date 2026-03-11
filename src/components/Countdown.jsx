import React, { useState, useEffect } from 'react'
import { DATE_ISO, DATE_FULL } from '../config'

const WEDDING_DATE = new Date(DATE_ISO)

function getTimeLeft() {
  const diff = WEDDING_DATE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true }
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  / 60_000),
    seconds: Math.floor((diff % 60_000)     / 1_000),
    over: false,
  }
}

function Box({ value, label }) {
  return (
    <div className="countdown-box" data-animate>
      <span className="countdown-value">{String(value).padStart(2, '0')}</span>
      <span className="countdown-label">{label}</span>
    </div>
  )
}

function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="countdown" className="section countdown-section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">Save The Date</span>
          <h2 className="section-title">Đếm Ngược Đến Ngày Cưới</h2>
          <div className="section-divider"><span>✦</span></div>
        </div>

        {time.over ? (
          <p className="countdown-wedding-date" data-animate>
            🎊 Hôm nay là ngày trọng đại! Xin chúc mừng! 🎊
          </p>
        ) : (
          <>
            <div className="countdown-grid">
              <Box value={time.days}    label="Ngày" />
              <div className="countdown-sep">:</div>
              <Box value={time.hours}   label="Giờ" />
              <div className="countdown-sep">:</div>
              <Box value={time.minutes} label="Phút" />
              <div className="countdown-sep">:</div>
              <Box value={time.seconds} label="Giây" />
            </div>
            <p className="countdown-wedding-date" data-animate>
              🌸 {DATE_FULL} 🌸
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default Countdown
