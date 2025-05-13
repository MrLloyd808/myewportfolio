import React from 'react'
import img1 from '../Components/images/git.png'
import img2 from '../Components/images/css.svg'
import img3 from '../Components/images/html.png'
import img4 from '../Components/images/js.jpg'
import img5 from '../Components/images/react.svg'

export default function Technologies() {
  return (
    <>
    <section className='technologies'> 
    <h3 className='hero'>My Personal <b className='orange-text'>Skills</b></h3>

         <div className='box'>
           
              <img src={img1} alt="Git" className='box-image' width={150}/>   
              <h3 className='hero'>Git</h3>
              <b><p>Version control system for tracking changes in code. and github which makes collaboration easier.</p></b>
         </div>
         <div className='box'>

              <img src={img2} alt="CSS" className='box-image' height={170} width={150}/>
              <h3 className='hero'>CSS</h3>
              <b><p>Stylesheet language for styling the presentation of a document written in HTML.</p></b>
         </div>
         <div className='box'>

              <img src={img3} alt="CSS" className='box-image' height={170} width={150}/>
              <h3 className='hero'>HTML</h3>
              <b><p>Markup language for structuring web content.</p></b>
         </div>
          <div className='box'>

              <img src={img4} alt="JavaScript" className='box-image' height={170} width={150}/>
              <h3 className='hero'>JavaScript</h3>
              <b><p>Programming language for creating dynamic and interactive web content.</p></b>
         </div>
          <div className='box'>

              <img src={img5} alt="CSS" className='box-image' height={170} width={150}/>
              <h3 className='hero'>React</h3>
              <b><p>JavaScript library for building user interfaces.</p></b>
         </div>
    </section>
    <hr /></>
  )
}
