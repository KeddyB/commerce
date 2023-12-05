import React from "react"
import { client, urlFor } from "../../../../lib/client"


export const fetchProduct = async ({ params:{ slug }}) => {
  const query = client.fetch(`*[_type == "product" && slug.current == '${slug}][0]`)
  
  return query
}

export const fetchProducts = async ({ params: { slug }}) => {
  const productsQuery =  client.fetch('*[_type == "product"]')
  return productsQuery
}

export default async function ProductDetails() {
  //const data = await fetchProduct()
  // const bData = await fetchBanner()


  return(
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src='' />
          </div>
        </div>
      </div>
    </div>
  )
}



