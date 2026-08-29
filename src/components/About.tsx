import { Link } from 'react-router-dom'
import AosBox from './AosBox'
import { photo } from '../lib/photo'

interface AboutProps {
  onOpenModal?: () => void
}

export default function About({ onOpenModal }: AboutProps) {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden bg-sky-50/50" id="about">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cream-100/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 auto-rows-[minmax(180px,auto)]">

          {/* ── Main Title Card (Spans 8 cols) ── */}
          <AosBox animation="fade-right" duration={800} className="md:col-span-8 bg-white/70 backdrop-blur-xl border border-white/50 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-center h-full">
            <span className="font-script text-xl text-yellow-600 block mb-3">
              Die Kunst Feiner Köstlichkeiten
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-olive-950 font-bold leading-[1.1] tracking-tight">
              Aus Unserer <br className="hidden md:block" />Manufaktur,<br />
              <span className="text-olive-700">Echter Geschmack.</span>
            </h2>
          </AosBox>

          {/* ── Portrait Card (Spans 4 cols, 2 rows) ── */}
          <AosBox animation="fade-left" delay={200} duration={800} className="md:col-span-4 md:row-span-2 relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group h-full min-h-[240px]">
            <img
              {...photo('/fotos/inhaber-portrait', 1000)}
              sizes="(max-width: 768px) 90vw, 33vw"
              alt="Der Inhaber von Bulut & Wolke"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase mb-1 block">Täglich</span>
              <strong className="text-white font-display text-2xl leading-none">Frisch</strong>
            </div>
          </AosBox>

          {/* ── Text Card (Spans 4 cols) ── */}
          <AosBox animation="fade-up" delay={150} duration={800} className="md:col-span-4 bg-olive-900 text-white rounded-[2rem] p-6 sm:p-7 lg:p-8 shadow-xl flex flex-col justify-center h-full">
            <p className="text-olive-100/95 text-sm sm:text-base leading-relaxed font-medium">
              Aus dem Rhein-Sieg-Kreis bieten wir handgemachte Feinkost-Spezialitäten nach bewährten Familienrezepten. Täglich frisch zubereitet mit kaltgepressten Olivenölen und besten Zutaten.
            </p>
          </AosBox>

          {/* ── Image Card (Spans 4 cols) ── */}
          <AosBox animation="fade-up" delay={300} duration={800} className="md:col-span-4 relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group h-full min-h-[180px]">
            <img
              {...photo('/fotos/theke-antipasti', 1000)}
              sizes="(max-width: 768px) 90vw, 33vw"
              alt="Frische Oliven"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-olive-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </AosBox>

          {/* ── CTA / Banner Card (Spans 12 cols) ── */}
          <AosBox animation="fade-up" delay={400} duration={800} className="md:col-span-12 bg-white/50 backdrop-blur-md border border-white/60 rounded-[2rem] p-6 lg:p-8 shadow-lg flex flex-col md:flex-row gap-6 justify-between items-center h-full mt-1">
            <div className="text-center md:text-left">
              <h3 className="font-script text-2xl lg:text-3xl font-bold text-olive-900 tracking-wider mb-2">
                BULUT & WOLKE FEINKOST
              </h3>
              <p className="text-xs font-bold tracking-[3px] text-yellow-600 uppercase">
                Mediterrane Vielfalt für jeden Anlass
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-center">
              <Link
                to="/ueber-uns"
                className="px-6 py-3 bg-olive-900 text-white rounded-full font-bold text-sm hover:bg-olive-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Über Uns Erfahren
              </Link>
              <button
                onClick={onOpenModal}
                className="px-6 py-3 rounded-full border-2 border-olive-900 text-olive-900 font-bold text-sm hover:bg-white transition-all hover:-translate-y-1"
              >
                Anfrage Stellen
              </button>
            </div>
          </AosBox>

        </div>
      </div>
    </section>
  )
}
