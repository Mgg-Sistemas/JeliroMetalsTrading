import { useLanguage } from '../../i18n/LanguageContext'
import { CheckIcon } from '../ui/Icons'

export default function Capabilities() {
  const { t } = useLanguage()

  return (
    <section id="capabilities" className="section-y">
      <div className="container-x">
        <span className="kicker">{t.capabilities.kicker}</span>
        <h2 className="heading-2 mt-3">{t.capabilities.title}</h2>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.capabilities.items.map((item, i) => (
            <div
              key={item.title}
              className="card-surface group relative flex flex-col hover:-translate-y-1 hover:border-flame/40 hover:shadow-lg hover:shadow-espresso/5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-flame/10 text-flame transition group-hover:bg-flame group-hover:text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
