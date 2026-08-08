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
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
      errors[field]
        ? 'border-red-300 focus:border-red-400 bg-red-50/50'
        : 'border-stone-200 focus:border-cloud-400 bg-white'
    }`

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cloud-600 mb-3 font-medium">
              Kontakt
            </p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-stone-900 mb-6">
              Wir freuen uns
              <br />
              auf Sie
            </h2>
            <p className="text-stone-500 mb-10 leading-relaxed">
              Haben Sie Fragen zu unseren Produkten, möchten eine Partyplatte bestellen
              oder brauchen Beratung? Schreiben Sie uns oder rufen Sie einfach an.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cloud-50 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-cloud-600">
                    <path d="M15 12.5c-1.2 0-2.3-.4-3.2-.9l-1.8 1.8c-1.4-.9-2.5-2-3.2-3.2l1.8-1.8c-.5-.9-.9-2-.9-3.2A1.3 1.3 0 009 3.9H7A1.3 1.3 0 005.7 5.2C5.7 10.5 7.5 12.3 12.8 12.3A1.3 1.3 0 0014.1 11z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400">Telefon</p>
                  <p className="text-sm text-stone-800">+49 2241 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cloud-50 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-cloud-600">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 6l7 4 7-4" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400">E-Mail</p>
                  <p className="text-sm text-stone-800">info@bulut-wolke.de</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cloud-50 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-cloud-600">
                    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M9 5v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400">Öffnungszeiten</p>
                  <p className="text-sm text-stone-800">Mo–Sa: 9:00–19:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl bg-cloud-50 border border-cloud-200 p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-cloud-100 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cloud-600">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl text-stone-900 mb-2">Vielen Dank!</h3>
                <p className="text-sm text-stone-500">Wir melden uns so schnell wie möglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-stone-600 mb-1.5">Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={inputClass('name')}
                    placeholder="Ihr vollständiger Name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-stone-600 mb-1.5">E-Mail *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={inputClass('email')}
                    placeholder="ihre@email.de"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-stone-600 mb-1.5">Telefon</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-cloud-400 bg-white text-sm transition-colors outline-none"
                    placeholder="+49 ..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-stone-600 mb-1.5">Nachricht *</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={inputClass('message')}
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-cloud-600 text-white rounded-xl text-sm font-medium hover:bg-cloud-700 transition-colors"
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
