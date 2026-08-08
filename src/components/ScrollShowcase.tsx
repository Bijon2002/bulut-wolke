import { useEffect, useRef, useState } from 'react'

const phases = [
  {
    range: [0.0, 0.15],
    eyebrow: 'Feinkost aus dem Rhein-Sieg-Kreis',
    title: (
      <>
        Frische
        <br />
        <span className="text-cloud-400">Delikatessen</span>
        <br />
        mit Tradition
      </>
    ),
    body: 'Handgemachte Antipasti, Oliven und mediterrane Spezialitäten — täglich frisch zubereitet von unserer Familie für Ihre.',
    align: 'left' as const,
    cta: true,
  },
  {
    range: [0.18, 0.32],
    eyebrow: 'Handwerk',
    title: <>Jede Zutat zählt</>,
    body: 'Wir wählen jede Olive, jedes Gemüse, jedes Kraut mit Sorgfalt aus — für Genuss, den man schmeckt.',
    align: 'right' as const,
    cta: false,
  },
  {
    range: [0.35, 0.50],
    eyebrow: 'Frische',
    title: <>Täglich frisch zubereitet</>,
    body: 'Kein Fließband, keine Kompromisse. Unsere Spezialitäten entstehen von Hand — jeden Tag aufs Neue.',
    align: 'left' as const,
    cta: false,
  },
  {
    range: [0.53, 0.68],
    eyebrow: 'Familientradition',
    title: <>Von uns für Sie</>,
    body: 'Seit Generationen bringen wir mediterrane Genusskultur in den Rhein-Sieg-Kreis.',
    align: 'right' as const,
    cta: true,
  },
]

function easeProgress(raw: number, range: [number, number]) {
  const [start, end] = range
  const fadeIn = (raw - (start - 0.04)) / 0.04
  const fadeOut = (end + 0.04 - raw) / 0.04
  return Math.max(0, Math.min(1, fadeIn, fadeOut))
}

export default function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [globalProgress, setGlobalProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentScrollY = Math.max(0, window.scrollY)
      const raw = totalScrollableHeight > 0 ? currentScrollY / totalScrollableHeight : 0
      setGlobalProgress(Math.max(0, Math.min(1, raw)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
        {phases.map((phase, i) => {
          const opacity = easeProgress(globalProgress, phase.range as [number, number])
          const translate = (1 - opacity) * 24
          const alignClass = phase.align === 'right' ? 'items-end text-right ml-auto' : 'items-start text-left'
          return (
            <div
              key={i}
              className="absolute inset-0 flex items-center"
              style={{
                opacity,
                pointerEvents: opacity > 0.3 ? 'auto' : 'none',
                transition: 'opacity 0.15s ease-out',
              }}
            >
              <div className="max-w-6xl mx-auto px-5 w-full">
                <div
                  className={`max-w-xl flex flex-col ${alignClass} p-8 rounded-3xl bg-stone-950/40 backdrop-blur-md border border-white/10 shadow-2xl`}
                  style={{ transform: `translateY(${translate}px)` }}
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-cloud-300 mb-3 font-semibold">
                    {phase.eyebrow}
                  </p>
                  <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-white mb-4">
                    {phase.title}
                  </h2>
                  <p className="text-base md:text-lg text-stone-200 mb-6 leading-relaxed">
                    {phase.body}
                  </p>
                  {phase.cta && (
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <a
                        href="#produkte"
                        className="inline-flex items-center justify-center px-7 py-3.5 bg-cloud-500 text-white rounded-full text-sm font-medium hover:bg-cloud-600 transition-all shadow-lg hover:shadow-cloud-500/25"
                      >
                        Unsere Spezialitäten
                      </a>
                      <a
                        href="#standorte"
                        className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
                      >
                        Standorte finden
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
          style={{ opacity: globalProgress < 0.05 ? 1 - globalProgress / 0.05 : 0 }}
        >
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">Scrollen</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/70">
            <path d="M10 14l-5-5h10l-5 5z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  )
}
