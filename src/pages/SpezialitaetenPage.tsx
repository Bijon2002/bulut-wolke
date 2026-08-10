import { useState, useEffect } from 'react'
import AOS from 'aos'
import { products, categories } from '../data/products'

interface PageProps {
  onOpenModal?: () => void
}

export default function SpezialitaetenPage({ onOpenModal }: PageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle')
  const [guestsCount, setGuestsCount] = useState<number>(8)
  const [selectedFeinkost, setSelectedFeinkost] = useState<string[]>([
    'Marinierte Oliven',
    'Hummus Klassik',
    'Gefüllte Weinblätter',
  ])

  useEffect(() => {
    AOS.refresh()
  }, [])

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
    <div className="py-12 md:py-16 px-6 max-w-6xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3" data-aos="fade-up">
        <span className="font-script text-xl text-[#C9A227] block">
          Aus Unserer Manufaktur
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#39482A] tracking-tight">
          Spezialitäten & Feinkost
        </h1>
        <p className="text-[#4F5E48] text-sm md:text-base leading-relaxed">
          Täglich frisch zubereitet mit kaltgepresstem Olivenöl, feinen Kräutern und tradtionellen Familienrezepten.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        className="flex flex-wrap justify-center gap-2.5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {['Alle', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-[#39482A] text-white shadow-sm scale-105'
                : 'bg-white/80 text-[#4F5E48] border border-black/5 hover:border-[#C9A227] hover:text-[#39482A]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Display Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((item, idx) => (
          <div
            key={item.name}
            className="food-card-pop group bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-black/5 shadow-sm flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay={(idx % 3) * 100}
          >
            <div>
              <div className="relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-2 border-[#F7E08B]/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227]">
                  {item.category}
                </span>
                <span className="food-badge text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#FEF9EC] text-[#C9A227] border border-[#F7E08B]">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#39482A] mb-1.5">
                {item.name}
              </h3>
              <p className="text-xs text-[#4F5E48] leading-relaxed mb-5">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-black/5 space-y-2.5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#39482A]">
                <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#C9A227]">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                100% Manufaktur-Qualität
              </div>
              <button
                onClick={onOpenModal}
                className="btn-pill-orange w-full text-xs py-2.5 justify-center"
              >
                Anfragen / In Wunschplatte
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Party Platter Configurator Section */}
      <div
        className="bg-gradient-to-br from-[#FEF9EC] to-[#FBF9F2] rounded-3xl p-6 md:p-10 border border-[#F7E08B]/60 shadow-lg space-y-6"
        data-aos="fade-up"
      >
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#C9A227]">
            PLATTEN CONFIGURATOR
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#39482A]">
            Stellen Sie Ihre Wunschplatte Zusammen
          </h2>
          <p className="text-xs text-[#4F5E48]">
            Wählen Sie Personenanzahl und Ihre Lieblings-Feinkost für Feiern & Events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-black/5">
          {/* Guest Count Slider & Preset */}
          <div className="space-y-5">
            <div>
              <label htmlFor="platten-personen" className="block text-xs font-bold uppercase tracking-wider text-[#39482A] mb-2">
                Personenanzahl: <span className="text-base text-[#5A6B2F] font-extrabold ml-1">{guestsCount} Personen</span>
              </label>
              <input
                id="platten-personen"
                type="range"
                min={4}
                max={30}
                value={guestsCount}
                onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                className="w-full accent-[#5A6B2F] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#4F5E48] font-semibold mt-1">
                <span>4 (Klein)</span>
                <span>12 (Mittel)</span>
                <span>30+ (Event)</span>
              </div>
            </div>

            {/* Feinkost Multi Select */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#39482A] mb-2.5">
                Feinkost-Auswahl:
              </label>
              <div className="flex flex-wrap gap-2">
                {products.map((p) => {
                  const isSelected = selectedFeinkost.includes(p.name)
                  return (
                    <button
                      key={p.name}
                      onClick={() => toggleFeinkostSelection(p.name)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                        isSelected
                          ? 'bg-[#39482A] text-white border-[#39482A]'
                          : 'bg-white text-[#4F5E48] border-black/10 hover:border-[#C9A227]'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {p.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Live Platter Summary Card */}
          <div className="bg-[#39482A] text-white p-6 rounded-2xl shadow-md space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#F7E08B]">
                EMPFOHLENE PLATTE
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/10 rounded-full text-white">
                Frisch-Garantie
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white">
              Spezialitäten-Gourmet-Set
            </h3>

            <div className="text-xs text-white/80 space-y-1">
              <p>• Empfohlen für <strong className="text-[#F7E08B]">{guestsCount} Personen</strong></p>
              <p>• Inklusive <strong className="text-[#F7E08B]">{selectedFeinkost.length} Feinkost-Sorten</strong></p>
              <p>• Mit kaltgepresstem Olivenöl garnished</p>
            </div>

            <button
              onClick={onOpenModal}
              className="btn-pill-orange w-full justify-center text-xs py-2.5 mt-1"
            >
              <span>Platte Anfragen</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quality Guarantees Grid - Clean SVG Icons */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2" data-aos="fade-up">
        {[
          {
            title: 'Traditionelle Rezepte',
            desc: 'Überlieferte Familienrezepturen seit Generationen.',
            icon: (
              <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0112 8a4.5 4.5 0 017 3.5c0 5.15-7 9.5-7 9.5z" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            title: 'Täglich Frisch',
            desc: 'Morgens frisch in unserer Manufaktur zubereitet.',
            icon: (
              <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v1m0 16v1m-8.66-2.34l.71-.71m12.73-12.73l.71-.71M3 12h1m16 0h1M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            title: 'Reine Zutaten',
            desc: 'Ohne künstliche Konservierungsstoffe.',
            icon: (
              <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            title: 'Regionale Märkte',
            desc: 'Auf den Wochenmärkten im Rhein-Sieg-Kreis.',
            icon: (
              <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round"/>
              </svg>
            ),
          },
        ].map((g, i) => (
          <div
            key={g.title}
            className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-black/5 shadow-xs text-center space-y-2"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="w-10 h-10 rounded-full bg-[#FEF9EC] border border-[#F7E08B] text-[#C9A227] flex items-center justify-center mx-auto">
              {g.icon}
            </div>
            <h4 className="font-heading text-base font-bold text-[#39482A]">{g.title}</h4>
            <p className="text-xs text-[#4F5E48] leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
