import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/personDetails'
import Education from './components/education'
import Experience from './components/experience'
import Resume from './components/resume'



 


function App() {
 
  const [universityName, setUniversityName] = useState('OCAD University');
  const [degree, setDegree] = useState('Computer Science');
  const [personName, setPersonName] = useState('Rene Suarez');
  const [phoneNumber, setPhoneNumber] = useState('XXX-XXX-XXXX');


  function EducationSetting(data,data2,)
 {

  setUniversityName(data);
  setDegree(data2);
 
 }

 function personData(data,data2)
 {
  setPersonName(data);
  setPhoneNumber(data2);
 }
  return (
    <>
    <div id='wrapper'>
   <div id="inputSections">
    <Person  >  </Person>
    <Education alert={EducationSetting}></Education>
    <Experience ></Experience>
    </div>
    <Resume universityName={universityName} degree={degree} personName={personName} phoneNumber={phoneNumber}/>
    </div>
    </>
  )
}

export default App
