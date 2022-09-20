import React from 'react'
import Attach from "../img/attach.png"
import Img from "../img/img.png"
export default function Input() {
  return (
    <div className='input'>
    <input type="text" placeholder='Type something...' />
    <div className="send">
    <img src={Attach} alt="" />
    <input style={{display:"none"}} type="file" id="file"/>
    <label htmlFor="file">
    <img src={Img} alt="avatar" />
    </label>
    <button>Send</button>
    </div>
    
    </div>
  )
}
