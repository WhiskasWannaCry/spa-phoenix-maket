import React from "react";
import './Footer.css';

const Footer = ({body,setBody,openModal}) => {
  return (
    <div className="footer_container">
      <div className="logo_and_rights">
        <img></img>
        <span className="rights">
        © 2022 PHOENİX BIOENERGY ORMAN ÜRÜNLERİ SANAYİ VE DIŞ TİCARET LİMİTED ŞİRKETİ
        All rights reserved  
        </span>
      </div>
      <nav className="nav_footer">
        <button className="nav_footer_btn" onClick={() => setBody('main')}>Main</button>
        <button className="nav_footer_btn" onClick={() => setBody('product')}>Product</button>
        <button className="nav_footer_btn" onClick={() => setBody('about')}>About us</button>
        <button className="nav_footer_btn" onClick={() => setBody('contact')}>Contact</button>
        <button className="nav_footer_btn" onClick={() => setBody('certificates')}>Certificates</button>
      </nav>
      <div className="our_info">
        <a href="tel:+999999999999" className="footer_tel">+999999999999</a>
        <a href="mailTo:mail@example.com" className="footer_mail">mail@example.com</a>
        <span className="footer_adress">Adress	Küçükköy Mah. Somalilar Sok. Aksoy B-blok no: 3/1 Ayvalik/Balikesi̇r/Turkey
        </span>
      </div>
      <div className="footer_callmeback_and_privacy_policy">
        <button className="footer_callmeback_btn" onClick={() => openModal()}>Call me back</button>
        <button className="privacy_policy">Privacy Policy</button>
      </div>
    </div>
  )
}

export default Footer;