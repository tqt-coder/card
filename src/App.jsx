import React, { useEffect, useState } from 'react'
import EnvelopeReveal from './components/EnvelopeReveal'
import InvitationInfo from './components/InvitationInfo'
import AboutUs from './components/AboutUs'
import PoemOval from './components/PoemOval'
import LoveGallery from './components/LoveGallery'
import SaveTheDate from './components/SaveTheDate'
import RSVP from './components/RSVP'
import ThankYou from './components/ThankYou'
import './App.css'

const DESIGN_WIDTH = 500

function App() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function updateScale() {
      const vw = window.innerWidth
      setScale(vw < DESIGN_WIDTH ? vw / DESIGN_WIDTH : 1)
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app" style={{ zoom: scale }}>
      <main>
        <EnvelopeReveal />
        <InvitationInfo />
        <AboutUs />
        <PoemOval />
        <LoveGallery />
        <SaveTheDate />
        <RSVP />
        <ThankYou />
      </main>
    </div>
  )
}

export default App
