import { useRef, useEffect, useState } from 'react'

export default function ScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function onLoaded() {
      setLoaded(true)
      video!.currentTime = 0
    }

    video.addEventListener('loadeddata', onLoaded)
    video.load()

    return () => video.removeEventListener('loadeddata', onLoaded)
  }, [])

  useEffect(() => {
    if (!loaded) return

    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    let ticking = false

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = section!.getBoundingClientRect()
          const scrollHeight = section!.offsetHeight - window.innerHeight
          const rawProgress = -rect.top / scrollHeight
          const progress = Math.max(0, Math.min(1, rawProgress))

          if (video!.duration) {
            const targetTime = progress * video!.duration
            if (Math.abs(video!.currentTime - targetTime) > 0.05) {
              video!.currentTime = targetTime
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [loaded])

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-stone-900">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/scroll-video.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/30" />

        <div className="absolute bottom-16 left-0 right-0 text-center px-5">
          <p className="text-sm uppercase tracking-[0.2em] text-cloud-300 mb-3 font-medium">
            Täglich frisch zubereitet
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-tight">
            Von der Theke
            <br />
            <span className="text-cloud-400">auf Ihren Tisch</span>
          </h2>
        </div>

        {!loaded && (
          <div className="absolute inset-0 bg-stone-900 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-cloud-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </section>
  )
}
