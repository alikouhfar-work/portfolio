'use client'

import { MetaRow } from '@/components/ui/MetaRow'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionShell } from '@/components/ui/SectionShell'
import { EASE, VIEWPORT, VIEWPORT_TIGHT } from '@/lib/motion'
import { motion } from 'motion/react'
import { FC } from 'react'
import { CapabilitiesProps } from '../props'

export const Capabilities: FC<CapabilitiesProps> = ({ dictionary }) => {
  const total = dictionary.disciplines.reduce((sum, discipline) => sum + discipline.items.length, 0)
  const disciplineCount = String(dictionary.disciplines.length).padStart(2, '0')
  const skillCount = String(total).padStart(2, '0')

  return (
    <SectionShell id="capabilities" labelledBy="capabilities-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <SectionHeader
          id="capabilities-heading"
          eyebrow={dictionary.eyebrow}
          heading={dictionary.heading}
          count={dictionary.note}
          description={dictionary.desc}
          headingClassName="max-w-[22ch]"
        />
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 lg:grid-cols-3">
        {dictionary.disciplines.map((discipline, disciplineIndex) => (
          <motion.article
            key={discipline.code}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_TIGHT}
            transition={{ duration: 0.7, delay: disciplineIndex * 0.08, ease: EASE }}
            className="group/discipline flex flex-col rounded-3xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/[0.045] md:p-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-steel font-mono text-[10px] tracking-[0.12em]">{discipline.code}</span>
              <span className="text-concrete-500 font-mono text-[10px] tracking-[0.14em] uppercase">
                {String(discipline.items.length).padStart(2, '0')} {dictionary.labels.skills}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-medium tracking-[-0.01em] md:text-[1.4rem]">
              {discipline.title}
            </h3>

            <p className="text-concrete-400 mt-3 max-w-[36ch] text-sm leading-relaxed">
              {discipline.summary}
            </p>

            <ul className="mt-7 divide-y divide-white/6 border-t border-white/8">
              {discipline.items.map((item, itemIndex) => (
                <li
                  key={item}
                  className="group/item flex items-baseline justify-between gap-4 py-3 transition-colors"
                >
                  <span className="text-paper group-hover/item:text-amber text-sm transition-colors">
                    {item}
                  </span>
                  <span className="text-concrete-500 font-mono text-[10px] tabular-nums">
                    {String(itemIndex + 1).padStart(2, '0')}
                  </span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <MetaRow
        left={`${disciplineCount} ${dictionary.labels.disciplines} — ${skillCount} ${dictionary.labels.skills}`}
        right={`D–01 → D–${disciplineCount}`}
      />
    </SectionShell>
  )
}
