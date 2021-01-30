import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shorten from './components/Shorten';
import Features from './components/Features';
import Boost from './components/Boost';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Shorten />
      <Features />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
