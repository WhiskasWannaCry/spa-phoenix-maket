import React from "react";
import './ProductBody.css'
import mainImg from '../../../images/product_main_image.jpg'
import CallMeBack from "../../CallMeBack/CallMeBack";
import Footer from "../../Footer/Footer";
import firstProductImg from '../../../images/products/first_product.jpg'
import secondProductImg from '../../../images/products/second_product.jpg'
import thirdProductImg from '../../../images/products/third_product.jpg'
import fourthProductImg from '../../../images/products/fourth_product.jpg'

const ProductBody = () => {
  return (
    <div className="product_body_container">
      <span className="product_dir">Main/Product</span>
      <h1>Our products</h1>
      <img className="product_main_img" src={mainImg}></img>
      <div className="pellets_and_briquettes_container">
        <div className="pellets_container">
          <span className="pellets">Pellets</span>
          <div className="product">
            <div className="pellets_and_briquettes_product_card">
              <img className="pellets_and_briquettes_product_image" src={firstProductImg}></img>
              <span className="pellets_and_briquettes_product_name">White 15 kg / big bags</span>
              <span className="pellets_and_briquettes_product_description">
              A brief description of the product,
              here is a stock for a new text, here is a stock for a new text,
                here is a stock for a new text, here is a stock for a new text...
              </span>
              <span className="pellets_and_briquettes_product_price">From 300$</span>
              <button className="pellets_and_briquettes_product_show_more_btn">More info</button>
            </div>
            <div className="pellets_and_briquettes_product_card">
              <img className="pellets_and_briquettes_product_image" src={firstProductImg}></img>
              <span className="pellets_and_briquettes_product_name">Dark 15 kg / big begs</span>
              <span className="pellets_and_briquettes_product_description">
              A brief description of the product,
              here is a stock for a new text, here is a stock for a new text,
                here is a stock for a new text, here is a stock for a new text...
              </span>
              <span className="pellets_and_briquettes_product_price">From 300$</span>
              <button className="pellets_and_briquettes_product_show_more_btn">More info</button>
            </div>
          </div>
        </div>
        <div className="briquettes_container">
          <span className="briquettes">Briquettes</span>
          <div className="product">
            <div className="pellets_and_briquettes_product_card">
              <img className="pellets_and_briquettes_product_image" src={secondProductImg}></img>
              <span className="pellets_and_briquettes_product_name">Coniferous briquettes</span>
              <span className="pellets_and_briquettes_product_description">
              A brief description of the product,
              here is a stock for a new text, here is a stock for a new text,
                here is a stock for a new text, here is a stock for a new text...
              </span>
              <span className="pellets_and_briquettes_product_price">From 300$</span>
              <button className="pellets_and_briquettes_product_show_more_btn">More info</button>
            </div>
            <div className="pellets_and_briquettes_product_card">
              <img className="pellets_and_briquettes_product_image" src={secondProductImg}></img>
              <span className="pellets_and_briquettes_product_name">Birch briquettes</span>
              <span className="pellets_and_briquettes_product_description">
              A brief description of the product,
              here is a stock for a new text, here is a stock for a new text,
                here is a stock for a new text, here is a stock for a new text...
              </span>
              <span className="pellets_and_briquettes_product_price">From 300$</span>
              <button className="pellets_and_briquettes_product_show_more_btn">More info</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="boards">Boards</h2>
      <div className="boards_container">
        <div className="top_boards">
          <div className="product_card">
            <img className="product_image" src={thirdProductImg}></img>
            <span className="product_name">Conifer </span>
            <span className="product_description">
              A brief description of the product,
              here is a stock for a new text, here is a stock for a new text,
              here is a stock for a new text, here is a stock for a new text...
            </span>
            <span className="product_price">From 300$</span>
            <button className="product_show_more_btn">More info</button>
          </div>
          <div className="product_card">
            <img className="product_image" src={thirdProductImg}></img>
            <span className="product_name">Larch</span>
            <span className="product_description">
              A brief description of the product,
              here is a stock for a new text, here is a stock for a new text,
              here is a stock for a new text, here is a stock for a new text...
            </span>
            <span className="product_price">From 300$</span>
            <button className="product_show_more_btn">More info</button>
          </div>
          <div className="product_card">
            <img className="product_image" src={thirdProductImg}></img>
            <span className="product_name">Boarding products</span>
            <span className="product_description">
              A brief description of the product,
              here is a stock for a new text, here is a stock for a new text,
              here is a stock for a new text, here is a stock for a new text...
            </span>
            <span className="product_price">From 300$</span>
            <button className="product_show_more_btn">More info</button>
          </div>
          <div className="product_card">
            <img className="product_image" src={thirdProductImg}></img>
            <span className="product_name">Planken</span>
            <span className="product_description">
              A brief description of the product,
              here is a stock for a new text, here is a stock for a new text,
              here is a stock for a new text, here is a stock for a new text...
            </span>
            <span className="product_price">From 300$</span>
            <button className="product_show_more_btn">More info</button>
          </div>
        </div>
        <div className="bottom_boards">
        <div className="product_card">
          <img className="product_image" src={thirdProductImg}></img>
          <span className="product_name">Timber</span>
          <span className="product_description">
            A brief description of the product,
            here is a stock for a new text, here is a stock for a new text,
            here is a stock for a new text, here is a stock for a new text...
          </span>
          <span className="product_price">From 300$</span>
          <button className="product_show_more_btn">More info</button>
        </div>
        <div className="product_card">
          <img className="product_image" src={thirdProductImg}></img>
          <span className="product_name">Linings </span>
          <span className="product_description">
            A brief description of the product,
            here is a stock for a new text, here is a stock for a new text,
            here is a stock for a new text, here is a stock for a new text...
          </span>
          <span className="product_price">From 300$</span>
          <button className="product_show_more_btn">More info</button>
        </div>
        <div className="product_card">
          <img className="product_image" src={thirdProductImg}></img>
          <span className="product_name">OSB board</span>
          <span className="product_description">
            A brief description of the product,
            here is a stock for a new text, here is a stock for a new text,
            here is a stock for a new text, here is a stock for a new text...
          </span>
          <span className="product_price">From 300$</span>
          <button className="product_show_more_btn">More info</button>
        </div>
        </div>
      </div>
      <CallMeBack></CallMeBack>
    </div>
  );
}

export default ProductBody;