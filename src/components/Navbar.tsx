import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Spezialitäten', to: '/spezialitaeten' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Standorte', to: '/standorte' },
  { label: 'Kontakt', to: '/kontakt' },
]

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors pb-0.5 border-b-2 ${
    isActive
      ? 'text-olive-700 font-semibold border-yellow-500'
      : 'text-olive-700/80 hover:text-olive-900 border-transparent'
  }`

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block py-2.5 font-medium transition-colors ${
    isActive ? 'text-olive-700 font-semibold' : 'text-olive-700/80'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/92 backdrop-blur-md border-b border-yellow-600/15 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center shrink-0" aria-label="Bulut &amp; Wolke Feinkost — Startseite">
          <img
            src="/logo.png"
            alt="Bulut &amp; Wolke Feinkost"
            width={720}
            height={284}
            className="h-10 md:h-11 w-auto"
          />
        </NavLink>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={desktopLinkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-olive-700 hover:text-olive-900 transition-colors"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-100/97 backdrop-blur-md border-t border-yellow-600/15 px-5 py-3">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to} className="border-b border-yellow-600/10 last:border-0">
                <NavLink to={l.to} onClick={() => setOpen(false)} className={mobileLinkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
