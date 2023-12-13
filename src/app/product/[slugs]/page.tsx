import React from "react"
import { urlFor, client } from "../../../../lib/sanity"
import { getProject } from "../../../../lib/utils"
import Image from "next/image"

type Props = {
  params: { slugs: string }
}

export default async function ProductDetails({ params }: Props) {
  const slug = params.slugs
  const slugs = await getProject(slug)

  return(
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image src={urlFor(slugs.image && slugs.image[0]).url()} width={400} height={400} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

// export const generateStaticParams = async () =>{
//   // const products = await getProject(slug)
// }