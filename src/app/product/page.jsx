import React from 'react'

import { client, urlFor } from '../../../lib/client'

const ProductDetails = async () => {
  const data = await fetchProduct()
  const bData = await fetchBanner()
  return (
    <div> this is a slug
      <div className="product-detail-container">
        <div className="image-container">
          <img src="" alt="" />
        </div>
      </div>
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

export default ProductDetails