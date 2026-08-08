import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    name: 'Marinierte Oliven',
    category: 'Oliven',
    description: 'Handverlesene Oliven mit Kräutern und Knoblauch mariniert',
    badge: 'Beliebt',
    image: '/products/marinierte_oliven.png',
  },
  {
    name: 'Gegrilltes Gemüse',
    category: 'Antipasti',
    description: 'Zucchini, Paprika und Aubergine vom Grill mit Olivenöl',
    badge: 'Hausspezialität',
    image: '/products/gegrilltes_gemuese.png',
  },
  {
    name: 'Gefüllte Weinblätter',
    category: 'Antipasti',
    description: 'Zarte Weinblätter gefüllt mit Reis und frischen Kräutern',
    badge: 'Familienrezept',
    image: '/products/gefuellte_weinblaetter.png',
  },
  {
    name: 'Hummus Klassik',
    category: 'Pasten & Dips',
    description: 'Cremiger Hummus aus Kichererbsen mit Tahini und Zitrone',
    badge: 'Vegan',
    image: '/products/hummus_klassik.png',
  },
  {
    name: 'Schafskäse-Oliven',
    category: 'Oliven',
    description: 'Grüne Oliven gefüllt mit cremigem Schafskäse',
    badge: 'Premium',
    image: '/products/schafskaese_oliven.png',
  },
  {
    name: 'Getrocknete Tomaten',
    category: 'Antipasti',
    description: 'Sonnengetrocknete Tomaten in Olivenöl mit Basilikum',
    badge: 'Klassiker',
    image: '/products/getrocknete_tomaten.png',
  },
]

const badgeColor: Record<string, string> = {
  'Beliebt': 'bg-cloud-500/30 text-cloud-200 border-cloud-400/40',
  'Hausspezialität': 'bg-amber-500/30 text-amber-200 border-amber-400/40',
  'Familienrezept': 'bg-emerald-500/30 text-emerald-200 border-emerald-400/40',
  'Vegan': 'bg-emerald-500/30 text-emerald-200 border-emerald-400/40',
  'Premium': 'bg-amber-500/30 text-amber-200 border-amber-400/40',
  'Klassiker': 'bg-stone-500/30 text-stone-200 border-stone-400/40',
}

export default function Products() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="produkte" className="py-28 md:py-40">
      <div ref={ref} className="max-w-6xl mx-auto px-5">
        {/* Floating section header card with video gaps around */}
        <div className="p-8 md:p-12 rounded-3xl bg-stone-950/70 backdrop-blur-md border border-white/10 shadow-2xl text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-cloud-400 mb-3 font-semibold">
            Unsere Spezialitäten
          </p>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-white mb-4">
            Frisch aus der Theke
          </h2>
          <p className="text-stone-300 leading-relaxed">
            Jeden Tag bereiten wir unsere Spezialitäten mit den besten Zutaten frisch zu —
            handgemacht und mit Liebe.
          </p>
        </div>

        {/* Grid of separate floating cards with clear gutters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <article
              key={p.name}
              className="group rounded-3xl overflow-hidden bg-stone-950/75 backdrop-blur-md border border-white/10 hover:border-cloud-400/50 transition-all duration-300 shadow-2xl hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-stone-900">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-sm ${badgeColor[p.badge] || 'bg-stone-800/80 text-stone-300 border-white/10'}`}>
                    {p.badge}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cloud-400 mb-1">{p.category}</p>
                  <h3 className="font-display text-xl text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-stone-300 leading-relaxed">{p.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
