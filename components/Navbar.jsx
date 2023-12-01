import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href="/">Keddy Store</Link>
      </p>
      <button type='button' className='cart-icon' onClick="">
        <span className='cart-item-qty'>9</span>
        <AiOutlineShopping />
        
      </button>
    </div>
  )
}

export default Navbar
