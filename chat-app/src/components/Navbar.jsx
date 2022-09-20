  import React from 'react'
  
  export default function Navbar() {
    return (
      <div className="navbar">
      <span className="logo">Yassin Chat</span>
      <div className="user">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
      <span>Yassin</span>
      <button>logout</button>
      </div>
    
      </div>
    )
  }
  