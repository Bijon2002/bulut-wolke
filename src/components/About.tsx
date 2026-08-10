import { Link } from 'react-router-dom'

interface AboutProps {
  onOpenModal?: () => void
}

export default function About({ onOpenModal }: AboutProps) {
  return (
    <section className="relative py-20 overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Fork + Organic Blob Frame */}
        <div className="middle-left-col flex items-center gap-6 relative">
          <div className="w-16 shrink-0 hidden sm:block">
            <img
              src="/assets/gold_fork.png"
              alt="Gourmet Gabel"
              className="w-full filter drop-shadow-md"
            />
          </div>
          <div className="relative flex-1">
            <div className="organic-peach-blob"></div>
            <img
              src="/assets/feinkost_middle_blob.png"
              alt="Frische Feinkost Manufaktur"
              className="relative z-10 rounded-3xl shadow-xl w-full"
            />
            <div className="mini-badge">
              <span>FRISCH</span>
              <strong>100%</strong>
            </div>
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="middle-right-col">
          <span className="font-script text-xl text-[#B88E28] block mb-2">
            Die Kunst Feiner Köstlichkeiten
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1E332E] font-bold mb-6 leading-tight">
            Aus Unserer Manufaktur,<br />
            Echter Geschmack
          </h2>

          <div className="space-y-4 text-[#4A5D57] text-base leading-relaxed mb-8">
            <p>
              Aus dem Rhein-Sieg-Kreis bieten wir handgemachte Feinkost-Spezialitäten nach bewährten Familienrezepten. Täglich frisch zubereitet mit kaltgepressten Olivenölen, duftenden Kräutern und besten Zutaten.
            </p>
            <p>
              Von cremigen Pasten und Dips über gefüllte Weinblätter bis hin zu sonnenverwöhnten marinierten Oliven – erleben Sie mediterrane und orientalische Geschmacksvielfalt für jeden Anlass.
            </p>
          </div>

          <div className="middle-cta flex flex-wrap gap-4 items-center">
            <Link to="/ueber-uns" className="btn-pill-orange">
              <span>Über Uns Erfahren</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 rounded-full border-1.5 border-[#1E332E] text-[#1E332E] font-semibold text-sm hover:border-[#EE6D52] hover:text-[#EE6D52] transition-all"
            >
              Anfrage Stellen
            </button>
          </div>
        </div>
      </div>

      {/* Middle Center Title Banner */}
      <div className="text-center mt-24 mb-6" id="selection">
        <h3 className="font-script text-3xl md:text-4xl font-bold text-[#1E332E] tracking-wider mb-2">
          BULUT & WOLKE FEINKOST SELEKTION
        </h3>
        <p className="text-xs font-bold tracking-[2.5px] text-[#B88E28] uppercase">
          TÄGLICH FRISCH MIT HERZ UND UNVERWECHSELBARER TRADITION
        </p>
      </div>
    </section>
  )
}
