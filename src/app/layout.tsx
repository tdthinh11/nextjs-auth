import { AuthProvider } from '@/context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Face book clone',
  description: 'Home Page d1d5ae10-3501-11ee-be56-0242ac120002',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
