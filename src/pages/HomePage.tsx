import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'

interface HomePageProps {
  onOpenModal?: () => void
}

export default function HomePage({ onOpenModal }: HomePageProps) {
  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <About onOpenModal={onOpenModal} />
      <Products onOpenModal={onOpenModal} />
    </>
  )
}
