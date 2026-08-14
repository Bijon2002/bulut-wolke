import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { photo } from '../lib/photo'

interface AboutProps {
  onOpenModal?: () => void
}

export default function About({ onOpenModal }: AboutProps) {
  const miniBadgeRef = useRef<HTMLDivElement>(null)
  const bgBlobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (miniBadgeRef.current) {
        gsap.to(miniBadgeRef.current, {
          scale: 1.08,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        })
      }
      if (bgBlobRef.current) {
        gsap.to(bgBlobRef.current, {
          x: 18,
          y: -18,
          rotation: 5,
          duration: 4.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative py-20 overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Column: Portrait in the organic blob frame */}
        <div className="middle-left-col flex items-center relative" data-aos="fade-right" data-aos-duration="900">
          <div className="relative flex-1 group cursor-pointer">
            <div className="organic-peach-blob"></div>
            <img
              {...photo('/fotos/inhaber-portrait', 1000)}
              sizes="(max-width: 768px) 88vw, 40vw"
              alt="Der Inhaber von Bulut & Wolke an der Feinkosttheke"
              className="relative z-10 rounded-3xl shadow-xl w-full aspect-[4/5] object-cover transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-4 group-hover:scale-[1.03] group-hover:shadow-[0_20px_50px_rgba(30,51,46,0.2)]"
              loading="lazy"
              decoding="async"
            />
            <div ref={miniBadgeRef} className="mini-badge">
              <span>FRISCH</span>
              <strong>100%</strong>
            </div>
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="middle-right-col" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
          <span className="font-script text-xl text-[#C9A227] block mb-2">
            Die Kunst Feiner Köstlichkeiten
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-[#39482A] font-bold mb-6 leading-tight">
            Aus Unserer Manufaktur,<br />
            Echter Geschmack
          </h2>

          <div className="space-y-4 text-[#4F5E48] text-base leading-relaxed mb-8">
            <p>
              Aus dem Rhein-Sieg-Kreis bieten wir handgemachte Feinkost-Spezialitäten nach bewährten Familienrezepten. Täglich frisch zubereitet mit kaltgepressten Olivenölen, duftenden Kräutern und besten Zutaten.
            </p>
            <p>
              Von cremigen Pasten und Dips über gefüllte Weinblätter bis hin zu sonnenverwöhnten marinierten Oliven – erleben Sie mediterrane und orientalische Geschmacksvielfalt für jeden Anlass.
            </p>
          </div>

          <div className="middle-cta flex flex-wrap gap-4 items-center">
            <Link to="/ueber-uns" className="btn-pill-orange">
              <span>Über Uns Erfahren</span>
              <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 rounded-full border-1.5 border-[#39482A] text-[#39482A] font-semibold text-sm hover:border-[#5A6B2F] hover:text-[#5A6B2F] transition-all"
            >
              Anfrage Stellen
            </button>
          </div>
        </div>
      </div>

      {/* Middle Center Title Banner */}
      <div className="text-center mt-24 mb-6" id="selection" data-aos="zoom-in" data-aos-delay="100">
        <h3 className="font-script text-3xl md:text-4xl font-bold text-[#39482A] tracking-wider mb-2">
          BULUT & WOLKE FEINKOST SELEKTION
        </h3>
        <p className="text-xs font-bold tracking-[2.5px] text-[#C9A227] uppercase">
          TÄGLICH FRISCH MIT HERZ UND UNVERWECHSELBARER TRADITION
        </p>
      </div>
    </section>
  )
}
