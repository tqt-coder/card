import React, { useState, useRef, useCallback, useEffect } from 'react'
import { BASE } from '../config'

const MUSIC_URL = `${BASE}/audio/wedding_audio.m4a`

function AudioControl() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)
  const triedAutoplay = useRef(false)

  // Attempt autoplay on mount; if blocked, play on first user interaction
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const tryPlay = () => {
      audio.play().then(() => {
        setPlaying(true)
        cleanup()
      }).catch(() => {})
    }

    const onInteraction = () => {
      if (!audio.paused) { cleanup(); return }
      tryPlay()
    }

    const cleanup = () => {
      document.removeEventListener('click', onInteraction, true)
      document.removeEventListener('touchend', onInteraction, true)
    }

    // Try autoplay first
    tryPlay()

    // Fallback: wait for user gesture (touchend works on iOS, click on desktop/Android)
    document.addEventListener('click', onInteraction, true)
    document.addEventListener('touchend', onInteraction, true)

    return cleanup
  }, [])

  const toggle = useCallback((e) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [playing])

  return (
    <>
      <style>{`
        .audio-control {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 20;
          cursor: pointer;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          padding: 0;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }
        .audio-control img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          background: #000;
        }
        .audio-control.playing img {
          animation: cd-spin 3s linear infinite;
        }
        @keyframes cd-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />
      <button
        className={`audio-control ${playing ? 'playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Tắt nhạc' : 'Bật nhạc'}
        type="button"
      >
        <img src={`${BASE}/images/audio-cd.png`} alt="music icon" />
      </button>
    </>
  )
}

export default AudioControl
