import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-cream-200 text-olive-700 pt-16 pb-8 border-t border-yellow-600/20 relative z-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src="/logo.png"
              alt="Bulut &amp; Wolke Feinkost"
              width={720}
              height={284}
              className="h-14 w-auto mb-5"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-olive-600">
              Handgemachte Feinkost aus dem Rhein-Sieg-Kreis.
              Frisch, ehrlich, mit Liebe.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-olive-800 mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/spezialitaeten" className="hover:text-olive-900 transition-colors">Spezialitäten</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-olive-900 transition-colors">Über uns</Link></li>
              <li><Link to="/standorte" className="hover:text-olive-900 transition-colors">Standorte</Link></li>
              <li><Link to="/kontakt" className="hover:text-olive-900 transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-olive-800 mb-4 uppercase tracking-widest">Kontakt</h4>
            <ul className="space-y-2 text-sm text-olive-600">
              <li>+49 2241 123 456</li>
              <li>info@bulut-wolke.de</li>
              <li>Mo–Sa: 9:00–19:00 Uhr</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-olive-800 mb-4 uppercase tracking-widest">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/impressum" className="hover:text-olive-900 transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-olive-900 transition-colors">Datenschutz</Link></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-olive-300 bg-cream-50 flex items-center justify-center text-olive-600 hover:border-yellow-500 hover:text-yellow-600 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-olive-300 bg-cream-50 flex items-center justify-center text-olive-600 hover:border-yellow-500 hover:text-yellow-600 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-600/20 pt-6 text-xs text-olive-500 text-center">
          <p>&copy; 2026 Bulut &amp; Wolke Feinkost. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
