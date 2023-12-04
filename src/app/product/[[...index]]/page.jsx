import React from "react"
import { client, urlFor } from "../../../../lib/client"

export default async function ProductDetails() {
  const data = await fetchProduct()

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

export const fetchProduct = async ({params: { slug }}) => {
  const query = client.fetch(`*[_type == "product"]`)

  const bquery = client.fetch(`*[_type == "banner"]`)
  return {props:{
    query, bquery
  }}
}
