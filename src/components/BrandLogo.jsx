import { Link } from 'react-router-dom'

export default function BrandLogo({ className = '', light = false, link = true }) {
  const img = (
    <img
      src="/assets/logo/cedoch-logo-full.png"
      alt="Cedoch Energy Ltd"
      className={`brand-logo ${light ? 'brand-logo--light' : ''} ${className}`}
    />
  )

  if (!link) return img

  return (
    <Link to="/" className="brand-logo-link" aria-label="Cedoch Energy Limited home">
      {img}
    </Link>
  )
}
