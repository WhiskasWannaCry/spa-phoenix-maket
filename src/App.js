import './App.css';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import MainBody from './components/Body/MainBody/MainBody';
import ProductBody from './components/Body/ProductBody/ProductBody';
import Footer from './components/Footer/Footer';
import AboutUs from './components/Body/AboutUs/AboutUs';
import Contact from './components/Body/Contact/Contact';
import Certificates from './components/Body/Certificates/Certificates';
import shipImg from './images/ship.jpg'


function App() {
  const [body,setBody] = useState('product')
  const clickHandlerForModalOpen = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
  }
  const clickHandlerForModalExit = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  return (
    <div className='container'>
      <div id='modal' className='modal_background_container' onClick={clickHandlerForModalExit}>
        <div className='modal_container'>
        <div className="exit_cont"><button className='modal_exit' onClick={clickHandlerForModalExit}>x</button></div>
        <img className='modal_ship_img' src={shipImg} alt=''></img>
          <div className='header_and_form'>
          <h1>Call me back</h1>
          <p className='modal_text'>Leave your contact information here and we will get back to you as soon as possible. </p>
          <form className='modal_form'>
            <input className='modal_input' type='text' placeholder="Enter your name"></input>
            <input className='modal_input' type='text' placeholder="Enter your phone"></input>
            <input className='modal_input' type='text' placeholder="Enter your e-mail"></input>
            <button className='modal_button'>Call me</button>
          </form>
          </div>
        </div>
      </div>
      <Header 
        body={body} 
        setBody={setBody} 
        openModal={clickHandlerForModalOpen}>
      </Header>
      {body === 'main' ? <MainBody openModal={clickHandlerForModalOpen}></MainBody> : null}
      {body === 'product' ? <ProductBody></ProductBody> : null}
      {body === 'about' ? <AboutUs></AboutUs> : null}
      {body === 'contact' ? <Contact></Contact> : null}
      {body === 'certificates' ? <Certificates></Certificates> : null}
      <Footer 
        body={body} 
        setBody={setBody}
        openModal={clickHandlerForModalOpen}>
      </Footer>
    </div>
  )
}

export default App;
