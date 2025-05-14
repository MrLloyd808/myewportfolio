import React from 'react'
import img from "./images/image.png"

export default function HeaderDesktop() {
  return (<>
   <div className="header-mobile desktop">
        <img src={img} alt="logo" className='logo'/>
         <h3><b className='orangetext'>Port</b>folio</h3>
        <button className='nav-links'>About</button>
        <button className='nav-links'>Skills</button>
        <button className='nav-links hire-btn'>HIRE</button>
    </div>
    </>
  )
  
}
