# Cedoch Energy Limited — Company Website

A professional, responsive multi-page website for Cedoch Energy Limited, built from the 2024 company profile. Cedoch is a Nigerian company providing integrated energy services across oil & gas, logistics, engineering and renewable energy.

## Tech Stack

- **React 18** with **Vite** for fast development and optimized builds
- **React Router 6** for client-side routing
- Plain CSS (custom design system, no framework) with Sora + Inter typography

## Pages

| Route | Page | Content |
| --- | --- | --- |
| `/` | Home | Hero, company stats, services preview, why choose us, values, CTA |
| `/about` | About Us | Executive summary, vision & mission, objectives, founder's message, values |
| `/services` | Services | All 10 principal services with anchor links |
| `/gallery` | Gallery | Project and operations photo gallery |
| `/policies` | Policies | Health & Safety, Quality Assurance, Environmental Protection, CSR |
| `/contact` | Contact | Phone/email details and an enquiry form (opens the user's mail client) |

## Getting Started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

## Project Structure

```
src/
  components/   # Navbar, Footer, PageHeader, Icon, ScrollToTop, Hero
  data/         # All site content (services, policies, values, contact info)
  pages/        # Home, About, Services, Gallery, Policies, Contact
  styles/       # Global stylesheet and design tokens
public/assets/  # Brand logo and images extracted from company profile
```

All copy lives in `src/data/content.js`, so text updates don't require touching components.
