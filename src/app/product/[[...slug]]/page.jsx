import React from "react"
import { urlFor, client } from "../../../../lib/sanity"
import { fetchProduct } from "../../../../lib/utils"

export const generateStaticParams = async ({params: {slug}}) => {
  const products = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`)

  const paths = products?.map((product) =>({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export default async function ProductDetails() {
  return(
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            {/* <img src={urlFor(image && image[0]).url()} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}