import { Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'
import { metadata } from './metadata'
import ClientChatBot from '@/components/ClientChatBot'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mudipa Kishan',
              jobTitle: 'Software Engineer',
              url: 'https://your-domain.com',
              sameAs: [
                'https://github.com/mk1shan',
                'https://www.linkedin.com/in/kishanimudipa',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Axceera'
              },
              description: 'Full-stack software engineer specializing in web development and cloud technologies',
              knowsAbout: ['Web Development', 'React', 'Node.js', 'AWS', 'TypeScript', 'Cloud Computing']
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LoadingScreen />
        <Navbar />
        <div className="relative z-0">
          {children}
        </div>
        <ClientChatBot />
      </body>
    </html>
  )
}
