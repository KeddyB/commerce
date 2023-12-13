import React from "react"
import { urlFor, client } from "../../../../lib/sanity"
import { getProject } from "../../../../lib/utils"

export default async function ProductDetails({ params }) {
  const slug = params.index
  const index = await getProject(slug)

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
// export const generateStaticParams = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }
//   `;

//   const products = await client.fetch(query).then((res) => res.json());

//   const paths = products.map((product) => ({
//     params: { 
//       slug: product.slug.current
//     }
//   }));

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export const generateProps = async ({ params: { slug }}) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]'
  
//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return {
//     props: { products, product }
//   }
// }