import type { Metadata, Viewport } from 'next'
import { FC } from 'react'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s — Ali Kouhfar',
    default: 'Ali Kouhfar — The Architecture of Interaction',
  },
  description:
    'Ali Kouhfar is an architectural engineer turned UX designer and frontend engineer, building digital interfaces through spatial structure, systems thinking, and structural precision.',
  keywords: [
    'Ali Kouhfar',
    'portfolio',
    'frontend engineer',
    'UX designer',
    'architectural engineering',
    'spatial systems',
    'React',
    'TypeScript',
  ],
  authors: [{ name: 'Ali Kouhfar' }],
  openGraph: {
    title: 'Ali Kouhfar — The Architecture of Interaction',
    description:
      'A digital blueprint bridging architectural engineering, UX design, and modern frontend engineering.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#16181D',
}

const LocaleLayout: FC<LayoutProps<'/[lang]'>> = async ({ children, params }) => {
  const { lang } = await params

  const htmlClass = 'var(--font-inter) var(--font-jetbrains-mono)' + (lang === 'fa' ? ' var(--font-peyda)' : '')
  const bodyClass = `${lang === 'fa' ? 'font-peyda' : 'font-technical'} bg-obsidian text-paper antialiased`

  return (
    <html
      lang={lang}
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
      className={htmlClass}
    >
      <body className={bodyClass}>{children}</body>
    </html>
  )
}

export default LocaleLayout