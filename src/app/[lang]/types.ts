import { Project } from '@/types/project'
import { HeroDictionary } from '@/types/hero'
import {
  ContactDictionary,
  LabDictionary,
  NavDictionary,
  PhilosophyDictionary,
  SkillsDictionary,
  SpatialIndexDictionary,
} from '@/types/sections'
import { MotionValue } from 'motion/react'
import { Locale } from './dictionaries'

export type HomeProps = {
  lang: Locale
  dictionary: {
    nav: NavDictionary
    hero: HeroDictionary
    skills: SkillsDictionary
    spatialIndex: SpatialIndexDictionary
    lab: LabDictionary
    philosophy: PhilosophyDictionary
    contact: ContactDictionary
  }
}

export type NavProps = {
  lang: Locale
  dictionary: NavDictionary
}

export type HeroProps = {
  lang: Locale
  dictionary: HeroDictionary
  scrollYProgress: MotionValue<number>
}

export type SkillsMatrixProps = {
  dictionary: SkillsDictionary
}

export type SpatialIndexProps = {
  lang: Locale
  dictionary: SpatialIndexDictionary
  projects: Array<Project>
}

export type LabProps = {
  dictionary: LabDictionary
}

export type PhilosophyProps = {
  dictionary: PhilosophyDictionary
}

export type ContactProps = {
  lang: Locale
  dictionary: ContactDictionary
  nav: NavDictionary
}
