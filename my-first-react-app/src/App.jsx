import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/personDetails'
import Education from './components/education'
import Experience from './components/experience'
import Resume from './components/resume'



 


function App() {
 
  const [info2, setInfo2] = useState('');

  function ParentMove (data,data2,data3,data4)
 {

  setInfo2(data);
 
 }
  return (
    <>
    <div id='wrapper'>
   <div id="inputSections">
    <Person> </Person>
    <Education alert={ParentMove}></Education>
    <Experience alert={ParentMove}></Experience>
    </div>
    <Resume info={info2} />
    </div>
    </>
  )
}

export default App
