import React from 'react'
import "/public/css/landing.css"
import banner1 from "/img/home-banner1.jpg"
import banner2 from "/img/home-banner2.jpg"
import banner3 from "/img/home-banner3.jpg"
import logo from "/img/logo.svg"

export default function LandingPage() {
  return (
    <div className='landing mb-5'>
      <div className="section1">
          <div className="topbar d-flex">
              <div className="d-flex">
                <h2 className='text-uppercase text-dark'><a href="/">swift</a></h2>
                <img className='logo mx-2' src={logo} alt="" />
              </div>
              <div className="d-flex links">
                <p className="mb-0"><a href="/">Home</a></p>
                <p className="mb-0"><a href="">Log In</a></p>
                <p className="mb-0"><a href="">Sign Up</a></p>
                <p className="mb-0"><a href="">Vendors</a></p>
                <p className="mb-0"><a href="">About Us</a></p>
                <p className="mb-0"><a href="">Join Our Agents</a></p>
              </div>
          </div>
      </div>
      <div className="carousel slide carousel-fade img"  id="demo"  data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} alt="Los Angeles" className="d-block"/>
            <div className="carousel-caption text-start">
              <h3>Healthy Inside, Fresh Outside</h3>
              <p>Healthy foods comes from healthy ingredients</p>
              <span className='d-block'>We deliver the food that are ready to eat, just choose our own menu you like</span>
              <a href="" className="btn">Learn More</a>
            </div>
          </div>
        </div>
        
        <div className="carousel-item">
          <img src={banner2} alt="Los Angeles" className="d-block"/>
          <div className="carousel-caption text-start">
            <h3>Choose Your Favorite</h3>
            <p>Only natural food</p>
            <span className='d-block'>Choose your favorite meals and order online or by phone. It's easy to customize your order.</span>
            <a href="" className="btn">Learn More</a>
          </div>
        </div>
      
      
        <div className="carousel-item">
          <img src={banner3} alt="Los Angeles" className="d-block"/>
          <div className="carousel-caption text-start">
            <h3>Eat And Enjoy</h3>
            <p>Order free food delivery every day at your convenience</p>
            <span className='d-block'>No shoping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.</span>
            <a href="" className="btn">Learn More</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}
