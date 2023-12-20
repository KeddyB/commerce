import React from "react"
import { urlFor, client } from "../../../../lib/sanity"
import { fetchProduct, getProject } from "../../../../lib/utils"
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Product } from "../../../../components"

export default async function ProductDetails({ params }) {
  const slug = params.slugs
  const slugs = await getProject(slug)
  const products = await fetchProduct()
  //const { decQty, incQty, qty} = useStateContext()
  let index = 0
  function setIndex(a){
    return index = a
  }
  return(
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(slugs.image && slugs.image[index]).url()}
              width={400}
              height={400}
              key={slug._id}
              alt=""
            />
          </div>
          <div className="small-images-container">
            {slugs.image.map((item, i) =>(
              <img src={urlFor(item).url()}
                width={100}
                height={100}
                alt=""
                className={i === index ? 'small-image selected-image' : 'small-image'}
                // onMouseEnter = {() => {
                //   setIndex(i);
                // }}
              />
            ))}
            
          </div>
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
            <div className="quantity">
              <h3>Quantity: </h3>
              <p className="quantity-desc">
                <span className="minus" /*onClick={decQty}*/><AiOutlineMinus /></span>
                <span className="num">
                  {/* {qty} */}0
                </span>
                <span className="plus" /*onClick={incQty}*/><AiOutlinePlus /></span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart" onClick="">Add to cart</button>
              <button type="button" className="buy-now" onClick="">Buy now</button>
            </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product = {item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}