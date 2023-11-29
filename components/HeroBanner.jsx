import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img src={urlFor(heroBanner.image)}
        alt=""
        className='hero-banner-image'
      ></img>
      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type='button'>{heroBanner.buttonText}</button>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </Link>
      </div>
    </div>f
  )
}

export default HeroBanner
