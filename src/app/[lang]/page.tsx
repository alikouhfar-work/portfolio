import { SITE_URL } from '@/config/site'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import Home from './components/Home'
import { getDictionary, hasLocale } from './dictionaries'

const OG_LOCALES = {
  en: 'en_US',
  de: 'de_DE',
  fa: 'fa_IR',
} as const

export const generateMetadata = async ({ params }: PageProps<'/[lang]'>): Promise<Metadata> => {
  const { lang } = await params

  if (!hasLocale(lang)) return {}

  const dictionary = await getDictionary(lang)
  const url = `${SITE_URL}/${lang}`
  const pageTitle = `${dictionary.meta.title} — ${dictionary.nav.brand}`
  const image = {
    url: `${SITE_URL}/og/${lang}.png`,
    width: 1200,
    height: 630,
    alt: pageTitle,
  }

  return {
    title: pageTitle,
    description: dictionary.meta.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en`,
        de: `${SITE_URL}/de`,
        fa: `${SITE_URL}/fa`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: dictionary.meta.description,
      url,
      siteName: dictionary.nav.brand,
      locale: OG_LOCALES[lang],
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: dictionary.meta.description,
      images: [image.url],
    },
  }
}

const HomePage: FC<PageProps<'/[lang]'>> = async ({ params }) => {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()
  const dictionary = await getDictionary(lang)

  return <Home lang={lang} dictionary={dictionary} />
}

export default HomePage
