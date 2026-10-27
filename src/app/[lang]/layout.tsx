import { LOCALES, SITE_URL } from '@/config/site'
import type { Metadata, Viewport } from 'next'
import { FC } from 'react'
import { inter, jetbrainsMono, peyda } from '../../fonts'
import '../globals.css'

export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }))

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Frontend Developer — Ali Kouhfar',
  description:
    'Ali Kouhfar is a frontend developer building production interfaces with React, Next.js, and TypeScript. An architectural engineering background informs his approach to structure, accessibility, and spatial systems.',
  keywords: [
    'Ali Kouhfar',
    'portfolio',
    'frontend developer',
    'frontend engineer',
    'React developer',
    'Next.js',
    'TypeScript',
    'architectural engineering',
    'spatial systems',
  ],
  authors: [{ name: 'Ali Kouhfar' }],
  openGraph: {
    title: 'Frontend Developer — Ali Kouhfar',
    description:
      'Frontend developer building production interfaces with React, Next.js, and TypeScript — shaped by an architectural engineering background.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#16181D',
}

const LocaleLayout: FC<LayoutProps<'/[lang]'>> = async ({ children, params }) => {
  const { lang } = await params

  const htmlClass = `${inter.variable} ${jetbrainsMono.variable} ${lang === 'fa' ? peyda.variable : ''}`

  return (
    <html lang={lang} dir={lang === 'fa' ? 'rtl' : 'ltr'} className={htmlClass}>
      <body
        className={`${lang === 'fa' ? 'font-peyda' : 'font-technical'} bg-obsidian text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

export default LocaleLayout
