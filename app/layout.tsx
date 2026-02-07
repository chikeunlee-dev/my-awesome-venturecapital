import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Apex Ventures | Venture Capital',
  description: 'Apex Ventures is a venture capital firm investing in visionary founders building the future of technology.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${_inter.variable} ${_playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
