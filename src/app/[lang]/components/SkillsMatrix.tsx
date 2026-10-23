'use client'

import { motion } from 'motion/react'
import { FC } from 'react'
import { SkillsMatrixProps } from '../types'

const EASE = [0.16, 1, 0.3, 1] as const

export const SkillsMatrix: FC<SkillsMatrixProps> = ({ dictionary }) => {
  const total = dictionary.pillars.reduce((sum, pillar) => sum + pillar.items.length, 0)

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-b border-white/8"
    >
      <div aria-hidden className="gallery-glow absolute inset-0 opacity-70" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-4 gap-x-6 md:grid-cols-12"
        >
          <p className="text-amber col-span-full font-mono text-[10px] tracking-[0.2em] uppercase md:col-span-3">
            {dictionary.eyebrow}
          </p>

          <div className="col-span-full mt-6 flex flex-col justify-between gap-6 md:col-span-9 md:mt-0 md:flex-row md:items-end">
            <h2
              id="skills-heading"
              className="max-w-[22ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance"
            >
              {dictionary.heading}
            </h2>
            <span className="text-concrete-500 shrink-0 font-mono text-[10px] tracking-[0.16em] uppercase">
              {dictionary.note}
            </span>
          </div>

          <p className="text-concrete-400 col-span-full mt-6 max-w-xl text-[15px] leading-relaxed md:col-span-6 md:col-start-4 md:mt-7 md:text-base">
            {dictionary.desc}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 lg:grid-cols-3">
          {dictionary.pillars.map((pillar, pillarIndex) => (
            <motion.article
              key={pillar.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: pillarIndex * 0.08, ease: EASE }}
              className="group/pillar flex flex-col rounded-3xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/[0.045] md:p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-steel font-mono text-[10px] tracking-[0.12em]">
                  {pillar.code}
                </span>
                <span className="text-concrete-500 font-mono text-[10px] tracking-[0.14em] uppercase">
                  {String(pillar.items.length).padStart(2, '0')} {dictionary.labels.instruments}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-medium tracking-[-0.01em] md:text-[1.4rem]">
                {pillar.title}
              </h3>

              <p className="text-concrete-400 mt-3 max-w-[36ch] text-sm leading-relaxed">
                {pillar.summary}
              </p>

              <ul className="mt-7 divide-y divide-white/6 border-t border-white/8">
                {pillar.items.map((item, itemIndex) => (
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

        <div className="text-concrete-500 mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-[0.16em] uppercase">
          <span>
            {String(dictionary.pillars.length).padStart(2, '0')} {dictionary.labels.pillars} —{' '}
            {String(total).padStart(2, '0')} {dictionary.labels.instruments}
          </span>
          <span dir="ltr">S–01 → S–03</span>
        </div>
      </div>
    </section>
  )
}
