import React from "react"
import { client, urlFor } from "../../../../lib/client"

export default async function ProductDetails() {
  const data = await fetchProduct()

  return(
    <div>
      <div className="product-detail-container">
        <div>this is the slug page
          <div className="image-container">
            <img src='' />
          </div>
        </div>
      </div>
    </div>
  )

}

export const fetchProduct = async () => {
  const query = client.fetch(`*[_type == "product"]`)

  const bquery = client.fetch(`*[_type == "banner"]`)
  return {props:{
    query, bquery
  }}
}
