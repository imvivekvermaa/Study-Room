import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {


  return (
    <div className='w-full h-screen bg-gradient-to-r from-zinc-700 to-zinc-950 grid grid-rows-4'>
      <Navbar/>
      <div className='bg-red-400'></div>
      <div className='bg-blue-400'></div>
      <div className='bg-purple-400'></div>
    </div>
  )
}

export default App
