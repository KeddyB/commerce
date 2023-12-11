import React from 'react'
import './globals.css'
import { Product, FooterBanner, HeroBanner} from '../../components/index'
import { groq } from 'next-sanity'
import { client } from '../../lib/client'
import Image from 'next/image'
import { fetchProduct, fetchBanner } from '../../lib/utils'

import Layout from './layout'


export const home = async () => {
  const products = await fetchProduct()
  const banner = await fetchBanner()
  
  return (
    <div>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>speakers of many variation</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => 
          <Product key={product._id} product={product} />
        )}
      </div>
      <FooterBanner footerBanner={banner && banner[0]} />
    </div>
  )
}

export default home