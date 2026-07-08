import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { STATS, IMAGES } from '../data/content.js'

const MARQUEE = [
  'Oil & Gas',
  'Haulage',
  'Procurement',
  'Logistics',
  'Engineering',
  'Renewable Energy',
  'Manpower',
  'Waste Management',
]

export default function Hero() {
  return (
    <section className="hero-creative" aria-label="Hero">
      <div className="hero-creative__backdrop" aria-hidden="true">
        <img
          src={IMAGES.hero.cover}
          alt=""
          className="hero-creative__backdrop-img"
        />
        <div className="hero-creative__mesh" />
        <div className="hero-creative__scanlines" />
        <img
          src={IMAGES.logo}
          alt=""
          className="hero-creative__watermark"
        />
      </div>

      <div className="container hero-creative__shell">
        <div className="hero-creative__grid">
          <div className="hero-creative__copy">
            <div className="hero-creative__badge">
              <span className="hero-creative__pulse" />
              Est. 2023 · Nigeria · RC 7261790
            </div>

            <h1>
              Empowering Excellence in{' '}
              <span className="hero-creative__gradient">Integrated Energy</span> Solutions
            </h1>

            <p className="hero-creative__lead">
              A leading Nigerian company delivering a dynamic suite of services across oil &amp;
              gas, logistics, engineering and renewable energy — turning challenges into
              opportunities for growth.
            </p>

            <div className="hero-creative__actions">
              <Link to="/services" className="btn btn--primary btn--lg">
                Explore Services <Icon name="arrow" size={18} />
              </Link>
              <Link to="/contact" className="btn btn--ghost btn--lg">
                Partner With Us
              </Link>
            </div>

            <div className="hero-creative__chips">
              {['Safety First', '10+ Services', 'Zero-Incident Culture'].map((chip) => (
                <span className="hero-creative__chip" key={chip}>{chip}</span>
              ))}
            </div>
          </div>

          <div className="hero-creative__stage">
            <div className="hero-creative__orbit" aria-hidden="true">
              <span />
              <span />
            </div>

            <div className="hero-creative__frame hero-creative__frame--main">
              <img
                src={IMAGES.hero.welcome}
                alt="Cedoch field professional at an oil pump site"
              />
              <div className="hero-creative__frame-label">
                <strong>Field Operations</strong>
                <span>Trusted on every project site</span>
              </div>
            </div>

            <div className="hero-creative__frame hero-creative__frame--accent">
              <img
                src={IMAGES.hero.advantage}
                alt="Energy terminal infrastructure"
              />
            </div>

            <div className="hero-creative__float-stat hero-creative__float-stat--red">
              <span className="hero-creative__float-value">10+</span>
              <span className="hero-creative__float-label">Services</span>
            </div>

            <div className="hero-creative__float-stat hero-creative__float-stat--blue">
              <span className="hero-creative__float-value">2023</span>
              <span className="hero-creative__float-label">Founded</span>
            </div>
          </div>
        </div>

        <div className="hero-creative__ribbon" aria-hidden="true">
          <div className="hero-creative__ribbon-track">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-creative__stats">
          {STATS.map((s, i) => (
            <div
              className={`hero-creative__stat hero-creative__stat--${s.tone}`}
              key={s.label}
              style={{ '--i': i }}
            >
              <span className="hero-creative__stat-value">{s.value}</span>
              <span className="hero-creative__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
