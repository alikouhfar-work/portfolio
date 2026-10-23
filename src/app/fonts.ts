import localFont from 'next/font/local'

export const iranYekan = localFont({
  src: [
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-UltraLight.woff2', weight: '200', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Light.woff2', weight: '300', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-DemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../assets/fonts/iran-yekan/IRANYekanXFaNum-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-iran-yekan',
  display: 'swap',
})

export const inter = localFont({
  src: [
    { path: '../assets/fonts/inter/Inter-Variable.woff2', weight: '100 900', style: 'normal' },
    { path: '../assets/fonts/inter/Inter-VariableItalic.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const jetbrainsMono = localFont({
  src: [
    { path: '../assets/fonts/jetbrains-mono/JetBrainsMono-Variable.ttf', weight: '100 800', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono/JetBrainsMono-Italic.ttf', weight: '100 800', style: 'italic' },
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})
