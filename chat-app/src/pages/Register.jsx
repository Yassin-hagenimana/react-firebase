import React from 'react'
import Avatar from "../img/yassin.jpg"
export default function Register() {
  return (
    <div className='formContainer'>
    <div className="formWrapper">
    <span className="logo">Yassin Chat</span>
    <span className="title">Register</span>
    <form>
    <input type="text" placeholder='Display name' />
    <input type="email" placeholder='Email' />
    <input type="password" placeholder='Password' />
    <input style={{display:"none"}} type="file" id="file"/>
    <label htmlFor="file">
    <img src={Avatar} alt="avatar" />
    <span>Add Avatar</span>
    </label>
    <button>Sign up</button>
    </form>
    <p>You  have an account? Login</p>
    </div>
    </div>
  )
}
