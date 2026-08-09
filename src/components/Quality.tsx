import AosBox from './AosBox'
import SectionHeading from './SectionHeading'
import OrganicDivider from './OrganicDivider'

const values = [
  {
    title: 'Täglich frisch',
    description: 'Jeden Morgen bereiten wir unsere Spezialitäten frisch zu. Was Sie bei uns kaufen, wurde heute gemacht.',
    icon: (
      <path d="M12 3v1m0 16v1m-8.66-2.34l.71-.71m12.73-12.73l.71-.71M3 12h1m16 0h1m-2.34 8.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    ),
  },
  {
    title: 'Handgemacht',
    description: 'Keine Massenproduktion, kein Fließband. Jedes Produkt wird von Hand zubereitet mit Sorgfalt und Erfahrung.',
    icon: (
      <path d="M7 11.5V14m0-2.5C7 9 3 8 3 5.5 3 3 5.5 3 7 5c1.5-2 4-2 4 .5C11 8 7 9 7 11.5zM17 11.5V14m0-2.5c0-2.5-4-3.5-4-6 0-2.5 2.5-2.5 4-.5 1.5-2 4-2 4 .5 0 2.5-4 3.5-4 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    ),
  },
  {
    title: 'Beste Zutaten',
    description: 'Wir wählen unsere Zutaten sorgfältig aus — regional wo möglich, immer in bester Qualität.',
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
  },
]

export default function Quality({ nextColor = 'text-sky-100' }: { nextColor?: string }) {
  return (
    <section id="qualitaet" className="relative bg-cream-100 pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Unser Versprechen"
          title="Qualität, die man schmeckt"
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <AosBox key={v.title} animation="fade-up" delay={i * 120} className="h-full">
              <div className="h-full text-center px-8 py-10 rounded-[1.75rem] bg-cream-50 border border-olive-200/50 shadow-sm hover:shadow-md hover:-translate-y-1.5 hover:border-yellow-500/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-100 border border-yellow-300/70 flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-700">
                    {v.icon}
                  </svg>
                </div>
                <h3 className="font-display text-xl text-olive-800 font-bold mb-3">{v.title}</h3>
                <p className="text-sm text-olive-700/85 leading-relaxed">{v.description}</p>
              </div>
            </AosBox>
          ))}
        </div>
      </div>

      <OrganicDivider color={nextColor} variant={1} />
    </section>
  )
}
