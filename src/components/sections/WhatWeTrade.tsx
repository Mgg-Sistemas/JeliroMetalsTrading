import type { SVGProps } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

type GlyphProps = SVGProps<SVGSVGElement>

const glyphBase = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

// Tin Ore / Cassiterite — clustered mineral ore facets
function OreGlyph(props: GlyphProps) {
  return (
    <svg {...glyphBase} {...props}>
      <path d="M12 3 4 8v8l8 5 8-5V8l-8-5z" />
      <path d="M12 3v18M4 8l8 5 8-5M8 5.5v6.2M16 5.5v6.2" />
    </svg>
  )
}

// Refined Tin — stacked metal ingots
function IngotGlyph(props: GlyphProps) {
  return (
    <svg {...glyphBase} {...props}>
      <path d="M6 14.5 4 18.5h11l-2-4H6z" />
      <path d="M12.5 9 11 12.5h9L18.5 9h-6z" />
      <path d="M9 6.5 8 9h7.5L14.5 6.5H9z" />
    </svg>
  )
}

// Non-Ferrous Metals — molecular / hexagonal lattice
function LatticeGlyph(props: GlyphProps) {
  return (
    <svg {...glyphBase} {...props}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="16" r="2" />
      <circle cx="19" cy="16" r="2" />
      <circle cx="12" cy="13" r="2.2" />
      <path d="M12 7v3.8M10.3 11.6 6.4 14.6M13.7 11.6l3.9 3" />
    </svg>
  )
}

// General Trading — global exchange flow
function ExchangeGlyph(props: GlyphProps) {
  return (
    <svg {...glyphBase} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h13.5M16 6.5l1.5 3-3 1M20.5 14.5H7M8 17.5l-1.5-3 3-1" />
    </svg>
  )
}

const glyphs = [OreGlyph, IngotGlyph, LatticeGlyph, ExchangeGlyph]

export default function WhatWeTrade() {
  const { t } = useLanguage()

  return (
    <section id="trade" className="section-y bg-surface-alt">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="kicker">{t.trade.kicker}</span>
          <h2 className="heading-2 mt-3">{t.trade.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.trade.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4">
          {t.trade.items.map((item, i) => {
            const Glyph = glyphs[i % glyphs.length]
            return (
              <article
                key={item.name}
                className="card-surface group relative flex flex-col shadow-sm transition duration-300 hover:-translate-y-1 hover:border-flame/40 hover:shadow-xl hover:shadow-espresso/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-copper ring-1 ring-inset ring-gold/25 transition group-hover:bg-flame/10 group-hover:text-flame dark:text-gold dark:ring-gold/20">
                  <Glyph className="h-6 w-6" aria-hidden />
                </span>

                <h3 className="mt-5 text-lg font-bold leading-snug text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
