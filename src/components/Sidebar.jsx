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
      <BsTwitter fontSize="medium"/>
      <BsFacebook fontSize="medium"/>
      <AiOutlineMail fontSize="medium"/> 
    </div>
    </div>
  )
}

export default Sidebar;