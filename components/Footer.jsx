import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> &copy; Keddy Stores | All Rights Reserved 2023 </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter style = {{color: 'skyblue'}} />
      </p>
    </div>
  )
}

export default Footer
