import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'
import { CONTACT, SERVICES, IMAGES } from '../data/content.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name}${form.service ? ` — ${form.service}` : ''}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's work together"
        lead="Thank you for considering Cedoch Energy Limited. Reach out and let's start a lifelong partnership of excellence."
        image={IMAGES.hero.contact}
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <h2>Get in touch</h2>
            <p>
              Whether you need haulage, procurement, logistics or renewable energy solutions,
              our team is ready to help.
            </p>
            <div className="contact__image">
              <img src={IMAGES.hero.contact} alt="Energy terminal and storage facilities" />
            </div>
            <ul className="contact__list">
              {CONTACT.phones.map((p, i) => (
                <li key={p}>
                  <span className="card__icon">
                    <Icon name="phone" size={20} />
                  </span>
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${CONTACT.phoneLinks[i]}`}>{p}</a>
                  </div>
                </li>
              ))}
              <li>
                <span className="card__icon">
                  <Icon name="mail" size={20} />
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
              </li>
              <li>
                <span className="card__icon">
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <strong>Location</strong>
                  <span>Nigeria</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={submit}>
            <h3>Send us a message</h3>
            <div className="form-row">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>
            <label>
              Service of Interest
              <select name="service" value={form.service} onChange={update}>
                <option value="">Select a service (optional)</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                placeholder="Tell us about your project or enquiry..."
                required
              />
            </label>
            <button type="submit" className="btn btn--primary btn--lg">
              Send Message <Icon name="arrow" size={18} />
            </button>
            {sent && (
              <p className="form-note">
                Your email client should have opened with your message. We look forward to
                hearing from you!
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
