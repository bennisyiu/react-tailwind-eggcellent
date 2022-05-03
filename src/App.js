import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/index';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
     <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      <Footer />
     </>
  );
}

export default App;
