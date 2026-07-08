const paths = {
  truck: (
    <>
      <path d="M1 5h13v10H1z" />
      <path d="M14 8h4l3 3v4h-7" />
      <circle cx="5.5" cy="17.5" r="2" />
      <circle cx="16.5" cy="17.5" r="2" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="3.5" width="14" height="18" rx="2" />
      <path d="M9 2h6v3H9z" />
      <path d="M9 10h6M9 14h6M9 18h3" />
    </>
  ),
  crane: (
    <>
      <path d="M3 21h18" />
      <path d="M7 21V5l12 4" />
      <path d="M19 9v5" />
      <path d="M19 14a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
      <path d="M7 9h5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.7-3.6 3.4-5.5 6.5-5.5s5.8 1.9 6.5 5.5" />
      <path d="M16 5.2a3.4 3.4 0 0 1 0 5.9" />
      <path d="M18 14.8c1.9.8 3.1 2.4 3.5 4.7" />
    </>
  ),
  academy: (
    <>
      <path d="M12 4 2 9l10 5 10-5-10-5z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v5" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10 12 3 12 3z" />
      <path d="M9.5 14.5a3 3 0 0 0 2.5 3" />
    </>
  ),
  ship: (
    <>
      <path d="M4 15l-1.5 4.5c2 0 2.5 1.5 4.5 1.5s2.5-1.5 4.5-1.5 2.5 1.5 4.5 1.5 2.5-1.5 4.5-1.5L19 15" />
      <path d="M5 15V9h14v6" />
      <path d="M12 9V5h4l-1 4" />
      <path d="M3 15h18" />
    </>
  ),
  recycle: (
    <>
      <path d="M7 19H4.5a1.5 1.5 0 0 1-1.3-2.3L5 13.5" />
      <path d="M11 19h5.5a1.5 1.5 0 0 0 1.3-2.3L16 13.5" />
      <path d="M14.5 8.5 12 4.2a1.5 1.5 0 0 0-2.6 0L7.7 7" />
      <path d="m9.5 16.5 1.5 2.5-1.5 2.5" />
      <path d="m17.5 10 2.7-.7-.7-2.8" />
      <path d="m5.7 9.8-2.9-.3.9-2.7" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 13.5a7.7 7.7 0 0 0 0-3l2-1.6-2-3.4-2.4 1a7.7 7.7 0 0 0-2.6-1.5L14 2.5h-4L9.6 5a7.7 7.7 0 0 0-2.6 1.5l-2.4-1-2 3.4 2 1.6a7.7 7.7 0 0 0 0 3l-2 1.6 2 3.4 2.4-1a7.7 7.7 0 0 0 2.6 1.5l.4 2.5h4l.4-2.5a7.7 7.7 0 0 0 2.6-1.5l2.4 1 2-3.4-2-1.6z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.3 7.5 10 4.3-1.7 7.5-5 7.5-10v-6L12 2.5z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 9 2.3 2.3L15.5 7" />
      <path d="M8 14l-1.5 7.5L12 19l5.5 2.5L16 14" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 20C5 9 12 4 20 4c0 10-5 16-13 16" />
      <path d="M5 20c2-6 6-10 11-12" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20.5S3.5 15 3.5 8.9C3.5 6 5.8 4 8.3 4c1.6 0 3 .8 3.7 2 .7-1.2 2.1-2 3.7-2 2.5 0 4.8 2 4.8 4.9 0 6.1-8.5 11.6-8.5 11.6z" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </>
  ),
  phone: (
    <>
      <path d="M5 3h4l1.5 5L8 9.5a13 13 0 0 0 6.5 6.5l1.5-2.5 5 1.5v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5S5 14.7 5 9.8A7 7 0 0 1 19 9.8c0 4.9-7 11.7-7 11.7z" />
      <circle cx="12" cy="9.8" r="2.5" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </>
  ),
  check: (
    <>
      <path d="m4.5 12.5 5 5L19.5 6.5" />
    </>
  ),
}

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
