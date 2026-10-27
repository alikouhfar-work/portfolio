import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type Backdrop = 'gallery' | 'gallery-soft' | 'gallery-light' | 'blueprint' | 'none'

type SectionShellProps = {
  id: string
  labelledBy?: string
  backdrop?: Backdrop
  className?: string
  children: ReactNode
}

export const SectionShell: FC<SectionShellProps> = ({
  id,
  labelledBy,
  backdrop = 'gallery',
  className,
  children,
}) => {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('relative overflow-hidden border-b border-white/8', className)}
    >
      {backdrop === 'gallery' && <div aria-hidden className="gallery-glow absolute inset-0 opacity-70" />}
      {backdrop === 'gallery-soft' && (
        <div aria-hidden className="gallery-glow absolute inset-0 opacity-60" />
      )}
      {backdrop === 'gallery-light' && <div aria-hidden className="gallery-glow-light absolute inset-0" />}
      {backdrop === 'blueprint' && (
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -left-40 h-[32rem] w-[32rem] rounded-full bg-[#3b82f6]/[0.04] blur-3xl"
        />
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        {children}
      </div>
    </section>
  )
}
