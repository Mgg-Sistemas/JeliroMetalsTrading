import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../i18n/LanguageContext'
import { MoonIcon, SunIcon, GlobeIcon } from './Icons'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition hover:border-flame hover:text-flame focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)] ${className}`}
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  )
}

export function LangToggle({ className = '' }: { className?: string }) {
  const { lang, toggleLang, t } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={`Switch language to ${t.meta.switchTo}`}
      title={t.meta.switchTo}
      className={`inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-line px-3.5 text-sm font-semibold text-ink-soft transition hover:border-flame hover:text-flame focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)] ${className}`}
    >
      <GlobeIcon className="h-4 w-4" />
      <span>{lang === 'en' ? 'EN' : 'ES'}</span>
    </button>
  )
}
