import React from 'react'
import './globals.css'
import { Product, Footer, HeroBanner} from '../../components/index'
import { client } from '../../lib/client'
import { groq } from "next-sanity"

export const home = async ({products, bannerData}) => {
  const data = await fetchData()
  
  return (
    <div>
      <HeroBanner /* heroBanner={bannerData?.length && bannerData[0]}*/ />
      
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

export const fetchData = async () => {
  const query = groq`*[_type == "product"]`
  const products = await client.fetch(query)

  const bannerQuery = groq`*[_type == "banner"]`
  const bannerData = await client.fetch(bannerQuery)

  // if (!products.ok || !bannerData.ok){
  //   throw new Error('Failed to fetch data')
  // }

  return {
    props:{products, bannerData}
  }
//   const query = client.fetch(groq`
//   {
//     'products': *[_type == "product"],
//     'bannerData': ['*[_type == "banner"]'
//   }
// `)

//   return query
}

export default home