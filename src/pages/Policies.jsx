import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import { POLICIES, IMAGES } from '../data/content.js'

export default function Policies() {
  return (
    <>
      <PageHeader
        eyebrow="Policy Statements"
        title="Responsible business, by design"
        lead="Our policies set the standard for how we operate — protecting our people, our clients, our communities and the environment."
        image={IMAGES.policies.safety}
      />

      <section className="section">
        <div className="container media-split" style={{ marginBottom: '3rem' }}>
          <div className="media-split__text">
            <span className="eyebrow">Our Commitment</span>
            <h2>Safety, quality and sustainability at our core</h2>
            <p>
              Cedoch Energy Limited maintains rigorous policies across health and safety, quality
              assurance, environmental protection and corporate social responsibility — ensuring
              responsible operations on every project.
            </p>
          </div>
          <div className="media-split__image">
            <img src={IMAGES.policies.safety} alt="Safety and quality operations" />
          </div>
        </div>

        <div className="container">
          <div className="grid grid--2">
            {POLICIES.map((p) => (
              <div className="card card--policy" key={p.title}>
                <span className="card__icon">
                  <Icon name={p.icon} size={26} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--brand">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="eyebrow eyebrow--light">Zero-Incident Culture</span>
            <h2>Safety is our cornerstone</h2>
            <p className="section__lead">
              Beyond profits and progress, Cedoch places a premium on the well-being of our
              workforce, clients, and the environment. We don't just operate — we lead.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Talk to Our Team <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
