import { mkdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import puppeteer from 'puppeteer-core'

const CHROME_PATH = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const LOCALES = ['en', 'de', 'fa'] as const
const TITLE_SIZE = { en: 86, de: 72, fa: 76 } as const

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const dataUrl = async (path: string, format: string) => {
  const file = await readFile(path)
  return `data:font/${format};base64,${file.toString('base64')}`
}

const run = async () => {
  const [inter, peydaRegular, peydaMedium] = await Promise.all([
    dataUrl('src/assets/fonts/inter/Inter-Variable.woff2', 'woff2'),
    dataUrl('src/assets/fonts/peyda/PeydaWebFaNum-Regular.woff2', 'woff2'),
    dataUrl('src/assets/fonts/peyda/PeydaWebFaNum-Medium.woff2', 'woff2'),
  ])

  const dictionaries = Object.fromEntries(
    await Promise.all(
      LOCALES.map(async (locale) => {
        const file = await readFile(join('src/dictionaries', `${locale}.json`), 'utf8')
        return [locale, JSON.parse(file)]
      })
    )
  )

  await mkdir('public/og', { recursive: true })

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })

    for (const locale of LOCALES) {
      const dictionary = dictionaries[locale]
      const isRtl = locale === 'fa'
      const fontFamily = isRtl ? 'Peyda' : 'Inter'
      const titleSize = TITLE_SIZE[locale]

      const html = `<!doctype html>
<html lang="${locale}" dir="${isRtl ? 'rtl' : 'ltr'}">
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'Inter';
    src: url(${inter}) format('woff2');
    font-weight: 100 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Peyda';
    src: url(${peydaRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Peyda';
    src: url(${peydaMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 72px 80px;
    background: #16181D;
    color: #EDEDED;
    font-family: ${fontFamily};
    direction: ${isRtl ? 'rtl' : 'ltr'};
  }
  .header {
    display: flex;
    flex-direction: ${isRtl ? 'row-reverse' : 'row'};
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(237, 237, 237, 0.14);
    padding-bottom: 28px;
  }
  .brand { display: flex; flex-direction: ${isRtl ? 'row-reverse' : 'row'}; align-items: center; gap: 18px; }
  .mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border: 1px solid rgba(237, 237, 237, 0.18);
    border-radius: 16px;
    font-family: Inter;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .brand-copy { display: flex; flex-direction: column; align-items: ${isRtl ? 'flex-end' : 'flex-start'}; }
  .brand-name { font-size: 18px; letter-spacing: ${isRtl ? 0 : '4px'}; }
  .brand-title { margin-top: 6px; color: #8B877E; font-size: 13px; letter-spacing: ${isRtl ? 0 : '3px'}; }
  .edition { color: #D9932F; font-size: 14px; letter-spacing: ${isRtl ? 0 : '4px'}; }
  .hero { display: flex; flex-direction: column; align-items: ${isRtl ? 'flex-end' : 'flex-start'}; width: 100%; }
  .eyebrow { margin-bottom: 26px; color: #93B7F2; font-size: 16px; letter-spacing: ${isRtl ? 0 : '6px'}; }
  .title {
    max-width: 980px;
    margin: 0;
    font-size: ${titleSize}px;
    font-weight: 500;
    line-height: 1.08;
    letter-spacing: ${isRtl ? 0 : '-3px'};
    text-align: ${isRtl ? 'right' : 'left'};
  }
  .footer {
    display: flex;
    flex-direction: ${isRtl ? 'row-reverse' : 'row'};
    justify-content: space-between;
    gap: 32px;
    border-top: 1px solid rgba(237, 237, 237, 0.14);
    padding-top: 24px;
    color: #8B877E;
    font-size: 14px;
    letter-spacing: ${isRtl ? 0 : '3px'};
  }
  .location { white-space: nowrap; }
</style>
</head>
<body>
  <header class="header">
    <div class="brand">
      <div class="mark">AK</div>
      <div class="brand-copy">
        <span class="brand-name">${escapeHtml(dictionary.nav.brand)}</span>
        <span class="brand-title">${escapeHtml(dictionary.meta.tagline)}</span>
      </div>
    </div>
    <div class="edition">${escapeHtml(dictionary.nav.portfolio)} / ${locale.toUpperCase()}</div>
  </header>

  <main class="hero">
    <div class="eyebrow">${escapeHtml(dictionary.hero.focusValue)}</div>
    <h1 class="title">${escapeHtml(dictionary.meta.title)}</h1>
  </main>

  <footer class="footer">
    <span>${escapeHtml(dictionary.hero.role)}</span>
    <span class="location">${escapeHtml(dictionary.hero.location)}</span>
  </footer>
</body>
</html>`

      await page.setContent(html, { waitUntil: 'load' })
      await page.evaluate(() => document.fonts.ready)
      await page.screenshot({ path: `public/og/${locale}.png`, type: 'png' })
      console.log(`rendered public/og/${locale}.png`)
    }
  } finally {
    await browser.close()
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
