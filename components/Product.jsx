"use client"
import React from 'react'
import Link from 'next/link'

import { client } from '../lib/client'
import { urlFor } from '../lib/utils'

const Product = ({ product:{image, name, slug, price} }) => {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className='product-card'>
          <img 
            src={urlFor(image)}
            alt=""
            height={350}
            width={350}
            className='product-image'
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
