import { Link } from 'react-router-dom'
import AosBox from '../AosBox'
import SectionHeading from '../SectionHeading'
import OrganicDivider from '../OrganicDivider'
import { locations } from '../../data/locations'
import { photo } from '../../lib/photo'

export default function LocationsTeaser() {
  return (
    <section className="relative bg-sky-100 pt-20 md:pt-28 overflow-hidden">
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          src="/assets/0814-web.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        />
        <div className="absolute inset-0 bg-sky-100/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="Unsere Standorte"
            title="Besuchen Sie uns"
            body="An zwei Standorten im Rhein-Sieg-Kreis freuen wir uns auf Ihren Besuch."
            className="mb-14"
          />
        </div>

        {/* Each stall gets its own photograph — visitors look for the stand,
            not for an address line. */}
        <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
          {locations.map((loc, i) => (
            <AosBox key={loc.name} animation="fade-up" delay={i * 120} className="h-full">
              <article className="loc-card">
                <div className="loc-media">
                  <img
                    {...photo(loc.photo, 1000)}
                    sizes="(max-width: 768px) 92vw, 44vw"
                    alt={`Marktstand von Bulut & Wolke – ${loc.name}`}
                    className="loc-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="loc-shade" aria-hidden="true" />
                  <h3 className="loc-name font-display">{loc.name}</h3>
                </div>

                <div className="loc-body">
                  <p className="loc-row">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M10 2C6.69 2 4 4.69 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.31-2.69-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                        fill="currentColor"
                      />
                    </svg>
                    {loc.address}
                  </p>
                  <p className="loc-row loc-row-muted">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                      <circle cx="10" cy="10" r="7.2" />
                      <path d="M10 6v4.3l2.6 1.6" strokeLinecap="round" />
                    </svg>
                    {loc.hours}
                  </p>
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="loc-link"
                  >
                    Route planen
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </AosBox>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="300">
          <Link
            to="/standorte"
            className="inline-flex items-center gap-2 whitespace-nowrap px-8 py-3.5 border border-olive-600/35 text-olive-700 rounded-full text-sm font-semibold hover:bg-olive-600 hover:text-white hover:border-olive-600 transition active:scale-[0.97] motion-safe:duration-200"
          >
            Öffnungszeiten &amp; Anfahrt
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
