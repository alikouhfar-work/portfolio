'use client'

import { CONTACT_EMAIL } from '@/config/site'
import { EASE } from '@/lib/motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion, useTransform } from 'motion/react'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { HeroProps } from '../props'

export const Hero: FC<HeroProps> = ({ dictionary, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 0.06], [0, 48])
  const opacity = useTransform(scrollYProgress, [0, 0.06], [1, 0.45])

  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Tehran',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    const tick = () => setTime(formatter.format(new Date()))
    tick()
    const interval = setInterval(tick, 1000)

    return () => clearInterval(interval)
  }, [])

  const email = CONTACT_EMAIL

  return (
    <section id="hero" className="relative overflow-hidden">
      <div aria-hidden className="gallery-glow absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-[#3b82f6]/[0.05] blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1440px] flex-col px-6 pt-28 pb-10 md:px-10 md:pt-32 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <span className="text-concrete-400 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase">
            <span className="bg-amber h-1.5 w-1.5 rounded-full" />
            {dictionary.eyebrow}
          </span>
          <span className="text-concrete-500 hidden font-mono text-[10px] tracking-[0.2em] uppercase sm:block">
            {dictionary.sheet}
          </span>
        </motion.div>

        <motion.div style={{ y, opacity }} className="flex flex-1 flex-col justify-center py-14 md:py-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
                className="flex items-center gap-5"
              >
                <figure className="group relative shrink-0 flex flex-col items-start">
                  <div aria-hidden className="bg-steel/12 absolute -inset-3 rounded-[1.8rem] blur-2xl" />
                  <div className="relative rounded-2xl border border-white/12 bg-white/[0.04] p-1.5 backdrop-blur-md">
                    <div className="relative h-24 w-24 overflow-hidden rounded-[0.85rem] md:h-28 md:w-28">
                      <Image
                        src="/images/portrait.png"
                        alt={dictionary.name}
                        fill
                        priority
                        sizes="112px"
                        className="object-cover object-top grayscale-[35%] transition duration-700 group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                  <figcaption className="text-concrete-500 mt-2.5 font-mono text-[10px] tracking-[0.12em] uppercase">
                    {dictionary.fig}
                  </figcaption>
                </figure>

                <div>
                  <p className="text-concrete-500 font-mono text-[10px] tracking-[0.18em] uppercase">
                    {dictionary.roleLabel}
                  </p>
                  <p className="mt-1.5 text-xl font-medium tracking-tight md:text-2xl">{dictionary.name}</p>
                  <p className="text-concrete-400 mt-1.5 max-w-[22rem] text-[13px] leading-relaxed">
                    {dictionary.role}
                  </p>
                </div>
              </motion.div>

              <h1 className="mt-10 flex flex-col text-[clamp(2.75rem,6.4vw,5.75rem)] leading-[1.02] font-medium tracking-[-0.035em] md:mt-12">
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.22, duration: 0.9, ease: EASE }}
                    className="block"
                  >
                    {dictionary.title1}
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.32, duration: 0.9, ease: EASE }}
                    className="text-paper/45 block"
                  >
                    {dictionary.title2}
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
                className="text-concrete-400 mt-7 max-w-xl text-base leading-relaxed md:text-lg"
              >
                {dictionary.subtitle}
                <span className="text-paper">{dictionary.subtitleHighlight}</span>
                {dictionary.subtitleEnd}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#work"
                  className="group bg-paper text-obsidian hover:bg-canvas inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors"
                >
                  {dictionary.cta}
                  <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="group text-paper inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.02] px-6 py-3.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors hover:border-white/25 hover:bg-white/[0.05]"
                >
                  {dictionary.contactCta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                </a>
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: EASE }}
              className="lg:col-span-4 lg:self-end"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-concrete-400 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
                    <span className="bg-amber h-1.5 w-1.5 animate-pulse rounded-full" />
                    {dictionary.statusShort}
                  </span>
                  <span dir="ltr" className="text-concrete-500 font-mono text-[10px] tabular-nums">
                    {dictionary.coordinates}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-concrete-500 font-mono text-[10px] tracking-[0.18em] uppercase">
                    {dictionary.localTime}
                  </p>
                  <p dir="ltr" className="text-paper mt-2 font-mono text-3xl tracking-tight tabular-nums">
                    {time}
                  </p>
                  <p className="text-concrete-400 mt-2 text-sm">{dictionary.location}</p>
                </div>

                <dl className="mt-6 space-y-3 border-t border-white/8 pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
                      {dictionary.focusLabel}
                    </dt>
                    <dd className="text-paper text-end text-[13px]">{dictionary.focusValue}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-concrete-500 font-mono text-[10px] tracking-[0.16em] uppercase">
                      {dictionary.experienceLabel}
                    </dt>
                    <dd className="text-paper text-end text-[13px]">{dictionary.experienceValue}</dd>
                  </div>
                </dl>
              </div>
            </motion.aside>
          </div>
        </motion.div>

        <div className="text-concrete-500 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.18em] uppercase">
          <a
            href="#capabilities"
            className="text-concrete-400 hover:text-paper group flex items-center gap-2 transition-colors"
          >
            <ArrowDown className="text-amber h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
            {dictionary.scrollHint}
          </a>
          <span dir="ltr" className="hidden sm:block">
            {dictionary.blueprint}
          </span>
        </div>
      </div>
    </section>
  )
}
