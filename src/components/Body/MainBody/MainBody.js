import React from "react";
import './MainBody.css'
import mainImg from '../../../images/main_image.jpg'
import firstProductImg from '../../../images/products/first_product.jpg'
import secondProductImg from '../../../images/products/second_product.jpg'
import thirdProductImg from '../../../images/products/third_product.jpg'
import fourthProductImg from '../../../images/products/fourth_product.jpg'
import CallMeBack from "../../CallMeBack/CallMeBack";
import forestryImg from '../../../images/icons/forestry.jpg'
import customersImg from '../../../images/icons/customers.jpg'
import supportImg from '../../../images/icons/support.jpg'
import woodImg from '../../../images/icons/wood.jpg'
import clientImg from '../../../images/icons/client.jpg'
import nineYearsImg from '../../../images/icons/9years.jpg'
import aboutUsImg from '../../../images/icons/about_us.jpg'
import deliveryImg from '../../../images/icons/delivery.jpg'
import Footer from "../../Footer/Footer";


const MainBody = ({openModal}) => {
  return (
    <div className="main_body_container">
      <div className="text_for_main_image">
        <span className="primary_text">
          A bright headline about what we offer
        </span>
        <span className="secondary_text">
          A brief description of the essence of the offer, 
          prompting its content to click on the button below
        </span>
        <button className="body_image_callback_btn" onClick={() => openModal()}>Call me back</button>
      </div>
      <h2>Our products</h2>
      <div className="our_products_container">
        <div className="product_card">
          <img className="product_image" src={firstProductImg}></img>
          <span className="product_name">Pellets</span>
          <span className="product_description">
          A brief description of the product,
           here is a stock for a new text, here is a stock for a new text,
            here is a stock for a new text, here is a stock for a new text...
          </span>
          <button className="product_show_more_btn">Show more</button>
        </div>
        <div className="product_card">
        <img className="product_image" src={secondProductImg}></img>
          <span className="product_name">Briquettes</span>
          <span className="product_description">
          A brief description of the product,
           here is a stock for a new text, here is a stock for a new text,
            here is a stock for a new text, here is a stock for a new text...
          </span>
          <button className="product_show_more_btn">Show more</button>
        </div>
        <div className="product_card">
        <img className="product_image" src={thirdProductImg}></img>
          <span className="product_name">Charcoal</span>
          <span className="product_description">
          A brief description of the product,
           here is a stock for a new text, here is a stock for a new text,
            here is a stock for a new text, here is a stock for a new text...
          </span>
          <button className="product_show_more_btn">Show more</button>
        </div>
        <div className="product_card">
        <img className="product_image" src={fourthProductImg}></img>
          <span className="product_name">Peat briquette</span>
          <span className="product_description">
          A brief description of the product,
           here is a stock for a new text, here is a stock for a new text,
            here is a stock for a new text, here is a stock for a new text...
          </span>
          <button className="product_show_more_btn">Show more</button>
        </div>
      </div>
      <CallMeBack></CallMeBack>
      <div className="why_we_are_container">
        <div className="wwa_primary_text">Why we are?</div>
        <div className="reasons">
          <div className="reason">
            <img className="reason_img" src={forestryImg}></img>
            <div className="reason_text">
              <span className="reason_primary_text">
              Responsible Forestry
              </span>
              <span className="reason_secondary_text">
              Biomass sourced from responsible manufacturers who share our belief in sustainable forestry.
              </span>
            </div>
          </div>
          <div className="reason">
            <img className="reason_img" src={supportImg}></img>
            <div className="reason_text">
              <span className="reason_primary_text">
                Multilingual Client Support
              </span>
              <span className="reason_secondary_text">
              Our client success managers are fluent in all major European languages.
              </span>
            </div>
          </div>
          <div className="reason">
            <img className="reason_img" src={clientImg}></img>
            <div className="reason_text">
              <span className="reason_primary_text">
              Client-centric B2B Approach
              </span>
              <span className="reason_secondary_text">
              We appreciate the human element in B2B relationships. B2B=H2H.
              </span>
            </div>
          </div>
          <div className="reason">
            <img className="reason_img" src={woodImg}></img>
            <div className="reason_text">
              <span className="reason_primary_text">
              Certified Wood Bioenergy
              </span>
              <span className="reason_secondary_text">
              Universally recognized certificates are testimonies to our shared commitments regarding quality, environment, ethics and sustainability.
              </span>
            </div>
          </div>
          <div className="reason">
            <img className="reason_img" src={nineYearsImg}></img>
            <div className="reason_text">
              <span className="reason_primary_text">
              9 years on the market

              </span>
              <span className="reason_secondary_text">
              Our experience ensures the high quality of our products and services
              </span>
            </div>
          </div>
          <div className="reason">
            <img className="reason_img" src={customersImg}></img>
            <div className="reason_text">
              <span className="reason_primary_text">
              1,587 happy customers
              </span>
              <span className="reason_secondary_text">
              We work with integrity and make sure that the customer is satisfied with our service
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about_and_delivery_container">
        <div className="about_us">
          <div className="img_and_primary_text">
            <img className="about_us_img" src={aboutUsImg}></img>
            <span className="about_us_and_delivery_primary_text">
            About us
            </span>
          </div>
          <span className="about_us_and_delivery_text">
            <p>Since 2016, we have been successfully selling our own products in countries such as Italy, Germany, Slovakia, Lithuania, Latvia and other EU countries.</p>
            <p>The main type of export products are pellets. In less than 4 years, more than 20,000 tons were shipped to more than 10 EU countries.</p>
            <p>The demand for “Ruf” and “Pini-Kay” briquettes is not as great as for pellets, but this does not prevent us from selling a total of more than 400 tons of briquettes per month.</p>
            <p>During all this time, we have managed to establish ourselves as a responsible supplier of high-quality wood fuel.</p>
            <p>We have extensive contacts with European carriers, which allows us to help with the search for vehicles at the lowest market prices.</p>
          </span>
          <span className="hr1"></span>
        </div>
        <div className="delivery">
          <div className="img_and_primary_text">
          <img className="delivery_img" src={deliveryImg}></img>
          <span className="about_us_and_delivery_primary_text">
          Delivery
            </span>
          </div>
          <span className="about_us_and_delivery_text">
            <p>An integral and important part of the purchase of solid fuel is its delivery to the buyer's address. The Pechkin company has its own fleet of cars, with the help of which we carry out prompt delivery of any number of tons in strictly agreed terms.</p>
            <p>We can also offer delivery directly from our production from 20 tons, which is the most profitable solution and significantly reduces the final cost of goods at your place.</p>
            <p>If you do not need delivery, then you can pick up any required amount of fuel without any problems by making just one preliminary call to the office.</p>
            <p>For export clients, we search for transport to any EU country by any type of transport: - By car, - By container, - By railway car, - By Ship</p>
            <p>For more than 5 years of work in the export market, we have found optimal routes and transport companies that allow us to offer transport rates much lower than market rates. Declaration and customs clearance</p>
          </span>
          <span className="hr2"></span>
        </div>
      </div>

    </div>
  )
}

export default MainBody;