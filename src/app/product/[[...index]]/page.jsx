import React from "react"
import { client } from "../../../../lib/client"
import { urlFor } from "../../../../lib/utils"
import { fetchProduct } from "../../../../lib/utils"

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

const products = await fetchProduct()

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



