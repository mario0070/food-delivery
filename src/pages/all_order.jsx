import React, { useState } from 'react'
import Sidebar from '../components/sideBar'
import Topbar from '../components/topbar'

export default function allOrders() {
    const [role, setRole] = useState("Vendor")

    const toggle = () => {
        const topbar = document.querySelector(".topbar")
        const sidebar = document.querySelector(".sidebar")
        const main_content = document.querySelector(".main_content")
        topbar.classList.toggle("active")
        main_content.classList.toggle("active")
        sidebar.classList.toggle("active")
      }

    return (
        <div className='vendor_dashboard'>
            <Sidebar role={role}/>

            <div className="main_content">
            <Topbar toggle={toggle}/>
            </div>
        </div>
    )
}
