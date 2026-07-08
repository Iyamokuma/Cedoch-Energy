import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo.jsx'
import Icon from './Icon.jsx'
import { CONTACT, SERVICES } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <BrandLogo light link={false} />
          <p>
            Empowering excellence in integrated energy solutions. A trusted partner for oil
            &amp; gas, logistics, engineering and renewable energy across Nigeria and beyond.
          </p>
          <p className="footer__cac">RC {CONTACT.cacNumber} — Registered with the CAC as a private company limited by shares.</p>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/policies">Policy Statements</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            {CONTACT.phones.map((p, i) => (
              <li key={p}>
                <Icon name="phone" size={16} />
                <a href={`tel:${CONTACT.phoneLinks[i]}`}>{p}</a>
              </li>
            ))}
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <Icon name="pin" size={16} />
              <span>Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {new Date().getFullYear()} Cedoch Energy Limited. All rights reserved.</span>
          <span>Empowering Progress, Enriching Lives</span>
        </div>
      </div>
    </footer>
  )
}
