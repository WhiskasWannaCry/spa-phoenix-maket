import './App.css';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import MainBody from './components/Body/MainBody/MainBody';
import ProductBody from './components/Body/ProductBody/ProductBody';


function App() {
  const [body,setBody] = useState('product')
  return (
    <div className='container'>
      <Header body={body} setBody={setBody}></Header>
      {body === 'main' ? <MainBody></MainBody> : null}
      {body === 'product' ? <ProductBody></ProductBody> : null}
    </div>
  )
}

export default App;
