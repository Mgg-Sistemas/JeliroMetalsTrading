import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Logo from './ui/Logo'
import { ThemeToggle, LangToggle } from './ui/Controls'
import { CloseIcon, MenuIcon } from './ui/Icons'

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#trade', label: t.nav.trade },
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#reach', label: t.nav.reach },
    { href: '#compliance', label: t.nav.compliance },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-surface/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-2 sm:h-[4.5rem] sm:gap-4">
        <Logo onClick={() => setOpen(false)} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-soft transition hover:text-flame"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LangToggle />
          <ThemeToggle />
          <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-line bg-surface transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[28rem] border-t' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-ink-soft transition hover:bg-surface-alt hover:text-flame"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 px-3">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              {t.nav.cta}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
