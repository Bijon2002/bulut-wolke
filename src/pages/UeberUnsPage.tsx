interface PageProps {
  onOpenModal?: () => void
}

export default function UeberUnsPage({ onOpenModal }: PageProps) {
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center">
      <span className="font-script text-xl text-[#B88E28] block mb-2">Tradition &amp; Leidenschaft</span>
      <h1 className="font-heading text-5xl font-bold text-[#1E332E] mb-6">Über Bulut &amp; Wolke Feinkost</h1>
      <p className="text-lg text-[#4A5D57] max-w-2xl mx-auto leading-relaxed mb-12">
        Seit vielen Jahren stehen wir im Rhein-Sieg-Kreis für höchste Qualität, Frische und echte Handarbeit. Unsere Spezialitäten vereinen mediterrane und türkische Feinkostkultur nach überlieferten Familienrezepten.
      </p>

      <div className="relative inline-block my-8">
        <div className="organic-peach-blob"></div>
        <img
          src="/assets/feinkost_middle_blob.png"
          alt="Bulut & Wolke Manufaktur"
          className="relative z-10 rounded-3xl max-w-lg mx-auto shadow-2xl"
        />
      </div>

      <div className="mt-12">
        <button onClick={onOpenModal} className="btn-pill-orange">
          <span>Jetzt Anfrage Stellen</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
