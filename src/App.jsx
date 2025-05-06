import React from 'react'
import "./App.css"

export default function HeaderMobile() {
  return (
   
    <div className="header-mobile">
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
     <b className='orangetext'>
     Port
     </b>folio
     </h3>
     
        </div>
         
          

        </dialog>
    </div>
  )
}

