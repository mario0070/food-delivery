import React, { useEffect, useRef, useState } from 'react'
import "/public/css/login.css"
import agent from "/img/agent.png"
import banner1 from "/img/home-banner1.jpg"
import axios from '../utils/axios'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userEmail = useRef("")
  const userPassword = useRef("")
  
  useEffect(() => {
    var focus = document.querySelectorAll(".focus")
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

  const logIn = e => {
    e.preventDefault()
    var submitbtn = document.querySelector(".submitbtn")
    submitbtn.innerHTML = `<div class="spinner-border spinner-border-sm"></div>`
    axios.post("/user/login", {
      email : userEmail.current.value,
      password : userPassword.current.value,
    })
    .then(res => {
      console.log(res)
      alert("success", "User is login")
      window.location.href = "/dashboard"
    })
    .catch(err => {
      alert("error", "invalid credentials")
      console.log(err)
      submitbtn.innerHTML = `Login`
    })
  }


  return (
    <div className='login d-flex'>
      <div className="img">
        <img src={agent} alt="" />
      </div>

      <div className="form pb-5">
        <a href="/" className='text-dark'><h2 className="text-center mt-5 fw-bold">Swift</h2></a>
        <h4 className="text-center text-muted fw-bold">Login to Continue</h4>
        <p className="mb-0 text-center mt-3 alt">Don't have an account? <a href="/register" className='mx-2'>Sign up</a></p>

        <div className="inputs mt-5">
           <form action="" onSubmit={logIn}>
              <div className="text">
                  <input required className='focus' type="text" ref={userEmail} onClick={e => setEmail(e.target.value)} />
                  <p className='move_up'>Email</p>
              </div>
              <div className="text">
                  <input required className='focus' type="password" ref={userPassword} onClick={e => setPassword(e.target.value)} />
                  <p className='move_up'>Password</p>
              </div>
              <div className="text-center">
                  <a href="">Forgot Password?</a>
                  <button className='btn submitbtn'>Login</button>
              </div>
           </form>
           
            <p className="text-center mt-4">Or sign up using </p>
            <div className="social d-flex text-center">
              <p className="mb-0"><i class="fa-brands fa-google text-danger"></i></p>
              <p className="mb-0 mx-4"><i class="fa-brands fa-facebook text-primary"></i></p>
            </div>
        </div>
      </div>
    </div>
  )
}
