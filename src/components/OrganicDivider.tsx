/**
 * Soft organic edge between two sections.
 * `color` is the *next* section's surface colour (as a text-* class),
 * so the wave appears to pour the following section up into this one.
 */
interface OrganicDividerProps {
  color?: string
  variant?: 1 | 2 | 3
  flip?: boolean
  className?: string
}

const paths: Record<1 | 2 | 3, string> = {
  1: 'M0 46c120-26 220 14 348 10 128-4 196-38 320-32 124 6 180 44 306 42 126-2 214-40 322-38 76 1 112 12 144 20v42H0z',
  2: 'M0 62c96 8 190-30 300-28 110 2 168 40 286 40 118 0 190-42 306-42 116 0 196 38 316 34 84-3 172-22 232-34v58H0z',
  3: 'M0 30c140 34 236-8 362-4 126 4 178 42 306 40 128-2 196-42 324-38 128 4 200 40 322 32 46-3 90-12 126-22v52H0z',
}

export default function OrganicDivider({
  color = 'text-cream-100',
  variant = 1,
  flip = false,
  className = '',
}: OrganicDividerProps) {
  return (
    <svg
      aria-hidden
      className={`relative z-10 block w-full h-[52px] md:h-[84px] ${color} ${className}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path fill="currentColor" d={paths[variant]} />
    </svg>
  )
}
