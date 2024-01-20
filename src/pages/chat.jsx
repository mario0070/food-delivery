import React from 'react'
import Sidebar from '../components/sideBar'
import Topbar from '../components/topbar'
import "/public/css/chat.css"
import banner3 from "/img/home-banner3.jpg"

export default function Chat() {

  const toggle = () => {
    const topbar = document.querySelector(".topbar")
    const sidebar = document.querySelector(".sidebar")
    const main_content = document.querySelector(".main_content")
    topbar.classList.toggle("active")
    main_content.classList.toggle("active")
    sidebar.classList.toggle("active")
  }

  return (
    <div className='vendor_dashboard'>
      <Sidebar/>

      <div className="main_content">
        <Topbar toggle={toggle}/>
        
        <div className="chat d-flex">
            <div className="all_chats">
              <h4 className='fw-bold'>Chat</h4>
              <div className="user mt-5 d-flex">
                <div className="d-flex">
                  <img src={banner3} alt="" />
                    <div className="mx-3">
                      <p className="mb-0 fw-bold">Ganiu Jamiu</p>
                      <div className="d-flex">
                        <p className='dot mb-0'></p>
                        <p className="mb-0">Active</p>
                      </div>
                    </div>
                </div>
                <div className="">
                  <i class="fa-solid fa-bell text-danger"></i>
                  </div>
              </div>

              <div className="input mt-5 mb-4">
                <input type="text" name="" id=""  placeholder='Search....'/>
              </div>

              <div className="recent">
                <p className="mb-2 text-muted">Recent</p>
                <div className="box">
                  <div className="d-flex mt-2 single">
                    <div className="d-flex">
                        <p className="dot mb-0"></p>
                        <img src={banner3} alt="" />
                        <div className="mx-3">
                          <p className="mb-0 fw-bold">Ganiu jamiu</p>
                          <p className="msg">Hey, How are you?</p>
                        </div>
                    </div>
                    <i class="fa-regular fa-message"></i>
                  </div>
                  <div className="d-flex single">
                    <div className="d-flex">
                        <p className="dot mb-0"></p>
                        <img src={banner3} alt="" />
                        <div className="mx-3">
                          <p className="mb-0 fw-bold">Ganiu jamiu</p>
                          <p className="msg">How well is your service, i wanna try it out</p>
                        </div>
                    </div>
                    <i class="fa-regular fa-message"></i>
                  </div>
                  <div className="d-flex single">
                    <div className="d-flex">
                        <p className="dot mb-0"></p>
                        <img src={banner3} alt="" />
                        <div className="mx-3">
                          <p className="mb-0 fw-bold">Ganiu jamiu</p>
                          <p className="msg">last message</p>
                        </div>
                    </div>
                    <i class="fa-regular fa-message"></i>
                  </div>
                </div>
              </div>

            </div>

            <div className="chat_box">
                <div className="head d-flex">
                  <div className="">
                    <p className="fw-bold mb-0">Ganiu Jamiu</p>
                    <div className="d-flex">
                      <p className="dot mb-0"></p>
                      <p className="mb-0">Active Now</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-bell"></i>
                  </div>
                </div>
            </div>
        </div>

        <div className="section3 mt-4">
          <p className="text-center text-white">© Copyright 2016, All rights reserved</p>
        </div>
      </div>
      
    </div>
  )
}
