import React, { useState } from 'react'
import { BRIDE, BASE } from '../config'

const FORMSPREE_ID = 'YOUR_FORM_ID'
const USE_FORMSPREE = FORMSPREE_ID !== 'YOUR_FORM_ID'

function RSVP() {
  const [form, setForm] = useState({ name: '', attending: 'yes' })
  const [status, setStatus] = useState('idle')

  function handleChange({ target: { name, value } }) {
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      if (USE_FORMSPREE) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Form error')
      } else {
        await new Promise((r) => setTimeout(r, 1200))
      }
      setStatus('success')
      setForm({ name: '', attending: 'yes' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="rsvp-section">
        <div className="rsvp-card">
          <div className="rsvp-success-msg">
            <div className="rsvp-envelopes">������</div>
            <h2>Cảm ơn bạn!</h2>
            <p>Chúng tôi đã nhận được xác nhận của bạn.</p>
            <button className="rsvp-btn" onClick={() => setStatus('idle')}>Gửi lại</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="rsvp-section">
      <div className="rsvp-card" data-animate>
        <h2 className="rsvp-heading">Xác nhận tham dự</h2>

        {status === 'error' && (
          <p className="rsvp-error">⚠️ Có lỗi xảy ra. Vui lòng thử lại.</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="rsvp-field">
            <label htmlFor="rsvp-name">Họ và tên</label>
            <input
              id="rsvp-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nhập tên của bạn"
              required
            />
          </div>

          <div className="rsvp-field">
            <label>Bạn sẽ tham dự chứ?</label>
            <div className="rsvp-radio-group">
              <label className={`rsvp-radio${form.attending === 'yes' ? ' active' : ''}`}>
                <input type="radio" name="attending" value="yes" checked={form.attending === 'yes'} onChange={handleChange} />
                <span className="radio-dot" />
                Có, tôi sẽ tham dự
              </label>
              <label className={`rsvp-radio${form.attending === 'no' ? ' active' : ''}`}>
                <input type="radio" name="attending" value="no" checked={form.attending === 'no'} onChange={handleChange} />
                <span className="radio-dot" />
                Tôi bận, rất tiếc không thể tham dự
              </label>
            </div>
          </div>

          <button type="submit" className="rsvp-btn" disabled={status === 'loading'}>
            {status === 'loading' ? 'Đang gửi...' : 'Gửi xác nhận'}
          </button>
        </form>
      </div>

      <div className="rsvp-qr-wrap" data-animate>
        <div className="rsvp-envelopes">������</div>
        <div className="qr-card">
          <h3 className="qr-name">{BRIDE}</h3>
          <img src={`${BASE}/images/wedding/qr-bride.png`} alt="QR Code" className="qr-image" />
        </div>
        <p className="qr-hint">Quét mã QR để gửi quà mừng tới<br />chúng mình nhé</p>
      </div>
    </section>
  )
}

export default RSVP
