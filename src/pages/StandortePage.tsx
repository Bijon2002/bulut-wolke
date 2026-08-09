import PageHero from '../components/PageHero'
import Locations from '../components/Locations'

export default function StandortePage() {
  return (
    <>
      <PageHero eyebrow="Wo Sie uns finden" title="Standorte" nextColor="text-sky-100" />
      <Locations nextColor="text-cream-200" />
    </>
  )
}
