import React from 'react'
import './globals.css'
import { Product, Footer, HeroBanner} from '../../components/index'

const home = () => {
  return (
    <>
      <HeroBanner />
      
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>speakers of many variation</p>
      </div>
      <div className='products-container'>
        {['Product 1',' Product 2'].map((product) => product)}
      </div>

      <Footer />
    </>
  )
}

export default home