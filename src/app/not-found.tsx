import { LOCALES, type Locale } from '@/config/site'
import { NOT_FOUND_COPY } from '@/constants/not-found'
import { inter, jetbrainsMono, peyda } from '@/fonts'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import './globals.css'

const LocaleCard: FC<{ locale: Locale }> = ({ locale }) => {
  const copy = NOT_FOUND_COPY[locale]

  return (
    <article
      lang={locale}
      dir={locale === 'fa' ? 'rtl' : undefined}
      className="flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur-md transition-colors focus-within:border-white/20 md:p-7"
    >
      <div className="flex items-center justify-between gap-4">
        <span dir="ltr" className="text-steel font-mono text-[10px] tracking-[0.16em] uppercase">
          {locale}
        </span>
        <span className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
          {copy.eyebrow}
        </span>
      </div>

      <h2 className="mt-5 text-xl leading-snug font-medium tracking-[-0.01em] text-balance md:text-[1.35rem]">
        {copy.heading}
      </h2>

      <p className="text-concrete-400 mt-3 text-sm leading-relaxed text-pretty">{copy.description}</p>

      <div className="mt-auto pt-6">
        <Link
          href={`/${locale}`}
          className="text-concrete-400 hover:text-paper inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors hover:border-white/25 hover:bg-white/[0.04]"
        >
          {copy.home}
          <ArrowUpRight aria-hidden className="h-3 w-3 rtl:-scale-x-100" />
        </Link>
      </div>
    </article>
  )
}

const NotFound = () => {
  return (
    <div
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${jetbrainsMono.variable} ${peyda.variable} bg-obsidian text-paper font-technical relative flex min-h-svh flex-col overflow-hidden`}
    >
      <title>404 — Page not found · Ali Kouhfar</title>
      <div aria-hidden className="gallery-glow absolute inset-0" />

      <header className="relative z-10 border-b border-white/8">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-6 md:px-10 lg:px-16">
          <Link href="/" className="group flex items-center gap-3">
            <span
              aria-hidden
              className="text-paper grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-[10px] tracking-[0.1em] transition-colors group-hover:border-white/20"
            >
              AK
            </span>
            <span className="flex flex-col gap-1 leading-none">
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase">Ali Kouhfar</span>
              <span className="text-concrete-500 font-mono text-[10px] tracking-[0.2em] uppercase">
                Portfolio / 2026
              </span>
            </span>
          </Link>

          <span dir="ltr" className="text-concrete-500 font-mono text-[10px] tracking-[0.2em] uppercase">
            E–404
          </span>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <p className="text-amber font-mono text-[10px] tracking-[0.2em] uppercase">404 / Off grid</p>

          <h1 className="mt-6 text-[clamp(6rem,18vw,15rem)] leading-[0.82] font-medium tracking-[-0.06em]">
            404
            <span className="sr-only" lang="en">
              {' — '}Page not found
            </span>
          </h1>

          <div className="text-concrete-500 mt-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span aria-hidden className="bg-amber h-px w-10" />
            <span dir="ltr">EN — DE — FA</span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {LOCALES.map((locale) => (
              <LocaleCard key={locale} locale={locale} />
            ))}
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/8">
        <div className="text-concrete-500 mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-5 font-mono text-[10px] tracking-[0.16em] uppercase md:px-10 lg:px-16">
          <span>404 — ∅</span>
          <span dir="ltr">Portfolio / 2026</span>
        </div>
      </footer>
    </div>
  )
}

export default NotFound
