import AosBox from '../AosBox'
import OrganicDivider from '../OrganicDivider'

const usps = [
  {
    title: 'Handwerk',
    text: 'Jedes Produkt entsteht von Hand in unserer Küche — kein Fließband, keine Massenware.',
    icon: (
      <path d="M7 11.5V14m0-2.5C7 9 3 8 3 5.5 3 3 5.5 3 7 5c1.5-2 4-2 4 .5C11 8 7 9 7 11.5zM17 11.5V14m0-2.5c0-2.5-4-3.5-4-6 0-2.5 2.5-2.5 4-.5 1.5-2 4-2 4 .5 0 2.5-4 3.5-4 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    ),
  },
  {
    title: 'Frische',
    text: 'Täglich frisch zubereitet. Was Sie bei uns kaufen, wurde am selben Morgen gemacht.',
    icon: (
      <path d="M12 3v1m0 16v1m-8.66-2.34l.71-.71m12.73-12.73l.71-.71M3 12h1m16 0h1m-2.34 8.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    ),
  },
  {
    title: 'Familientradition',
    text: 'Seit Generationen bringen wir mediterrane Genusskultur in den Rhein-Sieg-Kreis.',
    icon: (
      <path d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0112 8a4.5 4.5 0 017 3.5c0 5.15-7 9.5-7 9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
  },
]

export default function Usps() {
  return (
    <section className="relative bg-cream-100 pt-16 md:pt-20">
      <div className="max-w-5xl mx-auto px-5 pb-16 md:pb-20">
        <div className="grid sm:grid-cols-3 gap-7">
          {usps.map((u, i) => (
            <AosBox key={u.title} animation="fade-up" delay={i * 110} className="h-full">
              <div className="h-full text-center px-6 py-8 rounded-[1.75rem] bg-cream-50 border border-olive-200/50 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-yellow-100 border border-yellow-300/70 inline-flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-700">
                    {u.icon}
                  </svg>
                </div>
                <h3 className="font-display text-lg text-olive-800 font-bold mb-2">{u.title}</h3>
                <p className="text-sm text-olive-700/85 leading-relaxed">{u.text}</p>
              </div>
            </AosBox>
          ))}
        </div>
      </div>

      <OrganicDivider color="text-sky-100" variant={2} />
    </section>
  )
}
