import React from "react";
import './AboutUs.css'
import op1Img from '../../../images/op1.jpg'
import op2Img from '../../../images/op2.jpg'
import CallMeBack from "../../CallMeBack/CallMeBack";

const AboutUs = () => {
  return (
    <div className="about_container">
      <span className="product_dir">Main / About us</span>
      <h1>About us</h1>
      <div className="img_and_description">
        <img className="img_for_desk" src={op1Img} alt=""></img>
        <div className="header_and_desk">
          <h3>Our production</h3>
          <p className="about_p">From the first years of work in the solid fuel business it became clear that we can't do without our own production facilities.
But, as you know, it is not a problem to buy equipment and find competent specialists, how to find a quality, constantly updated raw material base, which will provide a continuous process of producing briquettes or pellets all year round.</p>
          <p className="about_p">So in 2013 began our endless trips to major woodworking companies in Russia. And by the summer of 2014 we managed to find a large enterprise in the Kirov region, with which we partnered to install our first press from the German company "RuF". After a short installation and commissioning we were able to reach operating capacity and produce 7-9 tons of briquettes per day in two shifts. Having successfully implemented this project, we decided not to stop the production of wood briquettes and in 2016 the first pelletizer OGM-1.5 was installed in Belokholunitsky district of Kirov region, which allows to produce more than 1 ton of premium wood pellets per hour.</p>
          <p className="about_p">At the moment we have one production of wood briquettes and two production of pellets. The total capacity is 200-220 tons of briquettes per month and 800-900 tons of pellets per month.</p>
        </div>
      </div>
      <div className="img_and_description">
        <div className="header_and_desk">
          <h3>Our production</h3>
          <p>It's no secret that for the successful development and exploration of new markets - you can not stand still and trade in one or two types of fuel.</p>
          <span>We have 4 types of RuF wood briquettes only:</span>
          <ul>
          <li>Mix briquette (made of coniferous and birch sawdust)</li>
          <li>Birch "dust" briquette (made of birch wood flour)</li>
          <li>Briquettes of oak dust (from oak wood flour),</li>
          <li>Mixture of birch "dust" briquettes with the addition of wood chips (70-80% birch flour, the rest is birch chips).</li>
          </ul>
          <span>Besides RuF briquettes we also sell such briquettes as Pini-Kay, Nielsen and Nestro, packed in 10 kg shrink-wrapped film.
But what can you do nowadays without wood pellets? And we also have 4 kinds of them:</span>
          <ul>
            <li>White "premium" 6mm</li>
            <li>Light "standard" 6mm</li>
            <li>Dark "cappuccino" 6-8 mm</li>
            <li>Agropellets from sunflower husks</li>
          </ul>
        </div>
        <img className="img_for_desk" src={op2Img} alt=""></img>
      </div>
      <CallMeBack></CallMeBack>
    </div>
  )
}

export default AboutUs;