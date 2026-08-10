import OrganicDivider from './OrganicDivider'
import RevealText from './RevealText'
import { OliveSprig } from './SectionHeading'

interface PageHeroProps {
  eyebrow: string
  title: string
  /** Surface colour of the section that follows, as a text-* class. */
  nextColor?: string
}

export default function PageHero({ eyebrow, title, nextColor = 'text-cream-100' }: PageHeroProps) {
  return (
    <section className="relative bg-transparent pt-16 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-28 -right-20 w-[32rem] h-[32rem] bg-sky-100/70"
          style={{ borderRadius: '58% 42% 47% 53% / 44% 39% 61% 56%' }}
        />
        <div
          className="absolute -bottom-24 -left-28 w-[24rem] h-[24rem] bg-yellow-100/35"
          style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-olive-600 font-semibold mb-4">
          {eyebrow}
        </p>
        <RevealText
          as="h1"
          className="font-display text-4xl md:text-6xl leading-tight tracking-tight text-olive-800 font-bold"
          lines={[title]}
          delay={60}
        />
        <div className="flex items-center gap-3 justify-center mt-6" aria-hidden>
          <span className="h-px w-14 bg-yellow-600/45" />
          <OliveSprig />
          <span className="h-px w-14 bg-yellow-600/45" />
        </div>
      </div>

      <OrganicDivider color={nextColor} variant={1} />
    </section>
  )
}
