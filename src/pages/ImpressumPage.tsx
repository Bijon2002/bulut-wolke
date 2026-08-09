import PageHero from '../components/PageHero'
import OrganicDivider from '../components/OrganicDivider'

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" nextColor="text-cream-100" />
      <section className="relative bg-cream-100">
        <div className="max-w-2xl mx-auto px-5 py-16 min-h-[30vh]">
          <p className="text-olive-600 italic">
            Inhalt folgt. / Content will be provided by the client.
          </p>
        </div>
        <OrganicDivider color="text-cream-200" variant={2} />
      </section>
    </>
  )
}
