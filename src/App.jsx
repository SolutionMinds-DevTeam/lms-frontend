import { useState } from 'react'
import './assets/css/component.css'
import Landing from './pages/landing'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Auth_ui from './pages/Auth_ui'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth_ui />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      
    </>
  )
}

export default App
