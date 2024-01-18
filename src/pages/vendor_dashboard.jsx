import React from 'react'
import "/public/css/vendor_dashboard.css"
import banner3 from "/img/home-banner3.jpg"

export default function VendorDashboard() {
  return (
    <div className='vendor_dashboard d-flex'>
      <div className="sidebar">

      </div>
      <div className="main_content">
        <div className="topbar d-flex">
            <div className="d-flex">
              <p className="mb-0"><i class="fa-solid fa-bars"></i></p>
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
                  <li><h5 class="dropdown-header">Dropdown header 1</h5></li>
                  <li><a class="dropdown-item" href="#">Link 1</a></li>
                  <li><a class="dropdown-item" href="#">Link 2</a></li>
                  <li><a class="dropdown-item" href="#">Link 3</a></li>
                  <li><h5 class="dropdown-header">Dropdown header 2</h5></li>
                  <li><a class="dropdown-item" href="#">Another link</a></li>
                </ul>
              </div>
            </div>
        </div>

        <div className="section1 mt-4">
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
                </div>

                <div className="right d-flex">
                    <div className="box">

                    </div>
                    <div className="box">
                      
                    </div>
                    <div className="box">
                      
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
