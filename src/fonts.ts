import localFont from 'next/font/local'

export const inter = localFont({
  src: [
    {
      path: './assets/fonts/inter/Inter-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './assets/fonts/inter/Inter-VariableItalic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const jetbrainsMono = localFont({
  src: [
    {
      path: './assets/fonts/jetbrains-mono/JetBrainsMono-Variable.ttf',
      weight: '100 800',
      style: 'normal',
    },
    {
      path: './assets/fonts/jetbrains-mono/JetBrainsMono-Italic.ttf',
      weight: '100 800',
      style: 'italic',
    },
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const peyda = localFont({
  src: [
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './assets/fonts/peyda/PeydaWebFaNum-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-peyda',
  display: 'swap',
})
