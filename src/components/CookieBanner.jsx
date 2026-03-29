import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/cookie.css'

const STORAGE_KEY = 'kd_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          Utilizamos cookies essenciais para o funcionamento do site. Ao continuar navegando,
          você concorda com nossa{' '}
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
        </p>
        <div className="cookie-banner__actions">
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={handleAccept}>
            Aceitar
          </button>
          <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={handleDecline}>
            Recusar
          </button>
        </div>
      </div>
    </div>
  )
}
