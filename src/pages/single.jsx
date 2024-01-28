import React, { useEffect, useRef, useState } from 'react'
import "/public/css/landing.css"
import Landing_top from '../components/landing_top'
import Footer from '../components/footer'
import banner3 from "/img/home-banner3.jpg"
import banner1 from "/img/home-banner1.jpg"
import banner2 from "/img/home-banner2.jpg"
import phone from "/img/phone1.jpeg"
import packages from "/img/Packages.jpg"
import { useSearchParams } from 'react-router-dom'
import axios from '../utils/axios'
import loader from "/img/loader.gif"
import { useCookies } from 'react-cookie'
import { PaystackButton } from "react-paystack"

export default function Single() {
  const [queryParameters] = useSearchParams()
  const [loaded, setLoaded] = useState(false)
  const [product, setproduct] = useState([])
  const [owner, setowner] = useState("")
  const [quantity, setquantity] = useState(1)
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.user ??  "")
  const address = useRef("")
  const userphone = useRef("")
  const state = useRef("")
  const publicKey = "pk_test_98e99f884464bd11201d04f1c2cebf94136083db"
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [phone, setPhone] = useState(user.phone)
  const [amount, setprice] = useState(0)
  const [isFill, setisFill] = useState(false)
  const [inputs, setinputs] = useState("")

  const typeChange = () => {    
    var addy = document.querySelector(".addy")
    var phoneNumber = document.querySelector(".phone")
    var states = document.querySelector(".state")

    if(state.current.value == "" || address.current.value == "" || userphone.current.value == ""){
        setisFill(false)
    }else{
      setisFill(true)
      addy.classList.remove("error")
      states.classList.remove("error")
      phoneNumber.classList.remove("error")
    }
  }

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      reqApi(),
    onClose: () => alert("warning", "Transaction not completed"),
  }

  const reqApi = () => {
    alert("success","Thanks for doing business with us! Come back soon!!")
    axios.post("/order/create", {
      orderBy : user._id,
      owner : product.owner._id,
      product : product._id,
    })
    .then(res => {
        alert("success", "Order created successfully😃")
    })
    .catch(error => {
        console.log(error)
        alert("error", "Something went error")
    })
  }

  const mainOrder = () => {
    var orderbtn = document.querySelector(".orderbtn")
    var addy = document.querySelector(".addy")
    var phoneNumber = document.querySelector(".phone")
    var states = document.querySelector(".state")

    
    if(state.current.value == ""){
      alert("warning", "Enter your state location")
      state.current.focus()
      addy.classList.remove("error")
      phoneNumber.classList.remove("error")
      states.classList.add("error")
      return;
    }

    if(address.current.value == ""){
      alert("warning", "Enter your full address")
      address.current.focus()
      addy.classList.add("error")
      phoneNumber.classList.remove("error")
      states.classList.remove("error")
      return;
    }

    if(userphone.current.value == ""){
      alert("warning", "Enter a valid phone number")
      userphone.current.focus()
      addy.classList.remove("error")
      phoneNumber.classList.add("error")
      states.classList.remove("error")
      return;
    }

    addy.classList.remove("error")
    states.classList.remove("error")
    phoneNumber.classList.remove("error")
    setisFill(true)
  }

  useEffect(() => {
    axios.post("/product/show", {
      id : queryParameters.get("uuid")
    })
    .then(res => {
        setprice(res.data.data[0].price * 100)
        setLoaded(true)
        setproduct(res.data.data[0])
        setowner(res.data.data[0].owner)
    })
    .catch(error => {
        console.log(error)
    })
  },[])

  const alert = (icon, msg) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: icon,
        title: msg
      });
  }

  const guestOrder = () => {
    alert("info", "Login to create order")
    window.location.href="/login"
  }
  

  const increase = () => {
    setquantity(quantity + 1)
  }

  const decrease = () => {
    if(quantity > 1){
      setquantity(quantity - 1)
    }else{
    }
  }

  return (
    <div className='landing single'>
       <Landing_top/>

       <div className="main d-flex">
        {loaded &&
          <>
            <div className="box left d-flex">
                <div className="images">
                  <img src={product.image ? `${product.image}` : packages} alt="" />
                </div>
                <div className="text">
                    <h4 className='fw-bold text-muted text-capitalize'>{product.name}</h4>
                    <h2 className="mny fw-bold mb-1">₦{product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    <p className="mb-1 disc">₦ {Number(product.price - 10).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p className="stock">in stock</p>
                    <p className="shipping">+ shipping from ₦550 to your location</p>
                    {!user && <button onClick={guestOrder} className='btn orderbtn'><i class="fa-solid fa-cart-shopping"></i> Order Now</button>}
                    {user && 
                      <>
                        {!isFill && <button onClick={mainOrder} className='btn orderbtn'><i class="fa-solid fa-cart-shopping"></i> Order Now</button>}

                        {isFill && <PaystackButton className='btn orderbtn' {...componentProps} />}
                      </>
                    }
                    <div className='btn qty mt-4 d-flex'>
                      <i className="btn fa-solid fa-minus" onClick={decrease}></i> 
                        <span>{quantity}</span>
                      <i className="btn fa-solid fa-plus" onClick={increase}></i>
                      </div>

                    <div className="mt-5">
                      <p className='fw-bold text-muted mb-1'>Product Description</p>
                      <p className="desc text-capitalize">{product.description}</p>
                    </div>

                    <div className="mt-3 mb-5">
                      <p className='fw-bold text-muted mb-1'>Seller</p>
                      <p className="desc mb-1 text-capitalize">Business Name: {owner.business_name ?? "N/A"}</p>
                      <p className="desc mb-1 text-capitalize">Seller Name: {owner.firstname ?? "N/A"} {owner.lastname ?? "N/A"}</p>
                      <p className="desc mb-1 text-capitalize">Email Address: {owner.email ?? "N/A"}</p>
                      <p className="desc mb-1 text-capitalize">Phone Number: {owner.phone ?? "N/A"}</p>
                    </div>
                </div>
            </div>

            <div className="box right">
                <p className="fw-bold">DELIVERY & RETURNS</p>
                <p className="mb-1">Enter your location</p>
                <input onChange={typeChange} type="text" className='state' placeholder='Enter your state' ref={state} />
                <input onChange={typeChange} type="text" className='addy' ref={address} placeholder='Enter your full address' />
                <input onChange={typeChange} type="text" className='phone' ref={userphone}  placeholder='Enter your phone number' />
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
          </>
        }
       </div>

        {!loaded &&
         <div className="text-center mb-5 mt-1">
            <img src={loader} alt="" width={400} />
        </div>
        }

       

       <Footer/>
    </div>
  )
}
