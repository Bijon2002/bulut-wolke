import { useEffect, useRef } from 'react'

/** Same escape hatch App.tsx uses: Windows often reports reduced motion. */
export function prefersReducedMotion() {
  return false
}

/**
 * Keeps a decorative background video running without any controls.
 *
 * Nothing here may block autoplay, so the caller's <video> must carry
 * `muted`, `loop`, `autoPlay` and `playsInline` — this only retries play()
 * at the moments browsers are known to refuse it: before the element can
 * render frames, and while the tab sits in the background. Off-screen it
 * pauses, since there is no point decoding frames nobody can see, and with
 * reduced motion it holds the poster frame instead.
 */
export function useAutoplayVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    if (prefersReducedMotion()) {
      video.pause()
      return
    }

    const start = () => {
      video.play().catch(() => undefined)
    }

    start()
    video.addEventListener('loadeddata', start)
    video.addEventListener('canplay', start)

    const onVisible = () => {
      if (document.visibilityState === 'visible') start()
    }
    document.addEventListener('visibilitychange', onVisible)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start()
        else video.pause()
      },
      { threshold: 0.05 }
    )
    io.observe(video)

    return () => {
      io.disconnect()
      video.removeEventListener('loadeddata', start)
      video.removeEventListener('canplay', start)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return ref
}

/** Chrome ignores `media` on <source>, so the phone cut is chosen up front. */
export function pickVideoSource(desktop: string, mobile: string) {
  if (typeof window === 'undefined') return desktop
  return window.matchMedia('(max-width: 640px)').matches ? mobile : desktop
}
