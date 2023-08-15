import { useState } from 'react'
import Education from './education'


function Resume({info}) {


    return (
      <>
    

      <div id='resumeContainer'>

        <div id='resumeHeader'> 
          
          <h1>{info}</h1>
          <h3>Rene Suarez </h3>

        </div>

        <div id='resumeBody'>
         
          <div className='resumeSection'>

            <h2>Section 1 </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores ipsum provident eaque,Reiciendis maiores ipsum provident eaque,</p>

          </div>

          <div className='resumeSection'>
            <h2>Section 2</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores ipsum provident eaque, Reiciendis maiores ipsum provident eaque,</p>
          </div>
    
          
           
          

      </div>

      </div>
      </>
    )
  }
  
  export default Resume
  