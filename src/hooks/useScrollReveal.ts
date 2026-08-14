import { useEffect, useRef } from 'react'

export type AosAnimation = 'fade-up' | 'fade-down' | 'fade-in' | 'zoom-in' | 'slide-left' | 'slide-right' | 'fade-left' | 'fade-right'

interface ScrollRevealOptions {
  animation?: AosAnimation
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

/**
 * Scroll reveal that treats animation strictly as a bonus:
 * content is never left hidden if motion is reduced, if IntersectionObserver
 * is unavailable, or if the observer simply never fires.
 */
export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const {
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.12,
    once = true,
  } = options

  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => {
      el.style.opacity = '1'
      el.style.transform = animation === 'zoom-in' ? 'scale(1)' : 'translate(0, 0)'
      
      // Crucial: Clear inline transform & opacity after reveal transition completes
      // so CSS :hover transforms (translateY, scale, shadow) work on buttons and cards!
      setTimeout(() => {
        if (el) {
          el.style.transform = ''
          el.style.opacity = ''
          el.style.transition = ''
        }
      }, duration + delay + 100)
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      reveal()
      return
    }

    let initialTransform = 'translateY(28px)'
    if (animation === 'fade-down') initialTransform = 'translateY(-28px)'
    else if (animation === 'zoom-in') initialTransform = 'scale(0.94)'
    else if (animation === 'slide-left' || animation === 'fade-left') initialTransform = 'translateX(28px)'
    else if (animation === 'slide-right' || animation === 'fade-right') initialTransform = 'translateX(-28px)'
    else if (animation === 'fade-in') initialTransform = 'translateY(0)'

    el.style.opacity = '0'
    el.style.transform = initialTransform
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.34, 1.32, 0.64, 1) ${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.style.opacity = '0'
          el.style.transform = initialTransform
        }
      },
      { threshold }
    )

    observer.observe(el)

    // Failsafe: never leave content invisible if the observer fails to fire
    const failsafe = window.setTimeout(reveal, 1500 + delay)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [animation, delay, duration, threshold, once])

  return ref
}
