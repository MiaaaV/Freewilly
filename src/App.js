import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import Donate from './routes/Donate';
import Action from './routes/Action';
import About from './routes/About';
import SignUp from './routes/SignUp';
function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {

      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/action' element={<Action />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      {isVisible && (
        <button
          className={`back-to-top-button ${isVisible ? 'show' : ''}`}
          onClick={scrollToTop}
        >
          <ion-icon id="btt-btn" name="chevron-up-outline" />
        </button>
      )}
    </>
  );
}

export default App;