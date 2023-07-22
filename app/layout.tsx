import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anushka\'s Website',
  description: 'Anushka\'s website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className={inter.className}>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider></body>
    </html>
  )
}
