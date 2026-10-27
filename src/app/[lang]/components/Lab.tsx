'use client'

import { MetaRow } from '@/components/ui/MetaRow'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionShell } from '@/components/ui/SectionShell'
import { Tag } from '@/components/ui/Tag'
import { EASE, VIEWPORT, VIEWPORT_TIGHT } from '@/lib/motion'
import { motion } from 'motion/react'
import { FC } from 'react'
import { LabProps } from '../props'

export const Lab: FC<LabProps> = ({ dictionary }) => {
  const firstCode = dictionary.items[0]?.code ?? 'R-01'
  const lastCode = dictionary.items[dictionary.items.length - 1]?.code ?? firstCode

  return (
    <SectionShell id="lab" labelledBy="lab-heading" backdrop="gallery-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <SectionHeader
          id="lab-heading"
          eyebrow={dictionary.eyebrow}
          heading={dictionary.heading}
          count={dictionary.count}
          description={dictionary.desc}
        />
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
        {dictionary.items.map((item, index) => (
          <motion.article
            key={item.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_TIGHT}
            transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
            className="rounded-3xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/[0.04] md:p-7"
          >
            <h3 className="mt-5 text-xl leading-snug font-medium tracking-[-0.01em] md:text-[1.35rem]">
              {item.title}
            </h3>

            <p className="text-concrete-400 mt-3 text-sm leading-relaxed">{item.description}</p>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <Tag key={tag} tone="solid">
                  {tag}
                </Tag>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <MetaRow left={dictionary.note} right={`${firstCode} → ${lastCode}`} />
    </SectionShell>
  )
}
