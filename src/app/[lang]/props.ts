import type { Dictionary } from '@/types/dictionary'
import { Project } from '@/types/project'
import { MotionValue } from 'motion/react'
import { Locale } from './dictionaries'

export type HomeProps = {
  lang: Locale
  dictionary: Dictionary
}

export type NavProps = {
  lang: Locale
  dictionary: Dictionary['nav']
}

export type HeroProps = {
  lang: Locale
  dictionary: Dictionary['hero']
  scrollYProgress: MotionValue<number>
}

export type CapabilitiesProps = {
  dictionary: Dictionary['capabilities']
}

export type SelectedWorkProps = {
  lang: Locale
  dictionary: Dictionary['selectedWork']
  projects: Array<Project>
}

export type LabProps = {
  dictionary: Dictionary['lab']
}

export type ApproachProps = {
  dictionary: Dictionary['approach']
}

export type ContactProps = {
  lang: Locale
  dictionary: Dictionary['contact']
  nav: Dictionary['nav']
}
