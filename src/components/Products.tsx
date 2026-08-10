import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { products } from '../data/products'

interface ProductsProps {
  onOpenModal?: () => void
}

export default function Products({ onOpenModal }: ProductsProps) {
  const highlights = products.filter((p) => p.highlight)
  const centerPlateRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (centerPlateRef.current) {
      gsap.to(centerPlateRef.current, {
        y: -10,
        scale: 1.03,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }, [])

  return (
    <section className="relative py-16 overflow-hidden" id="process">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center mb-16">

        {/* Left Info Card */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-4xl font-heading font-extrabold text-[#D4AF37] mb-3">01</div>
          <h4 className="font-heading text-xl font-bold text-[#1E332E] mb-3">
            Erlesene Zutaten
          </h4>
          <p className="text-sm text-[#4A5D57] leading-relaxed">
            Sonnengereifte Oliven, knackiges Gemüse und feine Kräuter – sorgfältig aus besten Anbaugebieten ausgewählt.
          </p>
        </div>

        {/* Center Dish Plate */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-center group cursor-pointer"
          onClick={onOpenModal}
        >
          <div ref={centerPlateRef} className="w-full">
            <img
              src="/assets/feinkost_bottom_plate.png"
              alt="Bulut &amp; Wolke Feinkost Platte"
              className="w-full max-w-xs mx-auto rounded-full shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-5 group-hover:scale-108 group-hover:shadow-[0_30px_60px_rgba(30,51,46,0.28)]"
            />
          </div>
          <div className="mt-4 text-xs font-bold tracking-[2px] text-[#B88E28]">
            HAUSSPEZIALITÄT SELEKTION
          </div>
        </div>

        {/* Right Info Card */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-4xl font-heading font-extrabold text-[#D4AF37] mb-3">02</div>
          <h4 className="font-heading text-xl font-bold text-[#1E332E] mb-3">
            Handgemachte Qualität
          </h4>
          <p className="text-sm text-[#4A5D57] leading-relaxed">
            Täglich frisch nach traditionellen Familienrezepten in unserer Manufaktur hergestellt – ganz ohne Konservierungsstoffe.
          </p>
        </div>

      </div>

      {/* Featured Products Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="font-script text-lg text-[#B88E28]">Unsere Beliebtesten Spezialitäten</span>
          <h3 className="font-heading text-3xl font-bold text-[#1E332E] mt-1">Frisch aus der Theke</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((p, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 120}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-5 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold tracking-wider px-3 py-1 rounded-full bg-[#FEF9EC] text-[#B88E28] border border-[#F7E08B] mb-3">
                  {p.badge}
                </span>
                <h4 className="font-heading text-lg font-bold text-[#1E332E] mb-2">{p.name}</h4>
                <p className="text-xs text-[#4A5D57] leading-relaxed mb-4">{p.description}</p>
              </div>
              <button
                onClick={onOpenModal}
                className="w-full py-2 rounded-full border border-[#1E332E] text-[#1E332E] text-xs font-semibold hover:bg-[#EE6D52] hover:text-white hover:border-[#EE6D52] transition-colors"
              >
                Anfragen
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-aos="zoom-in" data-aos-delay="400">
          <Link to="/spezialitaeten" className="btn-pill-orange text-xs py-3 px-8">
            <span>Alle Spezialitäten Ansehen</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
