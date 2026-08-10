import { NavLink } from 'react-router-dom'

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="pt-[22rem] sm:pt-[26rem] md:pt-[30rem] pb-12 text-[#4A5D57]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-10 mb-6">
        {/* Brand Column */}
        <div className="pt-2">
          <NavLink to="/" onClick={handleScrollTop} className="inline-block mb-3">
            <img
              src="/logo.png"
              alt="Bulut &amp; Wolke Feinkost"
              width={720}
              height={284}
              className="h-11 w-auto"
            />
          </NavLink>
          <p className="text-xs md:text-sm text-[#4A5D57] max-w-xs leading-relaxed">
            Feinkost aus dem Rhein-Sieg-Kreis – Frische, Qualität und Tradition seit 1994.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Navigation Column */}
          <div>
            <h5 className="font-bold text-[#1E332E] text-sm mb-3">Navigation</h5>
            <div className="flex flex-col gap-1.5 text-xs md:text-sm">
              <NavLink to="/" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">Startseite</NavLink>
              <NavLink to="/spezialitaeten" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">Spezialitäten</NavLink>
              <NavLink to="/ueber-uns" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">Über uns</NavLink>
              <NavLink to="/standorte" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">Standorte</NavLink>
              <NavLink to="/kontakt" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">Kontakt</NavLink>
            </div>
          </div>

          {/* Rechtliches Column */}
          <div className="pt-8 sm:pt-12 md:pt-16">
            <h5 className="font-bold text-[#1E332E] text-sm mb-3">Rechtliches</h5>
            <div className="flex flex-col gap-1.5 text-xs md:text-sm">
              <NavLink to="/impressum" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">Impressum</NavLink>
              <NavLink to="/datenschutz" onClick={handleScrollTop} className="hover:text-[#EE6D52] transition-colors">Datenschutz</NavLink>
            </div>
          </div>

          {/* Region Column */}
          <div>
            <h5 className="font-bold text-[#1E332E] text-sm mb-3">Region</h5>
            <p className="text-xs md:text-sm mb-1.5 leading-relaxed">
              Rhein-Sieg-Kreis &amp; Umkreis
            </p>
            <p className="text-xs md:text-sm text-[#B88E28] font-semibold">
              Wochenmärkte &amp; Wochenend-Stände
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-3 text-center text-xs text-[#4A5D57]">
        <p>© {new Date().getFullYear()} Bulut &amp; Wolke Feinkost. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}
