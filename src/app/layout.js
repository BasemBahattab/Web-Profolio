
import './styles/globals.css'
import { Inter } from 'next/font/google'

import Background from './component/background';
import Nav from './component/nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Basem' protfolio ",
  description: 'Protfolio for Basem Bahattab',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <Nav />
        {children}
      </body>
    </html>
  )
}
