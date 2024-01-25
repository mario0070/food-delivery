import React, { useEffect, useRef, useState } from 'react'
import agent from "/img/agent.png"
import axios from '../utils/axios'

export default function Register() {
  const [email, setEmail] = useState("")
  const [role, setrole] = useState("user")
  const [password, setPassword] = useState("")
  const userEmail = useRef("")
  const userPhone= useRef("")
  const username= useRef("")
  const userPassword = useRef("")
  const userAddress= useRef("")
  const userBusiness_name = useRef("")
  const userRole = useRef(role)
  const confirm_password = useRef("")

  useEffect(() => {
    var focus = document.querySelectorAll(".focus")
    focus = document.querySelectorAll(".focus")
    var move_up = document.querySelectorAll(".move_up")
    focus.forEach((val, index) => {
      focus[index].addEventListener("focusin",() => {
        move_up[index].classList.add("active")
        focus[index].classList.add("active")
      })

      val.addEventListener("keydown", () => {
        move_up[index].classList.add("active")
        focus[index].classList.add("active")
      })
    })
  })

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

  const signUp = e => {
    e.preventDefault()
    if(userPassword.current.value != confirm_password.current.value){
      alert("error", "Password does not match")
      return;
    }
    var submitbtn = document.querySelector(".submitbtn")
    submitbtn.innerHTML = `<div class="spinner-border spinner-border-sm"></div>`
    const name = username.current.value.split(" ")
    axios.post("/user/signup", {
      email : userEmail.current.value,
      phone : userPhone.current.value,
      address : userAddress.current.value,
      business_name : userBusiness_name.current.value,
      role : userRole.current.value,
      firstname : name[0],
      lastname : name[1],
      password : userPassword.current.value,
    })
    .then(res => {
      if(res.data.message == "user already exist"){
        alert("error", res.data.message)
      }else{
        alert("success", "signup was successful")
        window.location.href = "/dashboard"
      }
      submitbtn.innerHTML = `Sign up`
    })
    .catch(err => {
      alert("error", "invalid credentials")
      console.log(err)
      submitbtn.innerHTML = `Sign up`
    })
  }

  const setRole = (role) => {
    setrole(role)
    console.log(role)
  }


  return (
    <div className='login d-flex'>
      <div className="img">
        <img src={agent} alt="" />
      </div>

      <div className="form pb-5">
        <a href="/" className='text-dark'><h2 className="text-center mt-5 fw-bold">Swift</h2></a>
        <h4 className="text-center text-muted fw-bold">Sign up to Continue</h4>
        <p className="mb-0 text-center mt-3 alt">Already have an account? <a href="/login" className='mx-2'>Login in</a></p>

        <form action="" onSubmit={signUp}>
          <div className="inputs mt-3">
            <div className="text">
                <input ref={userEmail} required className='focus' type="email" />
                <p className='move_up'>Email</p>
            </div>
            <div className="text">
                <input ref={username} required className='focus' type="text" />
                <p className='move_up'>Full Name</p>
            </div>
            <div className="text">
                <input ref={userPhone} required className='focus' type="text" />
                <p className='move_up'>Phone Number</p>
            </div>
            <div className="text">
                <input ref={userPassword} required className='focus' type="password" />
                <p className='move_up'>Password</p>
            </div>
            <div className="text">
                <input ref={confirm_password} required className='focus' type="password" />
                <p className='move_up'>Confirm Password</p>
            </div>
            <div className="text">
                <input ref={userAddress} required className='focus' type="text" />
                <p className='move_up'>Address</p>
            </div>
            

            {
              role == "vendor" && 
            <>
              <div className="text">
                  <input ref={userBusiness_name} required className='focus' type="text" />
                  <p className='move_up'>Business Name</p>
              </div>
            </>
            }

            <div className="text">
              <input ref={userRole} type="hidden" name="" className='role' value={role} />
                <div class="dropdown">
                  <p type="button" class="btn btn-muted border for_what text-muted dropdown-toggle" data-bs-toggle="dropdown">
                    What you are signing up for?
                  </p>
                  <ul class="dropdown-menu">
                    <li onClick={() => setRole("user")}><a class="dropdown-item" href="#">User</a></li>
                    <li onClick={() => setRole("agent")}><a class="dropdown-item" href="#">Agent</a></li>
                    <li onClick={() => setRole("vendor")}><a class="dropdown-item" href="#">Vendor</a></li>
                  </ul>
              </div>
            </div>

            <div className="text-center">
                <button className='btn submitbtn'>Sign up</button>
            </div>
            
              <p className="text-center mt-4">Or sign up using </p>
              <div className="social d-flex text-center">
                <p className="mb-0"><i class="fa-brands fa-google text-danger"></i></p>
                <p className="mb-0 mx-4"><i class="fa-brands fa-facebook text-primary"></i></p>
              </div>
          </div>
        </form>
      </div>
    </div>
  )
}
