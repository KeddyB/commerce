import React from 'react'
import './globals.css'

const home = () => {
  return (
    <>
      Hero banner
      
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>speakers of many variation</p>
      </div>
      <div className='products-container'>
        {['Product 1','Product 2','Product 3'].map((product) => product)}
      </div>

      Footer
    </>
  )
}

export default home