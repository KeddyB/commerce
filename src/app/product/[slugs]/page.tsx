import React from "react"
import { urlFor, client } from "../../../../lib/sanity"
import { getProject } from "../../../../lib/utils"
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai"

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
            <img
              src={urlFor(slugs.image && slugs.image[0]).url()}
              width={400}
              height={400}
              alt=""
            />
          </div>
          {/* <div className="small-images-container">
            {slugs.image?.map((item, i) =>(
              <img src={urlFor(item).url()}
                width={100}
                height={100}
                alt=""
                className=""
                onMouseEnter=""
              />
            ))}
          </div> */}
        </div>
        <div className="product-detail-desc">
            <h1>{slugs.name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (20)
              </p>
            </div>
            <h4>Details: </h4>
            <p>{slugs.details}</p>
            <p className="price">${slugs.price}</p>
            
        </div>
      </div>
    </div>
  )
}