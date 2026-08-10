import { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface NavbarProps {
  onOpenModal?: () => void
}

const links = [
  { label: 'Startseite', to: '/' },
  { label: 'Spezialitäten', to: '/spezialitaeten' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Standorte', to: '/standorte' },
  { label: 'Kontakt', to: '/kontakt' },
]

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F8F4EC]/90 backdrop-blur-md border-b border-black/5 shadow-xs py-3.5 transition-all">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" onClick={handleNavClick} className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Bulut &amp; Wolke Feinkost"
            width={720}
            height={284}
            className="h-10 md:h-11 w-auto hover:opacity-90 transition-opacity"
          />
        </NavLink>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-[#EE6D52]' : 'text-[#1E332E] hover:text-[#EE6D52]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="px-5 py-2 rounded-full border-1.5 border-[#1E332E] text-[#1E332E] font-semibold text-sm hover:border-[#EE6D52] hover:text-[#EE6D52] transition-colors"
          >
            Reservieren
          </button>
          <button
            onClick={onOpenModal}
            className="px-6 py-2 rounded-full bg-[#EE6D52] text-white font-semibold text-sm shadow-md hover:bg-[#E2583C] hover:-translate-y-0.5 transition-all"
          >
            Jetzt Anfragen
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#1E332E] min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-black/5 active:scale-95 transition-all"
          aria-label="Menü öffnen"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F8F4EC]/98 backdrop-blur-xl px-5 py-4 space-y-2.5 border-b border-black/5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `block font-semibold text-sm py-2.5 px-3 rounded-xl transition-colors ${
                  isActive ? 'bg-[#EE6D52] text-white shadow-xs' : 'text-[#1E332E] hover:bg-black/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setOpen(false); onOpenModal?.(); }}
              className="w-full py-3 rounded-full border-1.5 border-[#1E332E] text-[#1E332E] font-semibold text-xs active:scale-98 transition-all"
            >
              Reservieren
            </button>
            <button
              onClick={() => { setOpen(false); onOpenModal?.(); }}
              className="w-full py-3 rounded-full bg-[#EE6D52] text-white font-semibold text-xs shadow-md active:scale-98 transition-all"
            >
              Jetzt Anfragen
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
