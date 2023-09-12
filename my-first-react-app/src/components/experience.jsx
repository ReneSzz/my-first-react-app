import { useState } from 'react'


function Experience(props) {
    const [experienceName, setExperienceName] = useState('');
    const [jobTitle, setjobTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    return (
       <>
       <div className='card'>
          <h2>{'Experience'}</h2>
          <div className='inputGroup'>
          <label htmlFor="experience">Experience: </label>
          <input type="text" placeholder="Umbrella Corp" value={experienceName} onChange={(e) => setExperienceName(e.target.value) }></input>
          </div>
         
          <div className='inputGroup'>
          <label htmlFor="jobTitle">Job Title:  </label>
          <input type="text" placeholder="Software Developer" value={jobTitle} onChange={(e) => setjobTitle(e.target.value) }></input>
          </div>
         

          <div className='inputGroup'>
          <label htmlFor="startDate">Start Date: </label>
          <input type="text" placeholder="Enter Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value) }></input>
          </div>

          <div className='inputGroup'>
          <label htmlFor="endDate">End Date:  </label>
          <input type="text" placeholder="Enter End Date" value={endDate} onChange={(e) => setEndDate(e.target.value) }></input>
          </div>
          <button  onClick={() => props.alert(experienceName, jobTitle, startDate,endDate)} >Submit</button>
          </div>
       </>
    )
  }

  export default Experience