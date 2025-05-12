import React from 'react'
import url from "./assets/image3.jpg"
export default function AboutMobile() {
  return (

    <section className='about-mobile'>
      <h3 className='left hero'>HELLO <b className='orange-text underline'>THERE!</b></h3>
      
        <h4>
          <b>
        </b> 
        I am <b className='orange-text underline'>SAINT</b> LLOYD.<br />
         Welcome to my <b className='orange-text underline'>Portfolio.</b>
      </h4><p className='left'>
        I am a WEB <b className='orange-text underline'>DEVELOPER</b>.</p>
      <br />
    
      <img src={url} alt="About Me" className='my-img' /> 
    <br />
      <hr/>
    </section>

   
  )
}
