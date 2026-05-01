import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Joshua Allan | Graduate RegTech Engineer | Software Developer Portfolio'

const description =
  'Portfolio of Joshua Allan, a First-Class Computer Science graduate and Graduate RegTech Engineer at Suade Labs, focused on fintech, regtech, AI/ML, backend systems, and full-stack web applications.'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  keywords: [
    'Joshua Allan',
    'Graduate Software Engineer',
    'Graduate RegTech Engineer',
    'Junior Software Developer',
    'FinTech Developer',
    'RegTech',
    'AI/ML',
    'Python Developer',
    'React Developer',
    'Next.js Developer',
    'University of East Anglia Computer Science',
    'Stock Trading Dissertation',
    'Suade Labs',
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Joshua Allan Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@JoshuaAllan21',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
