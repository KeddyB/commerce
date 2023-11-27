import React from 'react'
import './globals.css'
import { Product, Footer, HeroBanner} from '../../components/index'
import { sanityClient } from '../../lib/client'

const home = ({ products, bannerData}) => {
  
  return (
    <div>
      <HeroBanner />
      {console.log(bannerData)}
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>speakers of many variation</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => product.name)}
      </div>

      <Footer />
    </div>
  )
}

export const fetchProducts = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}

export default home