"use client"
import '../app/globals.css'
import Head from 'next/head'

import { Navbar, Footer } from '../../components'
import { StateContext } from '../../context/StateContext'

export default function Layout({ children }) {
 return (
  <StateContext>
    <html lang="en">
      <body>
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
      </body>
    </html>
  </StateContext>
  )
}
