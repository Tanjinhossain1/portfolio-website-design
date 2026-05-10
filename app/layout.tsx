import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mahabub Hossain Arafat - Social Media Manager | Portfolio',
  description: 'Creative and result-driven Social Media Manager specializing in brand presence, content creation, and community engagement. Based in Narayanganj, Bangladesh.',
  keywords: ['Social Media Manager', 'Content Creator', 'Digital Marketing', 'Brand Management', 'Portfolio'],
  authors: [{ name: 'Mahabub Hossain Arafat' }],
  openGraph: {
    title: 'Mahabub Hossain Arafat - Social Media Manager',
    description: 'Creative and result-driven Social Media Manager specializing in brand presence, content creation, and community engagement.',
    type: 'website',
    locale: 'en_US',
    url: 'https://mahabub-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahabub Hossain Arafat - Social Media Manager',
    description: 'Creative and result-driven Social Media Manager specializing in brand presence, content creation, and community engagement.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f1a2e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="canonical" href="https://mahabub-portfolio.vercel.app" />
      </head>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
