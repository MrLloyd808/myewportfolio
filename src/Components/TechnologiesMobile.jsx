import React from 'react'
import img1 from '../Components/images/git.png'
import img2 from '../Components/images/css.svg'
import img3 from '../Components/images/html.png'
import img4 from '../Components/images/js.jpg'
import img5 from '../Components/images/react.svg'

export default function Technologies() {
  return (
    <>
    <section className='tech-container'> 
    <h3 className='hero'>Personal <b className='orange-text'>Skills</b></h3>
    <hr className='hr'/>
    <div className="box-wrapper">
         <div className='box'>
           
              <img src={img1} alt="Git" className='box-image' width={100}/>   
              <h3 className='hero'>Git</h3>
             
         </div>
         <div className='box'>

              <img src={img2} alt="CSS" className='box-image' width={100}/>
              <h3 className='hero'>CSS</h3>
              
         </div>
         <div className='box'>

              <img src={img3} alt="CSS" className='box-image' width={100}/>
              <h3 className='hero'>HTML</h3>
              
         </div>
          <div className='box'>

              <img src={img4} alt="JavaScript" className='box-image' width={100}/>
              <h3 className='hero'>JavaScript</h3>
              
         </div>
          <div className='box'>

              <img src={img5} alt="CSS" className='box-image' width={100}/>
              <h3 className='hero'>React</h3>
              
         </div>
         </div>

         <hr className='dev'/>

      <div className='flex'>
       <h3 className='hero'>Status <b className='orange-text'>Progress</b></h3>
       <hr />
       <hr className='hr'/>
        <br />
      <h3>HTML</h3>
        <progress value="80" max="100" className='progress' />
      </div>
      <div className='flex'>
      <h3>Git</h3>
        <progress value="30" max="100" className='progress' />
      </div>
      <div className='flex'>
      <h3>CSS</h3>
        <progress value="65.0" max="100" className='progress' />
      </div>
      <div className='flex'>
      <h3>JavaScript</h3>
        <progress value="58" max="100" className='progress' />
      </div>
      <div className='flex'>
      <h3>React</h3>
        <progress value="30" max="100" className='progress' />
      </div>
    </section>
    <hr /></>
  )
}
