import React, { useState, useRef, useEffect } from 'react'
import { GROOM, BRIDE } from '../config'
import AudioControl from './AudioControl'
import { BASE } from '../config'

const PHOTO_URL = `${BASE}/images/wedding/wedding-01.jpg`

function Fireworks({ active }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    resize()

    class Particle {
      constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = {
          x: (Math.random() - 0.5) * 14,
          y: (Math.random() - 0.5) * 10
        }
        this.alpha = 1
        this.friction = 0.96
        this.gravity = 0.12
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }
      update() {
        this.velocity.x *= this.friction
        this.velocity.y *= this.friction
        this.velocity.y += this.gravity
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.alpha -= 0.012
      }
    }

    const colors = ['#ff0000', '#ffd700', '#ff69b4', '#00ced1', '#adff2f', '#ffffff']
    const createFirework = (x, y) => {
      const color = colors[Math.floor(Math.random() * colors.length)]
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle(x, y, color))
      }
    }

    let lastShot = 0
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (time - lastShot > 700) {
        // Left side
        createFirework(canvas.width * 0.15, canvas.height * 0.15 - 20)
        // Right side
        createFirework(canvas.width * 0.85, canvas.height * 0.15 - 20)
        lastShot = time
      }

      particles = particles.filter(p => p.alpha > 0)
      particles.forEach(p => {
        p.update()
        p.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 15
      }}
    />
  )
}

