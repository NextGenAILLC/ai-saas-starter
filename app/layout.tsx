import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Developers Digest Text-to-Speech App - AI-Powered Voice Synthesis',
  description: 'Transform text into natural-sounding speech with our advanced AI-powered text-to-speech API. Perfect for developers, content creators, and businesses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}