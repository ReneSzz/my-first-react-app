import { useState } from 'react'



function Education(props) {
  
   



    const [schoolName, setSchoolName] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
   
    
    return (
       <>

       <div className='card'>
          <h2>{'Education'}</h2>
          <div className='inputGroup'>
          <label htmlFor="schoolName">School Name: </label>
          <input type="text" placeholder="Trent University" value={schoolName} onChange={(e) => setSchoolName(e.target.value) }></input>
          </div>

          <div className='inputGroup'>
          <label htmlFor="degree">Degree: </label>
          <input type="text" placeholder="Computer Science" value={degree} onChange={(e) => setDegree(e.target.value) }></input>
          </div>

          <div className='inputGroup'>
          <label htmlFor="startDate">Start Date: </label>
          <input type="text" placeholder="Enter Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value) }></input>
          </div>

          <div className='inputGroup'>
          <label htmlFor="endDate">End Date:  </label>
          <input type="text" placeholder="Enter End Date" value={endDate} onChange={(e) => setEndDate(e.target.value) }></input>
          </div>
         <button  onClick={() => props.alert(schoolName, degree, startDate,endDate)} >Submit</button>
         
          </div>
       </>
    )
  }

  export default Education