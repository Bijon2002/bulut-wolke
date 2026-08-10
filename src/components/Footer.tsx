import { NavLink } from 'react-router-dom'

interface FooterProps {
  onOpenModal?: () => void
}

export default function Footer({ onOpenModal }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-16 pt-12 pb-16 text-[#4F5E48] border-t border-[#39482A]/10 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Footer Layout matching original design */}
        <div className="grid md:grid-cols-[1.2fr_2fr] gap-12 mb-12 items-start">

          {/* Left Column: Brand, Tagline & Gold Seal */}
          <div className="space-y-4">
            <NavLink to="/" onClick={handleScrollTop} className="inline-block">
              <img
                src="/logo.png"
                alt="Bulut & Wolke Feinkost"
                width={720}
                height={284}
                className="h-10 w-auto hover:opacity-90 transition-opacity"
              />
            </NavLink>

            <p className="text-sm text-[#4F5E48] max-w-sm leading-relaxed font-medium">
              Feinkost aus dem Rhein-Sieg-Kreis – Frische, handgemachte mediterrane und türkische Delikatessen nach traditionellen Familienrezepten seit 1994.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <span className="font-script text-sm font-semibold text-[#C9A227]">
                Handgemacht im Rhein-Sieg-Kreis
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A6B2F]"></span>
              <button
                onClick={onOpenModal}
                className="text-xs font-bold text-[#5A6B2F] hover:underline cursor-pointer"
              >
                Anfrage Stellen →
              </button>
            </div>
          </div>

          {/* Right Column: 3 Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Navigation */}
            <div>
              <h5 className="font-heading text-base font-bold text-[#39482A] mb-4 tracking-wide">
                Navigation
              </h5>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <NavLink to="/" onClick={handleScrollTop} className="hover:text-[#5A6B2F] transition-colors">
                    Startseite
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/spezialitaeten" onClick={handleScrollTop} className="hover:text-[#5A6B2F] transition-colors">
                    Spezialitäten
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ueber-uns" onClick={handleScrollTop} className="hover:text-[#5A6B2F] transition-colors">
                    Über uns
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/standorte" onClick={handleScrollTop} className="hover:text-[#5A6B2F] transition-colors">
                    Standorte
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kontakt" onClick={handleScrollTop} className="hover:text-[#5A6B2F] transition-colors">
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Standorte & Märkte */}
            <div>
              <h5 className="font-heading text-base font-bold text-[#39482A] mb-4 tracking-wide">
                Region & Märkte
              </h5>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-[#39482A]">Rhein-Sieg-Kreis</p>
                <p className="text-xs text-[#4F5E48] leading-relaxed">
                  Siegburg & Wochenmärkte in der Region.
                </p>
                <p className="text-xs font-bold text-[#C9A227] pt-1">
                  Frische-Theke & Catering
                </p>
              </div>
            </div>

            {/* Rechtliches & Kontakt */}
            <div>
              <h5 className="font-heading text-base font-bold text-[#39482A] mb-4 tracking-wide">
                Rechtliches
              </h5>
              <ul className="space-y-2.5 text-sm font-medium mb-4">
                <li>
                  <NavLink to="/impressum" onClick={handleScrollTop} className="hover:text-[#5A6B2F] transition-colors">
                    Impressum
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/datenschutz" onClick={handleScrollTop} className="hover:text-[#5A6B2F] transition-colors">
                    Datenschutz
                  </NavLink>
                </li>
              </ul>
              <div className="text-xs text-[#4F5E48] pt-2 border-t border-[#39482A]/10">
                <span className="block font-semibold text-[#39482A] mb-0.5">E-Mail:</span>
                <a href="mailto:info@bulut-wolke.de" className="hover:text-[#5A6B2F] transition-colors font-medium">
                  info@bulut-wolke.de
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#39482A]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4F5E48] gap-3 font-medium">
          <p>© {new Date().getFullYear()} Bulut & Wolke Feinkost. Alle Rechte vorbehalten.</p>
          <button
            onClick={handleScrollTop}
            className="hover:text-[#5A6B2F] transition-colors font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <span>Nach oben</span>
            <span className="text-sm">↑</span>
          </button>
        </div>

      </div>
    </footer>
  )
}
