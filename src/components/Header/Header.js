import React from "react";
import "./Header.css"
import logo from '../../images/logo.jpg'
import { useState } from "react";

const Header = ({body,setBody,openModal}) => {
  return (
    <div className="header_container">
      <div className="header_logo">
        <img className="logo" src={logo}></img>
      </div>
      <nav className="header_page_nav">
        <button id="header_main_btn" className="header_nav_btn" onClick={() => setBody('main')}>Main</button>
        <button id="header_product_btn" className="header_nav_btn" onClick={() => setBody('product')}>Product</button>
        <button id="header_about_us_btn" className="header_nav_btn" onClick={() => setBody('about')}>About us</button>
        <button id="header_contact_btn" className="header_nav_btn" onClick={() => setBody('contact')}>Contact</button>
        <button id="header_certificates_btn" className="header_nav_btn" onClick={() => setBody('certificates')}>Certificates</button>
      </nav>
      <button className="header_callback" onClick={() => openModal()}>Call me back</button>
    </div>
  )
}

export default Header;