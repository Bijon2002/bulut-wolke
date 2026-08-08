const locations = [
  {
    name: 'Standort Siegburg',
    address: 'Kaiserstraße 42, 53721 Siegburg',
    hours: 'Mo–Sa: 9:00–19:00 Uhr',
    phone: '+49 2241 123 456',
    maps: 'https://maps.google.com/?q=Kaiserstraße+42+53721+Siegburg',
  },
  {
    name: 'Standort Sankt Augustin',
    address: 'Marktplatz 8, 53757 Sankt Augustin',
    hours: 'Mo–Sa: 9:00–19:00 Uhr',
    phone: '+49 2241 789 012',
    maps: 'https://maps.google.com/?q=Marktplatz+8+53757+Sankt+Augustin',
  },
]

export default function Locations() {
  return (
    <section id="standorte" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cloud-600 mb-3 font-medium">
            Unsere Standorte
          </p>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-stone-900 mb-4">
            Besuchen Sie uns
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            An zwei Standorten im Rhein-Sieg-Kreis freuen wir uns auf Ihren Besuch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-2xl border border-stone-100 p-8 hover:border-cloud-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-cloud-50 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-cloud-600">
                  <path
                    d="M10 2C6.69 2 4 4.69 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.31-2.69-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h3 className="font-display text-xl text-stone-900 mb-4">{loc.name}</h3>

              <div className="space-y-3 text-sm text-stone-600">
                <div className="flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-400 mt-0.5 shrink-0">
                    <path d="M8 1C4.69 1 2 3.69 2 7c0 4.5 6 8 6 8s6-3.5 6-8c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>{loc.address}</span>
                </div>
                <div className="flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-400 mt-0.5 shrink-0">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{loc.hours}</span>
                </div>
                <div className="flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-stone-400 mt-0.5 shrink-0">
                    <path d="M14 11.5c-1.3 0-2.5-.4-3.5-1l-2 2c-1.5-1-2.7-2.2-3.5-3.5l2-2c-.6-1-1-2.2-1-3.5A1.5 1.5 0 007.5 2H5A1.5 1.5 0 003.5 3.5C3.5 9.3 6.7 12.5 12.5 12.5A1.5 1.5 0 0014 11z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>{loc.phone}</span>
                </div>
              </div>

              <a
                href={loc.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-cloud-600 hover:text-cloud-700 transition-colors"
              >
                Wegbeschreibung
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-current">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
