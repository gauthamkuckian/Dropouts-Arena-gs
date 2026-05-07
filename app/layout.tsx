import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Dropouts Turf - Premium FIFA Certified Turf in Vasai',
  description: 'Book your slot at Dropouts Turf - Premium FIFA certified turf designed for football and cricket. 7000 Sq Ft play area, 30 feet height. Special offer: ₹700/hr weekdays, ₹800/hr weekends till 31st May!',
  keywords: ['turf booking', 'football turf', 'cricket turf', 'vasai turf', 'dropouts turf', 'fifa certified turf'],
  openGraph: {
    title: 'Dropouts Turf - Premium FIFA Certified Turf',
    description: 'Your go-to destination for football and cricket. Book now at special prices!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
