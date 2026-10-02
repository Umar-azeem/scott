import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Figtree, Fragment_Mono } from 'next/font/google'
import './globals.css'

const headline = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-headline',
})

const stacksans = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-stacksans',
})

const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fragment-mono',
})

export const metadata: Metadata = {
  title: 'Nerdstack — Engineering clarity for complex code',
  description:
    'The AI that turns complex into easy. Nerdstack translates dense engineering systems into something legible and human.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f6f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${headline.variable} ${stacksans.variable} ${fragmentMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
