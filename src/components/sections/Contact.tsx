import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { MailIcon, PhoneIcon, PinIcon, ArrowRightIcon, CheckIcon } from '../ui/Icons'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const inputClass =
    'w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-flame focus-visible:ring-4 focus-visible:ring-[var(--ring)] transition'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = `Inquiry from ${name}${company ? ` · ${company}` : ''}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')
    const mailto = `mailto:${c.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" className="section-y">
      <div className="container-x">
        <span className="kicker">{c.kicker}</span>
        <h2 className="heading-2 mt-3">{c.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{c.intro}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — contact details */}
          <div className="flex flex-col gap-7">
            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {c.emailLabel}
                </div>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-1 block text-base font-medium text-ink transition hover:text-flame"
                >
                  {c.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-copper dark:text-gold">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {c.addressLabel}
                </div>
                <p className="mt-1 text-base font-medium text-ink">{c.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {c.phoneLabel}
                </div>
                <div className="mt-1 flex flex-col gap-1">
                  {c.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                      className="text-base font-medium text-ink transition hover:text-flame"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="card-surface">
            {sent ? (
              <div className="flex items-start gap-4 rounded-xl bg-flame/10 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flame text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <p className="text-base font-medium leading-relaxed text-ink">{c.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate={false}>
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    {c.form.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={c.form.name}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    {c.form.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={c.form.email}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="sr-only">
                    {c.form.company}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={c.form.company}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    {c.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={c.form.message}
                    className={inputClass}
                  />
                </div>

                <button type="submit" className="btn-primary group mt-1 w-full sm:w-auto">
                  {c.form.submit}
                  <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
