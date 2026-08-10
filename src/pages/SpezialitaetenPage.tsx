import { useEffect } from 'react'
import AOS from 'aos'
import { products, categories } from '../data/products'

interface PageProps {
  onOpenModal?: () => void
}

export default function SpezialitaetenPage({ onOpenModal }: PageProps) {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="font-script text-xl text-[#B88E28] block mb-2">Aus Unserer Manufaktur</span>
        <h1 className="font-heading text-5xl font-bold text-[#1E332E] mb-4">Spezialitäten &amp; Feinkost</h1>
        <p className="text-[#4A5D57] max-w-lg mx-auto leading-relaxed">
          Täglich frisch zubereitet mit kaltgepresstem Olivenöl, frischen Kräutern und tradtionellen Familienrezepten.
        </p>
      </div>

      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat)
        return (
          <div key={cat} className="mb-14">
            <h2
              className="font-heading text-3xl font-bold text-[#1E332E] mb-6 pb-2 border-b border-black/10"
              data-aos="fade-right"
            >
              {cat}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {catProducts.map((item, idx) => (
                <div
                  key={idx}
                  className="food-card-pop group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-black/5 shadow-md flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div>
                    <img src={item.image} alt={item.name} className="w-36 h-36 object-cover mx-auto rounded-full mb-6 shadow-lg" />
                    <span className="food-badge inline-block text-[10px] font-bold tracking-wider px-3 py-1 rounded-full bg-[#FEF9EC] text-[#B88E28] border border-[#F7E08B] mb-2">
                      {item.badge}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#1E332E] mb-2">{item.name}</h3>
                    <p className="text-sm text-[#4A5D57] mb-6 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-black/5">
                    <span className="font-bold text-[#B88E28] text-sm">Frische Garantie</span>
                    <button onClick={onOpenModal} className="btn-pill-orange text-xs py-2 px-5">Anfragen</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
