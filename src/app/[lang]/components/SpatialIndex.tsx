'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { FC } from 'react'
import { SpatialIndexProps } from '../types'
import { ProjectCover } from './ProjectCover'

const EASE = [0.16, 1, 0.3, 1] as const

export const SpatialIndex: FC<SpatialIndexProps> = ({ dictionary, projects }) => {
  const specs = [
    { key: 'constraints', label: dictionary.labels.constraints },
    { key: 'approach', label: dictionary.labels.approach },
    { key: 'impact', label: dictionary.labels.impact },
  ] as const

  return (
    <section id="index" className="relative overflow-hidden border-b border-white/8">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-[32rem] w-[32rem] rounded-full bg-[#3b82f6]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
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
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.035em]">
              {dictionary.heading}
            </h2>
            <span className="text-concrete-500 shrink-0 font-mono text-[10px] tracking-[0.16em] uppercase">
              {dictionary.count}
            </span>
          </div>

          <p className="text-concrete-400 col-span-full mt-6 max-w-xl text-[15px] leading-relaxed md:col-span-6 md:col-start-4 md:mt-7 md:text-base">
            {dictionary.desc}
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col gap-5 md:mt-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: EASE }}
              className="group grid grid-cols-12 gap-x-7 gap-y-7 rounded-3xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/[0.04] md:p-7"
            >
              <div className="col-span-12 md:col-span-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.025]">
                    <ProjectCover variant={project.cover} title={project.title} />
                  </div>
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-white/80 uppercase backdrop-blur-md">
                      {project.scope === 'client'
                        ? dictionary.labels.client
                        : dictionary.labels.personal}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-white/80 uppercase backdrop-blur-md">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === 'live' ? 'bg-amber' : 'bg-white/50'
                        }`}
                      />
                      {project.status === 'live'
                        ? dictionary.labels.live
                        : dictionary.labels.nda}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
                    {dictionary.labels.sheet} {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-concrete-500 font-mono text-[10px]">{project.year}</span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
                  <div>
                    <p className="text-steel font-mono text-[10px] tracking-[0.16em] uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] md:text-[1.75rem]">
                      {project.title}
                    </h3>
                  </div>

                  {project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-concrete-400 hover:text-paper inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors hover:border-white/25 hover:bg-white/[0.04]"
                    >
                      {dictionary.labels.view}
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
                    </a>
                  ) : project.status === 'nda' ? (
                    <span className="text-concrete-500 rounded-full border border-white/8 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase">
                      {dictionary.labels.private}
                    </span>
                  ) : (
                    <span className="text-concrete-400 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase">
                      <span className="bg-amber h-1.5 w-1.5 rounded-full" />
                      {dictionary.labels.live}
                    </span>
                  )}
                </div>

                <dl className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-3">
                  {specs.map((spec) => (
                    <div key={spec.key}>
                      <dt className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
                        {spec.label}
                      </dt>
                      <dd className="text-concrete-400 mt-2 text-[13px] leading-relaxed">
                        {project[spec.key]}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 border-t border-white/8 pt-5">
                  <p className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
                    {dictionary.labels.stack}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="text-concrete-400 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-concrete-500 mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-[0.16em] uppercase">
          <span>{dictionary.note}</span>
          <span dir="ltr">A–01 → A–{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
