import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

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
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Only the home page opens on the full-bleed video, so only there does the
  // bar start transparent and float over it.
  const overHero = pathname === '/' && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        overHero
          ? 'bg-transparent py-5 border-b border-transparent'
          : 'bg-[#FBF9F2]/92 backdrop-blur-md border-b border-black/5 shadow-xs py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" onClick={handleNavClick} className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Bulut & Wolke Feinkost"
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
                  isActive ? 'text-[#5A6B2F]' : 'text-[#39482A] hover:text-[#5A6B2F]'
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
            className="px-5 py-2 rounded-full border-1.5 border-[#39482A] text-[#39482A] font-semibold text-sm hover:border-[#5A6B2F] hover:text-[#5A6B2F] transition-colors"
          >
            Reservieren
          </button>
          <button
            onClick={onOpenModal}
            className="px-6 py-2 rounded-full bg-[#5A6B2F] text-white font-semibold text-sm shadow-md hover:bg-[#39482A] hover:-translate-y-0.5 transition-all"
          >
            Jetzt Anfragen
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#39482A] min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-black/5 active:scale-95 transition-all"
          aria-label="Menü öffnen"
        >
          <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FBF9F2]/98 backdrop-blur-xl px-5 py-4 space-y-2.5 border-b border-black/5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `block font-semibold text-sm py-2.5 px-3 rounded-xl transition-colors ${
                  isActive ? 'bg-[#5A6B2F] text-white shadow-xs' : 'text-[#39482A] hover:bg-black/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setOpen(false); onOpenModal?.(); }}
              className="w-full py-3 rounded-full border-1.5 border-[#39482A] text-[#39482A] font-semibold text-xs active:scale-98 transition-all"
            >
              Reservieren
            </button>
            <button
              onClick={() => { setOpen(false); onOpenModal?.(); }}
              className="w-full py-3 rounded-full bg-[#5A6B2F] text-white font-semibold text-xs shadow-md active:scale-98 transition-all"
            >
              Jetzt Anfragen
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
