export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cloud-50 via-white to-white" />

      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-cloud-100/60 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-olive-100/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-cloud-600 mb-4 font-medium">
            Feinkost aus dem Rhein-Sieg-Kreis
          </p>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-stone-900 mb-6">
            Frische
            <br />
            <span className="text-cloud-600">Delikatessen</span>
            <br />
            mit Tradition
          </h1>

          <p className="text-lg md:text-xl text-stone-500 max-w-lg mb-10 leading-relaxed">
            Handgemachte Antipasti, Oliven und mediterrane Spezialitäten —
            täglich frisch zubereitet von unserer Familie für Ihre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#produkte"
              className="inline-flex items-center justify-center px-8 py-4 bg-cloud-600 text-white rounded-full text-sm font-medium hover:bg-cloud-700 transition-colors"
            >
              Unsere Spezialitäten
            </a>
            <a
              href="#standorte"
              className="inline-flex items-center justify-center px-8 py-4 border border-stone-200 text-stone-700 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              Standorte finden
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-stone-300">
          <path d="M10 14l-5-5h10l-5 5z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
