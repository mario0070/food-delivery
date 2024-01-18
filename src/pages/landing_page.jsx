import React from 'react'
import "/public/css/landing.css"
import banner1 from "/img/home-banner1.jpg"
import banner2 from "/img/home-banner2.jpg"
import banner3 from "/img/home-banner3.jpg"
import img1 from "/img/img1.png"
import img2 from "/img/img2.png"
import img3 from "/img/img3.png"
import img4 from "/img/img4.png"
import img5 from "/img/img5.jpeg"
import img6 from "/img/img6.jpg"
import pizza from "/img/pizza.jpg"
import logo from "/img/logo.svg"
import Footer from '../components/footer'

export default function LandingPage() {
  return (
    <div className='landing'>
      <div className="section1">
          <div className="topbar d-flex">
              <div className="d-flex">
                <h2 className='text-uppercase text-dark'><a href="/">swift</a></h2>
                <img className='logo mx-2' src={logo} alt="" />
              </div>
              <div className="d-flex links">
                <p className="mb-0"><a href="/">Home</a></p>
                <p className="mb-0"><a href="/login">Log In</a></p>
                <p className="mb-0"><a href="/register">Sign Up</a></p>
                <p className="mb-0"><a href="">Vendors</a></p>
                <p className="mb-0"><a href="/about-us">About Us</a></p>
                <p className="mb-0"><a href="">Join Our Agents</a></p>
                {/* <p className="mb-0"><a href="/vendor-dashboard">Vendor Dashboard</a></p>
                <p className="mb-0"><a href="/agent-dashboard">Agent Dashboard</a></p>
                <p className="mb-0"><a href="/user-dashboard">User Dashboard</a></p> */}
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

      <div className="section2 mt-5">
        <p className="text-center top mb-1">SUPER DELICIOUS</p>
        <h2 className='text-center'>Super Delicious Deal</h2>

        <div className="d-flex flex-wrap">
            <div className="content">
              <img src={img1} alt="" />
              <div className="p-4">
                <h5 className="">Crispy Fry Burger</h5>
                <p className="mb-0 text-start">Howdy Special, A well-seasoned, crispy fried chicken fillet slathered</p>
              </div>
            </div>
            <div className="content">
              <img src={img2} alt="" />
              <div className="p-4">
                <h5 className="">Fandango Burger</h5>
                <p className="mb-0 text-start">Potato skins, chicken strips, toasted ravioli and mozzarella sticks served </p>
              </div>
            </div>
            <div className="content">
              <img src={img3} alt="" />
              <div className="p-4">
                <h5 className="">Wrangler Burger</h5>
                <p className="mb-0 text-start">Blackened chicken, sauteed onions and peppers smothered with pepper jack</p>
              </div>
            </div>
            <div className="content">
              <img src={img4} alt="" />
              <div className="p-4">
                <h5 className="">Double Cheese Burger</h5>
                <p className="mb-0 text-start">Special Burger, deep-fried beef ravioli served with marinara sauce and topped</p>
              </div>
            </div>
            <div className="content">
              <img src={img5} alt="" />
              <div className="p-4">
                <h5 className="">Grilled salmon</h5>
                <p className="mb-0 text-start">Hot & Grilled nachos smothered in cheddar cheese, beef, black olives, onions </p>
              </div>
            </div>
            <div className="content">
              <img src={img6} alt="" />
              <div className="p-4">
                <h5 className="">Rice noodles with Vegetables</h5>
                <p className="mb-0 text-start">Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival</p>
              </div>
            </div>
        </div>
      </div>

      <div className="section3 flex-wrap d-flex">
        <div className="text mb-5">
          <h2 className='mb-5'>Get Started Today!</h2>
          <h4 className="mb-3">Order free food delivery every day at your convenience.</h4>
          <p className="">From 8 to 10 in the morning. Delivery is free. Outside the city Shipping costs ₦2,000. Delivery days are Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.</p>
          <a href="" className="btn">View Products</a>
        </div>
        <div className="">
          <img src={pizza} alt="" />
        </div>
      </div>

      <Footer/>
    </div>
  )
}
