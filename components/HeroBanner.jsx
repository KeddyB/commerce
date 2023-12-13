import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'
import Image from 'next/image'


const HeroBanner = ({ heroBanner: { largeText1, smallText, midText, product, buttonText, image, desc} }) => {
  return (
    <div className='hero-banner-container'>
      <p className="beats-solo">{smallText}</p>
      <h3>{midText}</h3>
      <h1>{largeText1}</h1>
      <Image
        src={urlFor(image).url()}
        alt={product}
        className='hero-banner-image'
        width={450}
        height={300}
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