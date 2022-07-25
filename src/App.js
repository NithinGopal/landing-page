import React from 'react';
import './App.css';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { CallToAction, Brand, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
