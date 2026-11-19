'use client'

import { PROJECTS } from '@/constants/projects'
import { useScroll } from 'motion/react'
import { FC, useRef } from 'react'
import { HomeProps } from '../props'
import { Approach } from './Approach'
import { Capabilities } from './Capabilities'
import { ContactFooter } from './ContactFooter'
import { Hero } from './Hero'
import { Lab } from './Lab'
import { SelectedWork } from './SelectedWork'
import { SiteNav } from './SiteNav'

const Home: FC<HomeProps> = ({ lang, dictionary }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="bg-obsidian relative min-h-screen">
      <a
        href="#capabilities"
        className="focus:bg-paper focus:text-obsidian sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:font-mono focus:text-[10px] focus:tracking-widest focus:uppercase"
      >
        {dictionary.nav.skipToContent}
      </a>

      <SiteNav lang={lang} dictionary={dictionary.nav} />

      <main>
        <Hero lang={lang} dictionary={dictionary.hero} scrollYProgress={scrollYProgress} />
        <Capabilities dictionary={dictionary.capabilities} />
        <SelectedWork lang={lang} dictionary={dictionary.selectedWork} projects={PROJECTS[lang]} />
        <Lab dictionary={dictionary.lab} />
        <Approach dictionary={dictionary.approach} />
      </main>

      <ContactFooter lang={lang} dictionary={dictionary.contact} nav={dictionary.nav} />
    </div>
  )
}

export default Home
