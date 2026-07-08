import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Hero from '../components/Hero.jsx'
import { SERVICES, WHY_CHOOSE_US, VALUES, IMAGES, GALLERY } from '../data/content.js'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="welcome welcome--compact">
        <div className="container welcome__content">
          <span className="eyebrow">Welcome</span>
          <h2>Welcome!</h2>
          <p>
            Cedoch Energy Limited is a leading Nigerian company that specializes in providing a
            diverse range of integrated energy services, catering to the dynamic needs of
            industries such as oil and gas, logistics, engineering, and renewable energy. With a
            commitment to excellence and innovation, Cedoch has emerged as a trusted partner for
            clients seeking seamless and reliable solutions. We welcome you to a lifelong
            partnership of excellence!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container media-split">
          <div className="media-split__text">
            <span className="eyebrow">Who We Are</span>
            <h2>Redefining the narrative of the energy landscape</h2>
            <p>
              Founded in Nigeria in 2023 from the burden to inject vitality into the oil &amp;
              energy industry, Cedoch Energy Limited propels industries forward with services
              ranging from the seamless haulage of petroleum products to cutting-edge renewable
              energy solutions.
            </p>
            <p>
              What sets us apart is actionable excellence. We don't just meet expectations — we
              exceed them. Safety is our cornerstone: beyond profits and progress, we place a
              premium on the well-being of our workforce, clients and the environment.
            </p>
            <Link to="/about" className="text-link">
              Learn more about us <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="media-split__image">
            <img src={IMAGES.about.summary} alt="Energy industry operations" />
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Our principal services</h2>
            </div>
            <Link to="/services" className="btn btn--outline">
              View All Services <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="grid grid--3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link to={`/services#${s.id}`} className="card card--service" key={s.id}>
                <div className="card__thumb">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <span className="card__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="card__more">
                  Learn more <Icon name="arrow" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container media-split media-split--reverse">
          <div className="media-split__text">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Experience the Cedoch advantage</h2>
            <p>
              Choose Cedoch Energy Limited for a partnership that transcends traditional service
              boundaries. In a world of choices, selecting the right partner for your energy
              needs is a critical decision.
            </p>
            <Link to="/about" className="text-link">
              Discover our story <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="media-split__image">
            <img src={IMAGES.about.whyChoose} alt="Cedoch energy operations" />
          </div>
        </div>

        <div className="container">
          <div className="grid grid--2" style={{ marginTop: '3rem' }}>
            {WHY_CHOOSE_US.map((w, i) => (
              <div className="card card--why" key={w.title}>
                <span className="card__number">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gallery-preview">
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">Gallery</span>
              <h2>Our work in action</h2>
            </div>
            <Link to="/gallery" className="btn btn--outline">
              View Gallery <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="gallery-grid gallery-grid--preview">
            {GALLERY.slice(0, 4).map((item) => (
              <figure className="gallery-item" key={item.src}>
                <img src={item.src} alt={item.title} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--brand">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="eyebrow eyebrow--light">Our Values</span>
            <h2>Inclusiveness. Innovation. Integrity.</h2>
          </div>
          <div className="grid grid--3">
            {VALUES.map((v) => (
              <div className="card card--value" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <img src={IMAGES.hero.advantage} alt="" className="cta-banner__bg" aria-hidden="true" />
        <div className="cta-banner__overlay" aria-hidden="true" />
        <div className="container cta-banner__inner">
          <div>
            <h2>Let's work together</h2>
            <p>
              Choose Cedoch Energy Limited for a partnership that transcends traditional service
              boundaries. Experience the Cedoch advantage.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Contact Us Today <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
