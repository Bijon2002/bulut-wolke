import { useEffect } from 'react'
import AOS from 'aos'
import Hero from '../components/Hero'
import Usps from '../components/home/Usps'
import About from '../components/About'
import Products from '../components/Products'
import LocationsTeaser from '../components/home/LocationsTeaser'
import HomeCta from '../components/home/HomeCta'

interface HomePageProps {
  onOpenModal?: () => void
}

export default function HomePage({ onOpenModal }: HomePageProps) {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      {/* Alternating surfaces give the page rhythm: cream / soft light blue */}
      <div className="surface-sky-soft">
        <Usps />
      </div>
      <About onOpenModal={onOpenModal} />
      <Products onOpenModal={onOpenModal} />
      <div className="surface-sky-soft">
        <LocationsTeaser />
      </div>
      <HomeCta />
    </>
  )
}
