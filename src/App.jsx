import { useState } from 'react'
import './assets/css/component.css'
import Landing from './pages/landing'
import { Route, Routes } from 'react-router-dom'
import { Auth_ui } from './pages/Auth_ui'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Space from './pages/Space'
import History from './pages/History'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth_ui />} />
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<Dashboard/>}/>
          <Route path='space' element={<Space/>}/>
          <Route path='history' element={<History/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
