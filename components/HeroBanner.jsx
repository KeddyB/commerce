import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <p className="beats-solo">SMALL TEXT</p>
      <h2>MID TEXT</h2>
      <img src="" alt="headphones" className='hero-banner-image' />
      <div>
        <Link href="/product/ID">
          <button type='button'>BUTTON TEXT</button>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner
