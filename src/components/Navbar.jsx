import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#home',    label: 'Trang Chủ' },
  { href: '#story',   label: 'Câu Chuyện' },
  { href: '#details', label: 'Chi Tiết' },
  { href: '#gallery', label: 'Ảnh Cưới' },
  { href: '#rsvp',    label: 'RSVP' },
]

function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() { setMenuOpen(false) }

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>Tấn &amp; Kiều</a>

        <button
          className={`navbar-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
