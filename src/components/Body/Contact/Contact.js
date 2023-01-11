import React from "react";
import './Contact.css';
import companyLoc from '../../../images/company_location.jpg'
import CallMeBack from "../../CallMeBack/CallMeBack";

const Contact = () => {
  return (
    <div className="contact_container">
      <span className="product_dir">Main / Contact</span>
      <h1>Contact</h1>
      <div className="table_and_loc">
        <div className="for_table">
        <table>
          <tr>
            <td>Company Name</td>
            <td>Phoeni̇x Bioenergy Orman Ürünleri̇
                Sanayi̇ Ve Diş Ti̇caret Li̇mi̇ted Şi̇rketi̇</td>
          </tr>
          <tr>
            <td>Adress</td>
            <td>Küçükköy Mah. Somalilar Sok. Aksoy Bblok 
No: 3/1 Ayvalik / Balikesi̇r / Turkey</td>
          </tr>
          <tr>
          <td>Tax Office</td>
            <td>Ayvalik</td>
          </tr>
          <tr>
          <td>Tax Number</td>
            <td>729 120 2246</td>
          </tr>
          <tr>
          <td>Nace Code</td>
            <td>46.19.01 - Intermediates Who Wholesale 
Various Goods On A Fees Or Contractual Basis</td>
          </tr>
          <tr>
          <td>Registry Name</td>
            <td>Küçükköy Mah. Somalilar Sok. Aksoy Bblok 
No: 3/1 Ayvalik / Balikesi̇r / Turkey</td>
          </tr>
          <tr>
          <td>Trade Registry Number</td>
            <td>005788</td>
          </tr>
          <tr>
          <td>Mersi̇s Number </td>
            <td>0729120224600001</td>
          </tr>
          <tr>
          <td>Capital</td>
            <td> 400.000,00 TL</td>
          </tr>
          <tr>
          <td>Bank Name </td>
            <td>Turki̇ye Vaki̇flar Bankasi̇ T.a.o.</td>
          </tr>
          <tr>
          <td>Branch Name</td>
            <td> Ayvalik-Balikesi̇r</td>
          </tr>
          <tr>
          <td>Iban Number TL </td>
            <td>TR69 0001 5001 5800 7317 6803 49</td>
          </tr>
          <tr>
          <td>Iban Number USD</td>
            <td> TR39 0001 5001 5804 8021 6440 31</td>
          </tr>
          <tr>
          <td>Iban Number EUR</td>
            <td> TR51 0001 5001 5804 8021 6440 09</td>
          </tr>
          <tr>
          <td>Swift Code</td>
            <td>TVBATR2AXXX</td>
          </tr>
        </table>
        </div>
        <img className="company_loc" src={companyLoc} alt=""></img>
      </div>
      <CallMeBack></CallMeBack>
    </div>
  )
}

export default Contact;