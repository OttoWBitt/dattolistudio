import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import '../styles/navigation.css'

const links = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/noticias', label: 'Notícias' },
  { to: '/contato', label: 'Contato' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__logo" aria-label="Dattoli Studio — Início">
            <img
            src="/LOGO_KD3.png"
            alt="Dattoli Studio"
            onError={e => { e.currentTarget.src = '/LOGO_KD.jpg' }}
            style={{ mixBlendMode: 'multiply' }}
          />
          </Link>

          {/* Desktop links */}
          <ul className="nav__links">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`nav__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav__overlay${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
