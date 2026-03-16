import React from 'react'
import { RESTAURANT_NAME, RESTAURANT_MAP, LUNAR_DATE, DATE_FULL, DATE_ISO, BASE } from '../config'

// Compute calendar data from the wedding date in .env
const _weddingDate = new Date(DATE_ISO)
const _year = _weddingDate.getFullYear()
const _month = _weddingDate.getMonth() // 0-indexed
const _day = _weddingDate.getDate()
// Day-of-week of the 1st of the month (Mon=0 based)
const _firstDow = (new Date(_year, _month, 1).getDay() + 6) % 7
// Total days in the month
const _totalDays = new Date(_year, _month + 1, 0).getDate()

const CAL = { offset: _firstDow, days: _totalDays, highlight: _day }

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
            <span className="cal-month">{_month + 1}</span>
            <span className="cal-year">{_year}</span>
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
        <img src={`${BASE}/images/wedding/wedding-11.jpg`} alt="Ảnh cưới" loading="lazy" />
      </div>
    </section>
  )
}

export default SaveTheDate
