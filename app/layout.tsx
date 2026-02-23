import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Vegan Neighbor - Rico, Casero, Vegan',
  description:
    'Descubre nuestros productos veganos artesanales. Rico, casero y 100% vegan. Productos de calidad para un mundo más humano.',
  keywords: ['vegan', 'comida vegana', 'alimentos', 'vegetariano', 'sostenible'],
  openGraph: {
    title: 'Vegan Neighbor',
    description: 'Rico, casero, vegan',
    url: 'https://veganneighbor.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-vn-white text-vn-black antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
