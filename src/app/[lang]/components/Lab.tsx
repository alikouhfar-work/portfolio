'use client'

import { motion } from 'motion/react'
import { FC } from 'react'
import { LabProps } from '../types'

const EASE = [0.16, 1, 0.3, 1] as const

export const Lab: FC<LabProps> = ({ dictionary }) => {
  return (
    <section id="lab" className="bg-paper text-ink relative overflow-hidden">
      <div aria-hidden className="gallery-glow-light absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-4 gap-x-6 md:grid-cols-12"
        >
          <p className="text-blueprint col-span-full font-mono text-[10px] tracking-[0.2em] uppercase md:col-span-3">
            {dictionary.eyebrow}
          </p>

          <div className="col-span-full mt-6 flex flex-col justify-between gap-6 md:col-span-9 md:mt-0 md:flex-row md:items-end">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em]">
              {dictionary.heading}
            </h2>
            <span className="text-ink-muted inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-ink/8 bg-white/60 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase">
              <span className="bg-amber h-1.5 w-1.5 animate-pulse rounded-full" />
              {dictionary.live}
            </span>
          </div>

          <p className="text-ink-muted col-span-full mt-6 max-w-xl text-[15px] leading-relaxed md:col-span-6 md:col-start-4 md:mt-7 md:text-base">
            {dictionary.desc}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
          {dictionary.items.map((item, index) => (
            <motion.article
              key={item.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
              className="rounded-3xl border border-ink/8 bg-white/70 p-6 backdrop-blur-sm transition-colors hover:border-ink/15 hover:bg-white/90 md:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-blueprint font-mono text-[10px] tracking-[0.12em]">
                  {item.code}
                </span>
                <span className="text-ink-muted inline-flex items-center gap-1.5 rounded-full border border-ink/8 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] uppercase">
                  <span className="bg-amber h-1.5 w-1.5 rounded-full" />
                  {item.status}
                </span>
              </div>

              <h3 className="mt-5 text-xl leading-snug font-medium tracking-[-0.01em] md:text-[1.35rem]">
                {item.title}
              </h3>

              <p className="text-ink-muted mt-3 text-sm leading-relaxed">{item.description}</p>

              <div className="mt-6">
                <div className="text-ink-muted flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.14em] uppercase">
                  <span>{dictionary.labels.progress}</span>
                  <span className="tabular-nums">{item.progress}%</span>
                </div>

                <div
                  role="progressbar"
                  aria-label={`${dictionary.labels.progress} — ${item.title}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={item.progress}
                  className="bg-ink/10 mt-2.5 h-1.5 w-full overflow-hidden rounded-full"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: item.progress / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                    className="bg-blueprint h-full origin-left rounded-full rtl:origin-right"
                  />
                </div>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-ink-muted bg-ink/[0.04] rounded-full px-2.5 py-1 font-mono text-[10px]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-ink-muted mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-[0.16em] uppercase">
          <span>R&amp;D notebook — 2026</span>
          <span dir="ltr">R–01 → R–04</span>
        </p>
      </div>
    </section>
  )
}
