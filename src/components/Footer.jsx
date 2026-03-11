import React from 'react'
import { GROOM, BRIDE, DATE_SHORT, HASHTAG } from '../config'

const LINKS = [
  { href: '#home',    label: 'Trang Chủ' },
  { href: '#story',   label: 'Câu Chuyện' },
  { href: '#details', label: 'Chi Tiết' },
  { href: '#gallery', label: 'Ảnh Cưới' },
  { href: '#rsvp',    label: 'RSVP' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-names">
          {GROOM} <span>&</span> {BRIDE}
        </div>
        <div className="footer-date">{DATE_SHORT}</div>
        <div className="footer-hashtag">#{HASHTAG}</div>

        <p className="footer-quote">
          &ldquo;Hôm nay tôi lấy bạn làm người bạn đời, để yêu và trân trọng,<br />
          để vui cùng niềm vui, để vượt qua mọi khó khăn,<br />
          từ ngày hôm nay cho đến mãi mãi.&rdquo;
        </p>

        <nav className="footer-links" aria-label="Footer navigation">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <p className="footer-copy">
          Made with ❤️ for our special day &nbsp;·&nbsp; 2026
        </p>
      </div>
    </footer>
  )
}

export default Footer
