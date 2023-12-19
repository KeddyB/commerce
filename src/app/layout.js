"use client"
import '../app/globals.css'
import Head from 'next/head'
import { StateContext } from '../../context/StateContext'
import { Toaster } from 'react-hot-toast'

import { Navbar, Footer } from '../../components'

export default function Layout({ children }) {
 return (
  <html lang="en">
    <body>
      <div className='layout'>
        <Head>
          <title>Keddy Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className='main-container'>
          <StateContext>
            <Toaster />
            {children}
          </StateContext>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </body>
  </html>
  
  )
}