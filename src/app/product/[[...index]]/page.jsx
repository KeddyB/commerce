import React from "react"
import { client, urlFor } from "../../../../lib/client"

export default async function ProductDetails({ params }) {
  const data = await fetchProduct()
  const bData = await fetchBanner()

  const slug = params.index

  return(
    <div>
      <div className="product-detail-container">
        <div>this is the slug page
          <div className="image-container">
            <img src='' />
          </div>{slug}
        </div>
      </div>
    </div>
  )
}

export const fetchProduct = async ({ params: {slug} }) => {
  const query = client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`)
  return query
}

export const fetchBanner = async () => {
  const bquery = client.fetch(`*[_type == "banner"]`)
  return bquery
}