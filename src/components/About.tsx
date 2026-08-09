import AosBox from './AosBox'
import SectionHeading from './SectionHeading'
import OrganicDivider from './OrganicDivider'

export default function About({ nextColor = 'text-cream-100' }: { nextColor?: string }) {
  return (
    <section id="ueber-uns" className="relative bg-sky-100 pt-16 md:pt-20 overflow-hidden">
      {/* soft cloud accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 -left-24 w-[26rem] h-[26rem] bg-sky-50/70"
          style={{ borderRadius: '61% 39% 48% 52% / 52% 44% 56% 48%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo left — alternates against the Products grid above */}
          <AosBox animation="slide-right" delay={100} className="order-1">
            <div className="relative mx-auto w-full max-w-sm md:max-w-none aspect-square">
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-4 translate-y-5 bg-yellow-300/35"
                style={{ borderRadius: '46% 54% 57% 43% / 52% 45% 55% 48%' }}
              />
              <img
                src="/products/feinkost_theke_hero.jpg"
                alt="Feinkost-Theke mit frischen Antipasti und Oliven"
                width={900}
                height={900}
                className="relative w-full h-full object-cover shadow-lg"
                style={{ borderRadius: '46% 54% 57% 43% / 52% 45% 55% 48%' }}
                loading="lazy"
              />
              <div className="absolute -bottom-2 right-2 md:right-6 bg-cream-50 rounded-2xl px-5 py-4 shadow-md border border-olive-200/60">
                <p className="font-display text-2xl md:text-3xl text-yellow-600 font-bold leading-none mb-1">100%</p>
                <p className="text-xs text-olive-700 font-medium">Handgemacht &amp; täglich frisch</p>
              </div>
            </div>
          </AosBox>

          <AosBox animation="slide-left" delay={200} className="order-2">
            <SectionHeading
              align="left"
              eyebrow="Unsere Familie"
              title={['Zwei Sprachen,', <span className="text-yellow-600">eine Leidenschaft</span>]}
            />
            <div className="space-y-4 text-olive-700/90 leading-relaxed">
              <p>
                <em className="font-display text-olive-800 not-italic font-semibold">Bulut</em> bedeutet Wolke auf Türkisch.
                <em className="font-display text-olive-800 not-italic font-semibold"> Wolke</em> bedeutet dasselbe auf Deutsch.
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
          </AosBox>
        </div>
      </div>

      <OrganicDivider color={nextColor} variant={3} />
    </section>
  )
}
