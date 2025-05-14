import React from 'react'

import url from "./assets/image3.jpg"
export default function BodyDesktop() {
  return (
<>
    <section className='about-desktop'>
    <div className='flex-2'>
      <b><p>I am</p></b>
      <h3 className='left hero'>SAINT <b className='orange-text underline'>LLOYD</b></h3>
      <b><p>I am a</p></b>
      <h3 className='hero'>WEB <b className='orange-text'>DEVELOPER</b></h3>
      <hr className='dev devy2'/>
    </div>
    <img src={url} alt="About Me" className='my-img' />
    </section>
     <hr className='last'/>
</>
    )
   }
