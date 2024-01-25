import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'
import "/public/css/product.css"
import banner3 from "/img/home-banner3.jpg"
import phone from "/img/phone1.jpeg"
import packages from "/img/Packages.jpg"
import { useCookies } from 'react-cookie'
import axios from '../utils/axios'

export default function Products() {
    const [role, setRole] = useState("Vendor")
    const [show, setShow] = useState(false)
    const [product, setproduct] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.user ??  "")
    const name = useRef("")
    const description = useRef("")
    const price = useRef("")

    const toggle = () => {
        const topbar = document.querySelector(".topbar")
        const sidebar = document.querySelector(".sidebar")
        const main_content = document.querySelector(".main_content")
        topbar.classList.toggle("active")
        main_content.classList.toggle("active")
        sidebar.classList.toggle("active")
    }

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

    const deleteProduct = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2a3042",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
            }
        });
    }

    const showForm = () => {
        var form = document.querySelector(".form")
        var add = document.querySelector(".add")
        form.style.display = "inline"
        add.style.display = "none"
    }

    const closeForm = () => {
        var form = document.querySelector(".form")
        var add = document.querySelector(".add")
        form.style.display = "none"
        add.style.display = "inline"
    }

    useEffect(() => {
        axios.post("/product/vendor-product", {
            id : user._id
        }).then(res => {
            setproduct(res.data.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[product])

    if(cookie.user){
        const createProduct = (e) => {
            e.preventDefault();
            var submitbtn = document.querySelector(".submitbtn")
            submitbtn.innerHTML = `Processing <div class="spinner-border spinner-border-sm"></div>`

            axios.post("/product/create", {
                name : name.current.value,
                price : price.current.value,
                description : description.current.value,
                owner : user._id,
            }).then(res => {
                alert("success", "product is added successfully")
                name.current.value = ""
                price.current.value = ""
                description.current.value = ""
                submitbtn.innerHTML = "Add Product"
            })
            .catch(error => {
                alert("error", "something went wrong")
                console.log(error)
                submitbtn.innerHTML = "Add Product"
            })
        }

        return (
            <div className='vendor_dashboard'>
                <Sidebar role={role}/>

                <div className="main_content">
                    <Topbar toggle={toggle}/>
                    

                    <div className="products special d-flex">
                        <div className="pagination">
                            <p className="mb-0 btn"><i className='fa-solid fa-angles-left'></i></p>
                            <p className="mb-0 btn total">1 out of 1 page</p>
                            <p className="mb-0 btn"><i className='fa-solid fa-angles-right'></i></p>
                        </div>
                        <div className="box add text-center">
                        <p className="text-muted btn" onClick={showForm}><i class="fa-solid fa-plus"></i></p>
                        <p className="p">Add Product</p>
                        </div>

                        <div className="box form">
                           <form action="" onSubmit={createProduct}>
                                <input ref={name} required type="text" className='mt-3'  placeholder='Product Name'/>
                                <input ref={price} required type="text"  placeholder='Price'/>
                                <input ref={description} required type="text"  placeholder='Description'/>
                                <label htmlFor="file">Choose product image <i class="fa-solid fa-camera"></i></label>
                                <input type="file" className='d-none' name="file" id="file" />
                                <button className='btn submitbtn'>Add Product</button>
                                <p className="text-muted arrow btn" onClick={showForm}><i class="fa-solid fa-arrow-left"></i></p>
                           </form>
                        </div>

                        { product.map(val => {
                            return(
                                <div className="box">
                                    <img src={packages} alt="" />
                                    <div className="text p-3">
                                        <p className="fw-bold mb-0">{val.name}</p>
                                        <p className="text-muted info">{val.description}.</p>
                                        <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                                        <h4 className='fw-bold mny'>₦{val.price}0</h4>
                                    </div>
                                </div>
                            )
                        })}

                        {/* <div className="box">
                            <img src={phone} alt="" />
                            <div className="text p-3">
                                <p className="fw-bold mb-0">Iphone 29 pro</p>
                                <p className="text-muted info">brand new iphone 29 pro with....</p>
                                <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                                <h4 className='fw-bold mny'>₦200,000</h4>
                            </div>
                        </div>
                        <div className="box">
                            <img src={packages} alt="" />
                            <div className="text p-3">
                                <p className="fw-bold mb-0">Iphone 29 pro</p>
                                <p className="text-muted info">brand new iphone 29 pro with....</p>
                                <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                                <h4 className='fw-bold mny'>₦200,000</h4>
                            </div>
                        </div>
                        <div className="box">
                            <img src={phone} alt="" />
                            <div className="text p-3">
                                <p className="fw-bold mb-0">Iphone 29 pro</p>
                                <p className="text-muted info">brand new iphone 29 pro with....</p>
                                <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                                <h4 className='fw-bold mny'>₦200,000</h4>
                            </div>
                        </div>
                        <div className="box">
                            <img src={phone} alt="" />
                            <div className="text p-3">
                                <p className="fw-bold mb-0">Iphone 29 pro</p>
                                <p className="text-muted info">brand new iphone 29 pro with....</p>
                                <p className="text-danger btn" onClick={deleteProduct}><i class="fa-solid fa-trash"></i></p>
                                <h4 className='fw-bold mny'>₦200,000</h4>
                            </div>
                        </div> */}
                    
                    </div>
                </div>
            </div>
        )
    }else{
       window.location.href="/login"
    }
}
