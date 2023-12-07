import React from 'react'
import './globals.css'
import { Product, FooterBanner, HeroBanner} from '../../components/index'
import { client } from '../../lib/client'
import Image from 'next/image'

import Layout from './layout'


export const home = async () => {
  const data = await fetchProduct()
  const bData = await fetchBanner()
  
  return (
    <div>
      <HeroBanner heroBanner={bData.length && bData[0]} />
      
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>speakers of many variation</p>
      </div>
      <div className='products-container'>
        {data?.map((product) => <Product
          key={product._id} product={product}
        />)}
      </div>
      <FooterBanner footerBanner={bData && bData[0]} />
    </div>
  )
}

export const fetchProduct = async () => {
  const query = client.fetch(`*[_type == "product"]`)
  return query
}

export const fetchBanner = async () => {
  const bquery = client.fetch(`*[_type == "banner"]`)
  return bquery
}

export default home