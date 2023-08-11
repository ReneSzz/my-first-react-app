import { useState } from 'react'


function Person() {
    const [fullName, setFullName] = useState('');

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [person, setPerson] = useState({ name: fullName , age: 100 });
  
    // this console.log runs every time the component renders 
    // what do you think this will print?
    console.log("during render: ", person);
    
    return (
       <>
       <div className='card'>
          <h2>{'Personal Details'}</h2>
          <div className='inputGroup'>
          <label htmlFor="firstName">Full Name: </label>
          <input type="text" placeholder="John Smith" value={fullName} onChange={(e) => setFullName(e.target.value) }></input>
          </div>
          
          <div className='inputGroup'>
          <label htmlFor="email">Email Address: </label>
          <input type="email" value={email} placeholder='johnsmith@gmail.com' onChange={(e) => setEmail(e.target.value) }></input>
          </div>
          <div className='inputGroup'>
          <label htmlFor="phone">Phone Number:  </label>
          <input id='phone' type="tel" placeholder='xxx-xxx-xxxx' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value) }></input>
          </div>
          </div>
       </>
    )
  }

  export default Person