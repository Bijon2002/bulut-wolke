export default function About() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-sky-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cloud-600 mb-3 font-medium">
              Über uns
            </p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-stone-900 mb-6">
              Zwei Sprachen,
              <br />
              eine Leidenschaft
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                <em className="font-display text-stone-800 not-italic">Bulut</em> bedeutet Wolke auf Türkisch.
                <em className="font-display text-stone-800 not-italic"> Wolke</em> bedeutet dasselbe auf Deutsch.
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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=750&fit=crop"
                alt="Feinkost-Theke mit frischen Antipasti und Oliven"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg border border-stone-100 max-w-[200px]">
              <p className="font-display text-3xl text-cloud-600 mb-1">100%</p>
              <p className="text-sm text-stone-600">Handgemacht &amp; täglich frisch</p>
            </div>
            <p className="mt-8 text-xs text-stone-400">Foto: Unsplash / Alice Pasqual</p>
          </div>
        </div>
      </div>
    </section>
  )
}
