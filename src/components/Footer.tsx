import { NavLink } from 'react-router-dom'

interface FooterProps {
  onOpenModal?: () => void
}

export default function Footer({ onOpenModal }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-16 pt-12 pb-16 text-[#4A5D57] border-t border-[#1E332E]/10 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Footer Layout matching original design */}
        <div className="grid md:grid-cols-[1.2fr_2fr] gap-12 mb-12 items-start">

          {/* Left Column: Brand, Tagline & Gold Seal */}
          <div className="space-y-4">
            <NavLink to="/" onClick={handleScrollTop} className="inline-block">
              <img
                src="/logo.png"
                alt="Bulut &amp; Wolke Feinkost"
                width={720}
                height={284}
                className="h-10 w-auto hover:opacity-90 transition-opacity"
              />
            </NavLink>

            <p className="text-sm text-[#4A5D57] max-w-sm leading-relaxed font-medium">
              Feinkost aus dem Rhein-Sieg-Kreis – Frische, handgemachte mediterrane und türkische Delikatessen nach traditionellen Familienrezepten seit 1994.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <span className="font-script text-sm font-semibold text-[#B88E28]">
                Handgemacht im Rhein-Sieg-Kreis
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE6D52]"></span>
              <button
                onClick={onOpenModal}
                className="text-xs font-bold text-[#EE6D52] hover:underline cursor-pointer"
              >
                Anfrage Stellen →
              </button>
            </div>
          </div>

          {/* Right Column: 3 Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Navigation */}
            <div>
              <h5 className="font-heading text-base font-bold text-[#1E332E] mb-4 tracking-wide">
                Navigation
              </h5>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <NavLink to="/" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">
                    Startseite
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/spezialitaeten" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">
                    Spezialitäten
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ueber-uns" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">
                    Über uns
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/standorte" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">
                    Standorte
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kontakt" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Standorte & Märkte */}
            <div>
              <h5 className="font-heading text-base font-bold text-[#1E332E] mb-4 tracking-wide">
                Region &amp; Märkte
              </h5>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-[#1E332E]">Rhein-Sieg-Kreis</p>
                <p className="text-xs text-[#4A5D57] leading-relaxed">
                  Siegburg &amp; Wochenmärkte in der Region.
                </p>
                <p className="text-xs font-bold text-[#B88E28] pt-1">
                  Frische-Theke &amp; Catering
                </p>
              </div>
            </div>

            {/* Rechtliches & Kontakt */}
            <div>
              <h5 className="font-heading text-base font-bold text-[#1E332E] mb-4 tracking-wide">
                Rechtliches
              </h5>
              <ul className="space-y-2.5 text-sm font-medium mb-4">
                <li>
                  <NavLink to="/impressum" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">
                    Impressum
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/datenschutz" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">
                    Datenschutz
                  </NavLink>
                </li>
              </ul>
              <div className="text-xs text-[#4A5D57] pt-2 border-t border-[#1E332E]/10">
                <span className="block font-semibold text-[#1E332E] mb-0.5">E-Mail:</span>
                <a href="mailto:info@bulut-wolke.de" className="hover:text-[#EE6D52] transition-colors font-medium">
                  info@bulut-wolke.de
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#1E332E]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4A5D57] gap-3 font-medium">
          <p>© {new Date().getFullYear()} Bulut &amp; Wolke Feinkost. Alle Rechte vorbehalten.</p>
          <button
            onClick={handleScrollTop}
            className="hover:text-[#EE6D52] transition-colors font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <span>Nach oben</span>
            <span className="text-sm">↑</span>
          </button>
        </div>

      </div>
    </footer>
  )
}
