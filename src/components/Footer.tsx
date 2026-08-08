export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-display text-xl text-white mb-4">
              Bulut <span className="text-cloud-400">&</span> Wolke
            </p>
            <p className="text-sm leading-relaxed text-stone-400">
              Handgemachte Feinkost aus dem Rhein-Sieg-Kreis.
              Frisch, ehrlich, mit Liebe.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#produkte" className="hover:text-white transition-colors">Spezialitäten</a></li>
              <li><a href="#ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#standorte" className="hover:text-white transition-colors">Standorte</a></li>
              <li><a href="#qualitaet" className="hover:text-white transition-colors">Qualität</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>+49 2241 123 456</li>
              <li>info@bulut-wolke.de</li>
              <li>Mo–Sa: 9:00–19:00 Uhr</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center hover:border-cloud-400 hover:text-cloud-400 transition-colors"
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
                className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center hover:border-cloud-400 hover:text-cloud-400 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-xs text-stone-500 text-center">
          <p>&copy; 2026 Bulut &amp; Wolke Feinkost. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
