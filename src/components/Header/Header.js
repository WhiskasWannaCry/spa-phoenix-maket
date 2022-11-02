import React from "react";
import "./Header.css"
import logo from '../../images/logo.jpg'

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_logo">
        <img className="logo" src={logo}></img>
      </div>
      <nav className="header_page_nav">
        <button className="header_nav_btn">Main</button>
        <button className="header_nav_btn">Product</button>
        <button className="header_nav_btn">About us</button>
        <button className="header_nav_btn">Contact</button>
        <button className="header_nav_btn">Certificates</button>
      </nav>
      <button className="header_callback">Call me back</button>
    </div>
  )
}

export default Header;