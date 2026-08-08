import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <section id="ueber-uns" className="py-28 md:py-40">
      <div ref={ref} className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="p-8 md:p-12 rounded-3xl bg-stone-950/75 backdrop-blur-md border border-white/10 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cloud-400 mb-3 font-semibold">
              Über uns
            </p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-white mb-6">
              Zwei Sprachen,
              <br />
              <span className="text-cloud-400">eine Leidenschaft</span>
            </h2>
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>
                <em className="font-display text-white not-italic font-medium">Bulut</em> bedeutet Wolke auf Türkisch.
                <em className="font-display text-white not-italic font-medium"> Wolke</em> bedeutet dasselbe auf Deutsch.
                Zwei Kulturen, ein Wort — und eine gemeinsame Liebe zum guten Essen.
              </p>
              <p>
                Als Familienbetrieb im Rhein-Sieg-Kreis verbinden wir die reiche Tradition
                der mediterranen Küche mit der Sorgfalt und Qualität, die unsere Kunden
                von uns erwarten. Jedes Produkt wird von Hand zubereitet, jeden Tag frisch.
              </p>
              <p>
                Bei uns gibt es keine Massenware. Wir stehen hinter unserer Theke, kennen
                unsere Kunden beim Namen und beraten Sie gerne zu jedem Produkt.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-stone-900">
              <img
                src="/products/feinkost_theke.png"
                alt="Feinkost-Theke mit frischen Antipasti und Oliven"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-stone-950/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/15 max-w-[180px] sm:max-w-[200px]">
              <p className="font-display text-2xl sm:text-3xl text-cloud-400 font-bold mb-1">100%</p>
              <p className="text-xs text-stone-300 font-medium">Handgemacht &amp; täglich frisch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
