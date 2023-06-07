/* eslint-disable camelcase */

import '@/globals.css'

import { ReactNode } from 'react'
import { Roboto_Flex } from 'next/font/google'

const robotoFlex = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio by Diogo',
  description: 'This is my personal portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={robotoFlex.className}>{children}</body>
    </html>
  )
}
