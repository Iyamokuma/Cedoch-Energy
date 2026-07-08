import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import { SERVICES, IMAGES } from '../data/content.js'

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [hash])

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="What we do"
        lead="Our dynamic range of services spans the spectrum of the energy and oil & gas sectors, providing innovative and tailored solutions to meet the diverse needs of our clients."
        image={IMAGES.services.overview}
      />

      <section className="section">
        <div className="container">
          <div className="media-split" style={{ marginBottom: '3rem' }}>
            <div className="media-split__text">
              <span className="eyebrow">Our Services</span>
              <h2>Innovative and tailored solutions</h2>
              <p>
                Our dynamic range of services spans the spectrum of the{' '}
                <strong>energy and oil &amp; gas</strong> sectors, providing innovative and
                tailored solutions to meet the diverse needs of our clients.
              </p>
            </div>
            <div className="media-split__image">
              <img src={IMAGES.services.overview} alt="Refinery and energy plant operations" />
            </div>
          </div>

          <div className="services-list">
            {SERVICES.map((s, i) => (
              <article className="service-row" id={s.id} key={s.id}>
                <div className="service-row__media">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <span className="service-row__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="service-row__body">
                  <span className="card__icon">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h2>{s.title}</h2>
                  <p>{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Excellence permeates every service we offer</h2>
              <p>
                We don't just meet expectations; we redefine them. Partner with us for a
                transformative experience where your success is our priority.
              </p>
            </div>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request a Service <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
