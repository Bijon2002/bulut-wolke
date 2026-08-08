import { useEffect, useRef } from 'react'

export type AosAnimation = 'fade-up' | 'fade-down' | 'fade-in' | 'zoom-in' | 'slide-left' | 'slide-right'

interface ScrollRevealOptions {
  animation?: AosAnimation
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const {
    animation = 'fade-up',
    delay = 0,
    duration = 700,
    threshold = 0.15,
    once = true,
  } = options

  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Initial hidden transform state based on chosen AOS animation
    let initialTransform = 'translateY(40px)'
    if (animation === 'fade-down') initialTransform = 'translateY(-40px)'
    else if (animation === 'zoom-in') initialTransform = 'scale(0.88)'
    else if (animation === 'slide-left') initialTransform = 'translateX(40px)'
    else if (animation === 'slide-right') initialTransform = 'translateX(-40px)'
    else if (animation === 'fade-in') initialTransform = 'translateY(0)'

    el.style.opacity = '0'
    el.style.transform = initialTransform
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = animation === 'zoom-in' ? 'scale(1)' : 'translate(0, 0)'
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.style.opacity = '0'
          el.style.transform = initialTransform
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation, delay, duration, threshold, once])

  return ref
}
