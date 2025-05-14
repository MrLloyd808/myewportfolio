import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import url from "./assets/image3.jpg"
export default function BodyDesktop() {
  return (
<>
    <section >
    <div className='about-desktop'>
    <div className='flex-2'>
      <b><p>I am</p></b>
      <h3 className='left hero'>SAINT <b className='orange-text underline'>LLOYD</b></h3>
      <b><p>I am a</p></b>
      <h3 className='hero'>WEB <b className='orange-text'>DEVELOPER</b></h3>
    </div>
    <img src={url} alt="About Me" className='my-img' />
    </div>
    <div className='flex-icons'>
         <FaGithub className='pointer2' />
         <FaFacebook className='pointer2' />
         <FaWhatsapp className='pointer2' />
         <FaInstagram className='pointer2' />
        </div>
    </section>
     <hr className='last'/>
</>
    )
   }
