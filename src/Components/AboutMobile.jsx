import React from 'react'
import url from "./assets/image2.jpg"
export default function AboutMobile() {
  return (

    <section className='about-mobile'>
      <h3 className='left'>HELLO <b className='orange-text'>THERE!</b></h3>
      <p className='left'>
        I am a WEB <b className='orange-text'>DEVELOPER</b>.</p>
        <p>
        <br/>
        Welcome to my <b className='orange-text'>Portfolio. <br/></b> 
        I am a self taught Programmer with a passion to learn and create. 
        Make youreself at home. Go through the rest of the Portfolio to learn more about myself.
      </p>
      <img src={url} alt="About Me" className='my-img' /> 
        
      <hr/>
    </section>

   
  )
}
