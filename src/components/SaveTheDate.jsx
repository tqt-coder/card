import React from 'react'
import { RESTAURANT_NAME, RESTAURANT_MAP, LUNAR_DATE, DATE_FULL } from '../config'

/*  April 2026 calendar
    April 1 = Wednesday → offset 2 (Mon-based, 0-indexed)
    30 days total, highlight day 26 (Sunday)               */
const CAL = { offset: 2, days: 30, highlight: 26 }

function CalendarGrid() {
  const cells = []
  for (let i = 0; i < CAL.offset; i++) {
    cells.push(<div key={`e${i}`} className="cal-cell cal-empty" />)
  }
  for (let d = 1; d <= CAL.days; d++) {
    const hl = d === CAL.highlight
    cells.push(
      <div key={d} className={`cal-cell${hl ? ' cal-highlight' : ''}`}>
        {d}
        {hl && <span className="cal-heart">❤</span>}
      </div>
    )
  }
  return cells
}

function SaveTheDate() {
  return (
    <section className="savedate-section">
      <h2 className="savedate-heading" data-animate>Save the Date</h2>

      <div className="calendar-wrap" data-animate>
        <div className="calendar">
          <div className="cal-header">
            <span className="cal-month">4</span>
            <span className="cal-year">2026</span>
          </div>
          <div className="cal-weekdays">
            {['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d) => (
              <div key={d} className="cal-weekday">{d}</div>
            ))}
          </div>
          <div className="cal-grid">
            <CalendarGrid />
          </div>
        </div>
      </div>

      <div className="savedate-time" data-animate>
        <h3 className="savedate-time-label">TIME</h3>
        <p className="savedate-time-value">{DATE_FULL}</p>
        <p className="savedate-time-lunar">{LUNAR_DATE}</p>
      </div>

      {RESTAURANT_MAP && (
        <div className="savedate-map" data-animate>
          <iframe
            src={RESTAURANT_MAP}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ nhà hàng"
          />
        </div>
      )}

      <div className="savedate-address" data-animate>
        <h3 className="address-display-heading">ADDRESS</h3>
        <span className="address-display-name">{RESTAURANT_NAME}</span>
      </div>

      <div className="savedate-photo" data-animate>
        <img src="/images/wedding/wedding-11.jpg" alt="Ảnh cưới" loading="lazy" />
      </div>
    </section>
  )
}

export default SaveTheDate
