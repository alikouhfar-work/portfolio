import { cn } from '@/lib/utils'
import { FC } from 'react'

type SectionHeaderProps = {
  id: string
  eyebrow: string
  heading: string
  count?: string
  description?: string
  headingClassName?: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  id,
  eyebrow,
  heading,
  count,
  description,
  headingClassName,
}) => {
  return (
    <div className="grid grid-cols-4 gap-x-6 md:grid-cols-12">
      <p className="text-amber col-span-full font-mono text-[10px] tracking-[0.2em] uppercase md:col-span-3">
        {eyebrow}
      </p>

      <div className="col-span-full mt-6 flex flex-col justify-between gap-6 md:col-span-9 md:mt-0 md:flex-row md:items-end">
        <h2
          id={id}
          className={cn(
            'text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance',
            headingClassName
          )}
        >
          {heading}
        </h2>
        {count && (
          <span className="text-concrete-500 shrink-0 font-mono text-[10px] tracking-[0.16em] uppercase">
            {count}
          </span>
        )}
      </div>

      {description && (
        <p className="text-concrete-400 col-span-full mt-6 max-w-xl text-[15px] leading-relaxed md:col-span-6 md:col-start-4 md:mt-7 md:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
