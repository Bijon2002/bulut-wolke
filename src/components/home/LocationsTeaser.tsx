import { Link } from 'react-router-dom'
import AosBox from '../AosBox'
import { locations } from '../../data/locations'

export default function LocationsTeaser() {
  return (
    <section className="relative bg-cream-100 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* ── Video Banner ── */}
        <AosBox animation="zoom-in" duration={1000} className="relative rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl h-[280px] sm:h-[360px] md:h-[420px]">
          <video
            src="/assets/0814-web.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            autoPlay
            playsInline
          />
          <div className="absolute inset-0 bg-olive-950/40 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold drop-shadow-2xl mb-4 leading-tight">
              Unsere Standorte
            </h2>
            <Link
              to="/standorte"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white hover:text-olive-950 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Alle Details ansehen
            </Link>
          </div>
        </AosBox>

        {/* ── Location Cards ── */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
          {locations.map((loc, i) => (
            <AosBox key={loc.name} animation={i === 0 ? 'fade-right' : 'fade-left'} delay={i * 150}>
              <div className="bg-white border border-olive-200/50 shadow-md hover:shadow-lg hover:-translate-y-1 rounded-[1.75rem] p-6 transition-all duration-300">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-olive-950 mb-3">{loc.name}</h3>
                <div className="space-y-2.5 mb-5">
                  <p className="flex items-start gap-2.5 text-sm text-olive-800 font-medium">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5 text-yellow-600"><path d="M10 2C6.69 2 4 4.69 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.31-2.69-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/></svg>
                    {loc.address}
                  </p>
                  <p className="flex items-start gap-2.5 text-sm text-olive-700/80">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="shrink-0 mt-0.5"><circle cx="10" cy="10" r="7.2" /><path d="M10 6v4.3l2.6 1.6" strokeLinecap="round" /></svg>
                    {loc.hours}
                  </p>
                </div>
                <a href={loc.maps} target="_blank" rel="noreferrer" className="block text-center w-full py-3 bg-olive-100 text-olive-900 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors">Route planen</a>
              </div>
            </AosBox>
          ))}
        </div>

      </div>
    </section>
  )
}
