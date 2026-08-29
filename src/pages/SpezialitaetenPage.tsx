import { useState, useEffect, useRef } from 'react'
import AOS from 'aos'
import gsap from 'gsap'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import { pickVideoSource, useAutoplayVideo } from '../lib/useAutoplayVideo'

interface PageProps {
  onOpenModal?: () => void
}

const GUARANTEES = [
  {
    no: '01',
    title: 'Traditionelle Rezepte',
    desc: 'Überlieferte Familienrezepturen seit Generationen.',
  },
  {
    no: '02',
    title: 'Täglich frisch',
    desc: 'Morgens frisch in unserer Manufaktur zubereitet.',
  },
  {
    no: '03',
    title: 'Reine Zutaten',
    desc: 'Ohne künstliche Konservierungsstoffe.',
  },
  {
    no: '04',
    title: 'Regionale Märkte',
    desc: 'Auf den Wochenmärkten im Rhein-Sieg-Kreis.',
  },
]

export default function SpezialitaetenPage({ onOpenModal }: PageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle')
  const [guestsCount, setGuestsCount] = useState<number>(8)
  const [selectedFeinkost, setSelectedFeinkost] = useState<string[]>([
    'Marinierte Oliven',
    'Hummus Klassik',
    'Gefüllte Weinblätter',
  ])

  const gridRef = useRef<HTMLDivElement>(null)
  const brushRef = useRef<SVGPathElement>(null)
  const reelRef = useAutoplayVideo()
  const reelSrc = pickVideoSource('/media/video/spezial-720.mp4', '/media/video/spezial-mobile.mp4')

  useEffect(() => {
    AOS.refresh()
  }, [])

  const reducedMotion =
    localStorage.getItem('bw:force-motion') !== '1' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  /* Gold stroke under the title, drawn once on arrival. */
  useEffect(() => {
    if (reducedMotion || !brushRef.current) return
    const path = brushRef.current
    const len = path.getTotalLength()
    const tween = gsap.fromTo(
      path,
      { strokeDasharray: len, strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 0.9, delay: 0.35, ease: 'power2.inOut' }
    )
    return () => {
      tween.kill()
    }
  }, [reducedMotion])

  /* Cards blur in whenever the filter changes, so switching category reads as
     a deliberate transition rather than a jump cut. */
  useEffect(() => {
    if (reducedMotion || !gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.pc-card')
    if (!cards.length) return
    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 26, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        stagger: 0.06,
        ease: 'power3.out',
        clearProps: 'filter',
      }
    )
    return () => {
      tween.kill()
    }
  }, [selectedCategory, reducedMotion])

  const filteredProducts =
    selectedCategory === 'Alle'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  const toggleFeinkostSelection = (name: string) => {
    if (selectedFeinkost.includes(name)) {
      if (selectedFeinkost.length > 1) {
        setSelectedFeinkost(selectedFeinkost.filter((item) => item !== name))
      }
    } else {
      setSelectedFeinkost([...selectedFeinkost, name])
    }
  }

  return (
    <div className="sp-page">
      {/* ─────────── Page hero: Seamless Luxury Showcase ─────────── */}
      <header className="sp-hero">
        <div className="sp-hero-inner">
          {/* Left Column: Typography */}
          <div className="sp-hero-content" data-aos="fade-right">
            <div className="sp-eyebrow">
              <span className="sp-eyebrow-line" aria-hidden="true" />
              ✨ MANUFAKTUR SELEKTION · SEIT 1994
            </div>
            <h1 className="sp-title font-heading">
              Spezialitäten &amp; <br className="hidden md:block" />
              <span className="sp-title-accent">
                <span className="relative z-10 text-[#C9A227]">Feinkost</span>
                <svg
                  className="sp-brush"
                  viewBox="0 0 300 22"
                  preserveAspectRatio="none"
                  aria-hidden="true"
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
            <p className="sp-lead">
              Täglich frisch zubereitet mit kaltgepresstem Olivenöl, feinen Kräutern und
              traditionellen Familienrezepten – so, wie sie seit 1994 über unsere Theke gehen.
            </p>
            <div className="sp-hero-actions">
              <button onClick={onOpenModal} className="btn-pill-orange">
                <span>Platte anfragen</span>
              </button>
            </div>
          </div>

          {/* Right Column: Cinematic Video Frame */}
          <div className="sp-hero-visual" data-aos="fade-left" data-aos-delay="150">
            <div className="sp-video-frame">
              <video
                ref={reelRef}
                className="sp-video-player"
                src={reelSrc}
                poster="/media/video/spezial-poster.jpg"
                muted
                loop
                autoPlay
                playsInline
                preload="auto"
              />
              <div className="sp-video-overlay" />
              <div className="sp-video-badge">
                <span className="w-2 h-2 rounded-full bg-[#E5B93C] animate-pulse" />
                <span>FRISCH AUS DER THEKE</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─────────── Everything under the poster, on the house backdrop ─────────── */}
      <div className="sp-under">
        {/* ─────────── Sticky filter rail ─────────── */}
        <div className="sp-filter-wrap">
          <div className="sp-filter">
            <div className="sp-filter-pills" role="tablist" aria-label="Kategorien">
              {['Alle', ...categories].map((cat) => {
                const count =
                  cat === 'Alle'
                    ? products.length
                    : products.filter((p) => p.category === cat).length
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`sp-pill ${selectedCategory === cat ? 'is-active' : ''}`}
                  >
                    <span>{cat}</span>
                    <span className="sp-pill-badge">{count}</span>
                  </button>
                )
              })}
            </div>
            <span className="sp-filter-count" aria-live="polite">
              {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'Spezialität' : 'Spezialitäten'}
            </span>
          </div>
        </div>

        {/* ─────────── Product grid ─────────── */}
        <section className="sp-section">
          <div ref={gridRef} className="sp-grid">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.name}
                product={item}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        </section>

      </div>

      {/* ─────────── Platter configurator ─────────── */}
      <section className="sp-config-wrap">
        <div className="sp-config">
          <div className="sp-config-head" data-aos="fade-up">
            <div className="sp-eyebrow sp-eyebrow-center">
              <span className="sp-eyebrow-line" aria-hidden="true" />
              PLATTEN KONFIGURATOR
              <span className="sp-eyebrow-line" aria-hidden="true" />
            </div>
            <h2 className="sp-h2 font-heading">Stellen Sie Ihre Wunschplatte zusammen</h2>
            <p className="sp-config-sub">
              Personenanzahl wählen, Lieblingssorten antippen – wir bereiten die Platte für Ihre
              Feier vor.
            </p>
          </div>

          <div className="sp-config-body">
            <div className="sp-config-controls">
              <div className="sp-field">
                <label htmlFor="platten-personen" className="sp-label">
                  Personenanzahl
                </label>
                <div className="sp-guests">
                  <span className="sp-guests-num font-heading">{guestsCount}</span>
                  <span className="sp-guests-unit">Personen</span>
                </div>
                <input
                  id="platten-personen"
                  type="range"
                  min={4}
                  max={30}
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                  className="sp-range"
                />
                <div className="sp-range-scale">
                  <span>4 · Klein</span>
                  <span>12 · Mittel</span>
                  <span>30+ · Event</span>
                </div>
              </div>

              <div className="sp-field">
                <span className="sp-label">Feinkost-Auswahl</span>
                <div className="sp-chips">
                  {products.map((p) => {
                    const isSelected = selectedFeinkost.includes(p.name)
                    return (
                      <button
                        key={p.name}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => toggleFeinkostSelection(p.name)}
                        className={`sp-chip ${isSelected ? 'is-on' : ''}`}
                      >
                        <span className="sp-chip-mark" aria-hidden="true">
                          {isSelected ? '✓' : '+'}
                        </span>
                        {p.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Live summary, styled like the paper slip at the counter */}
            <aside className="sp-slip">
              <div className="sp-slip-head">
                <span>Empfohlene Platte</span>
                <span className="sp-slip-seal">Frisch-Garantie</span>
              </div>
              <h3 className="sp-slip-title font-heading">Spezialitäten-Gourmet-Set</h3>
              <ul className="sp-slip-list">
                <li>
                  Für <strong>{guestsCount} Personen</strong>
                </li>
                <li>
                  <strong>{selectedFeinkost.length} Feinkost-Sorten</strong> nach Ihrer Wahl
                </li>
                <li>Mit kaltgepresstem Olivenöl angerichtet</li>
              </ul>
              <div className="sp-slip-picks">
                {selectedFeinkost.map((name) => (
                  <span key={name} className="sp-slip-pick">
                    {name}
                  </span>
                ))}
              </div>
              <button onClick={onOpenModal} className="btn-pill-orange w-full justify-center text-sm">
                <span>Platte anfragen</span>
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* ─────────── Guarantees ─────────── */}
      <section className="sp-section sp-guarantees">
        {GUARANTEES.map((g, i) => (
          <div key={g.title} className="sp-guarantee" data-aos="fade-up" data-aos-delay={i * 90}>
            <span className="sp-guarantee-no font-heading">{g.no}</span>
            <h4 className="sp-guarantee-title font-heading">{g.title}</h4>
            <p className="sp-guarantee-desc">{g.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
