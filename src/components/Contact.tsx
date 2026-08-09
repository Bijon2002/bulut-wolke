import { useState } from 'react'
import AosBox from './AosBox'
import SectionHeading from './SectionHeading'
import OrganicDivider from './OrganicDivider'

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

const contactRows = [
  {
    label: 'Telefon',
    value: '+49 2241 123 456',
    icon: (
      <path d="M15 12.5c-1.2 0-2.3-.4-3.2-.9l-1.8 1.8c-1.4-.9-2.5-2-3.2-3.2l1.8-1.8c-.5-.9-.9-2-.9-3.2A1.3 1.3 0 009 3.9H7A1.3 1.3 0 005.7 5.2C5.7 10.5 7.5 12.3 12.8 12.3A1.3 1.3 0 0014.1 11z" stroke="currentColor" strokeWidth="1.5"/>
    ),
  },
  {
    label: 'E-Mail',
    value: 'info@bulut-wolke.de',
    icon: (
      <>
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 6l7 4 7-4" stroke="currentColor" strokeWidth="1.5"/>
      </>
    ),
  },
  {
    label: 'Öffnungszeiten',
    value: 'Mo–Sa: 9:00–19:00 Uhr',
    icon: (
      <>
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 5v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </>
    ),
  },
]

export default function Contact({ nextColor = 'text-cream-200' }: { nextColor?: string }) {
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
    if (Object.keys(v).length === 0) setSubmitted(true)
  }

  function update(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((e) => ({ ...e, [field]: undefined }))
    }
  }

  const inputClass = (field?: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-2xl border text-sm transition-all outline-none bg-cream-50 text-olive-800 placeholder-olive-400 ${
      field && errors[field]
        ? 'border-red-400 focus:border-red-500 bg-red-50'
        : 'border-olive-200 focus:border-yellow-500 focus:bg-white'
    }`

  return (
    <section id="kontakt" className="relative bg-cream-100 pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto px-5 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <AosBox animation="slide-right" delay={100}>
            <SectionHeading
              align="left"
              eyebrow="Schreiben Sie uns"
              title={['Wir freuen uns', <span className="text-yellow-600">auf Sie</span>]}
              body="Haben Sie Fragen zu unseren Produkten, möchten eine Partyplatte bestellen oder brauchen Beratung? Schreiben Sie uns oder rufen Sie einfach an."
            />

            <div className="space-y-5 mt-9">
              {contactRows.map((row) => (
                <div key={row.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-olive-100 border border-olive-300/70 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-olive-600">
                      {row.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-olive-500">{row.label}</p>
                    <p className="text-sm font-semibold text-olive-800">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AosBox>

          <AosBox animation="slide-left" delay={200}>
            <div className="p-7 md:p-9 rounded-[1.75rem] bg-cream-50 border border-olive-200/50 shadow-sm">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-olive-100 border border-olive-300/70 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-olive-600">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-olive-800 font-bold mb-2">Vielen Dank!</h3>
                  <p className="text-sm text-olive-700/85">Wir melden uns so schnell wie möglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-olive-700 mb-1.5 font-medium">Name *</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={inputClass('name')}
                      placeholder="Ihr vollständiger Name"
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-olive-700 mb-1.5 font-medium">E-Mail *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputClass('email')}
                      placeholder="ihre@email.de"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-olive-700 mb-1.5 font-medium">Telefon</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputClass()}
                      placeholder="+49 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-olive-700 mb-1.5 font-medium">Nachricht *</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={inputClass('message')}
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full text-sm font-semibold transition active:scale-[0.97] motion-safe:duration-200 shadow-sm"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </AosBox>
        </div>
      </div>

      <OrganicDivider color={nextColor} variant={3} />
    </section>
  )
}
