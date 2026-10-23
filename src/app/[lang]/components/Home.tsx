'use client'

import { PROJECTS } from '@/constants/projects'
import { useScroll } from 'motion/react'
import { FC, useRef } from 'react'
import { HomeProps } from '../types'
import { ContactFooter } from './ContactFooter'
import { Hero } from './Hero'
import { Lab } from './Lab'
import { Philosophy } from './Philosophy'
import { SiteNav } from './SiteNav'
import { SkillsMatrix } from './SkillsMatrix'
import { SpatialIndex } from './SpatialIndex'

const Home: FC<HomeProps> = ({ lang, dictionary }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="bg-obsidian relative min-h-screen">
      <a
        href="#skills"
        className="focus:bg-paper focus:text-obsidian sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:font-mono focus:text-[10px] focus:uppercase focus:tracking-widest"
      >
        Skip to content
      </a>

      <SiteNav lang={lang} dictionary={dictionary.nav} />

      <main>
        <Hero
          lang={lang}
          dictionary={dictionary.hero}
          scrollYProgress={scrollYProgress}
        />
        <SkillsMatrix dictionary={dictionary.skills} />
        <SpatialIndex
          lang={lang}
          dictionary={dictionary.spatialIndex}
          projects={PROJECTS[lang]}
        />
        <Lab dictionary={dictionary.lab} />
        <Philosophy dictionary={dictionary.philosophy} />
      </main>

      <ContactFooter lang={lang} dictionary={dictionary.contact} nav={dictionary.nav} />
    </div>
  )
}

export default Home
