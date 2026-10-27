import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type MetaRowProps = {
  left: ReactNode
  right?: ReactNode
  className?: string
}

export const MetaRow: FC<MetaRowProps> = ({ left, right, className }) => {
  return (
    <div
      className={cn(
        'text-concrete-500 mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-[0.16em] uppercase',
        className
      )}
    >
      <span>{left}</span>
      {right && <span dir="ltr">{right}</span>}
    </div>
  )
}
