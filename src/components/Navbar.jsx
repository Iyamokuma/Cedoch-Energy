import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import BrandLogo from './BrandLogo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/policies', label: 'Policies' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <BrandLogo />

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary navbar__cta">
            Get in Touch
          </Link>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
