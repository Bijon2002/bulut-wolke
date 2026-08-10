import { useState, useEffect } from 'react'
import AOS from 'aos'

interface PageProps {
  onOpenModal?: () => void
}

interface MarketLocation {
  id: string
  name: string
  city: string
  address: string
  days: string
  hours: string
  highlights: string[]
  badge: string
  coords: [number, number] | null
}

const marketLocations: MarketLocation[] = [
  {
    id: 'siegburg',
    name: 'Siegburg Marktplatz',
    city: 'Siegburg',
    address: 'Marktplatz, 53721 Siegburg',
    days: 'Dienstag, Donnerstag & Samstag',
    hours: '07:00 – 14:00 Uhr',
    highlights: ['Marinierte Oliven', 'Dip-Auswahl', 'Weinblätter & Antipasti'],
    badge: 'Hauptstandort',
    coords: [50.7958, 7.2053],
  },
  {
    id: 'troisdorf',
    name: 'Troisdorf Fußgängerzone',
    city: 'Troisdorf',
    address: 'Kölner Straße, 53840 Troisdorf',
    days: 'Mittwoch & Freitag',
    hours: '08:00 – 13:00 Uhr',
    highlights: ['Hummus & Pasten', 'Gegrilltes Gemüse', 'Tagesfrische Meze'],
    badge: 'Wochenmarkt',
    coords: [50.8156, 7.1497],
  },
  {
    id: 'sankt-augustin',
    name: 'Sankt Augustin Zentrum',
    city: 'Sankt Augustin',
    address: 'Karl-Gatzweiler-Platz, 53757 Sankt Augustin',
    days: 'Samstag',
    hours: '07:30 – 13:30 Uhr',
    highlights: ['Feinkost-Sets', 'Olivenöl-Selektion', 'Persönliche Beratung'],
    badge: 'Wochenmarkt',
    coords: [50.7716, 7.1866],
  },
  {
    id: 'catering',
    name: 'Catering & Manufaktur',
    city: 'Rhein-Sieg-Kreis',
    address: 'Lieferung & Abholung nach Vereinbarung',
    days: 'Montag – Samstag',
    hours: 'Nach Vereinbarung',
    highlights: ['Hochzeiten & Geburtstage', 'Firmen-Events', 'Gourmet-Platten auf Bestellung'],
    badge: 'Catering Service',
    coords: null,
  },
]

