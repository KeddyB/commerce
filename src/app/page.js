import React from 'react'

const home = () => {
  return (
    <>
      Hero banner
      
      <div>
        <h2>Best selling products</h2>
        <p>speakers of many variation</p>
      </div>
      <div>
        {['Product 1','Product 2','Product 3'].map((product) => product)}
      </div>

      Footer
    </>
  )
}

export default home