import React from 'react'
import './globals.css'
import { Product, Footer, HeroBanner} from '../../components/index'
import { client } from '../../lib/client'
import { groq } from "next-sanity"

export const home = async () => {
  const data = await fetchProduct()
  const bdata = await fetchBanner()
  
  return (
    <div>
      <HeroBanner heroBanner={bdata.length && bdata[0]} />
      
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>speakers of many variation</p>
      </div>
      <div className='products-container'>
        {data?.map((product) => product.name)}
      </div>

      <Footer />
    </div>
  )
}

export const fetchProduct = async () => {
  const query = client.fetch(groq`*[_type == "product"]`)

  return query
}

export const fetchBanner = async () => {
  const bquery = client.fetch(groq`*[_type == "banner"]`)

  return bquery
}

export default home