import { useState } from 'react'
import Education from './education'


function Resume({universityName, degree, personName, phoneNumber}) {


    return (
      <>
    

      <div id='resumeContainer'>

        <div id='resumeHeader'> 
          
          <h1>{personName}</h1>
          <div id='rowWrapper'>
          <h4>Email: renesuarez@gmail.com</h4>
          <h4>Phone Number: {phoneNumber}</h4>
          </div>

        </div>

        <div id='resumeBody'>
        
        
        <div className='resumeSection'>

        <h2>Education</h2>
        <p>{universityName} - Bachelors of {degree} </p>
        
     
        </div>
         
         
          <div className='resumeSection'>

            <h2>Section 1 </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciend is maiores ipsum provident eaque,Reiciendis maiores ipsum provident eaque,</p>

          </div>

          <hr></hr>

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
  