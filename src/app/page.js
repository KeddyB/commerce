import React from 'react'
import './globals.css'
import { Product, FooterBanner, HeroBanner} from '../../components/index'
import { fetchProduct, fetchBanner } from '../../lib/utils'

export const metadata = {
  title: 'Keddy Shop',
  description: 'The Store',
}

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