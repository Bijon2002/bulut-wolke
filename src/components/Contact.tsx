import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Bitte geben Sie Ihren Namen ein.'
    if (!form.email.trim()) {
      e.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    }
    if (!form.message.trim()) e.message = 'Bitte geben Sie eine Nachricht ein.'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      setSubmitted(true)
    }
  }

  function update(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((e) => ({ ...e, [field]: undefined }))
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-2xl border text-sm transition-all outline-none text-white placeholder-stone-400 ${
      errors[field]
        ? 'border-red-400/80 focus:border-red-400 bg-red-950/20'
        : 'border-white/15 focus:border-cloud-400 bg-stone-900/80 focus:bg-stone-900/90'
    }`

  return (
    <section id="kontakt" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="p-8 md:p-12 rounded-3xl bg-stone-950/75 backdrop-blur-md border border-white/10 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cloud-400 mb-3 font-semibold">
              Kontakt
            </p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-white mb-6">
              Wir freuen uns
              <br />
              <span className="text-cloud-400">auf Sie</span>
            </h2>
            <p className="text-stone-300 mb-10 leading-relaxed">
              Haben Sie Fragen zu unseren Produkten, möchten eine Partyplatte bestellen
              oder brauchen Beratung? Schreiben Sie uns oder rufen Sie einfach an.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-cloud-500/20 border border-cloud-500/30 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-cloud-400">
                    <path d="M15 12.5c-1.2 0-2.3-.4-3.2-.9l-1.8 1.8c-1.4-.9-2.5-2-3.2-3.2l1.8-1.8c-.5-.9-.9-2-.9-3.2A1.3 1.3 0 009 3.9H7A1.3 1.3 0 005.7 5.2C5.7 10.5 7.5 12.3 12.8 12.3A1.3 1.3 0 0014.1 11z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400">Telefon</p>
                  <p className="text-sm font-medium text-white">+49 2241 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-cloud-500/20 border border-cloud-500/30 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-cloud-400">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 6l7 4 7-4" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400">E-Mail</p>
                  <p className="text-sm font-medium text-white">info@bulut-wolke.de</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-cloud-500/20 border border-cloud-500/30 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-cloud-400">
                    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M9 5v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400">Öffnungszeiten</p>
                  <p className="text-sm font-medium text-white">Mo–Sa: 9:00–19:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-stone-950/75 backdrop-blur-md border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="p-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-cloud-500/20 border border-cloud-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cloud-400">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white mb-2">Vielen Dank!</h3>
                <p className="text-sm text-stone-300">Wir melden uns so schnell wie möglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-stone-300 mb-1.5 font-medium">Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={inputClass('name')}
                    placeholder="Ihr vollständiger Name"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-stone-300 mb-1.5 font-medium">E-Mail *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={inputClass('email')}
                    placeholder="ihre@email.de"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-stone-300 mb-1.5 font-medium">Telefon</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-white/15 focus:border-cloud-400 bg-stone-900/80 focus:bg-stone-900/90 text-sm text-white placeholder-stone-400 transition-all outline-none"
                    placeholder="+49 ..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-stone-300 mb-1.5 font-medium">Nachricht *</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={inputClass('message')}
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-cloud-500 hover:bg-cloud-600 text-white rounded-2xl text-sm font-semibold transition-all shadow-lg hover:shadow-cloud-500/25"
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
