import type { ReactNode } from 'react'
import { useScrollReveal, type AosAnimation } from '../hooks/useScrollReveal'

interface AosBoxProps {
  children: ReactNode
  animation?: AosAnimation
  delay?: number
  duration?: number
  className?: string
}

export default function AosBox({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
}: AosBoxProps) {
  const ref = useScrollReveal<HTMLDivElement>({ animation, delay, duration })
  return (
    <div
      ref={ref}
      className={className}
      data-aos={animation}
      data-aos-delay={delay > 0 ? delay : undefined}
      data-aos-duration={duration !== 700 ? duration : undefined}
    >
      {children}
    </div>
  )
}
