import React from "react"
import { client } from "../../../../lib/client"
import { urlFor } from "../../../../lib/utils"
import { GetStaticPaths } from "next"

// export const getStaticPaths = async () => {
//   const query = await fetch(`*[_type == "product"]{
//     slug{
//       current
//     }
//   }`)
//   const products = await fetch(query)
//   const paths = products.map((product) => ({
//     params:{
//       slug: product.slug.current
//     }
//   }))

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }
export const fetchProduct = async ({ params: {slug} }) => {
  const product = await client.fetch(`*[_type == "product" && slug.current == '${slug}][0]`)
  return product
}

export const fetchProducts = async () => {
  const products =  client.fetch('*[_type == "product"]')
  return products
}



export default async function ProductDetails({ product, products }) {
  const { image, name, details, price} = product
  return(
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
        </div>
      </div>
    </div>
  )
}



