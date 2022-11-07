import React from "react";
import './Certificates.css';
import certImg from '../../../images/certificate.jpg'
import CallMeBack from "../../CallMeBack/CallMeBack";

const Certificates = () => {
  return (
    <div className="certificates_container">
      <span className="product_dir">Main / Certificates</span>
      <h1>Certificates</h1>
      <span className="cert_desk">Here we have collected certificates that once again confirm our competence in the manufacture of bio-energy products. </span>
      <div className="certificates">
        <img className="cert_img" src={certImg} alt=""></img>
        <img className="cert_img" src={certImg} alt=""></img>
        <img className="cert_img" src={certImg} alt=""></img>
      </div>
      <CallMeBack></CallMeBack>
    </div>
  )
}

export default Certificates;