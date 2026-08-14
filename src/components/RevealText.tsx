import { Fragment, useEffect, useRef, type ReactNode, type ElementType } from 'react'

interface RevealTextProps {
  /** Each entry animates in as its own line, staggered. */
  lines: ReactNode[]
  as?: ElementType
  className?: string
  /** Delay between consecutive lines, in ms. */
  stagger?: number
  /** Delay before the first line, in ms. */
  delay?: number
  /**
   * 'word' breaks plain-string lines into words that focus in one after the
   * other. Non-string lines always animate as a whole.
   */
  mode?: 'line' | 'word'
}

/**
 * Staggered text reveal, by line or by word.
 *
 * Text renders fully visible by default; the hidden state is only ever applied
 * by JS, so it never depends on scripting or on the observer firing.
 * Honours prefers-reduced-motion.
 */
export default function RevealText({
  lines,
  as: Tag = 'h2',
  className = '',
  stagger = 90,
  delay = 0,
  mode = 'line',
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal-line]'))
    if (items.length === 0) return

    const show = () => {
      items.forEach((item) => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
        item.style.filter = 'blur(0px)'
      })
    }

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || typeof IntersectionObserver === 'undefined') return

    items.forEach((item, i) => {
      const at = delay + i * stagger
      item.style.opacity = '0'
      item.style.transform = 'translateY(0.38em)'
      // Words arrive out of focus and settle, the way a camera pulls focus —
      // much softer than a plain slide.
      item.style.filter = 'blur(7px)'
      // Gentle overshoot — the spring-ish feel, without a physics library.
      item.style.transition =
        `opacity 620ms cubic-bezier(0.22, 1, 0.36, 1) ${at}ms,` +
        ` transform 620ms cubic-bezier(0.34, 1.32, 0.64, 1) ${at}ms,` +
        ` filter 620ms cubic-bezier(0.22, 1, 0.36, 1) ${at}ms`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)

    // Failsafe: never leave the heading invisible.
    const failsafe = window.setTimeout(show, 2000 + delay)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [lines.length, stagger, delay, mode])

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) =>
        mode === 'word' && typeof line === 'string' ? (
          <span key={i} className="block">
            {line.split(' ').map((word, w, all) => (
              // The space sits outside the span so the line can still break here.
              <Fragment key={`${i}-${w}`}>
                <span data-reveal-line className="inline-block will-change-[opacity,transform,filter]">
                  {word}
                </span>
                {w < all.length - 1 ? ' ' : ''}
              </Fragment>
            ))}
          </span>
        ) : (
          <span key={i} data-reveal-line className="block will-change-[opacity,transform,filter]">
            {line}
          </span>
        )
      )}
    </Tag>
  )
}
