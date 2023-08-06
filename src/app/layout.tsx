'use client'

import './globals.css'
import type { Metadata } from 'next'
import { ReactNode, useEffect } from 'react'
import { ThemeProvider } from '@/material-tailwind'
import { useRouter, usePathname } from 'next/navigation'
import Cookies from 'js-cookie'

export const metadata: Metadata = {
  title: 'Pontua',
  description: 'Pontua - A melhor plataforma de pontuação de agentes da Marvel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const authenticatedUser: string | undefined = Cookies.get('authenticatedUser')

  useEffect(() => {
    if (!authenticatedUser && pathname !== '/login') {
      router.push('/login')
    }
  }, [authenticatedUser, router])

  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
