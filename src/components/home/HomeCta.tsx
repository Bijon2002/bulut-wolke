import { Link } from 'react-router-dom'
import AosBox from '../AosBox'
import OrganicDivider from '../OrganicDivider'
import { OliveSprig } from '../SectionHeading'
import { photo } from '../../lib/photo'

/**
 * Closing call to action, set on the counter itself. This is the one place on
 * the page that goes dark: a photograph under a deep olive wash, so the
 * invitation reads as the last word rather than another cream panel.
 */
export default function HomeCta({ nextColor = 'text-cream-200' }: { nextColor?: string }) {
  return (
    <section className="cta-band">
      <div className="cta-media" aria-hidden="true">
        <img
          {...photo('/fotos/theke-oliven-detail', 1600)}
          sizes="100vw"
          alt=""
          className="cta-img"
          loading="lazy"
          decoding="async"
        />
        <div className="cta-wash" />
      </div>

      <div className="cta-inner" data-aos="fade-up">
        <AosBox animation="fade-down" delay={100} className="flex justify-center mb-6">
          <OliveSprig className="scale-125 text-yellow-300" />
        </AosBox>

        <AosBox animation="fade-up" delay={150}>
          <h2 className="cta-title font-display">
            Lust auf mediterranen <span className="cta-title-accent">Genuss?</span>
          </h2>
        </AosBox>

        <AosBox animation="fade-up" delay={250}>
          <p className="cta-lead">
            Ob Partyplatte, Beratung oder einfach eine Frage zu unseren Produkten — wir freuen
            uns, von Ihnen zu hören.
          </p>
        </AosBox>

        <AosBox animation="zoom-in" delay={350}>
          <div className="cta-actions">
            <Link to="/kontakt" className="cta-btn-primary">
              Kontakt aufnehmen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link to="/spezialitaeten" className="cta-btn-ghost">
              Sortiment entdecken
            </Link>
          </div>
        </AosBox>

        <AosBox animation="fade-up" delay={450}>
          <p className="cta-note">
            Familienbetrieb seit 1994 · Siegburg &amp; Sankt Augustin
          </p>
        </AosBox>
      </div>

      <OrganicDivider color={nextColor} variant={1} />
    </section>
  )
}
