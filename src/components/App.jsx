import { useState } from 'react'
import LandingPage from '../pages/landing_page'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Register from '../pages/register'
import Contact from '../pages/contact'
import About from '../pages/about'
import VendorDashboard from '../pages/vendor_dashboard'
import UserDashboard from '../pages/user_dashboard'
import AgentDashboard from '../pages/agent_dashboard'
import Chat from '../pages/chat'

function App() {
  return (
    <>
       <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Register/>} path='/register'/>
          <Route element={<VendorDashboard/>} path='/vendor-dashboard'/>
          <Route element={<UserDashboard/>} path='/user-dashboard'/>
          <Route element={<AgentDashboard/>} path='/agent-dashboard'/>
          <Route element={<Contact/>} path='/contact-us'/>
          <Route element={<About/>} path='/about-us'/>
          <Route element={<Chat/>} path='/chat'/>
        </Routes>
    </>
  )
}

export default App
