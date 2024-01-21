import React from 'react'
import "/public/css/landing.css"
import Landing_top from '../components/landing_top'
import Footer from '../components/footer'
import banner3 from "/img/home-banner3.jpg"
import banner1 from "/img/home-banner1.jpg"
import banner2 from "/img/home-banner2.jpg"
import phone from "/img/phone1.jpeg"
import packages from "/img/Packages.jpg"

export default function Single() {
  return (
    <div className='landing single'>
       <Landing_top/>

       <div className="main d-flex">
        
          <div className="box left">

          </div>

          <div className="box right">
              <p className="fw-bold">DELIVERY & RETURNS</p>
              <p className="mb-1">Enter your location</p>
              <input type="text" placeholder='Enter your state' value="Kwara" />
              <input type="text" placeholder='Enter your full address' />
              <div className="pick mt-3 d-flex">
                <i class="fa-solid fa-hockey-puck"></i>
                <div className="text">
                  <p className="fw-bold mb-0">Pickup at Store</p>
                  <p className="mb-0">Delivery Fees ₦ 550</p>
                  <p className="mb-0 arrive">Arriving at pickup store between time & time when you order within next 7hrs</p>
                </div>
              </div>
              <div className="pick mt-3 d-flex">
                <i class="fa-solid fa-shield-halved"></i>
                <div className="text">
                  <p className="fw-bold mb-0">Return Policy</p>
                  <p className="mb-0 arrive">Free return within 2 days for all eligible items</p>
                </div>
              </div>
          </div>
       </div>

       

       <Footer/>
    </div>
  )
}
