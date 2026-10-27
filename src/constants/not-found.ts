import type { Locale } from '@/config/site'

type NotFoundCopy = {
  eyebrow: string
  heading: string
  description: string
  home: string
}

export const NOT_FOUND_COPY: Record<Locale, NotFoundCopy> = {
  en: {
    eyebrow: '404 / Off grid',
    heading: 'This page was never built.',
    description:
      'The drawing you are looking for is not part of this set. Return to the index and continue from there.',
    home: 'Back to the portfolio',
  },
  de: {
    eyebrow: '404 / Außerhalb des Rasters',
    heading: 'Diese Seite wurde nie gebaut.',
    description:
      'Der gesuchte Plan gehört nicht zu diesem Satz. Kehren Sie zum Index zurück und fahren Sie dort fort.',
    home: 'Zurück zum Portfolio',
  },
  fa: {
    eyebrow: '۴۰۴ / خارج از شبکه',
    heading: 'این صفحه هرگز ساخته نشد.',
    description:
      'نقشه‌ای که به دنبال آن هستید در این مجموعه نیست. به ایندکس بازگردید و از همان‌جا ادامه دهید.',
    home: 'بازگشت به پورتفولیو',
  },
}
