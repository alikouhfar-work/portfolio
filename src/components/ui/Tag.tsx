import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type TagProps = {
  children: ReactNode
  tone?: 'outline' | 'solid'
  className?: string
}

export const Tag: FC<TagProps> = ({ children, tone = 'outline', className }) => {
  return (
    <li
      className={cn(
        'text-concrete-400 rounded-full px-2.5 py-1 font-mono text-[10px]',
        tone === 'outline' && 'border border-white/8 bg-white/[0.03]',
        tone === 'solid' && 'bg-white/[0.04]',
        className
      )}
    >
      {children}
    </li>
  )
}
