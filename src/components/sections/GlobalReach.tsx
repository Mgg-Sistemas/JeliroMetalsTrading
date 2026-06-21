import { useLanguage } from '../../i18n/LanguageContext'
import { GlobeIcon, PinIcon, ArrowRightIcon } from '../ui/Icons'

export default function GlobalReach() {
  const { t } = useLanguage()
  const r = t.reach

  return (
    <section id="reach" className="section-y bg-surface-alt relative overflow-hidden">
      {/* Decorative metallic background accents (Hero-style) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-copper/20 via-flame/10 to-transparent blur-3xl dark:from-copper/30" />
        <div className="absolute -right-28 bottom-0 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tl from-gold/25 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--line)_1px,transparent_0)] [background-size:34px_34px] opacity-40" />
      </div>

      <div className="container-x">
        <span className="kicker">{r.kicker}</span>
        <h2 className="heading-2 mt-3 max-w-3xl">{r.title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {r.intro}
        </p>

        {/* Trade-flow visual: ORIGIN -> JELIRO/Dubai hub -> DESTINATION */}
        <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          {/* Origin card */}
          <ReachCard
            label={r.origin.label}
            title={r.origin.title}
            desc={r.origin.desc}
          />

          {/* Connector + hub */}
          <div className="relative flex items-center justify-center lg:px-2">
            {/* Mobile: vertical connector (arrow points down) */}
            <div className="flex flex-col items-center lg:hidden">
              <svg
                aria-hidden
                width="2"
                height="40"
                viewBox="0 0 2 40"
                className="text-flame/50"
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5 6"
                  strokeLinecap="round"
                  className="reach-dash-v"
                />
              </svg>
            </div>

            <Hub />

            <div className="flex flex-col items-center lg:hidden">
              <svg
                aria-hidden
                width="22"
                height="40"
                viewBox="0 0 22 40"
                className="text-flame/50"
              >
                <line
                  x1="11"
                  y1="0"
                  x2="11"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5 6"
                  strokeLinecap="round"
                  className="reach-dash-v"
                />
                <path
                  d="M5 26l6 7 6-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Destination card */}
          <ReachCard
            label={r.destination.label}
            title={r.destination.title}
            desc={r.destination.desc}
            align="right"
          />

          {/* Desktop: horizontal dashed connectors spanning the grid behind the hub */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <div className="container-x">
              <div className="relative h-px">
                {/* left segment */}
                <svg
                  className="absolute right-[calc(50%+2.75rem)] top-1/2 hidden h-3 w-[28%] -translate-y-1/2 text-flame/45 xl:block"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="100"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                    strokeLinecap="round"
                    className="reach-dash-h"
                  />
                </svg>
                {/* right segment with arrowhead */}
                <svg
                  className="absolute left-[calc(50%+2.75rem)] top-1/2 hidden h-3 w-[28%] -translate-y-1/2 text-flame/45 xl:block"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="100"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                    strokeLinecap="round"
                    className="reach-dash-h"
                  />
                </svg>
                <ArrowRightIcon
                  aria-hidden
                  className="absolute left-[78%] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-flame/55 xl:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped keyframes for the dashed flow + hub pulse */}
      <style>{`
        @keyframes reachDashH { to { stroke-dashoffset: -22; } }
        @keyframes reachDashV { to { stroke-dashoffset: 22; } }
        @keyframes reachPulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.9); }
        }
        .reach-dash-h { animation: reachDashH 1.2s linear infinite; }
        .reach-dash-v { animation: reachDashV 1.2s linear infinite; }
        .reach-pulse { animation: reachPulse 2.6s ease-out infinite; }
      `}</style>
    </section>
  )
}

function ReachCard({
  label,
  title,
  desc,
  align = 'left',
}: {
  label: string
  title: string
  desc: string
  align?: 'left' | 'right'
}) {
  return (
    <div className="card-surface group relative flex flex-col gap-3 overflow-hidden shadow-xl shadow-espresso/5 sm:!p-8">
      {/* faint pin watermark */}
      <PinIcon
        aria-hidden
        className={`pointer-events-none absolute -top-3 h-24 w-24 text-flame/5 ${
          align === 'right' ? '-left-3' : '-right-3'
        }`}
      />
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface-alt px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper dark:text-gold">
        <PinIcon className="h-3.5 w-3.5" />
        {label}
      </span>
      <h3 className="text-xl font-bold text-ink sm:text-2xl">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
    </div>
  )
}

function Hub() {
  return (
    <div className="relative z-10 grid place-items-center">
      <span
        aria-hidden
        className="reach-pulse absolute inset-0 rounded-full bg-flame/40"
      />
      <div className="relative grid h-16 w-16 place-items-center rounded-full border border-line bg-card text-flame shadow-lg shadow-flame/15 sm:h-20 sm:w-20">
        <GlobeIcon className="h-7 w-7 sm:h-9 sm:w-9" />
      </div>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper dark:text-gold">
        JELIRO · Dubai
      </span>
    </div>
  )
}
