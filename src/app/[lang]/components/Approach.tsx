'use client'

import { SectionShell } from '@/components/ui/SectionShell'
import { EASE, VIEWPORT, VIEWPORT_TIGHT } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { FC } from 'react'
import { ApproachProps } from '../props'

export const Approach: FC<ApproachProps> = ({ dictionary }) => {
  return (
    <SectionShell id="approach" backdrop="gallery-soft">
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-5"
        >
          <p className="text-amber font-mono text-[10px] tracking-[0.2em] uppercase">{dictionary.eyebrow}</p>

          <h2 className="mt-6 text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.04] font-medium tracking-[-0.035em] text-balance">
            {dictionary.heading}
          </h2>

          <p className="text-concrete-400 mt-7 max-w-md text-[15px] leading-relaxed md:text-base">
            {dictionary.lead}
          </p>

          <dl className="mt-9 divide-y divide-white/6 rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-1 backdrop-blur-sm">
            {dictionary.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
              >
                <dt className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
                  {fact.label}
                </dt>
                <dd className="text-paper text-end font-mono text-[10px] tracking-[0.04em] uppercase">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex items-start gap-4">
            <span className="bg-amber mt-3 h-px w-9 shrink-0" />
            <div>
              <p className="text-lg font-medium tracking-tight md:text-xl">{dictionary.signature}</p>
              <p className="text-concrete-500 mt-2 font-mono text-[10px] tracking-[0.16em] uppercase">
                {dictionary.signatureNote}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="flex flex-col gap-3">
            {dictionary.principles.map((principle, index) => (
              <motion.article
                key={principle.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_TIGHT}
                transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
                className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/[0.045] md:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-steel font-mono text-[10px] tracking-[0.12em]">{principle.code}</span>
                  <span className="text-amber/90 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase">
                    <ArrowRight className="h-3 w-3 rtl:-scale-x-100" />
                    {principle.applied}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-medium tracking-tight md:text-xl">{principle.structural}</h3>
                <p className="text-concrete-400 mt-2.5 max-w-lg text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>

          <p
            dir="ltr"
            className="text-concrete-500 mt-6 text-end font-mono text-[10px] tracking-[0.16em] uppercase"
          >
            {dictionary.sectionNote}
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
