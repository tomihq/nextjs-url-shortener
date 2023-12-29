import type { Metadata } from 'next'
import './globals.css'
import { fontSans } from '@/assets/fonts'
import Navbar from '@/components/navigation/Navbar'
import ToasterProvider from '@/components/providers/ToasterProvider'
import { QUICKLINKR_OG } from '@/assets/images'


export const metadata: Metadata = {
  title: `QuickLinkr`,
  description: 'Shorten and share links instantly with QuickLinkr. The perfect tool to make your URLs more manageable and shareable.',
  robots: {
    follow: true,
    index: true,
    googleBot: {
      follow: true,
      index: true,
    }
  },
  openGraph: {
    title: 'QuickLinkr',
    description: 'Shorten and share links instantly with QuickLinkr. The perfect tool to make your URLs more manageable and shareable.',
    images: [
      {
        url: QUICKLINKR_OG,
        alt: 'QuickLinkR logo'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.className}   `}>
        <ToasterProvider/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
