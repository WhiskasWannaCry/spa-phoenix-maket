import React from "react";
import './MainBody.css'
import mainImg from '../../../images/main_image.jpg'
import firstProductImg from '../../../images/products/first_product.jpg'
import secondProductImg from '../../../images/products/second_product.jpg'
import thirdProductImg from '../../../images/products/third_product.jpg'
import fourthProductImg from '../../../images/products/fourth_product.jpg'

const MainBody = () => {
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
        <button className="body_image_callback_btn">Call me back</button>
      </div>
      <img className="main_image" src={mainImg}></img>
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
          
        </div>
        <div className="product_card">
          
        </div>
        <div className="product_card">
          
        </div>
      </div>
    </div>
  )
}

export default MainBody;