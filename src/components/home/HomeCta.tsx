import { Link } from 'react-router-dom'
import AosBox from '../AosBox'
import { OliveSprig } from '../SectionHeading'
import { pickVideoSource, useAutoplayVideo } from '../../lib/useAutoplayVideo'

const FACTS = [
  { label: 'Seit', value: '1994' },
  { label: 'Standorte', value: '2' },
  { label: 'Täglich', value: 'Frisch' },
]

/**
 * Closing call to action, set on the counter itself. This is the one place on
 * the page that goes dark: live footage from the stand under a deep olive
 * wash, so the invitation reads as the last word rather than another cream
 * panel.
 */
export default function HomeCta() {
  const videoRef = useAutoplayVideo()
  const videoSrc = pickVideoSource('/media/video/spezial-720.mp4', '/media/video/spezial-mobile.mp4')

  return (
    <section className="cta-band">
      <div className="cta-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="cta-img"
          src={videoSrc}
          poster="/media/video/spezial-poster.jpg"
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
        />
        <div className="cta-wash" />
      </div>

      <div className="cta-inner">
        <AosBox animation="zoom-in" duration={900} className="cta-card">
          <div className="cta-card-glow" aria-hidden="true" />

          <div className="flex justify-center mb-5">
            <OliveSprig className="scale-125 text-yellow-300" />
          </div>

          <h2 className="cta-title font-display">
            Lust auf mediterranen <span className="cta-title-accent">Genuss?</span>
          </h2>

          <p className="cta-lead">
            Ob Partyplatte, Beratung oder einfach eine Frage zu unseren Produkten — wir freuen
            uns, von Ihnen zu hören.
          </p>

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

          <div className="cta-facts">
            {FACTS.map((f, i) => (
              <div key={f.label} className="cta-fact">
                {i > 0 && <span className="cta-fact-sep" aria-hidden="true" />}
                <span className="cta-fact-value">{f.value}</span>
                <span className="cta-fact-label">{f.label}</span>
              </div>
            ))}
          </div>
        </AosBox>
      </div>
    </section>
  )
}
