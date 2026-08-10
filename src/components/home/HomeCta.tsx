import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import AosBox from '../AosBox'
import OrganicDivider from '../OrganicDivider'
import { OliveSprig } from '../SectionHeading'

export default function HomeCta({ nextColor = 'text-cream-200' }: { nextColor?: string }) {
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (blob1Ref.current) {
        gsap.to(blob1Ref.current, {
          x: 15,
          y: -15,
          rotation: 3,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
      if (blob2Ref.current) {
        gsap.to(blob2Ref.current, {
          x: -12,
          y: 12,
          rotation: -3,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.3,
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative bg-cream-100 pt-20 md:pt-28 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          ref={blob1Ref}
          className="absolute -bottom-32 -right-24 w-[26rem] h-[26rem] bg-yellow-100/40"
          style={{ borderRadius: '58% 42% 47% 53% / 44% 39% 61% 56%' }}
        />
        <div
          ref={blob2Ref}
          className="absolute -top-24 -left-20 w-[20rem] h-[20rem] bg-sky-100/60"
          style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 pb-20 md:pb-28 text-center" data-aos="fade-up">
        <AosBox animation="fade-down" delay={100} className="flex justify-center mb-6">
          <OliveSprig className="scale-125" />
        </AosBox>

        <AosBox animation="fade-up" delay={150}>
          <h2 className="font-display text-3xl md:text-5xl leading-tight tracking-tight text-olive-800 font-bold mb-5">
            Lust auf mediterranen <span className="text-yellow-600">Genuss?</span>
          </h2>
        </AosBox>

        <AosBox animation="fade-up" delay={250}>
          <p className="text-olive-700/90 leading-relaxed mb-9">
            Ob Partyplatte, Beratung oder einfach eine Frage zu unseren Produkten —
            wir freuen uns, von Ihnen zu hören.
          </p>
        </AosBox>

        <AosBox animation="zoom-in" delay={350}>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 bg-yellow-600 text-white rounded-full text-sm font-semibold hover:bg-yellow-700 transition active:scale-[0.97] motion-safe:duration-200 shadow-sm"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              to="/spezialitaeten"
              className="inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 border border-olive-600/35 text-olive-700 rounded-full text-sm font-semibold hover:bg-olive-600 hover:text-white hover:border-olive-600 transition active:scale-[0.97] motion-safe:duration-200"
            >
              Sortiment entdecken
            </Link>
          </div>
        </AosBox>
      </div>

      <OrganicDivider color={nextColor} variant={1} />
    </section>
  )
}
