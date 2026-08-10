import AosBox from './AosBox'
import SectionHeading from './SectionHeading'
import OrganicDivider from './OrganicDivider'
import { locations } from '../data/locations'

export default function Locations({ nextColor = 'text-cream-100' }: { nextColor?: string }) {
  return (
    <section id="standorte" className="relative bg-transparent pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Öffnungszeiten und Anfahrt"
          title="Besuchen Sie uns"
          body="An zwei Standorten im Rhein-Sieg-Kreis freuen wir uns auf Ihren Besuch."
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
          {locations.map((loc, i) => (
            <AosBox key={loc.name} animation="fade-up" delay={i * 120} className="h-full">
              <div className="h-full flex flex-col justify-between rounded-[1.75rem] bg-cream-50 border border-olive-200/50 p-8 md:p-9 shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:border-yellow-500/50 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-full bg-olive-100 border border-olive-300/70 flex items-center justify-center mb-5">
                    <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-olive-600">
                      <path
                        d="M10 2C6.69 2 4 4.69 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.31-2.69-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <h3 className="font-display text-2xl text-olive-800 font-bold mb-4">{loc.name}</h3>

                  <div className="space-y-3 text-sm text-olive-700/90">
                    <div className="flex gap-3">
                      <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-olive-500 mt-0.5 shrink-0">
                        <path d="M8 1C4.69 1 2 3.69 2 7c0 4.5 6 8 6 8s6-3.5 6-8c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex gap-3">
                      <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-olive-500 mt-0.5 shrink-0">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>{loc.hours}</span>
                    </div>
                    <div className="flex gap-3">
                      <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-olive-500 mt-0.5 shrink-0">
                        <path d="M14 11.5c-1.3 0-2.5-.4-3.5-1l-2 2c-1.5-1-2.7-2.2-3.5-3.5l2-2c-.6-1-1-2.2-1-3.5A1.5 1.5 0 007.5 2H5A1.5 1.5 0 003.5 3.5C3.5 9.3 6.7 12.5 12.5 12.5A1.5 1.5 0 0014 11z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <span>{loc.phone}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-yellow-700 hover:text-yellow-800 transition-colors"
                >
                  Wegbeschreibung
                  <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </AosBox>
          ))}
        </div>
      </div>

      <OrganicDivider color={nextColor} variant={2} flip />
    </section>
  )
}
