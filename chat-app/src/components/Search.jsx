import React from 'react'

export default function Search() {
  return (
   <div className="Search">
   <div className="searchForm">
   <input type="text" placeholder="Find a user"  style={{
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    borderBottom:"1px solid gray",
    width:"99%"
   }}/>
   </div>
   <div className="userChat">
   <img style={{width:"50px",height:"50px",borderRadius: "50%",
                    objectFit: "cover"}} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
    <div className="userChatInfo">
    <span>Yassin</span>
    </div>
   </div>
   
   </div>
  )
}
