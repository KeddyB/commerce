import '../app/globals.css'
import Head from 'next/head'

import { Navbar } from '../../components'
import Footer from '../../components'

export const metadata = {
  title: 'Keddy Shop',
  description: 'Generated by Next.js',
}

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
        <main className='main-container'>{children}</main>
        </div>  
      </body>
    </html>
  )
}
