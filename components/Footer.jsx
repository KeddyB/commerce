import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-container'>
      <p> &copy; <Link href="/">KEDDY STORE</Link> | All Rights Reserved {currentYear} </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter style = {{color: 'skyblue'}} />
      </p>
    </div>
  )
}

export default Footer
