import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { products } from '../data/products'
import ProductCard from './ProductCard'
import bottomPlate from '../assets/feinkost_bottom_plate.png'

interface ProductsProps {
  onOpenModal?: () => void
}

export default function Products({ onOpenModal }: ProductsProps) {
  const highlights = products.filter((p) => p.highlight)
  const centerPlateRef = useRef<HTMLDivElement>(null)
  const bgBlobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      if (bgBlobRef.current) {
        gsap.to(bgBlobRef.current, {
          x: -20,
          y: 20,
          rotation: -6,
          duration: 5.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
    return () => ctx.revert()
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
          <div className="text-4xl font-heading font-extrabold text-[#C9A227] mb-3">01</div>
          <h4 className="font-heading text-xl font-bold text-[#39482A] mb-3">
            Erlesene Zutaten
          </h4>
          <p className="text-sm text-[#4F5E48] leading-relaxed">
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
              src={bottomPlate}
              alt="Frisch angerichtete Salate und Antipasti an der Theke von Bulut & Wolke"
              className="w-full max-w-xs mx-auto aspect-square object-cover rounded-full shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-5 group-hover:scale-105 group-hover:shadow-[0_30px_60px_rgba(30,51,46,0.28)]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="mt-4 text-xs font-bold tracking-[2px] text-[#C9A227]">
            HAUSSPEZIALITÄT SELEKTION
          </div>
        </div>

        {/* Right Info Card */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-4xl font-heading font-extrabold text-[#C9A227] mb-3">02</div>
          <h4 className="font-heading text-xl font-bold text-[#39482A] mb-3">
            Handgemachte Qualität
          </h4>
          <p className="text-sm text-[#4F5E48] leading-relaxed">
            Täglich frisch nach traditionellen Familienrezepten in unserer Manufaktur hergestellt – ganz ohne Konservierungsstoffe.
          </p>
        </div>

      </div>

      {/* Featured Products Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="font-script text-lg text-[#C9A227]">Unsere Beliebtesten Spezialitäten</span>
          <h3 className="font-heading text-3xl font-bold text-[#39482A] mt-1">Frisch aus der Theke</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {highlights.map((p, idx) => (
            <div key={p.name} data-aos="fade-up" data-aos-delay={100 + idx * 120} className="h-full">
              <ProductCard product={p} onOpenModal={onOpenModal} />
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
