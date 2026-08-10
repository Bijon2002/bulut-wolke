import { Link } from 'react-router-dom'
import AosBox from '../AosBox'
import SectionHeading from '../SectionHeading'
import OrganicDivider from '../OrganicDivider'
import { locations } from '../../data/locations'

export default function LocationsTeaser() {
  return (
    <section className="relative bg-sky-100 pt-20 md:pt-28">
      <div className="max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Unsere Standorte"
            title="Besuchen Sie uns"
            body="An zwei Standorten im Rhein-Sieg-Kreis freuen wir uns auf Ihren Besuch."
            className="mb-14"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {locations.map((loc, i) => (
            <AosBox key={loc.name} animation="fade-up" delay={i * 120} className="h-full">
              <div className="h-full rounded-[1.75rem] bg-cream-50 border border-olive-200/50 p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-olive-100 border border-olive-300/70 flex items-center justify-center shrink-0">
                    <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-olive-600">
                      <path d="M10 2C6.69 2 4 4.69 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.31-2.69-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-lg text-olive-800 font-bold">{loc.name}</h3>
                </div>
                <p className="text-sm text-olive-700/90">{loc.address}</p>
                <p className="text-sm text-olive-700/70 mt-1">{loc.hours}</p>
              </div>
            </AosBox>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="300">
          <Link
            to="/standorte"
            className="inline-flex items-center gap-2 whitespace-nowrap px-8 py-3.5 border border-olive-600/35 text-olive-700 rounded-full text-sm font-semibold hover:bg-olive-600 hover:text-white hover:border-olive-600 transition active:scale-[0.97] motion-safe:duration-200"
          >
            Öffnungszeiten & Anfahrt
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <OrganicDivider color="text-cream-100" variant={2} flip />
    </section>
  )
}
