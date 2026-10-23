'use client'

import { cn } from '@/lib/utils'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, useScroll } from 'motion/react'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { NavProps } from '../types'

const LOCALES = ['en', 'de', 'fa'] as const

export const SiteNav: FC<NavProps> = ({ lang, dictionary }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()

  const links = [
    { id: 'skills', code: '01', label: dictionary.skills },
    { id: 'index', code: '02', label: dictionary.index },
    { id: 'lab', code: '03', label: dictionary.lab },
    { id: 'philosophy', code: '04', label: dictionary.philosophy },
    { id: 'contact', code: '05', label: dictionary.contact },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    ;['skills', 'index', 'lab', 'philosophy', 'contact'].forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = open ? 'hidden' : ''
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const email = process.env.NEXT_PUBLIC_EMAIL ?? 'hello@alikouhfar.com'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className="bg-obsidian/75 border-b border-white/8 absolute inset-0 -z-10 backdrop-blur-xl"
      />

      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="bg-amber/70 absolute inset-x-0 top-0 h-px origin-left rtl:origin-right"
      />

      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-6 md:px-10 lg:px-16">
        <Link href="#hero" onClick={() => setOpen(false)} className="group flex items-center gap-3">
          <span className="text-paper grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-[10px] tracking-[0.1em] transition-colors group-hover:border-white/20">
            AK
          </span>
          <span className="flex flex-col gap-1 leading-none">
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase">
              {dictionary.brand}
            </span>
            <span
              dir="ltr"
              className="text-concrete-500 font-mono text-[10px] tracking-[0.2em] uppercase"
            >
              Portfolio / 2026
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                'group flex items-baseline gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors',
                active === link.id
                  ? 'text-paper bg-white/[0.06]'
                  : 'text-concrete-400 hover:text-paper hover:bg-white/[0.04]'
              )}
            >
              <span
                className={cn(
                  'text-concrete-500 transition-colors group-hover:text-steel',
                  active === link.id && 'text-steel'
                )}
              >
                {link.code}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-concrete-400 hidden items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase xl:flex">
            <span className="bg-amber h-1.5 w-1.5 animate-pulse rounded-full" />
            {dictionary.availability}
          </span>

          <div
            dir="ltr"
            className="flex items-center gap-0.5 rounded-full border border-white/10 p-0.5"
          >
            {LOCALES.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}`}
                aria-current={locale === lang ? 'true' : undefined}
                className={cn(
                  'rounded-full px-2 py-1 font-mono text-[10px] tracking-[0.08em] uppercase transition-colors',
                  locale === lang
                    ? 'bg-paper text-obsidian'
                    : 'text-concrete-400 hover:text-paper'
                )}
              >
                {locale}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? dictionary.close : dictionary.menu}
            className="text-paper grid h-8 w-8 place-items-center rounded-xl border border-white/10 transition-colors hover:border-white/20 hover:bg-white/[0.05] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="bg-obsidian/95 border-t border-white/8 fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto backdrop-blur-2xl lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-3 px-6 py-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
              >
                <span className="text-steel font-mono text-[10px]">{link.code}</span>
                <span className="text-xl font-medium tracking-tight">{link.label}</span>
                <ArrowUpRight className="text-concrete-500 group-hover:text-paper ms-auto h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <a
              href={`mailto:${email}`}
              className="text-concrete-400 hover:text-paper font-mono text-xs transition-colors"
            >
              {email}
            </a>
            <p className="text-concrete-500 mt-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
              <span className="bg-amber h-1.5 w-1.5 rounded-full" />
              {dictionary.availability}
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
