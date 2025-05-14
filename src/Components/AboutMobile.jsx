import React from 'react'
import url from "./assets/image3.jpg"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function AboutMobile() {
  return (
<>
    <section className='about-mobile'>
      <h3 className='left hero'>  SAINT <b className='orange-text underline'>LLOYD</b></h3>
 

      <img src={url} alt="About Me" className='my-img' /> 

      <h3 className='left hero'>WEB <b className='orange-text'>DEVELOPER</b></h3>
   <div className='flex-icons'>
    <FaGithub className='pointer' />
    <FaFacebook className='pointer' />
    <FaWhatsapp className='pointer' />
    <FaInstagram className='pointer' />
   </div>
    </section>
     <hr />
</>
   
  )
}
