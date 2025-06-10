import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'
import { AuthProvider } from './contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Training for Students | eduAIlabs',
  description: 'Learn AI concepts, create and train models, and explore the world of artificial intelligence with eduAIlabs.',
  metadataBase: new URL('https://www.eduailabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Training for Students | eduAIlabs',
    description: 'Learn AI concepts, create and train models, and explore the world of artificial intelligence with eduAIlabs.',
    url: 'https://www.eduailabs.com',
    siteName: 'eduAIlabs',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <div className="container mx-auto px-4 py-4">
                <Breadcrumbs />
              </div>
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

