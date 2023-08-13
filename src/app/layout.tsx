import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Hearder'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GarmentGalaxy',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Header></Header>
        <div className='flex flex-col  h-screen'>
        <main className='px-4 flex flex-col flex-grow'>
           {children}
        </main>
       <Footer />
       </div>
        </body>
    </html>
  )
}
