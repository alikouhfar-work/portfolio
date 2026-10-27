export const LOCALES = ['en', 'de', 'fa'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alikouhfar.runflare.run'

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? 'hello@alikouhfar.com'

export const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB ?? 'https://github.com'

export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN ?? 'https://linkedin.com'

export const isLocale = (value: string): value is Locale => LOCALES.includes(value as Locale)
