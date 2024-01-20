import React, { useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'
import "/public/css/product.css"
import banner3 from "/img/home-banner3.jpg"

export default function Products() {
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

                <div className="products special d-flex">
                    <div className="box">

                    </div>
                    <div className="box">

                    </div>
                    <div className="box">

                    </div>
                    <div className="box">

                    </div>
                    <div className="box">

                    </div>
                    <div className="box">

                    </div>
                    <div className="box">

                    </div>
                    <div className="box">

                    </div>
                </div>
            </div>
        </div>
    )
}
