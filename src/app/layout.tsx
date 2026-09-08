import type { Metadata } from 'next'
import { QuoteProvider } from '@/context/QuoteContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inversiones ICR | Energía solar y respaldo energético',
  description:
    'Ingeniería energética, paneles solares, baterías e inversores para proyectos residenciales e industriales en el sur del Perú.',
  icons: { icon: '/favicon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <QuoteProvider>
          <div className="min-h-screen flex flex-col bg-bg">
            <div className="flex justify-center px-0 sm:px-4 pt-0 sm:pt-5">
              <div className="w-full max-w-[1240px] bg-white shadow-[0_18px_60px_rgba(0,0,76,.18)] overflow-hidden flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </QuoteProvider>
      </body>
    </html>
  )
}
