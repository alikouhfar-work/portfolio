import { mkdir } from 'node:fs/promises'
import puppeteer from 'puppeteer-core'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'
const CHROME_PATH = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const locales = ['en', 'de', 'fa'] as const
const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
] as const

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const run = async () => {
  await mkdir('screenshots', { recursive: true })

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    for (const viewport of viewports) {
      const page = await browser.newPage()
      await page.setViewport({
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: 1,
      })

      for (const locale of locales) {
        await page.goto(`${BASE_URL}/${locale}`, {
          waitUntil: 'domcontentloaded',
        })
        await wait(1500)

        await page.evaluate(async () => {
          document.documentElement.style.scrollBehavior = 'auto'
          const step = window.innerHeight * 0.75
          const pause = () => new Promise((resolve) => setTimeout(resolve, 180))

          for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo({ top: y, behavior: 'instant' })
            await pause()
          }

          window.scrollTo({ top: 0, behavior: 'instant' })
          await pause()
        })
        await wait(800)

        await page.screenshot({
          path: `screenshots/${locale}-${viewport.name}.png`,
          fullPage: true,
        })
        console.log(`captured ${locale} / ${viewport.name}`)
      }

      await page.close()
    }
  } finally {
    await browser.close()
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
