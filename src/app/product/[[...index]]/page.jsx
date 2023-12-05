import React from "react"
import { client, urlFor } from "../../../../lib/client"


export const fetchProduct = async ({ params:{ slug } }) => {
  const product = client.fetch(`*[_type == "product" && slug.current == '${slug}][0]`)
  return product
}

export const fetchProducts = async () => {
  const productsQuery =  client.fetch('*[_type == "product"]')
  return productsQuery
}

export default async function ProductDetails() {
  const productData = await fetchProduct()
  const product = await fetchProducts()


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



