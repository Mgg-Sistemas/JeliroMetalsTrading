import { useLanguage } from '../i18n/LanguageContext'
import { ArrowRightIcon } from './ui/Icons'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative metallic background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-gold/25 via-flame/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-copper/20 to-transparent blur-3xl dark:from-copper/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--line)_1px,transparent_0)] [background-size:34px_34px] opacity-40" />
      </div>

      <div className="container-x grid items-center gap-10 pb-16 pt-24 sm:gap-12 sm:pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-40">
        {/* Copy */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-alt px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-copper dark:text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            {h.badge}
          </span>

          <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {h.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {h.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary group">
              {h.ctaPrimary}
              <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#about" className="btn-ghost">
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Emblem / visual */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto grid max-w-md place-items-center">
            <div className="card-surface w-full !p-8 shadow-xl shadow-espresso/5 sm:!p-10">
              <img
                src="/logos/jeliro-emblem.png"
                alt="JELIRO emblem"
                className="mx-auto h-28 w-28 sm:h-32 sm:w-32"
              />
              <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                {h.title}
              </p>
              <div className="mt-7 grid grid-cols-3 divide-x divide-line">
                {h.stats.map((s) => (
                  <div key={s.label} className="px-2 text-center">
                    <div className="text-lg font-extrabold text-flame sm:text-xl">{s.value}</div>
                    <div className="mt-1 text-[11px] leading-snug text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
