import { mkdir, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const MARK = `
  <path d="M13 51 32 10l19 41" fill="none" stroke="#EDEDED" stroke-width="7" stroke-linecap="square" stroke-linejoin="miter"/>
  <path d="M20 36h24" stroke="#D9932F" stroke-width="5.5"/>
`

const roundedIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <title>Ali Kouhfar</title>
  <rect width="64" height="64" rx="14" fill="#16181D"/>
  <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="13.25" fill="none" stroke="#2B2D33" stroke-width="1.5"/>
  ${MARK}
</svg>`

const squareIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <title>Ali Kouhfar</title>
  <rect width="64" height="64" fill="#16181D"/>
  ${MARK}
</svg>`

const render = (svg: string, size: number) =>
  sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toBuffer()

const createIco = (images: { size: number; data: Buffer }[]) => {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)

  const entries = Buffer.alloc(images.length * 16)
  let offset = header.length + entries.length

  images.forEach(({ size, data }, index) => {
    const position = index * 16
    entries.writeUInt8(size >= 256 ? 0 : size, position)
    entries.writeUInt8(size >= 256 ? 0 : size, position + 1)
    entries.writeUInt8(0, position + 2)
    entries.writeUInt8(0, position + 3)
    entries.writeUInt16LE(1, position + 4)
    entries.writeUInt16LE(32, position + 6)
    entries.writeUInt32LE(data.length, position + 8)
    entries.writeUInt32LE(offset, position + 12)
    offset += data.length
  })

  return Buffer.concat([header, entries, ...images.map(({ data }) => data)])
}

const run = async () => {
  const faviconSizes = [16, 24, 32, 48, 64, 128, 256]
  const faviconImages = await Promise.all(
    faviconSizes.map(async (size) => ({ size, data: await render(roundedIcon, size) }))
  )

  await mkdir('public/icons', { recursive: true })

  await writeFile('src/app/icon.svg', roundedIcon)
  await writeFile('src/app/favicon.ico', createIco(faviconImages))
  await writeFile('src/app/apple-icon.png', await render(squareIcon, 180))
  await writeFile('public/icons/icon-192.png', await render(squareIcon, 192))
  await writeFile('public/icons/icon-512.png', await render(squareIcon, 512))
  await writeFile('public/icons/icon-maskable-512.png', await render(squareIcon, 512))

  console.log(`generated favicon.ico (${faviconSizes.join(', ')})`)
  console.log('generated icon.svg, apple-icon.png and public/icons/*')
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
