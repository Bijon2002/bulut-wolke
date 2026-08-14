import { Link } from 'react-router-dom'
import AosBox from '../AosBox'
import { locations } from '../../data/locations'
import { photo } from '../../lib/photo'

export default function LocationsTeaser() {
  return (
    <section className="relative bg-cream-100 py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative min-h-[800px] lg:min-h-[700px] flex items-center justify-center">
        
        {/* ── Center Video Pill ── */}
        <AosBox animation="zoom-in" duration={1200} className="absolute inset-x-5 inset-y-16 lg:inset-x-32 lg:inset-y-10 rounded-[3rem] lg:rounded-[6rem] overflow-hidden shadow-2xl">
          <video
            src="/assets/0814-web.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            autoPlay
            playsInline
          />
          <div className="absolute inset-0 bg-olive-950/40 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
            <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] text-white font-bold drop-shadow-2xl mb-6 leading-none">
              Unsere<br/>Standorte
            </h2>
            <Link
              to="/standorte"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-olive-950 transition-all duration-300 mt-8 shadow-lg hover:shadow-xl"
            >
              Alle Details ansehen
            </Link>
          </div>
        </AosBox>

        {/* ── Floating Location 1 (Left) ── */}
        <AosBox animation="fade-right" delay={300} className="absolute top-0 lg:top-1/4 left-2 lg:left-8 w-[95%] sm:w-96 z-20">
          <div className="bg-white/85 backdrop-blur-2xl border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2.5rem] p-6 lg:p-8 transform lg:-rotate-3 hover:rotate-0 transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-inner relative">
               <img {...photo(locations[0].photo, 600)} alt={locations[0].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="font-display text-3xl font-bold text-olive-950 mb-4">{locations[0].name}</h3>
            <div className="space-y-3 mb-6">
              <p className="flex items-start gap-3 text-olive-800 font-medium">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5 text-yellow-600"><path d="M10 2C6.69 2 4 4.69 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.31-2.69-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/></svg>
                {locations[0].address}
              </p>
              <p className="flex items-start gap-3 text-olive-700/80">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="shrink-0 mt-0.5"><circle cx="10" cy="10" r="7.2" /><path d="M10 6v4.3l2.6 1.6" strokeLinecap="round" /></svg>
                {locations[0].hours}
              </p>
            </div>
            <a href={locations[0].maps} target="_blank" rel="noreferrer" className="block text-center w-full py-3.5 bg-olive-100 text-olive-900 rounded-xl font-bold hover:bg-yellow-400 transition-colors">Route planen</a>
          </div>
        </AosBox>

        {/* ── Floating Location 2 (Right) ── */}
        <AosBox animation="fade-left" delay={500} className="absolute bottom-0 lg:bottom-1/4 right-2 lg:right-8 w-[95%] sm:w-96 z-20">
          <div className="bg-white/85 backdrop-blur-2xl border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2.5rem] p-6 lg:p-8 transform lg:rotate-3 hover:rotate-0 transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-inner relative">
               <img {...photo(locations[1].photo, 600)} alt={locations[1].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="font-display text-3xl font-bold text-olive-950 mb-4">{locations[1].name}</h3>
            <div className="space-y-3 mb-6">
              <p className="flex items-start gap-3 text-olive-800 font-medium">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5 text-yellow-600"><path d="M10 2C6.69 2 4 4.69 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.31-2.69-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/></svg>
                {locations[1].address}
              </p>
              <p className="flex items-start gap-3 text-olive-700/80">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="shrink-0 mt-0.5"><circle cx="10" cy="10" r="7.2" /><path d="M10 6v4.3l2.6 1.6" strokeLinecap="round" /></svg>
                {locations[1].hours}
              </p>
            </div>
            <a href={locations[1].maps} target="_blank" rel="noreferrer" className="block text-center w-full py-3.5 bg-olive-100 text-olive-900 rounded-xl font-bold hover:bg-yellow-400 transition-colors">Route planen</a>
          </div>
        </AosBox>

      </div>
    </section>
  )
}
