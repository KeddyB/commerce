import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
  //const currentYear = new Date().getFullYear();
  let date = new Date()
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();

  console.log(Month())

  function Month(){
    if(month == 1){
      return "Jan"
    }
    else if(month == 2){
      return "Feb"
    }
    else if(month == 3){
      return "Mar"
    }
    else if(month == 4){
      return "Apr"
    }
    else if(month == 5){
      return "May"
    }
    else if(month == 6){
      return "June"
    }
    else if(month == 7){
      return "July"
    }
    else if(month == 8){
      return "Aug"
    }
    else if(month == 9){
      return "Sept"
    }
    else if(month == 10){
      return "Oct"
    }
    else if(month == 11){
      return "Nov"
    }
    else if(month == 12){
      return "Dec"
    }
  }

  let fDate = `${Month()}, ${year}`;
  return (
    <div className='footer-container'>
      <p> &copy; {fDate} <Link href="/">KEDDY STORE</Link> | All Rights Reserved</p>
      <p className='icons'>
        <AiFillInstagram style={{color: "#DD2A7B"}}/>
        <AiOutlineTwitter style={{color: "skyblue"}}/>
      </p>
    </div>
  )
}

export default Footer
