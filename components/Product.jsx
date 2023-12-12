"use client"
import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/sanity'
import Image from 'next/image'

const Product = ({ product:{ image, name, slug, price} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <Image 
            src={urlFor(image && image[1]).url()}
            alt={name}
            priority={false}
            height={300}
            width={300}
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
