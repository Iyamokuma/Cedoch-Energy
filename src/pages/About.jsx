import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import { OBJECTIVES, VALUES, CONTACT, IMAGES } from '../data/content.js'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A vision born from a passion for excellence"
        lead="Cedoch Energy Limited is redefining industry standards across the Nigerian energy sector — and beyond."
        image={IMAGES.about.summary}
      />

      <section className="section">
        <div className="container media-split">
          <div className="media-split__text">
            <span className="eyebrow">Executive Summary</span>
            <h2>Where innovation meets action</h2>
            <p>
              At Cedoch Energy Limited, we redefine the narrative of the energy landscape.
              Founded in Nigeria in 2023 from the burden to inject vitality into the oil &amp;
              energy industry through our dynamic suite of services, we serve our clients
              excellently. Cedoch Energy Limited is registered with the CAC as a private
              company limited by shares with the number {CONTACT.cacNumber}.
            </p>
            <p>
              We propel industries forward with services ranging from the seamless haulage of
              petroleum products to cutting-edge renewable energy solutions. Our commitment to
              pioneering solutions and setting new industry benchmarks is unparalleled.
            </p>
            <p>
              What sets us apart? Actionable excellence. Cedoch thrives on challenges, turning
              them into opportunities for growth and transformation. Our adaptability and
              commitment to customization ensure that your goals aren't just realized —
              they're surpassed.
            </p>
            <p>
              Safety is our cornerstone. Beyond profits and progress, Cedoch places a premium
              on the well-being of our workforce, clients, and the environment. We don't just
              operate; we lead, setting the standard for responsible business practices.
            </p>
          </div>
          <div className="media-split__image">
            <img src={IMAGES.about.summary} alt="Cedoch energy operations" />
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container media-split media-split--reverse">
          <div className="media-split__text">
            <span className="eyebrow">Vision &amp; Mission</span>
            <h2>Empowering progress, enriching lives</h2>
            <div className="grid grid--2" style={{ gap: '1rem', marginTop: '1.5rem' }}>
              <div className="card card--pillar">
                <span className="card__icon">
                  <Icon name="sun" size={24} />
                </span>
                <h3>Our Vision</h3>
                <p>
                  To be the vanguard of innovation and sustainability in the energy sector — the
                  driving force behind transformative solutions that propel our clients forward.
                </p>
              </div>
              <div className="card card--pillar">
                <span className="card__icon">
                  <Icon name="bolt" size={24} />
                </span>
                <h3>Our Mission</h3>
                <p>
                  To deliver unparalleled integrated energy services, fostering innovation and
                  embracing sustainability — empowering our clients, uplifting communities, and
                  leaving an indelible mark on the industries we serve.
                </p>
              </div>
            </div>
            <div className="pillars-strip">
              <span>Transform</span>
              <span>Empowerment</span>
              <span>Excellence</span>
            </div>
          </div>
          <div className="media-split__image">
            <img src={IMAGES.about.vision} alt="Vision and mission in energy sector" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container media-split">
          <div className="media-split__text">
            <span className="eyebrow">Company Objectives</span>
            <h2>Our commitment has never wavered</h2>
            <p>
              Since our establishment, our commitment to these objectives has never wavered.
              With our diverse team, talents, technologies and innovations, we always stay on
              course.
            </p>
          </div>
          <div className="media-split__image">
            <img src={IMAGES.about.objectives} alt="Company objectives in action" />
          </div>
        </div>
        <div className="container" style={{ marginTop: '2.5rem' }}>
          <ul className="objectives">
            {OBJECTIVES.map((o, i) => (
              <li key={i}>
                <span className="objectives__num">{String(i + 1).padStart(2, '0')}</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--brand">
        <div className="container founder">
          <div className="founder__layout">
            <div className="founder__photo">
              <img src={IMAGES.team.founder} alt="Eze Odocha, Founder of Cedoch Energy Limited" />
            </div>
            <div className="founder__message">
              <span className="eyebrow eyebrow--light">Founder's Message</span>
              <blockquote>
                <p>
                  "I am thrilled to welcome you to Cedoch Energy Limited, a vision born from a
                  passion for excellence and a commitment to redefining industry standards.
                </p>
                <p>
                  With over a decade of experience in the energy industry rendering technical and
                  consultancy services spanning critical well drilling, completions and EPC
                  projects, I have witnessed firsthand the transformative power of innovation and
                  strategic solutions. Cedoch was founded in early 2023 with the vision to infuse
                  these principles into the very core of our operations.
                </p>
                <p>
                  As we embark on this exciting chapter, we invite you to join us in reshaping
                  industries, embracing innovation, and creating a future where possibilities are
                  limitless. Here's to a future of collaborative success and pioneering
                  excellence."
                </p>
              </blockquote>
              <div className="founder__sig">
                <strong>Eze Odocha</strong>
                <span>Founder, Cedoch Energy Limited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="eyebrow">Our Values</span>
            <h2>The principles that guide us</h2>
          </div>
          <div className="grid grid--3">
            {VALUES.map((v, i) => (
              <div className="card card--why" key={v.title}>
                <span className="card__number">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Ready to experience the Cedoch advantage?</h2>
              <p>Join us in reshaping industries and unleashing a future where innovation knows no bounds.</p>
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
