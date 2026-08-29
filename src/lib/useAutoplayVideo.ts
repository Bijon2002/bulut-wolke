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

    // Tracks the observer's own view of visibility, so a stray `pause` event
    // (mobile browsers fire one when the address bar collapses/expands and
    // the viewport briefly resizes — nothing app code asked for) can be told
    // apart from a real "scrolled off screen" pause and reversed.
    let intersecting = true

    const start = () => {
      video.play().catch(() => undefined)
    }

    start()
    video.addEventListener('loadeddata', start)
    video.addEventListener('canplay', start)

    // If the video ever stops while it's still supposed to be on screen and
    // the tab is active, put it back — the only *intentional* pauses here
    // come from the IntersectionObserver and the reduced-motion branch above.
    const onPause = () => {
      if (intersecting && document.visibilityState === 'visible') start()
    }
    video.addEventListener('pause', onPause)

    const onVisible = () => {
      if (document.visibilityState === 'visible') start()
    }
    document.addEventListener('visibilitychange', onVisible)

    // A small rootMargin absorbs the sub-pixel intersection jitter mobile
    // browsers produce while their address bar animates in and out.
    const io = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting
        if (entry.isIntersecting) start()
        else video.pause()
      },
      { threshold: 0, rootMargin: '80px 0px' }
    )
    io.observe(video)

    return () => {
      io.disconnect()
      video.removeEventListener('loadeddata', start)
      video.removeEventListener('canplay', start)
      video.removeEventListener('pause', onPause)
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
