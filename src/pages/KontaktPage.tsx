import { useState, useEffect } from 'react'
import AOS from 'aos'

interface PageProps {
  onOpenModal?: () => void
}

export default function KontaktPage({ onOpenModal }: PageProps) {
  const [subject, setSubject] = useState<string>('Catering-Anfrage')
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '10',
    message: '',
  })

  useEffect(() => {
    AOS.refresh()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      onOpenModal?.()
    }, 400)
  }

  return (
    <div className="py-12 md:py-16 px-6 max-w-6xl mx-auto space-y-14">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3" data-aos="fade-up">
        <span className="font-script text-xl text-[#B88E28] block">
          Persönlich &amp; Direkt
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1E332E] tracking-tight">
          Kontakt &amp; Catering-Anfrage
        </h1>
        <p className="text-[#4A5D57] text-sm md:text-base leading-relaxed">
          Sprechen Sie uns an — für Vorbestellungen oder ein Catering für Ihre Feier.
        </p>
      </div>

      {/* Main Dual Grid */}
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-5" data-aos="fade-right">
          <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-black/5 shadow-lg space-y-5">
            <h2 className="font-heading text-xl font-bold text-[#1E332E]">
              Direkte Kontaktdaten
            </h2>

            <div className="space-y-3.5 text-xs text-[#4A5D57]">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FEF9EC] border border-[#F7E08B]/60">
                <div className="w-9 h-9 rounded-full bg-[#1E332E] text-white flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88E28] block mb-0.5">
                    Telefon &amp; WhatsApp
                  </span>
                  <a href="tel:+491701234567" className="font-bold text-[#1E332E] text-sm hover:text-[#EE6D52] transition-colors">
                    +49 (0) 170 / 123 4567
                  </a>
                  <p className="text-[11px] text-[#4A5D57] mt-0.5">Mo – Sa: 07:00 – 18:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FEF9EC] border border-[#F7E08B]/60">
                <div className="w-9 h-9 rounded-full bg-[#EE6D52] text-white flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88E28] block mb-0.5">
                    E-Mail Adresse
                  </span>
                  <a href="mailto:info@bulut-wolke-feinkost.de" className="font-bold text-[#1E332E] text-xs hover:text-[#EE6D52] transition-colors">
                    info@bulut-wolke-feinkost.de
                  </a>
                  <p className="text-[11px] text-[#4A5D57] mt-0.5">Antwort innerhalb 24 Std.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5">
                <div className="w-9 h-9 rounded-full bg-[#B88E28]/15 text-[#B88E28] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88E28] block mb-0.5">
                    Standorte &amp; Wochenmärkte
                  </span>
                  <p className="font-semibold text-[#1E332E]">Siegburg • Troisdorf • Sankt Augustin</p>
                  <p className="text-[11px] text-[#4A5D57] mt-0.5">Rhein-Sieg-Kreis &amp; Bonn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery & Service Info Card */}
          <div className="bg-[#1E332E] text-white p-6 rounded-3xl shadow-lg space-y-3">
            <h3 className="font-heading text-lg font-bold text-white">
              Catering-Service Radius
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Wir beliefern Feiern &amp; Events im gesamten Rhein-Sieg-Kreis, Siegburg, Troisdorf, Sankt Augustin, Hennef &amp; Bonn.
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-[#F7E08B]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Frisch &amp; servierfertig geliefert</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact & Catering Form */}
        <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="150">
          <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-black/5 shadow-xl space-y-5">
            <div className="space-y-1">
              <h2 className="font-heading text-2xl font-bold text-[#1E332E]">
                Anfrage Senden
              </h2>
              <p className="text-xs text-[#4A5D57]">
                Füllen Sie das Formular aus. Wir melden uns umgehend bei Ihnen zurück.
              </p>
            </div>

            {/* Subject Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {['Catering-Anfrage', 'Marktstand-Vorbestellung', 'Allgemeine Frage'].map((subj) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setSubject(subj)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    subject === subj
                      ? 'bg-[#1E332E] text-white shadow-xs'
                      : 'bg-[#FEF9EC] text-[#4A5D57] border border-black/5 hover:border-[#B88E28]'
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1E332E] mb-1">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs outline-none focus:border-[#EE6D52] bg-white/80"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1E332E] mb-1">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="max@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs outline-none focus:border-[#EE6D52] bg-white/80"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1E332E] mb-1">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    placeholder="+49 170 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs outline-none focus:border-[#EE6D52] bg-white/80"
                  />
                </div>
                {subject === 'Catering-Anfrage' && (
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1E332E] mb-1">
                      Event-Datum
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs outline-none focus:border-[#EE6D52] bg-white/80 text-[#4A5D57]"
                    />
                  </div>
                )}
              </div>

              {subject === 'Catering-Anfrage' && (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1E332E] mb-1">
                    Personenanzahl
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs outline-none focus:border-[#EE6D52] bg-white/80 text-[#4A5D57]"
                  >
                    <option value="5">Bis ca. 5 Personen</option>
                    <option value="10">Ca. 10 Personen</option>
                    <option value="20">Ca. 20 Personen</option>
                    <option value="30">Ca. 30+ Personen (Großes Event)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1E332E] mb-1">
                  Ihre Nachricht *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Teilen Sie uns Ihre Wünsche oder Fragen mit..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs outline-none focus:border-[#EE6D52] bg-white/80"
                ></textarea>
              </div>

              <button type="submit" className="btn-pill-orange w-full justify-center text-xs py-3">
                <span>{formSubmitted ? 'Anfrage Wird Versendet...' : 'Unverbindliche Anfrage Absenden'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
