import React from 'react'
import "/public/css/landing.css"
import banner1 from "/img/home-banner1.jpg"
import banner2 from "/img/home-banner2.jpg"
import banner3 from "/img/home-banner3.jpg"
import fashion1 from "/img/fashion.webp"
import fashion2 from "/img/fashion1.webp"
import Foot1 from "/img/Foot Wears1.webp"
import Foot2 from "/img/Foot Wears2.jpg"
import Packages from "/img/Packages.jpg"
import phone1 from "/img/phone1.jpeg"
import Groceries2 from "/img/Groceries2.jpeg"
import img1 from "/img/img1.png"
import img2 from "/img/img2.png"
import img3 from "/img/img3.png"
import img4 from "/img/img4.png"
import agent from "/img/agent.png"
import delivery_man from "/img/delivery_man.png"
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
              <p data-bs-toggle="offcanvas" data-bs-target="#demo" className="mb-0 btn d-none open_menu"><i class="fa-solid fa-bars"></i></p>

              <div class="offcanvas offcanvas-start" id="demo">
                <div class="offcanvas-header">
                  <h2 class="offcanvas-title">Swift</h2>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                  <p className="mb-0 mt-4"><a href="/"><i class="fa-solid fa-house"></i> Home</a></p>
                  <p className="mb-0"><a href=""><i class="fa-brands fa-product-hunt"></i> Products</a></p>
                  <p className="mb-0"><a href="/about-us"><i class="fa-regular fa-address-card"></i> About Us</a></p>
                  <p className="mb-0"><a href="/login"><i class="fa-solid fa-arrow-right"></i> Log In</a></p>
                  <p className="mb-0"><a href="/register"><i class="fa-solid fa-arrow-right"></i> Sign Up</a></p>
                  <p className="mb-0"><a href="/dashboard"><i class="fa-brands fa-red-river"></i> Dashboard</a></p>
                  {/* <button class="btn btn-secondary" type="button">A Button</button> */}
                </div>
              </div>

              <div className="d-flex links">
                <p className="mb-0"><a href="/">Home</a></p>
                <p className="mb-0"><a href="/login">Log In</a></p>
                <p className="mb-0"><a href="/register">Sign Up</a></p>
                <p className="mb-0"><a href="">Products</a></p>
                <p className="mb-0"><a href="/about-us">About Us</a></p>
                <p className="mb-0"><a href="/dashboard">Dashboard</a></p>
                {/* <p className="mb-0"><a href="/agent-dashboard">Agent Dashboard</a></p>
                <p className="mb-0"><a href="/user-dashboard">User Dashboard</a></p> */}
              </div>
          </div>
      </div>

      <div className="carousel slide carousel-fade img"  id="demo"  data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} alt="Los Angeles" className="d-block"/>
            <div className="carousel-caption text-start">
              <h3>Reliable Service Every Time</h3>
              <p>GET THE FASTEST PRODUCT DELIVERY</p>
              <span className='d-block'>Try Us And See How Good Our Services Are.</span>
              <a href="/login" className="btn">Get Started</a>
            </div>
          </div>
        </div>
        
        <div className="carousel-item">
          <img src={banner2} alt="Los Angeles" className="d-block"/>
          <div className="carousel-caption text-start">
            <h3>Choose Your Favorite</h3>
            <p className='text-uppercase'>Stay At Home We Will Deliver Your Order</p>
            <span className='d-block'>Do You Want A Fast Service? Just Call Us..</span>
            <a href="/login" className="btn">Get Started</a>
          </div>
        </div>
      
      
        <div className="carousel-item">
          <img src={banner3} alt="Los Angeles" className="d-block"/>
          <div className="carousel-caption text-start">
            <h3>Eat And Enjoy</h3>
            <p className='text-uppercase'>Order free food delivery every day at your convenience</p>
            <span className='d-block'>No shoping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.</span>
            <a href="/login" className="btn">Get Started</a>
          </div>
        </div>
        
      </div>

      <div className="section2 mt-5">
        <p className="text-center top mb-1">Place Your Order Now.</p>
        <h2 className='text-center'>We Deliver Everything</h2>

        <div className="d-flex flex-wrap">
            <div className="content">
              <img src={img1} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Food And Drinks</h5>
                <p className="mb-2 text-muted text-start fw-bold">Harmony Retails & Co.</p>
                <p className="mb-0 text-start">Harmony sells all the kinds of healthy food you wish for, Howdy Special, crispy fried chicken fillet slathered...</p>
              </div>
            </div>

            <div className="content">
              <img src={Foot2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Foot Wears</h5>
                <p className="mb-2 text-muted text-start fw-bold">Skoute & Emma Wear</p>
                <p className="mb-0 text-start">We sell different types of foot wear, eg Canvas, foot Palm, trainners and various nike shoes, for male and female..... </p>
              </div>
            </div>

            <div className="content">
              <img src={phone1} alt="" />
              <div className="p-4">
                <h5 className="">Phones & Phone Gadget</h5>
                <p className="mb-2 text-muted text-start fw-bold">Engr. Toyeeb </p>
                <p className="mb-0 text-start">Best in dealing with brand new and used Phone, we have it in different models, Iphone, Android and also Laptop...</p>
              </div>
            </div>
           
            <div className="content">
              <img src={Packages} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Packages</h5>
                <p className="mb-2 text-muted text-start fw-bold">Sweden Mornach Store</p>
                <p className="mb-0 text-start">Tell us and we will package it for you, Our store offers a simple solution for your packages... </p>
              </div>
            </div>

            <div className="content">
              <img src={fashion2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Fashion</h5>
                <p className="mb-2 text-muted text-start fw-bold">Diamond Place Clothing</p>
                <p className="mb-0 text-start">We sell both male and female cloth and trouser, huddies, joggers, baggy jean, jacket jean...</p>
              </div>
            </div>
           

            <div className="content">
              <img src={Groceries2} alt="" />
              <div className="p-4">
                <h5 className="mb-0">Groceries</h5>
                <p className="mb-2 text-muted text-start fw-bold">God Power Cheap Groceries</p>
                <p className="mb-0 text-start">Blackened chicken, sauteed onions and peppers smothered with pepper jack...</p>
              </div>
            </div>
        </div>
      </div>

      <div className="section3 flex-wrap d-flex">
        <div className="text mb-3">
          <h2 className='mb-5'>Get Started Today!</h2>
          <h4 className="mb-3">Stay At Home We Will Deliver Your Order</h4>
          <p className="">From 8 to 10 in the morning. Delivery is free. Outside the city Shipping costs ₦2,000. Delivery days are Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.</p>
          <a href="" className="btn">View Products</a>
        </div>
        <div className="">
          <img src={agent} alt="" />
        </div>
      </div>

      <div className="section3 section4 mt-4 flex-wrap d-flex">
        <div className="">
          <img src={delivery_man} alt="" />
        </div>
        <div className="text mb-3">
          <h2 className='mb-3'>Become a Delivery Agent!</h2>
          <h4 className="mb-3">Deliver and Earn</h4>
          <p className="">Become a delivery agent and start earning on every successful delivery, We offer flexible and convenient part time work as delivery agent.</p>
          <a href="/login" className="btn">Get Started</a>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
