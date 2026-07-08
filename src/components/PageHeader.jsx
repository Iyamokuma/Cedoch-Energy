export default function PageHeader({ eyebrow, title, lead, image }) {
  return (
    <section
      className={`page-header ${image ? 'page-header--image' : ''}`}
      style={image ? { '--page-header-image': `url(${image})` } : undefined}
    >
      {image && <div className="page-header__overlay" aria-hidden="true" />}
      <div className="container">
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="page-header__lead">{lead}</p>}
      </div>
    </section>
  )
}
