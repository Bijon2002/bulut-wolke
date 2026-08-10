import { Link } from 'react-router-dom'

interface HeroProps {
  onOpenModal?: () => void
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 overflow-hidden" id="hero">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Circular Watermark Stamp Badge */}
        <div className="stamp-badge hidden md:block">
          <svg viewBox="0 0 100 100" className="stamp-svg w-full h-full">
            <path id="textPath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
            <text font-size="8.5" letter-spacing="1.7" fill="#1E332E" font-family="Plus Jakarta Sans" font-weight="600">
              <textPath href="#textPath">• BULUT & WOLKE • FEINKOST SELEKTION</textPath>
            </text>
          </svg>
          <div className="stamp-inner">
            <span>SEIT</span>
            <strong>1994</strong>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Hero Left Text Column */}
          <div className="hero-text-col md:pl-12 pt-6 md:pt-10 z-10">
            <div className="inline-block text-[11px] font-bold tracking-[2.5px] text-[#B88E28] mb-4 bg-white/60 backdrop-blur-xs px-3 py-1 rounded-full border-0">
              FEINKOST AUS DEM RHEIN-SIEG-KREIS
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-[#1E332E] mb-6 drop-shadow-xs">
              Bulut &amp; Wolke<br />
              <span className="font-normal italic text-[#2A4742]">Feinkost</span>
            </h1>

            <p className="text-base text-[#4A5D57] max-w-md mb-8 leading-relaxed font-medium">
              Frische, handgemachte mediterrane und türkische Delikatessen. Von marinierten Oliven über cremige Dips bis hin zu gegrillten Antipasti – mit Liebe und feinsten Zutaten zubereitet.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-wrap gap-4 items-center">
              <Link to="/spezialitaeten" className="btn-pill-orange">
                <span>Spezialitäten Entdecken</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={onOpenModal}
                className="px-6 py-3.5 rounded-full border-1.5 border-[#1E332E] text-[#1E332E] font-semibold text-sm hover:border-[#EE6D52] hover:text-[#EE6D52] transition-all bg-white/40 backdrop-blur-xs"
              >
                Anfrage Stellen
              </button>
            </div>
          </div>

          {/* Hero Right Dish Image */}
          <div className="hero-media-col relative flex justify-center">
            <div className="relative max-w-md group">
              <img
                src="/assets/feinkost_hero_plate.png"
                alt="Bulut &amp; Wolke Feinkost Spezialität"
                className="w-full rounded-full shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute top-4 right-2 w-20 h-20 rounded-full border-2 border-dashed border-[#D4AF37]/80 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-[#1E332E] text-[9px] font-bold shadow-md">
                <span>BULUT &amp; WOLKE</span>
                <small className="text-[7px] text-[#B88E28]">PREMIUM SELEKTION</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
