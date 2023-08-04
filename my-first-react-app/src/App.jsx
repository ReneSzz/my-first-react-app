import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button({text = "Click swag", color="black", fontSize="14", handleClick})
{
 const styling = {
  color: color,
  fontSize: fontSize
 }

 
  
 return <button onClick={handleClick} style={styling}>{text}</button>
 
  
}
 




function App() {
  const handleButtonClick = () =>
  {
    window.location.href = "http://www.google.com";
  };

  return (
    <>
    <Button handleClick={handleButtonClick}/>
    <Button />
    <Button text="cool" color="blue"/>
    </>
  )
}

export default App
