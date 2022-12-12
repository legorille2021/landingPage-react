import React from 'react'
import './css/sidebar.css';
import {BsFacebook, BsTwitter} from 'react-icons/bs';
import {MdDragHandle} from 'react-icons/md';
import {AiOutlineMail} from 'react-icons/ai';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <a href="/">Search</a>
        <a href="/">Store</a>
        <a href="/">About</a>
        <MdDragHandle  fontSize="medium"/>
      </div>
      <div className="sidebarDown">
        <div className="icon-btn">
        <BsTwitter fontSize="medium"/>
        </div>
     
        <div className="icon-btn"> 
        <BsFacebook fontSize="medium"/>
        </div>

        <div className="icon-btn">
        <AiOutlineMail fontSize="medium"/> 
        </div>
    </div>
    </div>
  )
}

export default Sidebar;