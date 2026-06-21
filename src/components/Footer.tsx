import { useLanguage } from '../i18n/LanguageContext'
import Logo from './ui/Logo'
import { MailIcon, PinIcon } from './ui/Icons'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  const year = new Date().getFullYear()

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#trade', label: t.nav.trade },
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#reach', label: t.nav.reach },
    { href: '#compliance', label: t.nav.compliance },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-line bg-surface-alt">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{f.tagline}</p>
          <div className="mt-6 space-y-2 text-sm text-ink-soft">
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center gap-2 transition hover:text-flame"
            >
              <MailIcon className="h-4 w-4 text-copper dark:text-gold" />
              {t.contact.email}
            </a>
            <p className="flex items-center gap-2">
              <PinIcon className="h-4 w-4 text-copper dark:text-gold" />
              {f.address}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{f.nav}</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-ink-soft transition hover:text-flame">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{f.legal}</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>{f.company}</li>
            <li className="font-medium text-ink">{f.license}</li>
            <li>{f.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {year} {f.company} · {f.license}
          </p>
          <p>{f.rights}</p>
        </div>
      </div>
    </footer>
  )
}
