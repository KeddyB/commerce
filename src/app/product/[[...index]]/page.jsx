import React from "react"
import { urlFor } from "../../../../lib/sanity"
import { fetchProduct } from "../../../../lib/utils"

export const getStaticPaths = async () => {
  const query = await fetch(`*[_type == "product"]{
    slug{
      current
    }
  }`)
  const products = await fetch(query)
  const paths = products.map((product) => ({
    params:{
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

//const products = await fetchProduct()

export default async function ProductDetails({ product, products }) {
  const { image, name, details, price} = products
  return(
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0]).url()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getProp = async ({ params: slug }) =>{
  const products =  client.fetch(
      `*[_type == 'product' && slug.current == '${slug}'][0]`
  )
  return products
}
export const getProductQuery = async () =>{
  const product =  client.fetch(
      '*[_type == "product"]'
  )
  return product
}