interface LogoProps {
  className?: string
  onClick?: () => void
}

/**
 * Adaptive brand lockup: the transparent metallic emblem + wordmark.
 * Text colors use semantic tokens so it works in light and dark mode.
 */
export default function Logo({ className = '', onClick }: LogoProps) {
  return (
    <a
      href="#home"
      onClick={onClick}
      aria-label="JELIRO Metals Trading — home"
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <img
        src="/logos/jeliro-emblem.png"
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-ink sm:text-xl">JELIRO</span>
        <span className="mt-0.5 hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-muted sm:block sm:text-[10px]">
          Metals Trading
        </span>
      </span>
    </a>
  )
}
