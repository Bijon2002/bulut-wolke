import type { ReactNode } from 'react'
import RevealText from './RevealText'

interface SectionHeadingProps {
  eyebrow: string
  /** Pass an array to stagger the title line by line. */
  title: ReactNode | ReactNode[]
  body?: string
  align?: 'center' | 'left'
  className?: string
}

/** Olive sprig ornament taken from the client logo's laurel. */
export function OliveSprig({ className = '' }: { className?: string }) {
  return (
    <svg
      width="46"
      height="20"
      viewBox="0 0 46 20"
      fill="none"
      aria-hidden
      className={`text-olive-500 shrink-0 ${className}`}
    >
      <path d="M2 16C12 16 28 12 44 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="12" cy="11.6" rx="5" ry="2.6" fill="currentColor" opacity=".45" transform="rotate(-24 12 11.6)" />
      <ellipse cx="23" cy="9" rx="5" ry="2.6" fill="currentColor" opacity=".65" transform="rotate(-22 23 9)" />
      <ellipse cx="34" cy="6" rx="4.6" ry="2.4" fill="currentColor" opacity=".85" transform="rotate(-20 34 6)" />
    </svg>
  )
}

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'text-center mx-auto max-w-2xl' : 'text-left'} ${className}`}>
      <p className="text-xs uppercase tracking-[0.22em] text-olive-600 font-semibold mb-4">
        {eyebrow}
      </p>
      <RevealText
        as="h2"
        className="font-display text-3xl md:text-5xl leading-tight tracking-tight text-olive-800 font-bold mb-5"
        lines={Array.isArray(title) ? title : [title]}
        mode="word"
        stagger={55}
      />
      <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`} aria-hidden>
        <span className="h-px w-14 bg-yellow-600/45" />
        <OliveSprig />
        <span className="h-px w-14 bg-yellow-600/45" />
      </div>
      {body && (
        <p className={`text-olive-700/90 leading-relaxed ${centered ? '' : 'max-w-md'}`}>{body}</p>
      )}
    </div>
  )
}
