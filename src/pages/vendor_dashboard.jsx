import React from 'react'
import "/public/css/vendor_dashboard.css"
import banner3 from "/img/home-banner3.jpg"

export default function VendorDashboard() {

  const toggle = () => {
    const topbar = document.querySelector(".topbar")
    const sidebar = document.querySelector(".sidebar")
    const main_content = document.querySelector(".main_content")
    topbar.classList.toggle("active")
    main_content.classList.toggle("active")
    sidebar.classList.toggle("active")
  }

  return (
    <div className='vendor_dashboard d-flex'>
      <div className="sidebar">

      </div>
      <div className="main_content">
        <div className="topbar d-flex">
            <div className="d-flex">
              <p className="mb-0" onClick={toggle}><i class="fa-solid fa-bars"></i></p>
              <input type="text" className='mx-2' placeholder='search' />
            </div>
            <div className="d-flex mx-3">
              <p className="mx-2 mb-0"><i class="fa-solid fa-bell"></i></p>
              <p className="mx-2 mb-0"><i class="fa-solid fa-gear"></i></p>

              <div class="dropdown mx-2">
                <div className="d-flex" data-bs-toggle="dropdown">
                  <img src={banner3} alt="img"/>
                  <p className="mb-0 dropdown-toggle text-muted text-capitalize">jamiu</p>
                </div>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"><i class="fa-regular mx-1 fa-user"></i> Profile</a></li>
                  <li><a class="dropdown-item" href="#"><i class="fa-solid mx-1 fa-gear"></i> Settings</a></li>
                  <li><a class="dropdown-item" href="#"><i class="fa-solid mx-1 fa-wallet"></i> Wallet</a></li>
                  <li><a class="dropdown-item" href="#"><i class="fa-solid mx-1 fa-bell"></i> Notifications</a></li>
                  <li><a class="dropdown-item fw-bold text-danger" href="#"><i class="fa-solid mx-1 fa-arrow-right-from-bracket"></i> Log Out</a></li>
                </ul>
              </div>
            </div>
        </div>

        <div className="section1">
          <h4 className='mb-3'>Dashboard</h4>
            <div className="d-flex">
                <div className="left">
                    <div className="content">
                      <div className="top">
                        <h6 className='p-4'>Welcome back, Jamiu</h6>
                      </div>
                      <div className="p-3">
                        <img src={banner3} alt="" />
                        <p className="float-right"><i class="fa-solid fa-check"></i></p>
                        <p className="mb-2 text-capitalize"><i class="fa-regular fa-user"></i> Ganiu Jamiu</p>
                        <p className="d-block mb-0"><i class="fa-brands fa-critical-role"></i> Vendor</p>
                        <p className="mb-0 mt-2"><i class="fa-solid fa-venus-double"></i> Male</p>
                        <button>View Profile</button>
                      </div>
                    </div>
                    <div className="content p-3">
                      <h5 className='mb-4'>Monthly Earning</h5>
                      <p className="text-muted">This month</p>
                      <h4 className="mb-4">$34,252</h4>
                      <p className="text-muted">From previous period</p>
                      <button>View more</button>
                    </div>
                </div>

                <div className="right">
                    <div className="d-flex">
                      <div className="box">
                          <p className="">Active Orders</p>
                          <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                          <h4 className="">1,235</h4>
                      </div>
                      <div className="box">
                          <p className="">Decline Orders</p>
                          <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                          <h4 className="">1,235</h4>
                      </div>
                      <div className="box">
                        <p className="">Total Orders</p>
                          <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                        <h4 className="">1,235</h4>
                      </div>
                      <div className="box">
                        <p className="">Revenue</p>
                        <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                        <h4 className="">$4000</h4>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
