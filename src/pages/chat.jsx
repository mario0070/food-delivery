import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'
import "/public/css/chat.css"
import banner3 from "/img/home-banner3.jpg"
import $ from 'jquery';
import { useCookies } from 'react-cookie'
import axios from '../utils/axios'

export default function Chat() {
  const msgInputs = useRef("")
  const [role, setRole] = useState("Vendor")
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.user ?? "")
  const [chat, setchat] = useState([])
  const [agent, setagent] = useState([])
  const [loaded, setloaded] = useState(true)
  const [recName, setrecName] = useState("Start Conversation")
  const [recID, setrecID] = useState("")

  const toggle = () => {
    const topbar = document.querySelector(".topbar")
    const sidebar = document.querySelector(".sidebar")
    const main_content = document.querySelector(".main_content")
    topbar.classList.toggle("active")
    main_content.classList.toggle("active")
    sidebar.classList.toggle("active")
  }

  const alert = (icon, text) => {
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
      title: text
    });
  }

  const sendMsg = () => {
    if(msgInputs.current.value != ""){
      $(".msg-container").append(`
      <div class="wrap2 mt -2">
      <p class='mb-0 text-end mx-3 msgIcon'><i class="fa-regular fa-user"></i></p>
      <div class="sentMsg mt-0">
          <div class="myMsg">
              <p class="mb-0 p-2">${msgInputs.current.value}</p>
          </div>
        </div>
      </div>`)
      $(".msg-container").scrollTop($(".msg-container").height()*200);
      sendMsgApi(recID,msgInputs.current.value)
      msgInputs.current.value = ""
    }else{
      alert("warning","Please type a message")
    }
  }

  useEffect(() => {
    axios.get("/user", {
        id : user._id
    }).then(res => {
        setagent(res.data.users)
    })
    .catch(error => {
        console.log(error)
    })
  },[agent, chat])

  const fetchMsg = (recipient, name) => {
    setrecName(name)
    setrecID(recipient)
    setloaded(false)
    axios.post("/chat/conversation", {
      recipient : recipient,
      sender : user._id
    }).then(res => {
        setloaded(true)
        setchat(res.data.data)
        $(".msg-container").scrollTop($(".msg-container").height()*200);
    })
    .catch(error => {
        console.log(error)
    })
  }

  const sendMsgApi = (recipient, msg) => {
    axios.post("/chat/create", {
      recipient : recipient,
      sender : user._id,
      msg : msg
    }).then(res => {
      console.log(res)
    })
    .catch(error => {
        console.log(error)
    })
  }

  if(cookie.user){
    return (
      <div className='vendor_dashboard'>
        <Sidebar role={role}/>

        <div className="main_content">
          <Topbar toggle={toggle}/>
          
          <div className="chat special d-flex">
              <div className="all_chats">
                <h4 className='fw-bold'>Chat</h4>
                <div className="user mt-5 d-flex">
                  <div className="d-flex">
                    <img src={banner3} alt="" />
                      <div className="mx-3">
                        <p className="mb-0 fw-bold text-capitalize">{user.lastname} {user.firstname}</p>
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
                    {user.role == "vendor" && agent.map((val, index) => {
                      if(val.role != "vendor"){
                        return (
                            <div onClick={() => fetchMsg(val._id,`${val.firstname} ${val.lastname}`)} className="d-flex mt-2 single">
                              <div className="d-flex">
                                  <p className="dot mb-0"></p>
                                  <img src={banner3} alt="" />
                                  <div className="mx-3">
                                    <p className="mb-0 fw-bold text-capitalize">{val.firstname}</p>
                                    <p className="msg text-capitalize">{val.role}</p>
                                  </div>
                              </div>
                              <i class="fa-regular fa-message"></i>
                          </div>
                        )
                      }
                    })}

                    {user.role == "user" && agent.map((val, index) => {
                      if(val.role != "user"){
                        return (
                            <div onClick={() => fetchMsg(val._id, `${val.firstname} ${val.lastname}`)} className="d-flex mt-2 single">
                              <div className="d-flex">
                                  <p className="dot mb-0"></p>
                                  <img src={banner3} alt="" />
                                  <div className="mx-3">
                                    <p className="mb-0 fw-bold text-capitalize">{val.firstname}</p>
                                    <p className="msg text-capitalize">{val.role}</p>
                                  </div>
                              </div>
                              <i class="fa-regular fa-message"></i>
                          </div>
                        )
                      }
                    })}
                    
                  </div>
                </div>

              </div>
              
              <div className="chat_box">
                  <div className="head d-flex">
                    <div className="">
                      <p className="fw-bold mb-0 text-capitalize">{recName}</p>
                      <div className="d-flex">
                        <p className="dot mb-0"></p>
                        <p className="mb-0">Active Now</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <i class="fa-solid fa-bell"></i>
                      <i class="fa-solid fa-info"></i>
                      <i class="fa-solid fa-gears"></i>
                    </div>
                  </div>

                  <div className="pt-4 msg-container" id='msgBody'>

                    {
                      !loaded && <div className='text-center mt-5'><div class="spinner-border text-dark"></div></div>
                    }

                    { loaded &&
                      chat.map(val => {
                        if(val != null){
                          if(user._id == val.sender._id){
                            return (
                              <div class="wrap2 mt -2">
                                <p className='mb-0 text-end mx-3 msgIcon'><i class="fa-regular fa-user"></i></p>
                                <div class="sentMsg mt-0">
                                  <div class="myMsg">
                                      <p class="mb-0 p-2">{val.msg}</p>
                                  </div>
                                </div>
                              </div> 
                            )
                          }else{
                            return (
                              <div className="wrap1 pt-4">
                                <div className="">
                                    <p className='mb-0 mx-3'><i class="fa-regular fa-user"></i></p>
                                    <div className="msgBodys mt-0">
                                        <p className='mb-0 p-2'>{val.msg}</p>
                                    </div>
                                </div>
                              </div>
                            )
                          }
                        }
                      }).reverse()
                    }
                                    
                  </div>

                  <div className="sendBtn">
                    <div className="d-flex mt-3">
                      <textarea  ref={msgInputs} name="" id=""  placeholder='Type message.....'></textarea>
                      <button className="btn send_msg text-white" onClick={sendMsg}>Send message</button>
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
  }else{
    window.location.href = "/login"
  }
}