function EnvelopeReveal() {
  const [phase, setPhase] = useState('idle') // idle | opening | open
  const [visible, setVisible] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handleClick() {
    if (phase === 'idle') {
      setPhase('opening')
      setTimeout(() => setPhase('open'), 900)
    } else if (phase === 'open') {
      setPhase('idle')
    }
  }

  const isOpen = phase === 'opening' || phase === 'open'

  return (
    <section ref={sectionRef} className={`er-section ${isOpen ? 'is-open' : ''}`} onClick={handleClick}>
      <Fireworks active={phase === 'open' && isIntersecting} />
      <style>{`
        .er-section {
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #f7f0e6 0%, #ede4d6 100%);
          overflow: hidden;
          cursor: pointer;
          user-select: none;
          padding: 40px 20px 30px;
          box-sizing: border-box;
          transition: padding-top 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .er-section.is-open {
          padding-top: 100px;
        }

        /* ── Top header (moves up when open) ── */
        .er-header {
          text-align: center;
          margin-bottom: 8px;
          position: relative;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
        }
        .er-section.is-open .er-header {
          transform: translateY(-80px);
        }

        .er-header-line {
          font-family: 'Montserrat', sans-serif;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -3px;
          text-transform: uppercase;
          color: #a08c6a;
          margin: 0 10px 10px;
          padding: 0px 20px 0px;
        }
        .er-header-title {
          font-family: 'Playfair Display SC', serif;
          font-size: 24px;
          font-weight: 700;
          color: #2c2c2c;
          letter-spacing: 3px;
          margin-bottom: 2px;
        }
        .er-heart-divider {
          color: #c0505a;
          font-size: 22px;
          margin: 2px 0 4px;
        }

        /* ── Couple names (moves up when open) ── */
        .er-names-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 40px;
          position: relative;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
        }
        .er-section.is-open .er-names-row {
          transform: translateY(-94px);
        }

        .er-name {
          font-family: 'Alex Brush';
          font-size: 48px;
          color: #2c2c2c;
          font-weight: 500;
        }

        /* ── Photo bg wrap ── */
        .er-photo-bg-wrap {
          width: 50px;
          height: 50px;
          background-image: url('${BASE}/images/photo-bg-wrap.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          margin: 0 auto 65px;
          position: relative;
          z-index: 1;
          transition: opacity 0.5s ease;
        }
        .er-section.is-open .er-photo-bg-wrap {
          opacity: 0;
        }

        /* ── Envelope shadow ── */
        .er-envelope-shadow {
          width: 440px;
          height: 30px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%);
          margin-top: -10px;
          position: relative;
          z-index: 1;
        }

        /* ── Envelope container ── */
        .er-envelope-container {
          position: relative;
          width: 430px;
          height: 286px;
          margin: 0 auto;
          z-index: 2;
          transform: translateY(100px);
          opacity: 0;
          transition: transform 1.3s ease-out, opacity 1.3s ease-out;
        }
        .er-envelope-container.visible {
          transform: translateY(0);
          opacity: 1;
        }

        /* ── The pocket (front face of envelope) ── */
        .er-pocket {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 286px;
          background: linear-gradient(170deg, #8b2035 0%, #6b1628 40%, #5a1020 100%);
          border-radius: 0 0 4px 4px;
          z-index: 5;
          overflow: hidden;
        }
        .er-pocket::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 215px solid #9a2540;
          border-right: 215px solid #9a2540;
          border-bottom: 125px solid transparent;
          z-index: 1;
        }
        .er-pocket::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-bottom: 140px solid #7a1a30;
          border-left: 215px solid transparent;
          border-right: 215px solid transparent;
          z-index: 2;
        }

        /* ── Front flap (top, flips open) ── */
        .er-flap-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 430px;
          height: 0;
          z-index: 6;
          perspective: 800px;
        }
        .er-flap {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-top: 180px solid #a0293f;
          border-left: 215px solid transparent;
          border-right: 215px solid transparent;
          transform-origin: top center;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 6;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }
        .er-flap.open {
          transform: rotateX(180deg);
        }

        /* ── Inner back of envelope (visible when flap opens) ── */
        .er-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0;
          z-index: 3;
        }
        .er-inner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-top: 180px solid #d4a0a0;
          border-left: 215px solid transparent;
          border-right: 215px solid transparent;
        }

        /* ── Letter (photo card) ── */
        .er-letter {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 354px;
          bottom: 40px;
          z-index: 10;
          border-radius: 6px;
          opacity: 0;
          transition: bottom 1s cubic-bezier(0.34, 1.56, 0.64, 1),
                      opacity 0.6s ease;
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }
        .er-letter.revealed {
          bottom: 200px;
          opacity: 1;
        }
        .er-letter img {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 3 / 3;
          object-fit: cover;
          border-radius: 6px;
        }

        /* ── Letter hearts ── */
        .er-letter-hearts {
          position: absolute;
          bottom: -120px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 15px;
          pointer-events: none;
          z-index: 11;
          opacity: 0;
          transition: opacity 0.5s ease;
          margin-top: 50px;
        }
        .er-letter.revealed .er-letter-hearts {
          opacity: 1;
        }
        .lh-heart {
          font-size: 50px;
          color: white;
          text-shadow: 0 0 15px rgba(255, 255, 255, 1), 0 0 25px rgba(192, 80, 90, 1);
          animation: lh-heart-pulse 1.5s ease-in-out infinite alternate;
        }
        .lh-heart:nth-child(2n) {
          animation-delay: 0.5s;
        }

        @keyframes lh-heart-pulse {
          from { transform: scale(1); opacity: 0.7; }
          to { transform: scale(1.3); opacity: 1; }
        }

        /* ── Wax seal ── */
        .er-wax-seal {
          position: absolute;
          bottom: 200px;
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          z-index: 7;
          border-radius: 50%;
          background: radial-gradient(circle at 38% 38%, #daa520, #8b6914 60%, #6b4f10);
          box-shadow:
            0 2px 8px rgba(0,0,0,0.3),
            inset 0 1px 3px rgba(255,255,255,0.2),
            inset 0 -2px 4px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .er-wax-seal.hidden {
          opacity: 0;
          transform: translateX(-50%) scale(0.3);
        }
        .er-wax-seal-inner {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }

        /* ── Hearts ── */
        .er-hearts {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 8;
        }
        /* ── Hearts ── */
        .er-hearts {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 8;
          overflow: hidden;
        }
        .er-heart {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #c0505a;
          transform: rotate(-45deg);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .er-heart::before,
        .er-heart::after {
          content: "";
          width: 14px;
          height: 14px;
          background: #c0505a;
          border-radius: 50%;
          position: absolute;
        }
        .er-heart::before {
          top: -7px;
          left: 0;
        }
        .er-heart::after {
          top: 0;
          left: 7px;
        }

        .er-envelope-container.open .er-heart {
          animation: er-heart-rise 3s ease-out infinite;
        }

        @keyframes er-heart-rise {
          0% {
            opacity: 0;
            transform: translateY(150px) rotate(-45deg) scale(0.5);
          }
          15% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-250px) rotate(-45deg) scale(1.2);
          }
        }

        /* Define multiple heart paths */
        .er-heart.h1 { left: 20%; animation-delay: 0s; }
        .er-heart.h2 { left: 40%; animation-delay: 0.5s; }
        .er-heart.h3 { left: 60%; animation-delay: 1.2s; }
        .er-heart.h4 { left: 80%; animation-delay: 0.8s; }
        .er-heart.h5 { left: 30%; animation-delay: 1.8s; }
        .er-heart.h6 { left: 70%; animation-delay: 2.2s; }
      `}</style>

      {/* Audio CD control */}
      <AudioControl />

      {/* Header */}
      <div className="er-header">
        <div className="er-header-line">W E D D I N G&nbsp;&nbsp;&nbsp;I N V I T A T I O N</div>
        <div className="er-header-title">THIỆP MỜI CƯỚI</div>
      </div>

      {/* Couple names */}
      <div className="er-names-row">
        <span className="er-name">{BRIDE}</span>
        <span className="er-name-amp er-heart-divider">&#10084;</span>
        <span className="er-name">{GROOM}</span>
      </div>

      {/* Decorative image */}
      <div className="er-photo-bg-wrap" />

      {/* Envelope */}
      <div className={`er-envelope-container ${isOpen ? 'open' : ''} ${visible ? 'visible' : ''}`}>
        {/* Hearts */}
        <div className="er-hearts">
          <div className="er-heart h1" />
          <div className="er-heart h2" />
          <div className="er-heart h3" />
          <div className="er-heart h4" />
          <div className="er-heart h5" />
          <div className="er-heart h6" />
        </div>

        {/* Top flap */}
        <div className="er-flap-wrap">
          <div className={`er-flap ${isOpen ? 'open' : ''}`} />
        </div>

        {/* Inner back (visible behind flap when open) */}
        <div className="er-inner" />

        {/* Letter / photo */}
        <div className={`er-letter ${phase === 'open' ? 'revealed' : ''}`}>
          <img src={PHOTO_URL} alt="Wedding" loading="eager" />
          <div className="er-letter-hearts">
            <span className="lh-heart">❤</span>
            <span className="lh-heart">❤</span>
            <span className="lh-heart">❤</span>
            <span className="lh-heart">❤</span>
            <span className="lh-heart">❤</span>
            <span className="lh-heart">❤</span>
          </div>
        </div>

        {/* Pocket front */}
        <div className="er-pocket" />

        {/* Wax seal */}
        <div className={`er-wax-seal ${isOpen ? 'hidden' : ''}`}>
          <div className="er-wax-seal-inner">&#10022;</div>
        </div>
      </div>

      {/* Shadow */}
      <div className="er-envelope-shadow" />

      {/* Hint */}
      <div className="er-hint">
        {phase === 'open' ? 'Chạm để đóng thiệp' : 'Chạm để mở thiệp'}
      </div>
    </section>
  )
}

export default EnvelopeReveal
