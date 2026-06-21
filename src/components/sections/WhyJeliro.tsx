import type { ReactElement, SVGProps } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

const iconBase = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

type Glyph = (props: SVGProps<SVGSVGElement>) => ReactElement

// Reliability — shield
const ShieldIcon: Glyph = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M12 3 5 6v5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3z" />
    <path d="m9.2 12 1.9 1.9 3.7-3.8" />
  </svg>
)

// Transparency — eye
const EyeIcon: Glyph = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

// Compliance — check badge
const BadgeCheckIcon: Glyph = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M12 2.5l2.2 1.6 2.7-.2 1 2.5 2.3 1.4-.7 2.6.7 2.6-2.3 1.4-1 2.5-2.7-.2L12 21.5l-2.2-1.6-2.7.2-1-2.5-2.3-1.4.7-2.6-.7-2.6 2.3-1.4 1-2.5 2.7.2L12 2.5z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

// Direct supply relationships — link
const LinkIcon: Glyph = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M10 13a4 4 0 0 0 5.7.3l2.6-2.6a4 4 0 0 0-5.7-5.7l-1.5 1.5" />
    <path d="M14 11a4 4 0 0 0-5.7-.3L5.7 13.3a4 4 0 0 0 5.7 5.7l1.5-1.5" />
  </svg>
)

// Quality — gem
const GemIcon: Glyph = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
    <path d="M3 8h18M9 3 7.5 8 12 21 16.5 8 15 3M9 3l3 5 3-5" />
  </svg>
)

const icons: Glyph[] = [ShieldIcon, EyeIcon, BadgeCheckIcon, LinkIcon, GemIcon]

// Alternate badge tints across the five values for subtle visual rhythm.
const badgeTints = [
  'bg-flame/10 text-flame',
  'bg-gold/15 text-copper dark:text-gold',
  'bg-flame/10 text-flame',
  'bg-gold/15 text-copper dark:text-gold',
  'bg-flame/10 text-flame',
]

export default function WhyJeliro() {
  const { t } = useLanguage()

  return (
    <section id="why" className="section-y bg-surface-alt">
      <div className="container-x">
        <span className="kicker">{t.why.kicker}</span>
        <h2 className="heading-2 mt-3">{t.why.title}</h2>

        {/*
          5-value grid: 1 col mobile · 2 cols sm · 6-col lg track so the
          top row holds 3 cards (span-2 each) and the bottom row centers 2
          cards (span-2, offset by a half-col start) — no awkward gaps.
        */}
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-6">
          {t.why.values.map((value, i) => {
            const Icon = icons[i] ?? GemIcon
            const tint = badgeTints[i] ?? badgeTints[0]
            // First 3 cards span 2 of 6 cols; last 2 span 2 cols and are
            // shifted to center the bottom row on large screens.
            const lgPlacement =
              i < 3
                ? 'lg:col-span-2'
                : i === 3
                  ? 'lg:col-span-2 lg:col-start-2'
                  : 'lg:col-span-2'

            return (
              <li
                key={value.title}
                className={`group card-surface flex flex-col gap-4 hover:-translate-y-1 hover:border-flame/40 hover:shadow-xl hover:shadow-espresso/5 ${lgPlacement}`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-105 ${tint}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
