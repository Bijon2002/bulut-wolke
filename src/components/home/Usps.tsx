import { useEffect } from 'react'
import AOS from 'aos'
import AosBox from '../AosBox'
import OrganicDivider from '../OrganicDivider'

const usps = {
  frische: {
    title: 'Frische',
    text: 'Täglich frisch zubereitet. Was Sie bei uns kaufen, wurde am selben Morgen gemacht.',
    image: '/fotos/produkt-salat-600.jpg',
    icon: (
      <path d="M12 3v1m0 16v1m-8.66-2.34l.71-.71m12.73-12.73l.71-.71M3 12h1m16 0h1m-2.34 8.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
  },
  handwerk: {
    title: 'Handwerk',
    text: 'Jedes Produkt entsteht von Hand in unserer Küche — kein Fließband, keine Massenware.',
    image: '/fotos/theke-antipasti-600.jpg',
    icon: (
      <path d="M7 11.5V14m0-2.5C7 9 3 8 3 5.5 3 3 5.5 3 7 5c1.5-2 4-2 4 .5C11 8 7 9 7 11.5zM17 11.5V14m0-2.5c0-2.5-4-3.5-4-6 0-2.5 2.5-2.5 4-.5 1.5-2 4-2 4 .5 0 2.5-4 3.5-4 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
  },
  familie: {
    title: 'Familientradition',
    text: 'Seit Generationen bringen wir mediterrane Genusskultur in den Rhein-Sieg-Kreis.',
    image: '/fotos/theke-oliven-tabletts-600.jpg',
    icon: (
      <path d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0112 8a4.5 4.5 0 017 3.5c0 5.15-7 9.5-7 9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
}

export default function Usps() {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <section className="relative bg-cream-100 pt-16 md:pt-24">
      <div className="max-w-6xl mx-auto px-5 pb-16 md:pb-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 min-h-[600px]">
          
          {/* Box 1: Frische (Tall) */}
          <AosBox animation="fade-right" delay={100} className="md:col-span-1 md:row-span-2 h-[400px] md:h-full">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group shadow-sm transition-shadow hover:shadow-xl">
              <img src={usps.frische.image} alt="Frische" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/95 via-olive-900/60 to-black/10" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-lg text-yellow-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">{usps.frische.icon}</svg>
                </div>
                <h3 className="font-display text-3xl text-white font-bold mb-3">{usps.frische.title}</h3>
                <p className="text-white/85 leading-relaxed font-medium">{usps.frische.text}</p>
              </div>
            </div>
          </AosBox>

          {/* Box 2: Handwerk (Wide) */}
          <AosBox animation="fade-down" delay={250} className="md:col-span-2 md:row-span-1 h-[300px] md:h-full">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group shadow-sm transition-shadow hover:shadow-xl bg-olive-950 flex flex-col md:flex-row">
              <div className="p-8 md:p-10 md:w-[55%] flex flex-col justify-center relative z-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 shadow-lg text-yellow-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">{usps.handwerk.icon}</svg>
                </div>
                <h3 className="font-display text-3xl text-white font-bold mb-3">{usps.handwerk.title}</h3>
                <p className="text-white/80 leading-relaxed font-medium">{usps.handwerk.text}</p>
              </div>
              <div className="absolute inset-y-0 right-0 w-full md:w-[60%] h-full md:h-auto overflow-hidden">
                <img src={usps.handwerk.image} alt="Handwerk" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 md:opacity-100" />
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-olive-950 via-olive-950/80 to-transparent" />
                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-olive-950 to-transparent" />
              </div>
            </div>
          </AosBox>

          {/* Box 3: Familientradition (Wide) */}
          <AosBox animation="fade-up" delay={400} className="md:col-span-2 md:row-span-1 h-[300px] md:h-full">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group shadow-sm transition-shadow hover:shadow-xl bg-yellow-50 flex flex-col md:flex-row-reverse">
              <div className="p-8 md:p-10 md:w-[55%] flex flex-col justify-center relative z-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white border border-yellow-200 flex items-center justify-center mb-5 shadow-sm text-yellow-600">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">{usps.familie.icon}</svg>
                </div>
                <h3 className="font-display text-3xl text-olive-900 font-bold mb-3">{usps.familie.title}</h3>
                <p className="text-olive-700/90 leading-relaxed font-medium">{usps.familie.text}</p>
              </div>
              <div className="absolute inset-y-0 left-0 w-full md:w-[60%] h-full md:h-auto overflow-hidden">
                <img src={usps.familie.image} alt="Familientradition" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-30 md:opacity-100 mix-blend-multiply md:mix-blend-normal" />
                <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-yellow-50 via-yellow-50/90 to-transparent" />
                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-yellow-50 to-transparent" />
              </div>
            </div>
          </AosBox>

        </div>
      </div>

      <OrganicDivider color="text-sky-100" variant={2} />
    </section>
  )
}
