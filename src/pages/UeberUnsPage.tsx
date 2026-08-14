import { useEffect } from 'react'
import AOS from 'aos'
import { photo } from '../lib/photo'

interface PageProps {
  onOpenModal?: () => void
}

export default function UeberUnsPage({ onOpenModal }: PageProps) {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="py-12 md:py-16 px-6 max-w-6xl mx-auto space-y-16">
      {/* Hero Narrative Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3" data-aos="fade-up">
        <span className="font-script text-xl text-[#C9A227] block">
          Tradition, Kultur & Leidenschaft
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#39482A] tracking-tight">
          Über Bulut & Wolke Feinkost
        </h1>
        <p className="text-[#4F5E48] text-sm md:text-base leading-relaxed">
          <strong className="text-[#39482A]">Bulut</strong> bedeutet Wolke auf Türkisch, <strong className="text-[#39482A]">Wolke</strong> dasselbe auf Deutsch. Zwei Kulturen, eine Leidenschaft: Feines Feinkost-Handwerk aus überlieferten Familienrezepten.
        </p>
      </div>

      {/* Main Story Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4" data-aos="fade-right">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#C9A227]">
            UNSERE GESCHICHTE
          </span>
          <h2 className="font-heading text-3xl font-bold text-[#39482A] leading-tight">
            Handarbeit aus dem Rhein-Sieg-Kreis
          </h2>
          <p className="text-[#4F5E48] text-xs md:text-sm leading-relaxed">
            Seit vielen Jahren stehen wir im Rhein-Sieg-Kreis für Qualität, Frische und echte Meze-Kultur. Was mit marinierten Oliven begann, ist heute eine feste Adresse auf den regionalen Wochenmärkten.
          </p>
          <p className="text-[#4F5E48] text-xs md:text-sm leading-relaxed">
            Jeden Morgen bereiten wir in unserer Manufaktur feine Dips, Weinblätter und Antipasti zu. Wir verzichten auf künstliche Zusatzstoffe — für natürlichen Geschmack.
          </p>
          <div className="pt-2 flex items-center gap-6">
            <div>
              <div className="text-3xl font-heading font-extrabold text-[#C9A227]">30+</div>
              <div className="text-xs font-semibold text-[#4F5E48]">Jahre Feinkost-Erfahrung</div>
            </div>
            <div className="h-10 w-px bg-black/10" />
            <div>
              <div className="text-3xl font-heading font-extrabold text-[#C9A227]">100%</div>
              <div className="text-xs font-semibold text-[#4F5E48]">Manufaktur-Frische</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center" data-aos="zoom-in" data-aos-delay="150">
          <div className="organic-peach-blob"></div>
          <img
            {...photo('/fotos/inhaber-lachen', 1000)}
            sizes="(max-width: 768px) 90vw, 28rem"
            alt="Der Inhaber von Bulut & Wolke mit einer Feinkostplatte"
            className="relative z-10 rounded-3xl max-w-md w-full aspect-[4/5] object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Historical Milestones Timeline */}
      <div className="space-y-8 pt-4" data-aos="fade-up">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#C9A227]">
            MEILENSTEINE
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#39482A]">
            Unser Weg zur Feinkost-Kultur
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              year: '1994',
              title: 'Familienrezepte',
              desc: 'Start mit ersten Meze-Rezepturen und marinierten Oliven im Familienkreis.',
            },
            {
              year: '2008',
              title: 'Wochenmärkte',
              desc: 'Feinkoststände auf den Märkten in Siegburg, Troisdorf & Sankt Augustin.',
            },
            {
              year: '2018',
              title: 'Manufaktur-Rezepturen',
              desc: 'Hauseigene Hummus- & Schafskäse-Pasten mit kaltgepresstem Olivenöl.',
            },
            {
              year: 'Heute',
              title: 'Catering-Service',
              desc: 'Individuelle Gourmet-Feinkostplatten für Feiern & Firmen-Events.',
            },
          ].map((m, idx) => (
            <div
              key={m.year}
              className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-black/5 shadow-sm space-y-2 relative overflow-hidden group hover:-translate-y-1 transition-transform"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-3xl font-heading font-extrabold text-[#C9A227]">
                {m.year}
              </div>
              <h3 className="font-heading text-base font-bold text-[#39482A]">
                {m.title}
              </h3>
              <p className="text-xs text-[#4F5E48] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values & Philosophy Grid - Clean SVG Icons */}
      <div className="bg-gradient-to-br from-[#FEF9EC] to-[#FBF9F2] rounded-3xl p-6 md:p-10 border border-[#F7E08B]/60 shadow-lg space-y-6" data-aos="fade-up">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#C9A227]">
            UNSEREVERSPRECHEN
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#39482A]">
            Qualität & Werte
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: 'Kaltgepresste Öle',
              desc: 'Ausschließlich kaltgepresste Olivenöle bester Qualität.',
              icon: (
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0112 8a4.5 4.5 0 017 3.5c0 5.15-7 9.5-7 9.5z" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: 'Handarbeit',
              desc: 'Jede Paste und Olive von Hand verlesen & zubereitet.',
              icon: (
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 11.5V14m0-2.5C7 9 3 8 3 5.5 3 3 5.5 3 7 5c1.5-2 4-2 4 .5C11 8 7 9 7 11.5z" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: 'Ohne Zusatzstoffe',
              desc: 'Keine künstlichen Aromen oder Konservierungsmittel.',
              icon: (
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: 'Beratung vor Ort',
              desc: 'Persönliche Empfehlungen auf unseren Wochenmärkten.',
              icon: (
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: 'Catering Service',
              desc: 'Feinkost-Platten exakt nach Ihren Event-Wünschen.',
              icon: (
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: 'Gastfreundschaft',
              desc: 'Meze-Kultur mit Herzlichkeit und Leidenschaft.',
              icon: (
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round"/>
                </svg>
              ),
            },
          ].map((v) => (
            <div key={v.title} className="bg-white/80 backdrop-blur-xs p-5 rounded-2xl border border-black/5 space-y-1.5">
              <div className="w-8 h-8 rounded-full bg-[#FEF9EC] border border-[#F7E08B] text-[#C9A227] flex items-center justify-center mb-2">
                {v.icon}
              </div>
              <h4 className="font-heading text-sm font-bold text-[#39482A]">{v.title}</h4>
              <p className="text-xs text-[#4F5E48] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center bg-[#39482A] text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-4" data-aos="zoom-in">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
          Lernen Sie Uns Kennen
        </h2>
        <p className="text-xs text-white/80 max-w-md mx-auto leading-relaxed">
          Besuchen Sie uns auf den Wochenmärkten im Rhein-Sieg-Kreis oder fragen Sie ein Catering für Ihr Event an.
        </p>
        <div className="flex justify-center pt-2">
          <button onClick={onOpenModal} className="btn-pill-orange text-xs py-3 px-6">
            <span>Catering Anfragen</span>
          </button>
        </div>
      </div>
    </div>
  )
}
