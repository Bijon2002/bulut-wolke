import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

interface HeroProps {
  onOpenModal?: () => void
}

export default function Hero({ onOpenModal }: HeroProps) {
  const plateRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const bgBlob1Ref = useRef<HTMLDivElement>(null)
  const bgBlob2Ref = useRef<HTMLDivElement>(null)
  const leaf1Ref = useRef<HTMLDivElement>(null)
  const leaf2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (plateRef.current) {
        gsap.to(plateRef.current, {
          y: -12,
          rotation: 1.5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        })
      }
      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          y: 8,
          scale: 1.05,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: 0.5,
        })
      }
      if (bgBlob1Ref.current) {
        gsap.to(bgBlob1Ref.current, {
          x: 24,
          y: -24,
          rotation: 8,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
      if (bgBlob2Ref.current) {
        gsap.to(bgBlob2Ref.current, {
          x: -20,
          y: 20,
          rotation: -6,
          duration: 5.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5,
        })
      }
      if (leaf1Ref.current) {
        gsap.to(leaf1Ref.current, {
          y: -16,
          rotation: 12,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        })
      }
      if (leaf2Ref.current) {
        gsap.to(leaf2Ref.current, {
          y: 14,
          rotation: -10,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: 0.8,
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative pt-16 md:pt-24 pb-20 overflow-hidden" id="hero">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Circular Watermark Stamp Badge */}
        <div className="stamp-badge hidden md:block" data-aos="zoom-in" data-aos-delay="600">
          <svg viewBox="0 0 100 100" className="stamp-svg w-full h-full">
            <path id="textPath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
            <text fontSize="8.5" letterSpacing="1.7" fill="#1E332E" fontFamily="Plus Jakarta Sans" fontWeight="600">
              <textPath href="#textPath">• BULUT &amp; WOLKE • FEINKOST SELEKTION</textPath>
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
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-block text-[11px] font-bold tracking-[2.5px] text-[#B88E28] mb-4 bg-white/60 backdrop-blur-xs px-3 py-1 rounded-full border-0"
            >
              FEINKOST AUS DEM RHEIN-SIEG-KREIS
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.08] text-[#1E332E] mb-5 drop-shadow-xs"
            >
              Bulut &amp; Wolke<br />
              <span className="font-normal italic text-[#2A4742]">Feinkost</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="350"
              className="text-sm sm:text-base text-[#4A5D57] max-w-md mb-7 leading-relaxed font-medium"
            >
              Frische, handgemachte mediterrane und türkische Delikatessen. Von marinierten Oliven über cremige Dips bis hin zu gegrillten Antipasti – mit Liebe und feinsten Zutaten zubereitet.
            </p>

            {/* CTA Buttons */}
            <div data-aos="fade-up" data-aos-delay="500" className="hero-cta flex flex-wrap gap-3.5 items-center">
              <Link to="/spezialitaeten" className="btn-pill-orange text-xs sm:text-sm">
                <span>Spezialitäten Entdecken</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={onOpenModal}
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border-1.5 border-[#1E332E] text-[#1E332E] font-semibold text-xs sm:text-sm hover:border-[#EE6D52] hover:text-[#EE6D52] transition-all bg-white/40 backdrop-blur-xs"
              >
                Anfrage Stellen
              </button>
            </div>
          </div>

          {/* Hero Right Dish Image */}
          <div className="hero-media-col relative flex justify-center mt-6 md:mt-0" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
            <div className="relative max-w-xs sm:max-w-md group cursor-pointer">
              <div ref={plateRef} className="w-full">
                <img
                  src="/assets/feinkost_hero_plate.png"
                  alt="Bulut &amp; Wolke Feinkost Spezialität"
                  className="w-full rounded-full shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-5 group-hover:scale-108 group-hover:shadow-[0_30px_60px_rgba(30,51,46,0.28)]"
                />
              </div>
              <div
                ref={badgeRef}
                className="absolute top-4 right-2 w-20 h-20 rounded-full border-2 border-dashed border-[#D4AF37]/80 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-[#1E332E] text-[9px] font-bold shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-5 group-hover:scale-110"
              >
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
