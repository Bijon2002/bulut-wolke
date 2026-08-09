import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

interface RevealTextProps {
  /** Each entry animates in as its own line, staggered. */
  lines: ReactNode[]
  as?: ElementType
  className?: string
  /** Delay between consecutive lines, in ms. */
  stagger?: number
  /** Delay before the first line, in ms. */
  delay?: number
}

/**
 * Staggered line-by-line text reveal.
 *
 * Lines render fully visible by default; the hidden state is only ever applied
 * by JS, so the text is never dependent on scripting or on the observer firing.
 * Honours prefers-reduced-motion.
 */
export default function RevealText({
  lines,
  as: Tag = 'h2',
  className = '',
  stagger = 90,
  delay = 0,
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
      })
    }

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || typeof IntersectionObserver === 'undefined') return

    items.forEach((item, i) => {
      item.style.opacity = '0'
      item.style.transform = 'translateY(0.38em)'
      // Gentle overshoot — the spring-ish feel, without a physics library.
      item.style.transition = `opacity 620ms cubic-bezier(0.22, 1, 0.36, 1) ${delay + i * stagger}ms, transform 620ms cubic-bezier(0.34, 1.32, 0.64, 1) ${delay + i * stagger}ms`
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
  }, [lines.length, stagger, delay])

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} data-reveal-line className="block will-change-[opacity,transform]">
          {line}
        </span>
      ))}
    </Tag>
  )
}
