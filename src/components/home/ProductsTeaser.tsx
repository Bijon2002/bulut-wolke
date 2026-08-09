import { Link } from 'react-router-dom'
import AosBox from '../AosBox'
import SectionHeading from '../SectionHeading'
import OrganicDivider from '../OrganicDivider'
import { products, badgeColor } from '../../data/products'

const highlights = products.filter((p) => p.highlight).slice(0, 4)

export default function ProductsTeaser() {
  return (
    <section className="relative bg-sky-100 pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Unsere Spezialitäten"
          title="Frisch aus der Theke"
          body="Ein kleiner Vorgeschmack auf unser Sortiment — handgemacht und täglich frisch."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((p, i) => (
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
                <div className="p-5 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mb-1.5">
                    {p.category}
                  </p>
                  <h3 className="font-display text-lg text-olive-800 font-bold mb-2">{p.name}</h3>
                  <p className="text-sm text-olive-700/85 leading-relaxed">{p.description}</p>
                </div>
              </article>
            </AosBox>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/spezialitaeten"
            className="inline-flex items-center gap-2 whitespace-nowrap px-8 py-3.5 bg-yellow-600 text-white rounded-full text-sm font-semibold hover:bg-yellow-700 transition active:scale-[0.97] motion-safe:duration-200 shadow-sm"
          >
            Alle Spezialitäten ansehen
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <OrganicDivider color="text-cream-100" variant={3} />
    </section>
  )
}
