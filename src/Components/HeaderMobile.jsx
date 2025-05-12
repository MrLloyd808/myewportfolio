import React from 'react'
import "./StyledComponents/HeaderMobile.css"
 const img = "./Components/images/logo.jpg"
 
const HeaderMobile = () => {
 
  return (
   
    <div className="header-mobile">
        <img src={img} alt="logo" className='logo'/>
         <h2><b className='orangetext'>Port</b>folio</h2>
        <div className='hamburger' onClick={() => document.getElementById('NavBar').showModal()}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <dialog id='NavBar'>
        <div className='nav-top-wrapper'>
         <button className='closebtn' onClick={() => document.getElementById('NavBar').close()}>+</button>
           <h3>
             <b className='orangetext'>Port</b>folio
           </h3>
        </div>
      <div className='nav-links-wrapper'>
        <button className='nav-links'>About</button>
        <button className='nav-links'>Technologies</button>
        <button className='nav-links'>Social Links</button>
      </div>  
        </dialog>
     
    </div>
  )
}

export default HeaderMobile