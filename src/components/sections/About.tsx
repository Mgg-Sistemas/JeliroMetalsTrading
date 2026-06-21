import { useLanguage } from '../../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="section-y bg-surface">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-7">
          <span className="kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            {a.kicker}
          </span>
          <h2 className="heading-2 mt-3">{a.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {a.body}
          </p>
        </div>

        {/* Highlights visual card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            {/* Faint brand gradient blob behind the card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10"
            >
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gradient-to-br from-gold/25 via-flame/15 to-transparent blur-3xl" />
              <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-gradient-to-tr from-copper/20 to-transparent blur-3xl dark:from-copper/30" />
            </div>

            <div className="card-surface !p-7 shadow-xl shadow-espresso/5 sm:!p-8">
              <div className="flex items-center gap-4 border-b border-line pb-5">
                <img
                  src="/logos/jeliro-emblem.png"
                  alt="JELIRO emblem"
                  className="h-12 w-12 shrink-0"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  {a.kicker}
                </p>
              </div>

              <dl className="mt-6 space-y-6">
                {a.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="border-l-2 border-flame/70 pl-4 py-1"
                  >
                    <dt className="text-xl font-extrabold leading-tight text-flame sm:text-2xl">
                      {h.value}
                    </dt>
                    <dd className="mt-1 text-sm leading-snug text-muted">{h.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
