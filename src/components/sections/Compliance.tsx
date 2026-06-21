import type { SVGProps } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

type GlyphProps = SVGProps<SVGSVGElement>

const glyphBase = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/* Shield with check — responsible / verified sourcing */
function ShieldCheckGlyph(props: GlyphProps) {
  return (
    <svg {...glyphBase} {...props}>
      <path d="M12 2.5 4.5 5.5v5.6c0 4.5 3.1 7.6 7.5 9.4 4.4-1.8 7.5-4.9 7.5-9.4V5.5L12 2.5z" />
      <path d="m8.8 11.8 2.2 2.2 4.4-4.4" />
    </svg>
  )
}

/* Document with checkmark — KYC / verified counterparties */
function DocCheckGlyph(props: GlyphProps) {
  return (
    <svg {...glyphBase} {...props}>
      <path d="M14 2.5H6.5A1.5 1.5 0 0 0 5 4v16a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 20V7.5L14 2.5z" />
      <path d="M14 2.5V7a1 1 0 0 0 1 1h4" />
      <path d="m8.8 14.2 1.8 1.8 3.6-3.6" />
    </svg>
  )
}

/* Linked nodes — transparent / traceable chain */
function ChainGlyph(props: GlyphProps) {
  return (
    <svg {...glyphBase} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7.7 7.8 10.4 16M16.3 7.8 13.6 16M8.5 6h7" />
    </svg>
  )
}

const glyphs = [ShieldCheckGlyph, DocCheckGlyph, ChainGlyph]

export default function Compliance() {
  const { t } = useLanguage()
  const c = t.compliance

  return (
    <section id="compliance" className="section-y">
      <div className="container-x">
        {/* Premium "trust" container with subtle gold/copper tint */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          {/* Decorative tinted gradients */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-copper/[0.06] dark:from-gold/[0.06] dark:to-copper/10" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl dark:bg-gold/[0.07]" />
            <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-copper/10 blur-3xl dark:bg-copper/15" />
          </div>

          {/* Heading */}
          <div className="max-w-3xl">
            <span className="kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              {c.kicker}
            </span>
            <h2 className="heading-2 mt-3">{c.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{c.body}</p>
          </div>

          {/* Trust points */}
          <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-3">
            {c.points.map((point, i) => {
              const Glyph = glyphs[i] ?? ShieldCheckGlyph
              return (
                <div
                  key={point.title}
                  className="card-surface flex flex-col gap-4 shadow-sm shadow-espresso/[0.03] transition hover:border-flame/40 hover:shadow-md hover:shadow-espresso/5"
                >
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-copper ring-1 ring-inset ring-gold/25 dark:bg-flame/10 dark:text-gold dark:ring-flame/20">
                    <Glyph className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Disclaimer-style commitment note */}
          <div className="mt-10 rounded-xl border border-line bg-surface-alt px-5 py-4 lg:mt-12">
            <p className="text-sm italic leading-relaxed text-muted">{c.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
