import React from 'react'
import './globals.css'
import { Product, Footer, HeroBanner} from '../../components/index'
import { sanityClient } from '../../lib/client'


export const fetchData = async () => {
  const query = '*[_type == "product"]'
  const products = await sanityClient.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await sanityClient.fetch(bannerQuery)

  // if (!products.ok || !bannerData.ok){
  //   throw new Error('Failed to fetch data')
  // }

  return {products, bannerData}
}

export default async function home ({ products, bannerData}) {
  const data = await fetchData()
  
  return (
    <div>
      <HeroBanner /*heroBanner={bannerData.length && bannerData[0]}*/ />
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