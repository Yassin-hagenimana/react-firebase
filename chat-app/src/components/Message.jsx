import React from 'react'
import Img from "../img/yassin.jpg"
export default function Message() {
  return (
    <div className="message">
    <div className="messageInfo">
    <img src={Img} alt="" />
    <span>Just now</span>
    </div>

    <div className="messageContent">
    <p>Hello</p>
     <img src={Img} alt="" />
    </div>
    </div>
  )
}
