import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/personDetails'
import Education from './components/education'
import Experience from './components/experience'
import Resume from './components/resume'



 


function App() {
 
  function ParentMove (data,data2,data3,data4)
 {


  console.log(data,data2,data3,data4)


 }
  return (
    <>
    <div id='wrapper'>
   <div id="inputSections">
    <Person> </Person>
    <Education alert={ParentMove}></Education>
    <Experience></Experience>
    </div>
    <Resume></Resume>
    </div>
    </>
  )
}

export default App
