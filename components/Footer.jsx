import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
  //const currentYear = new Date().getFullYear();
  let date = new Date()
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();

  let theMonth = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July','Aug','Sept', 'Oct', 'Nov', 'Dec']

  function Month(){
    if(month == 1){
      return theMonth[0]
    }
    else if(month == 2){
      return theMonth[1]
    }
    else if(month == 3){
      return theMonth[2]
    }
    else if(month == 4){
      return theMonth[3]
    }
    else if(month == 5){
      return theMonth[4]
    }
    else if(month == 6){
      return theMonth[5]
    }
    else if(month == 7){
      return theMonth[6]
    }
    else if(month == 8){
      return theMonth[7]
    }
    else if(month == 9){
      return theMonth[8]
    }
    else if(month == 10){
      return theMonth[9]
    }
    else if(month == 11){
      return theMonth[10]
    }
    else if(month == 12){
      return theMonth[11]
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
