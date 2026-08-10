import { useEffect } from 'react'
import AOS from 'aos'

interface PageProps {
  onOpenModal?: () => void
}

export default function StandortePage({ onOpenModal }: PageProps) {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="font-script text-xl text-[#B88E28] block mb-2">Wo Sie Uns Finden</span>
        <h1 className="font-heading text-5xl font-bold text-[#1E332E] mb-4">Standorte &amp; Wochenmärkte</h1>
        <p className="text-[#4A5D57] max-w-lg mx-auto leading-relaxed">
          Besuchen Sie unsere Feinkoststände im Rhein-Sieg-Kreis und überzeugen Sie sich vor Ort von der Frische unserer Spezialitäten.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-black/5 shadow-md space-y-6"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl font-heading font-extrabold text-[#D4AF37] mb-2">STANDORT 01</div>
            <h3 className="font-heading text-2xl font-bold text-[#1E332E] mb-2">Siegburg &amp; Umgebung</h3>
            <p className="text-[#4A5D57] text-sm leading-relaxed">
              Regelmäßig auf den beliebtesten Wochenmärkten im Rhein-Sieg-Kreis mit frischer Auswahl an Thekenspezialitäten.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="text-3xl font-heading font-extrabold text-[#D4AF37] mb-2">STANDORT 02</div>
            <h3 className="font-heading text-2xl font-bold text-[#1E332E] mb-2">Catering &amp; Event-Service</h3>
            <p className="text-[#4A5D57] text-sm leading-relaxed">
              Für private Feiern, Firmen-Events und Hochzeiten stellen wir Ihnen individuelle Feinkost-Platten zusammen.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <button onClick={onOpenModal} className="btn-pill-orange text-xs py-3 px-6">
              <span>Standort Anfragen</span>
            </button>
          </div>
        </div>

        <div className="text-center" data-aos="fade-left" data-aos-delay="200">
          <img src="/assets/feinkost_bottom_plate.png" alt="Standorte Delikatessen" className="w-full max-w-md mx-auto rounded-full shadow-2xl" />
        </div>
      </div>
    </div>
  )
}
