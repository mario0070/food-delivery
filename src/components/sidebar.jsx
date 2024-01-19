import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
        <h2 className='p-2 mb-4 text-white'><a href="/">Swift</a></h2>
        <div className="links">
            <p className=""><a href="" className='active'><i class="fa-solid fa-house"></i> Dashboard</a></p>
            <p className=""><a href=""><i class="fa-solid fa-comments"></i> Chat</a></p>
            <p className=""><a href=""><i class="fa-brands fa-product-hunt"></i> Products</a></p>
            <p className=""><a href=""><i class="fa-solid fa-chart-simple"></i> Analytic</a></p>
            <p className=""><a href=""><i class="fa-brands fa-first-order-alt"></i> All Orders</a></p>
            <p className=""><a href=""><i class="fa-solid fa-user"></i> Profile</a></p>
            <p className=""><a href=""><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a></p>
        </div>
        </div>
    </div>
  )
}
