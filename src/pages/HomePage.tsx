import Hero from '../components/Hero'
import Usps from '../components/home/Usps'
import ProductsTeaser from '../components/home/ProductsTeaser'
import AboutTeaser from '../components/home/AboutTeaser'
import LocationsTeaser from '../components/home/LocationsTeaser'
import HomeCta from '../components/home/HomeCta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Usps />
      <ProductsTeaser />
      <AboutTeaser />
      <LocationsTeaser />
      <HomeCta />
    </>
  )
}
