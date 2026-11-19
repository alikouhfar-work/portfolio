'use client'

import { ProjectCover } from '@/components/project-covers'
import { MetaRow } from '@/components/ui/MetaRow'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionShell } from '@/components/ui/SectionShell'
import { Tag } from '@/components/ui/Tag'
import { EASE, VIEWPORT, VIEWPORT_TIGHT } from '@/lib/motion'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { FC } from 'react'
import { SelectedWorkProps } from '../props'

export const SelectedWork: FC<SelectedWorkProps> = ({ dictionary, projects }) => {
  const specs = [
    { key: 'challenge', label: dictionary.labels.challenge },
    { key: 'approach', label: dictionary.labels.approach },
    { key: 'outcome', label: dictionary.labels.outcome },
  ] as const

  return (
    <SectionShell id="work" labelledBy="work-heading" backdrop="blueprint">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <SectionHeader
          id="work-heading"
          eyebrow={dictionary.eyebrow}
          heading={dictionary.heading}
          count={dictionary.count}
          description={dictionary.desc}
        />
      </motion.div>

      <div className="mt-14 flex flex-col gap-5 md:mt-16">
        {projects.map((project, index) => {
          const isNda = project.visibility === 'nda'
          const statusLabel = isNda
            ? dictionary.labels.nda
            : project.link
              ? dictionary.labels.live
              : dictionary.labels.published

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_TIGHT}
              transition={{ duration: 0.7, delay: index * 0.05, ease: EASE }}
              className="group grid grid-cols-12 gap-x-7 gap-y-7 rounded-3xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/[0.04] md:p-7"
            >
              <div className="col-span-12 md:col-span-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.025]">
                    <ProjectCover variant={project.cover} title={project.title} projectId={project.id} />
                  </div>
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-white/80 uppercase backdrop-blur-md">
                      {project.scope === 'client'
                        ? dictionary.labels.clientProject
                        : dictionary.labels.personalProject}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-white/80 uppercase backdrop-blur-md">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${isNda ? 'bg-white/50' : 'bg-amber'}`}
                      />
                      {statusLabel}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
                    {dictionary.labels.project} {String(index + 1).padStart(2, '0')}
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

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-concrete-400 hover:text-paper inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors hover:border-white/25 hover:bg-white/[0.04]"
                    >
                      {dictionary.labels.visit}
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                    </a>
                  ) : isNda ? (
                    <span className="text-concrete-500 rounded-full border border-white/8 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase">
                      {dictionary.labels.underNda}
                    </span>
                  ) : (
                    <span className="text-concrete-400 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase">
                      <span className="bg-amber h-1.5 w-1.5 rounded-full" />
                      {dictionary.labels.published}
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
                    {dictionary.labels.technologies}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((technology) => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>

      <MetaRow
        left={dictionary.note}
        right={`C–01 → C–${String(projects.length).padStart(2, '0')}`}
      />
    </SectionShell>
  )
}
