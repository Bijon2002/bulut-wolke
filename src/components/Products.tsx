import { Link } from 'react-router-dom'
import AosBox from './AosBox'
import SectionHeading from './SectionHeading'
import OrganicDivider from './OrganicDivider'
import { products, categories, badgeColor } from '../data/products'

export default function Products({ nextColor = 'text-sky-100' }: { nextColor?: string }) {
  return (
    <section id="produkte" className="relative bg-cream-100 pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Frisch aus der Theke"
          title="Unser Sortiment"
          body="Jeden Tag bereiten wir unsere Spezialitäten mit den besten Zutaten frisch zu — handgemacht und mit Liebe."
          className="mb-16"
        />

        {categories.map((category) => {
          const items = products.filter((p) => p.category === category)
          if (items.length === 0) return null

          return (
            <div key={category} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-display text-2xl md:text-3xl text-olive-800 font-bold whitespace-nowrap">
                  {category}
                </h3>
                <span className="h-px flex-1 bg-yellow-600/30" aria-hidden />
                <span className="text-xs text-olive-600 font-semibold whitespace-nowrap">
                  {items.length} {items.length === 1 ? 'Produkt' : 'Produkte'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {items.map((p, i) => (
                  <AosBox key={p.name} animation="fade-up" delay={i * 90} className="h-full">
                    <article className="group h-full flex flex-col rounded-[1.75rem] overflow-hidden bg-cream-50 border border-olive-200/50 shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:border-yellow-500/50 transition-all duration-300">
                      <div className="relative w-full aspect-[3/2] overflow-hidden bg-cream-200">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span
                          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border ${
                            badgeColor[p.badge] || 'bg-cream-200 text-olive-700 border-olive-200'
                          }`}
                        >
                          {p.badge}
                        </span>
                      </div>
                      <div className="p-6 flex-1">
                        <h4 className="font-display text-xl text-olive-800 font-bold mb-2">{p.name}</h4>
                        <p className="text-sm text-olive-700/85 leading-relaxed">{p.description}</p>
                      </div>
                    </article>
                  </AosBox>
                ))}
              </div>
            </div>
          )
        })}

        {/* Party platters / catering — own block with inquiry CTA */}
        <AosBox animation="fade-up" className="mt-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-sky-100 border border-sky-200/70 px-8 py-12 md:px-14 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-12 w-72 h-72 bg-yellow-100/50"
              style={{ borderRadius: '58% 42% 47% 53% / 44% 39% 61% 56%' }}
            />
            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-olive-600 font-semibold mb-3">
                  Partyplatten &amp; Catering
                </p>
                <h3 className="font-display text-2xl md:text-4xl text-olive-800 font-bold mb-4 leading-tight">
                  Feiern Sie mit uns
                </h3>
                <p className="text-olive-700/90 leading-relaxed max-w-lg">
                  Ob Geburtstag, Firmenfeier oder Familienfest — wir stellen Ihnen Partyplatten
                  nach Wunsch zusammen. Sprechen Sie uns an, wir beraten Sie gerne persönlich.
                </p>
              </div>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-8 py-3.5 bg-yellow-600 text-white rounded-full text-sm font-semibold hover:bg-yellow-700 transition active:scale-[0.97] motion-safe:duration-200 shadow-sm shrink-0"
              >
                Jetzt anfragen
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </AosBox>
      </div>

      <OrganicDivider color={nextColor} variant={2} />
    </section>
  )
}
