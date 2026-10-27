'use client'

import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/config/site'
import { EASE } from '@/lib/motion'
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react'
import { motion } from 'motion/react'
import { FC, useState } from 'react'
import { ContactProps } from '../props'

export const ContactFooter: FC<ContactProps> = ({ dictionary, nav }) => {
  const [copied, setCopied] = useState(false)

  const email = CONTACT_EMAIL

  const year = new Date().getFullYear()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const connectLinks = [
    { label: 'GitHub', href: GITHUB_URL },
    { label: 'LinkedIn', href: LINKEDIN_URL },
    { label: 'Email', href: `mailto:${email}` },
  ]

  const indexLinks = [
    { label: nav.capabilities, href: '#capabilities' },
    { label: nav.work, href: '#work' },
    { label: nav.lab, href: '#lab' },
    { label: nav.approach, href: '#approach' },
  ]

  return (
    <footer id="contact" className="bg-obsidian relative overflow-hidden">
      <div aria-hidden className="gallery-glow absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="text-paper pointer-events-none absolute -right-10 -bottom-20 text-[22vw] leading-none font-medium tracking-[-0.06em] opacity-[0.015] select-none"
      >
        AK
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-7"
          >
            <p className="text-amber font-mono text-[10px] tracking-[0.2em] uppercase">
              {dictionary.eyebrow}
            </p>

            <h2 className="mt-6 max-w-xl text-[clamp(2.25rem,4.4vw,4rem)] leading-[1.04] font-medium tracking-[-0.035em] text-balance">
              {dictionary.heading}
            </h2>

            <div className="mt-10 max-w-xl rounded-2xl border border-white/8 bg-white/[0.02] p-5 font-mono text-[11px] backdrop-blur-sm">
              <div dir="ltr" className="text-concrete-500 flex flex-wrap items-center gap-x-1.5">
                <span className="text-amber">$</span>
                <span className="text-paper">{dictionary.whoami}</span>
              </div>
              <p className="text-concrete-400 mt-2 text-[13px] leading-relaxed">{dictionary.whoamiValue}</p>

              <div
                dir="ltr"
                className="text-concrete-500 mt-5 flex flex-wrap items-center gap-x-1.5 border-t border-white/6 pt-5"
              >
                <span className="text-amber">$</span>
                <span className="text-paper">{dictionary.promptContact}</span>
                <span className="bg-amber ml-1 inline-block h-3 w-1.5 animate-pulse rounded-full" />
              </div>
            </div>

            <a
              href={`mailto:${email}`}
              dir="ltr"
              className="group text-paper hover:text-amber mt-8 block w-fit max-w-full text-[clamp(1.4rem,3.6vw,2.75rem)] font-medium tracking-[-0.03em] break-all transition-colors"
            >
              {email}
              <ArrowUpRight className="ml-2 inline h-[0.55em] w-[0.55em] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                aria-live="polite"
                className="text-concrete-400 hover:text-paper inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors hover:border-white/25 hover:bg-white/[0.04]"
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? dictionary.copied : dictionary.copyEmail}
              </button>
              <span className="text-concrete-500 font-mono text-[10px] tracking-[0.14em] uppercase">
                {dictionary.emailHint}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9"
          >
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 backdrop-blur-sm">
              <p
                dir="ltr"
                className="text-concrete-500 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] uppercase"
              >
                <span className="text-amber">$</span>
                {dictionary.promptConnect}
              </p>

              <ul className="mt-3 flex flex-col">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group text-concrete-400 hover:text-paper flex items-center justify-between rounded-xl px-2 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:bg-white/[0.04]"
                    >
                      {link.label}
                      <ArrowUpRight className="text-concrete-500 group-hover:text-amber h-3.5 w-3.5 transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 backdrop-blur-sm">
              <p className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
                {dictionary.navLabel}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {indexLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-concrete-400 hover:text-paper inline-block rounded-full border border-white/8 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <dl className="mt-5 space-y-2.5 border-t border-white/6 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-concrete-500 font-mono text-[10px] tracking-[0.14em] uppercase">
                    {dictionary.statusLabel}
                  </dt>
                  <dd className="text-paper flex items-center gap-1.5 font-mono text-[10px] tracking-[0.06em] uppercase">
                    <span className="bg-amber h-1.5 w-1.5 animate-pulse rounded-full" />
                    {dictionary.status}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-concrete-500 font-mono text-[10px] tracking-[0.14em] uppercase">
                    {dictionary.locationLabel}
                  </dt>
                  <dd className="text-paper font-mono text-[10px] tracking-[0.06em] uppercase">
                    {dictionary.location}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-concrete-500 shrink-0 font-mono text-[10px] tracking-[0.14em] uppercase">
                    {dictionary.languagesLabel}
                  </dt>
                  <dd className="text-paper text-end font-mono text-[10px] tracking-[0.06em] uppercase">
                    {dictionary.languages}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>

        <div className="text-concrete-500 mt-20 flex flex-col gap-3 border-t border-white/8 pt-5 font-mono text-[10px] tracking-[0.14em] uppercase md:flex-row md:items-center md:justify-between">
          <span className="flex flex-wrap items-center gap-1.5">
            <span dir="ltr">© {year} Ali Kouhfar</span>
            <span>— {dictionary.rights}</span>
          </span>
          <span className="hidden lg:block">{dictionary.colophon}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-concrete-400 hover:text-paper flex w-fit items-center gap-1.5 rounded-full transition-colors"
          >
            {dictionary.backToTop}
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
