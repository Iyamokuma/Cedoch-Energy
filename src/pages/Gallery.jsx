import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import { GALLERY } from '../data/content.js'

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Our work in action"
        lead="We don't just meet expectations; we redefine them. Partner with us for a transformative experience where your success is our priority."
        image={GALLERY[4].src}
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((item) => (
              <figure className="gallery-item gallery-item--full" key={item.src}>
                <img src={item.src} alt={item.title} loading="lazy" />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Ready to partner with Cedoch?</h2>
              <p>
                From haulage and logistics to engineering and renewable energy — let us deliver
                solutions tailored to your needs.
              </p>
            </div>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get in Touch <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
