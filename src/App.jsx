import { useState } from 'react'
import './assets/css/component.css'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router-dom'
import DashboardLy from './layouts/DashboardLy'
import Dashboard from './pages/Dashboard'
import Space from './pages/Space'
import History from './pages/History'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<DashboardLy />}>
          <Route index element={<Dashboard/>}/>
          <Route path='space' element={<Space/>}/>
          <Route path='history' element={<History/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
