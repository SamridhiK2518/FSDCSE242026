import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {
  

  return (
    <div style= {{border: '2px solid black', backgroundColor: 'white', width:'400px', height:'700px', margin:'auto', textAlign:'center'}}>
      <h1 style={{color: 'brown', fontWeight: 'bold'}}>ABES</h1>
      <h2 style={{color: 'brown'}}>Engineering College</h2>
      <h3 style={{color: 'brown'}}>College Code 032</h3>
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblNCck8Pd3bngtAIkr9owo3PX1rRcpRqMaNGeyXxMaA&s=10" alt="Hero" style={{width: '200px', height: '200px', marginBottom: '10px'}} />
      <h2 style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>SAMRIDHI KHANNA</h2>
      <div style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>B.Tech CSE</div>
      <div style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>Roll No.- 2400320100977</div>
      <div style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>Admission No.- 2024B0101060</div>
      <div style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>DOB- 18/06/2005</div>
      <div style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>Hosteller- NO</div>
      <div style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>Blood Group- AB+</div>
      <div style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>Father's Name- Mr. Vivek Khanna</div>
     
    <ICard /> 
    </div>
  )
}

export default App
