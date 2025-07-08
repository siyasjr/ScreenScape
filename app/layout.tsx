import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { Providers } from './providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MovieScape',
  description: 'Discover trending movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dim">
      <body className="bg-base-100 text-base-content">
        <Providers>
          {/* ✅ Constrain content width and center */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <NavBar />
            <main className="py-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
