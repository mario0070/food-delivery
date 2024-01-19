import React from 'react'
import banner3 from "/img/home-banner3.jpg"

export default function Topbar({toggle}) {
  return (
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
  )
}
