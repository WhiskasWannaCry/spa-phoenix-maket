import React from "react";
import './CallMeBack.css'

const CallMeBack = () => {
  return (
    <div className="callmeback_container">  
      <div className="callmeback_text_container">
        <span className="callmeback_primary_text">
          We provide bulk industrial-grade 
          wood pellets
        </span>
        <span className="callmeback_secondary_text">
          for clean biomass energy to Europe’s leading energy companies sing sea vessels of 3.000 to 30.000 tons.
        </span>
      </div>
      <div className="callmeback_inputs_and_button_container">
        <input className="callmeback_input_user_name_and_tel" type="text" placeholder="Enter your name"></input>
        <input className="callmeback_input_user_name_and_tel" type="text" placeholder="Enter your phone"></input>
        <button className="callmeback_button">Call me</button>
      </div>
    </div>
  );
}

export default CallMeBack;