export default function ImpressumPage() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-script text-xl text-[#B88E28] block mb-2">Rechtliche Hinweise</span>
        <h1 className="font-heading text-4xl font-bold text-[#1E332E]">Impressum</h1>
      </div>
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-black/5 shadow-md space-y-4 text-[#4A5D57] text-sm leading-relaxed">
        <h3 className="font-heading text-xl font-bold text-[#1E332E]">Bulut &amp; Wolke Feinkost</h3>
        <p>Rhein-Sieg-Kreis, Deutschland</p>
        <p>E-Mail: info@bulut-wolke.de</p>
        <p>Inhaber: Bulut &amp; Wolke Feinkost Team</p>
        <p>Angaben gemäß § 5 TMG / Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV.</p>
      </div>
    </div>
  )
}
