import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    name: 'Marinierte Oliven',
    category: 'Oliven',
    description: 'Handverlesene Oliven mit Kräutern und Knoblauch mariniert',
    badge: 'Beliebt',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop',
    credit: 'Unsplash',
  },
  {
    name: 'Gegrilltes Gemüse',
    category: 'Antipasti',
    description: 'Zucchini, Paprika und Aubergine vom Grill mit Olivenöl',
    badge: 'Hausspezialität',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=400&fit=crop',
    credit: 'Unsplash / Ella Olsson',
  },
  {
    name: 'Gefüllte Weinblätter',
    category: 'Antipasti',
    description: 'Zarte Weinblätter gefüllt mit Reis und frischen Kräutern',
    badge: 'Familienrezept',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&h=400&fit=crop',
    credit: 'Unsplash / Foad Roshan',
  },
  {
    name: 'Hummus Klassik',
    category: 'Pasten & Dips',
    description: 'Cremiger Hummus aus Kichererbsen mit Tahini und Zitrone',
    badge: 'Vegan',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop',
    credit: 'Unsplash / Sana Saidi',
  },
  {
    name: 'Schafskäse-Oliven',
    category: 'Oliven',
    description: 'Grüne Oliven gefüllt mit cremigem Schafskäse',
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600&h=400&fit=crop',
    credit: 'Unsplash / Monika Grabkowska',
  },
  {
    name: 'Getrocknete Tomaten',
    category: 'Antipasti',
    description: 'Sonnengetrocknete Tomaten in Olivenöl mit Basilikum',
    badge: 'Klassiker',
    image: 'https://images.unsplash.com/photo-1598171279963-c3bebd86ee2d?w=600&h=400&fit=crop',
    credit: 'Unsplash',
  },
]

const badgeColor: Record<string, string> = {
  'Beliebt': 'bg-cloud-100 text-cloud-700',
  'Hausspezialität': 'bg-warm-100 text-warm-700',
  'Familienrezept': 'bg-olive-100 text-olive-700',
  'Vegan': 'bg-olive-100 text-olive-700',
  'Premium': 'bg-warm-100 text-warm-700',
  'Klassiker': 'bg-stone-100 text-stone-700',
}

export default function Products() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="produkte" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-cloud-600 mb-3 font-medium">
            Unsere Spezialitäten
          </p>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-stone-900 mb-4">
            Frisch aus der Theke
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            Jeden Tag bereiten wir unsere Spezialitäten mit den besten Zutaten frisch zu —
            handgemacht und mit Liebe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeColor[p.badge] || 'bg-stone-100 text-stone-600'}`}>
                    {p.badge}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-cloud-500 mb-1">{p.category}</p>
                <h3 className="font-display text-xl text-stone-900 mb-2">{p.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
