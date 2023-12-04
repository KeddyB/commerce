"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { urlFor } from '../lib/client'

const Product = ({ product:{image, name, slug, price} }) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/product/${slug.current}`)}>
        <div className='product-card'>
          <img 
            src={urlFor(image && image[0])} 
            width={250}
            height={250}
            alt=""
            className='product-image'
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default Product
