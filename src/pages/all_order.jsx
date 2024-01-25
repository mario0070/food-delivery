import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'
import "/public/css/product.css"
import banner3 from "/img/home-banner3.jpg"
import phone from "/img/phone1.jpeg"
import packages from "/img/Packages.jpg"
import { useCookies } from 'react-cookie'
import axios from '../utils/axios'

export default function allOrders() {
    const [role, setRole] = useState("Vendor")
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.user ??  "")
    const [product, setproduct] = useState([])
    const [loaded, setloaded] = useState(false)

    const toggle = () => {
        const topbar = document.querySelector(".topbar")
        const sidebar = document.querySelector(".sidebar")
        const main_content = document.querySelector(".main_content")
        topbar.classList.toggle("active")
        main_content.classList.toggle("active")
        sidebar.classList.toggle("active")
    }

    useEffect(() => {
        axios.post("/product/vendor-product", {
            id : user._id
        }).then(res => {
            setloaded(true)
            console.log(res)
            setproduct(res.data.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[product])

    return (
        <div className='vendor_dashboard'>
            <Sidebar role={role}/>

            <div className="main_content">
                <Topbar toggle={toggle}/>

                <div className="special orders">
                    <div className="top nav-tabs d-flex" role="tablist">
                        <p data-bs-toggle="tab" className="mb-0 nav-link active">Active Orders (0)</p>
                        <p data-bs-toggle="tab" className="mb-0 nav-link ">Fulfilled Orders (0)</p>
                        <p data-bs-toggle="tab" className="mb-0 nav-link ">Closed Orders (0)</p>
                    </div>

                    <div className="products special d-flex">
                        {!loaded && <div class="text-center text-success spinner-border mt-5"></div> }
                        {product.map(val => {
                            return(
                                <div className="box">
                                    <img src={packages} alt="" />
                                    <div className="text p-3">
                                        <p className="fw-bold mb-0 text-capitalize">{val.name}</p>
                                        <p className="text-muted desc info text-capitalize">{val.description}.</p>
                                        <p className="text-danger btn" onClick={() => deleteProduct(val._id)}><i class="fa-solid fa-trash"></i></p>
                                        <h4 className='fw-bold mny'>₦{new Intl.NumberFormat('en-IN', {}).format(val.price)}</h4>
                                        <p className="listBy">Listed By {val.owner.business_name ?? "N/A"}</p>
                                        <p className="status">Status : {val.owner.business_name ?? "N/A"}</p>
                                    </div>
                                </div>
                            )
                        })}
                        
                        {loaded && product.length == 0 && 
                        <div class="text-center">
                            <h1>Empty Order</h1>
                            <p className="text-muted">You do not have any order yet!!</p>
                        </div> }
                          
                    </div>

                </div>

            </div>
        </div>
    )
}
