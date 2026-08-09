import { Link } from 'react-router-dom'
import RevealText from './RevealText'
import OrganicDivider from './OrganicDivider'

export default function Hero({ nextColor = 'text-cream-100' }: { nextColor?: string }) {
  return (
    <section className="relative overflow-hidden bg-sky-50 pt-16">
      {/* Soft cloud / sky shapes — decorative, references "Wolke" in the brand name */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -right-24 w-[38rem] h-[38rem] bg-sky-100/70"
          style={{ borderRadius: '58% 42% 47% 53% / 44% 39% 61% 56%' }}
        />
        <div
          className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] bg-cream-50/80"
          style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }}
        />
        <div
          className="absolute bottom-24 right-1/4 w-72 h-72 bg-yellow-100/40"
          style={{ borderRadius: '47% 53% 63% 37% / 51% 60% 40% 49%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center md:min-h-[calc(100vh-4rem)] py-8 md:py-12">
          {/* ── Copy ── */}
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.22em] text-olive-600 font-semibold mb-5">
              Feinkost aus dem Rhein-Sieg-Kreis
            </p>

            <RevealText
              as="h1"
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-olive-800 font-bold mb-6"
              lines={[
                'Frische',
                <span className="text-yellow-600">Delikatessen</span>,
                'mit Tradition',
              ]}
              stagger={110}
              delay={80}
            />

            {/* Gold divider with olive-leaf accent */}
            <div className="flex items-center gap-3 mb-6" aria-hidden>
              <span className="h-px w-16 bg-yellow-600/50" />
              <svg width="38" height="20" viewBox="0 0 38 20" fill="none" className="text-olive-500 shrink-0">
                <path d="M2 15C10 15 22 12 36 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <ellipse cx="11" cy="10.5" rx="4.6" ry="2.5" fill="currentColor" opacity=".5" transform="rotate(-26 11 10.5)" />
                <ellipse cx="21" cy="8" rx="4.6" ry="2.5" fill="currentColor" opacity=".7" transform="rotate(-22 21 8)" />
                <ellipse cx="30" cy="5" rx="4.2" ry="2.3" fill="currentColor" opacity=".9" transform="rotate(-20 30 5)" />
              </svg>
              <span className="h-px w-8 bg-yellow-600/30" />
            </div>

            <p className="text-base md:text-lg text-olive-700/90 leading-relaxed max-w-md mb-7 md:mb-9">
              Handgemachte Antipasti, Oliven und mediterrane Spezialitäten — täglich
              frisch zubereitet von unserer Familie für Ihre.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link
                to="/spezialitaeten"
                className="inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-yellow-600 text-white rounded-full text-sm font-semibold hover:bg-yellow-700 transition active:scale-[0.97] motion-safe:duration-200 shadow-sm"
              >
                Unsere Spezialitäten
              </Link>
              <Link
                to="/standorte"
                className="inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 border border-olive-600/35 text-olive-700 rounded-full text-sm font-semibold hover:bg-olive-600 hover:text-white hover:border-olive-600 transition active:scale-[0.97] motion-safe:duration-200"
              >
                Standorte finden
              </Link>
            </div>
          </div>

          {/* ── Organic photo ── */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[16rem] sm:max-w-xs md:max-w-md aspect-square">
              {/* offset accent blob behind the photo */}
              <div
                aria-hidden
                className="absolute inset-0 translate-x-4 translate-y-5 bg-yellow-300/35"
                style={{ borderRadius: '54% 46% 38% 62% / 49% 57% 43% 51%' }}
              />
              <img
                src="/products/feinkost_theke_hero.jpg"
                alt="Frische Feinkost in der Theke von Bulut &amp; Wolke"
                width={900}
                height={900}
                className="relative w-full h-full object-cover shadow-lg"
                style={{ borderRadius: '54% 46% 38% 62% / 49% 57% 43% 51%' }}
              />
            </div>
          </div>
        </div>
      </div>

      <OrganicDivider color={nextColor} variant={1} />
    </section>
  )
}
