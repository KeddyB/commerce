import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner: { largeText1, smallText, midText, product, buttonText, image, desc} }) => {
  return (
    <div className='hero-banner-container'>
      <p className="beats-solo">{smallText}</p>
      <h3>{midText}</h3>
      <h1>{largeText1}</h1>
      <img
        src={urlFor(image)}
        width={200}
        height={500}
        alt="banner product"
        className='hero-banner-image'
      />
      <div>
        <Link href={`/product/${product}`}>
          <button type='button'>{buttonText}</button>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner