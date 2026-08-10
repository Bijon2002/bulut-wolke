import { Link } from 'react-router-dom'
import AosBox from '../AosBox'
import SectionHeading from '../SectionHeading'
import OrganicDivider from '../OrganicDivider'

export default function AboutTeaser() {
  return (
    <section className="relative bg-cream-100 pt-20 md:pt-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* photo left — mirrors the specialty grid above */}
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
            </div>
          </AosBox>

          <AosBox animation="slide-left" delay={200} className="order-2">
            <SectionHeading
              align="left"
              eyebrow="Über uns"
              title={['Zwei Sprachen,', <span key="accent" className="text-yellow-600">eine Leidenschaft</span>]}
            />
            <p className="text-olive-700/90 leading-relaxed mb-8">
              <em className="font-display text-olive-800 not-italic font-semibold">Bulut</em> bedeutet
              Wolke auf Türkisch, <em className="font-display text-olive-800 not-italic font-semibold">Wolke</em>{' '}
              dasselbe auf Deutsch. Zwei Kulturen, ein Wort — und eine gemeinsame Liebe zum guten Essen,
              die wir als Familienbetrieb jeden Tag in unsere Theke bringen.
            </p>
            <Link
              to="/ueber-uns"
              className="inline-flex items-center gap-2 whitespace-nowrap px-8 py-3.5 border border-olive-600/35 text-olive-700 rounded-full text-sm font-semibold hover:bg-olive-600 hover:text-white hover:border-olive-600 transition active:scale-[0.97] motion-safe:duration-200"
            >
              Unsere Geschichte
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </AosBox>
        </div>
      </div>

      <OrganicDivider color="text-sky-100" variant={1} />
    </section>
  )
}
