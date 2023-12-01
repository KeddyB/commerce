import '../app/globals.css'
import Head from 'next/head'

import { Navbar, Footer } from '../../components'

export const metadata = {
  title: 'Keddy Shop',
  description: 'The Store',
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
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
}
