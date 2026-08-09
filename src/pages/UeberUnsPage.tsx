import PageHero from '../components/PageHero'
import About from '../components/About'
import Quality from '../components/Quality'

export default function UeberUnsPage() {
  return (
    <>
      <PageHero eyebrow="Unsere Geschichte" title="Über uns" nextColor="text-sky-100" />
      <About nextColor="text-cream-100" />
      <Quality nextColor="text-cream-200" />
    </>
  )
}
