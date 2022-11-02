import './App.css';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import MainBody from './components/Body/MainBody/MainBody';

function App() {
  const [body,setBody] = useState('main')
  return (
    <div className='container'>
      <Header></Header>
      {body === 'main' ? <MainBody></MainBody> : null}
    </div>
  )
}

export default App;
