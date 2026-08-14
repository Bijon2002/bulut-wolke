import { Fragment, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { pickVideoSource, prefersReducedMotion, useAutoplayVideo } from '../lib/useAutoplayVideo'

interface HeroProps {
  onOpenModal?: () => void
}

/** Seconds the footage plays on its own before the words arrive. */
const TEXT_DELAY = 3

const LEAD_WORDS =
  'Handgemachte mediterrane und türkische Delikatessen. Jeden Morgen frisch zubereitet.'.split(' ')

const MARQUEE_WORDS = [
  'Marinierte Oliven',
  'Gegrillte Antipasti',
  'Cremiger Hummus',
  'Gefüllte Weinblätter',
  'Schafskäse',
  'Getrocknete Tomaten',
  'Hausgemachte Dips',
  'Mediterrane Feinkost',
]

export default function Hero({ onOpenModal }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useAutoplayVideo()
  const plateRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const brushRef = useRef<SVGPathElement>(null)

  /*
   * High-definition video cut for desktop screens (/media/video/hero-hd.mp4)
   * and optimized cut for mobile (/media/video/hero-720.mp4).
   */
  const videoSrc = pickVideoSource('/media/video/hero-hd.mp4', '/media/video/hero-720.mp4')

  /*
   * The opening, in three movements:
   *   1. the footage is masked into a shop-window arch in the middle of the page
   *   2. over ~1.8s that window opens out to the full screen
   *   3. at three seconds the card lands and the type settles onto it
   * Meanwhile the frame drifts in a slow push-in for the whole visit.
   *
   * Everything hidden here is hidden by JS only, so without scripting — or with
   * reduced motion — the hero is just the headline over the footage, at rest.
   */
  useEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const words = contentRef.current?.querySelectorAll('[data-hv-word]')
      const blocks = contentRef.current?.querySelectorAll('[data-hv-line]')

      gsap.set(contentRef.current, { autoAlpha: 0 })
      sectionRef.current?.classList.add('hv-intro')

      // ── 1 + 2: the window opens ──
      if (frameRef.current) {
        gsap.fromTo(
          frameRef.current,
          { clipPath: 'inset(16% 32% 16% 32% round 22rem 22rem 2rem 2rem)' },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0rem 0rem 0rem 0rem)',
            duration: 1.6,
            delay: 0.2,
            ease: 'expo.inOut',
            onComplete: () => {
              if (frameRef.current) {
                frameRef.current.style.clipPath = 'none'
              }
            },
          }
        )
      }

      // Smooth GPU accelerated scale setup without JS repaint loop
      if (videoRef.current) {
        gsap.set(videoRef.current, { scale: 1.02 })
      }

      const tl = gsap.timeline({ delay: TEXT_DELAY, defaults: { ease: 'power3.out' } })

      // ── 3: the card lands, then the type ──
      tl.set(contentRef.current, { autoAlpha: 1 })
        .add(() => sectionRef.current?.classList.remove('hv-intro'), 0)
        .from(plateRef.current, {
          y: 34,
          scale: 0.96,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
        })

      if (blocks?.length) {
        tl.from(blocks, { y: 26, opacity: 0, duration: 0.85, stagger: 0.11 }, 0.3)
      }
      if (words?.length) {
        tl.from(
          words,
          { y: 18, opacity: 0, filter: 'blur(8px)', duration: 0.7, stagger: 0.04 },
          0.6
        )
      }
      if (brushRef.current) {
        const len = brushRef.current.getTotalLength()
        gsap.set(brushRef.current, { strokeDasharray: len, strokeDashoffset: len })
        tl.to(brushRef.current, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 0.8)
      }
    }, sectionRef)

    // Failsafe: whatever happens to the timeline, the hero must not stay blank.
    const failsafe = window.setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.visibility = 'visible'
        contentRef.current.style.opacity = '1'
      }
      sectionRef.current?.classList.remove('hv-intro')
    }, (TEXT_DELAY + 4) * 1000)

    // The footage drifts slower than the page; the content fades out as it goes.
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const y = window.scrollY
        const h = window.innerHeight
        if (y > h * 1.3) return
        sectionRef.current?.style.setProperty('--hv-scroll', String(y))
        sectionRef.current?.style.setProperty(
          '--hv-fade',
          String(Math.max(0, 1 - (y / h) * 1.5))
        )
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      ctx.revert()
      window.clearTimeout(failsafe)
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
    // videoRef comes from the autoplay hook and is a stable ref object.
  }, [videoRef])

  /*
   * Custom loop behavior:
   *  - 1st play: plays 100% fully from 0.0s to the end of the video
   *  - Next loops: crops the front 3.5s (starts from 3.5s to the end on every loop)
   */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      video.currentTime = 3.5
      video.play().catch(() => undefined)
    }

    video.addEventListener('ended', handleEnded)
    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [videoRef])

  return (
    <>
      <section ref={sectionRef} className="hero-cinema" id="hero">
        {/* ── The footage, full bleed and unobstructed ── */}
        <div className="hv-bg" aria-hidden="true">
          {/* The shop window: opens from an arch out to the full screen */}
          <div ref={frameRef} className="hv-frame">
            <video
              ref={videoRef}
              className="hv-video"
              src={videoSrc}
              poster="/media/video/hero-poster.jpg"
              muted
              autoPlay
              playsInline
              preload="auto"
            />
          </div>
          {/* Edges only — keeps the middle of the frame clear */}
          <div className="hv-veil-edges" />
          <div className="hv-grain" />
        </div>
        {/* Thin gold viewfinder inset, drawn over the whole opening */}
        <div className="hv-rule" aria-hidden="true" />

        <div ref={contentRef} className="hv-content">
          {/* The card lands after the opening beat and carries the type. A
              defined edge reads as design; a soft haze reads as a smudge. */}
          <div ref={plateRef} className="hv-plate">
          <div data-hv-line className="hv-eyebrow">
            <span className="hv-eyebrow-dot" aria-hidden="true" />
            SEIT 1994 · RHEIN-SIEG-KREIS
          </div>

          <h1 data-hv-line className="hv-title font-heading">
            Bulut &amp; Wolke{' '}
            <span className="hv-title-script">
              <span className="hv-title-script-word">Feinkost</span>
              <svg
                className="hv-brush"
                viewBox="0 0 300 22"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  ref={brushRef}
                  d="M4 15 C 62 4, 118 4, 172 10 C 214 15, 258 14, 296 7"
                  fill="none"
                  stroke="#E5B93C"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="hv-lead">
            {LEAD_WORDS.map((word, i) => (
              // The space belongs outside the inline-block, or the browser
              // trims it and the sentence runs together.
              <Fragment key={`${word}-${i}`}>
                <span data-hv-word className="hv-word">
                  {word}
                </span>
                {i < LEAD_WORDS.length - 1 ? ' ' : ''}
              </Fragment>
            ))}
          </p>

          <div data-hv-line className="hero-cta hv-actions">
            <Link to="/spezialitaeten" className="btn-pill-orange text-sm">
              <span>Spezialitäten Entdecken</span>
              <svg
                aria-hidden="true"
                focusable="false"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <button onClick={onOpenModal} className="hv-btn-ghost">
              Anfrage Stellen
            </button>
          </div>

          <dl data-hv-line className="hv-facts">
            <div className="hv-fact">
              <dt>Familienbetrieb</dt>
              <dd>Seit 1994</dd>
            </div>
            <div className="hv-fact">
              <dt>Marktstände</dt>
              <dd>Siegburg &amp; Sankt Augustin</dd>
            </div>
            <div className="hv-fact">
              <dt>Zubereitung</dt>
              <dd>Täglich frisch</dd>
            </div>
          </dl>
          </div>
        </div>

        {/* Rotating maker's stamp */}
        <div className="stamp-badge hv-stamp hidden lg:block">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 100 100" className="stamp-svg w-full h-full">
            <path
              id="heroStampPath"
              d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              fill="none"
            />
            <text
              fontSize="8.5"
              letterSpacing="1.7"
              fill="#39482A"
              fontFamily="Plus Jakarta Sans"
              fontWeight="600"
            >
              <textPath href="#heroStampPath">• BULUT &amp; WOLKE • FEINKOST SELEKTION</textPath>
            </text>
          </svg>
          <div className="stamp-inner">
            <span>SEIT</span>
            <strong>1994</strong>
          </div>
        </div>

        <a href="#inhalt-start" className="hv-scroll" aria-label="Weiter zum Inhalt">
          <span>Entdecken</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* ── Specialty ribbon closing the hero ── */}
      <div className="hv-ribbon-wrap" id="inhalt-start" aria-hidden="true">
        <div className="hv-ribbon">
          <div className="hv-ribbon-track">
            {[0, 1].map((copy) => (
              <div className="hv-ribbon-group" key={copy}>
                {MARQUEE_WORDS.map((word) => (
                  <span className="hv-ribbon-item" key={`${copy}-${word}`}>
                    {word}
                    <i className="hv-ribbon-sep" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
