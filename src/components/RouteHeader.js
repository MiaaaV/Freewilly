import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/RouteHeader.css';
import '../styles/Header.css';
import '../styles/responsive/HeaderQuery.css';
import '../styles/Reusables.css';
import logo from '../images/logo.png';

function RouteHeader() {

  const [mobileNav, setMobileNav] = useState(false);
  const [icon, setIcon] = useState("menu-outline");

  function toggleNav() {
    setMobileNav(!mobileNav);
    setIcon(mobileNav ? "menu-outline" : "close-outline");
  }

  return (
    <>
      <header className="route-header">
        <nav className="main-nav">
          {/** Mobile nav */}
          <div className='mobile-nav route-mobile-nav'>
            <div>
              <NavLink to="/">
                <img src={logo} id='route-logo' alt='FreeWilly logo' />
              </NavLink>
            </div>

            <div>
              <ion-icon id="ion-toggle" name={icon} onClick={toggleNav} />
            </div>
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
          <div className="row route-row justify-assist desktop-nav">
            <NavLink to="/">
              <img src={logo} id='route-logo' alt='FreeWilly logo' />
            </NavLink>
            <ul>
              <li><NavLink to='/donate'>Donate</NavLink></li>
              <li><NavLink to='/action'>Take Action</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
            </ul>
          </div>
        </nav>

      </header>
    </>
  )
}

export default RouteHeader;