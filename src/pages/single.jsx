import React, { useEffect, useState } from 'react'
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

export default function Single() {
  const [queryParameters] = useSearchParams()
  const [loaded, setLoaded] = useState(false)
  const [product, setproduct] = useState([])
  const [owner, setowner] = useState("")
  const [quantity, setquantity] = useState(1)

  useEffect(() => {
    axios.post("/product/show", {
      id : queryParameters.get("uuid")
    })
    .then(res => {
        setLoaded(true)
        console.log(res)
        setproduct(res.data.data[0])
        setowner(res.data.data[0].owner)
    })
    .catch(error => {
        console.log(error)
    })
  },[])

  const createOrder = () => {
    var orderbtn = document.querySelector(".orderbtn")
    orderbtn.innerHTML = `Processing <div class="text-center spinner-border spinner-border-sm"></div>`
    setTimeout(() => {
      orderbtn.innerHTML = `Done <i class="fa-solid fa-check"></i>`
      setTimeout(() => {
        orderbtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Order Now`
      },1000)
    }, 1000);
    
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
                  <img src={phone} alt="" />
                </div>
                <div className="text">
                    <h4 className='fw-bold text-muted text-capitalize'>{product.name}</h4>
                    <h2 className="mny fw-bold mb-1">₦{new Intl.NumberFormat('en-IN', {}).format(product.price)}</h2>
                    <p className="mb-1 disc">₦ 210,00</p>
                    <p className="stock">in stock</p>
                    <p className="shipping">+ shipping from ₦550 to your location</p>
                    <button onClick={createOrder} className='btn orderbtn'><i class="fa-solid fa-cart-shopping"></i> Order Now</button>
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
                      <p className="desc mb-1 text-capitalize">Seller Name: {owner.firstname ?? "N/A"} {owner.firstname ?? "N/A"}</p>
                      <p className="desc mb-1 text-capitalize">Email Address: {owner.email ?? "N/A"}</p>
                      <p className="desc mb-1 text-capitalize">Phone Number: {owner.phone ?? "N/A"}</p>
                    </div>
                </div>
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
          </>
        }
       </div>

        {!loaded &&
          <div class="text-center mt-3 mb-5">
              <div className=" text-success spinner-border mb-5 "></div>
          </div>
        }

       

       <Footer/>
    </div>
  )
}
