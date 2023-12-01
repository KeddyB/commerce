import React from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { Navbar } from '../../components'
import Footer from '../../components'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'eCommerce',
  description: 'sell products',
}

export default function RootLayout({ children }) {
  return (
    <div className='layout'>
      <Head>
        <title>Keddy Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
