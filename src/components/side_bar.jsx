import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({role}) {
 
  useEffect(() => {
    var side_link = document.querySelectorAll(".side_link")
    side_link.forEach((val) => {
      var page = window.location.pathname.split("/")[1].split("-").join().replace(",", " ")
      if(val.innerText.toLowerCase() == ` ${page}`){
        val.classList.add("active")
      }
    })
  })


  return (
    <div className="sidebar">
        <div className="top">
        <h2 className='p-2 mb-4 text-white'><a href="/">Swift</a></h2>
        <div className="links">
            <p className=""><Link to="/vendor-dashboard" className='side_link'><i class="fa-solid fa-house"></i> {role} Dashboard</Link></p>
            <p className=""><Link className='side_link' to="/chat"><i class="fa-solid fa-comments"></i> Chat</Link></p>
            <p className=""><Link className='side_link' to="/products"><i class="fa-brands fa-product-hunt"></i> Products</Link></p>
            <p className=""><Link className='side_link' to="/analytic"><i class="fa-solid fa-chart-simple"></i> Analytic</Link></p>
            <p className=""><Link className='side_link' to="/orders"><i class="fa-brands fa-first-order-alt"></i> Orders</Link></p>
            <p className=""><Link className='side_link' to="/profile"><i class="fa-solid fa-user"></i> Profile</Link></p>
            <p className=""><a className='side_link' href=""><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a></p>
        </div>
        </div>
    </div>
  )
}
