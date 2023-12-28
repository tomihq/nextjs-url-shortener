import type { Metadata } from 'next'
import './globals.css'
import { fontSans } from '@/assets/fonts'
import Navbar from '@/components/navigation/Navbar'


export const metadata: Metadata = {
  title: `QuickLink`,
  description: 'Shorten and share links instantly with QuickLink. The perfect tool to make your URLs more manageable and shareable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.className}  flex flex-col w-full`}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
