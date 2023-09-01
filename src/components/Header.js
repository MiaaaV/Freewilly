import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/responsive/HeaderQuery.css';
import '../styles/Reusables.css';
import Hero from './Hero';

function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const [icon, setIcon] = useState("menu-outline");

  function toggleNav() {
    setMobileNav(!mobileNav);
    setIcon(mobileNav ? "menu-outline" : "close-outline");
  }

  return (
    <>
      <header>
        <nav className="main-nav">
          {/** Mobile nav */}
          <div className='mobile-nav'>
            <ion-icon id="ion-toggle" name={icon} onClick={toggleNav} />
          </div>

          <div className={`sidenav ${mobileNav ? 'open' : ''}`}>

            <ul className={mobileNav ? 'visible' : 'hide'}>
              <li><NavLink to='/donate'>Donate</NavLink></li>
              <li><NavLink to='/action'>Take Action</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
            </ul>
          </div>

          {/** Desktop nav*/}
          <div className="row justify-assist desktop-nav">
            <ul>
              <li><NavLink to='/donate'>Donate</NavLink></li>
              <li><NavLink to='/action'>Take Action</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
            </ul>
          </div>
        </nav>

        <Hero />

      </header>
    </>
  );
}

export default Header;