export default function StandortePage({ onOpenModal }: PageProps) {
  const [activeLocation, setActiveLocation] = useState<string>('siegburg')

  useEffect(() => {
    AOS.refresh()
  }, [])

  const selectedLoc = marketLocations.find((l) => l.id === activeLocation) || marketLocations[0]

  return (
    <div className="py-12 md:py-16 px-6 max-w-6xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3" data-aos="fade-up">
        <span className="font-script text-xl text-[#C9A227] block">
          Wo Sie Uns Finden
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#39482A] tracking-tight">
          Standorte & Wochenmärkte
        </h1>
        <p className="text-[#4F5E48] text-sm md:text-base leading-relaxed">
          Besuchen Sie unsere Feinkoststände im Rhein-Sieg-Kreis oder bestellen Sie Platten für Ihr Event.
        </p>
      </div>

      {/* Location Selector Tabs */}
      <div
        className="flex flex-wrap justify-center gap-2.5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {marketLocations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setActiveLocation(loc.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
              activeLocation === loc.id
                ? 'bg-[#39482A] text-white shadow-md scale-105'
                : 'bg-white/80 text-[#4F5E48] border border-black/5 hover:border-[#C9A227] hover:text-[#39482A]'
            }`}
          >
            <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0112 8a4.5 4.5 0 017 3.5c0 5.15-7 9.5-7 9.5z" strokeLinecap="round"/>
            </svg>
            {loc.city} ({loc.badge})
          </button>
        ))}
      </div>

      {/* Selected Location Feature Spotlight */}
      <div
        className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-black/5 shadow-xl grid md:grid-cols-2 gap-8 items-center"
        data-aos="fade-up"
      >
        <div className="space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FEF9EC] text-[#C9A227] border border-[#F7E08B]">
              {selectedLoc.badge}
            </span>
            <span className="text-xs font-semibold text-[#4F5E48]">
              Rhein-Sieg-Kreis
            </span>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#39482A]">
            {selectedLoc.name}
          </h2>

          <div className="space-y-2.5 text-xs text-[#4F5E48]">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#FEF9EC] text-[#C9A227] flex items-center justify-center shrink-0">
                <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" strokeLinecap="round"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span><strong>Adresse:</strong> {selectedLoc.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#FEF9EC] text-[#C9A227] flex items-center justify-center shrink-0">
                <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <span><strong>Markttage:</strong> {selectedLoc.days}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#FEF9EC] text-[#C9A227] flex items-center justify-center shrink-0">
                <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span><strong>Öffnungszeiten:</strong> {selectedLoc.hours}</span>
            </div>
          </div>

          <div className="pt-1 space-y-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#39482A]">
              Sortiment vor Ort:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedLoc.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs font-semibold px-2.5 py-0.5 bg-[#FEF9EC] text-[#39482A] rounded-full border border-black/5"
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <button onClick={onOpenModal} className="btn-pill-orange text-xs py-2.5 px-5">
              <span>Anfragen</span>
            </button>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(selectedLoc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-[#39482A] text-[#39482A] font-semibold text-xs hover:bg-[#39482A] hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              <span>Route Planen</span>
              <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="relative space-y-6">
          {selectedLoc.coords ? (
            <figure className="space-y-2">
              <div className="overflow-hidden rounded-3xl border border-black/5 shadow-lg bg-[#DCEBF5]">
                <iframe
                  key={selectedLoc.id}
                  title={`Karte: ${selectedLoc.name}, ${selectedLoc.address}`}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                    selectedLoc.coords[1] - 0.006
                  }%2C${selectedLoc.coords[0] - 0.003}%2C${selectedLoc.coords[1] + 0.006}%2C${
                    selectedLoc.coords[0] + 0.003
                  }&layer=mapnik&marker=${selectedLoc.coords[0]}%2C${selectedLoc.coords[1]}`}
                  className="w-full h-[280px] md:h-[340px] block border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <figcaption className="text-[11px] text-[#4F5E48] text-center">
                Kartendaten:{' '}
                <a
                  href={`https://www.openstreetmap.org/?mlat=${selectedLoc.coords[0]}&mlon=${selectedLoc.coords[1]}#map=17/${selectedLoc.coords[0]}/${selectedLoc.coords[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#5A6B2F]"
                >
                  OpenStreetMap
                </a>{' '}
                – Standort {selectedLoc.city}
              </figcaption>
            </figure>
          ) : (
            <img
              src="/assets/feinkost_bottom_plate.png"
              alt="Gedeckte Platte mit Antipasti und Oliven aus der Bulut & Wolke Manufaktur"
              className="w-full max-w-sm mx-auto rounded-full shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>
      </div>

      {/* All Locations Grid Overview */}
      <div className="space-y-6" data-aos="fade-up">
        <h2 className="font-heading text-2xl font-bold text-[#39482A] text-center">
          Alle Standorte im Überblick
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {marketLocations.map((loc, idx) => (
            <div
              key={loc.id}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-black/5 shadow-sm space-y-3 hover:-translate-y-1 transition-transform flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227]">
                    0{idx + 1} • {loc.badge}
                  </span>
                  <span className="text-xs font-bold text-[#39482A] bg-[#FEF9EC] px-2.5 py-0.5 rounded-full border border-[#F7E08B]">
                    {loc.city}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#39482A]">
                  {loc.name}
                </h3>
                <p className="text-xs text-[#4F5E48] font-medium">{loc.address}</p>
                <div className="text-xs text-[#4F5E48] space-y-1 bg-[#FBF9F2]/60 p-2.5 rounded-xl">
                  <p><strong>Zeiten:</strong> {loc.days}</p>
                  <p><strong>Uhrzeit:</strong> {loc.hours}</p>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-black/5">
                <button
                  onClick={() => setActiveLocation(loc.id)}
                  className="text-xs font-bold text-[#C9A227] hover:text-[#39482A] transition-colors"
                >
                  Details anzeigen →
                </button>
                <button onClick={onOpenModal} className="btn-pill-orange text-xs py-2 px-4">
                  Anfragen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visitor Guidance & FAQ Accordion - Clean SVG Icons */}
      <div className="bg-gradient-to-br from-[#FEF9EC] to-[#FBF9F2] rounded-3xl p-6 md:p-10 border border-[#F7E08B]/60 shadow-lg space-y-6" data-aos="fade-up">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#C9A227]">
            HINWEISE & FAQ
          </span>
          <h2 className="font-heading text-2xl font-bold text-[#39482A]">
            Häufige Fragen Zu Den Märkten
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              q: 'Vorab bestellen & abholen?',
              a: 'Ja! Sie können Ihre Feinkost vorab bestellen und am Marktstand ohne Wartezeit abholen.',
            },
            {
              q: 'Zahlungsmöglichkeiten vor Ort?',
              a: 'Wir akzeptieren Barzahlung sowie kontaktlose EC- & Kreditkartenzahlung.',
            },
            {
              q: 'Catering-Lieferung möglich?',
              a: 'Für Events liefern wir im gesamten Rhein-Sieg-Kreis und Raum Bonn direkt an Ihren Wunschort.',
            },
            {
              q: 'Vegetarisch & Vegan?',
              a: 'Selbstverständlich! Unsere Pasten, Weinblätter und Oliven sind rein pflanzlich.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/80 p-5 rounded-2xl border border-black/5 space-y-1.5">
              <h4 className="font-heading text-sm font-bold text-[#39482A] flex items-center gap-2">
                <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#C9A227]">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                {item.q}
              </h4>
              <p className="text-xs text-[#4F5E48] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
