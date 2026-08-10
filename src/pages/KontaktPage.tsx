import { useEffect } from 'react'
import AOS from 'aos'

interface PageProps {
  onOpenModal?: () => void
}

export default function KontaktPage({ onOpenModal }: PageProps) {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="font-script text-xl text-[#B88E28] block mb-2">Persönlich &amp; Direkt</span>
        <h1 className="font-heading text-5xl font-bold text-[#1E332E] mb-4">Kontakt &amp; Catering-Anfrage</h1>
        <p className="text-[#4A5D57] max-w-lg mx-auto leading-relaxed">
          Haben Sie Fragen zu unseren Spezialitäten oder möchten Sie Feinkost-Platten für ein Event bestellen?
        </p>
      </div>

      <div
        className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-black/5 shadow-xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <form onSubmit={(e) => { e.preventDefault(); onOpenModal?.(); }} className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="200">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E332E] mb-2">Ihr Name</label>
            <input type="text" placeholder="Max Mustermann" required className="w-full px-4 py-3 rounded-2xl border border-black/10 text-sm outline-none focus:border-[#EE6D52] bg-white/80" />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E332E] mb-2">E-Mail-Adresse</label>
            <input type="email" placeholder="max@beispiel.de" required className="w-full px-4 py-3 rounded-2xl border border-black/10 text-sm outline-none focus:border-[#EE6D52] bg-white/80" />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E332E] mb-2">Ihre Nachricht / Catering-Anfrage</label>
            <textarea rows={4} placeholder="Teilen Sie uns Ihre Wünsche, Personenanzahl oder Ihren Wunschtermin mit..." className="w-full px-4 py-3 rounded-2xl border border-black/10 text-sm outline-none focus:border-[#EE6D52] bg-white/80"></textarea>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500">
            <button type="submit" className="btn-pill-orange w-full justify-center">
              <span>Anfrage Absenden</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
