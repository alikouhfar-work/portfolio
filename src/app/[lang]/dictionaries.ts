import 'server-only'

import { isLocale, LOCALES, type Locale } from '@/config/site'
import type { Dictionary } from '@/types/dictionary'

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default satisfies Dictionary),
  de: () => import('../../dictionaries/de.json').then((module) => module.default satisfies Dictionary),
  fa: () => import('../../dictionaries/fa.json').then((module) => module.default satisfies Dictionary),
}

export type { Locale }

export const hasLocale = (locale: string): locale is Locale => isLocale(locale)

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionaries[locale]()

export { LOCALES }
