import '../styles/Reusables.css';
import '../styles/Hero.css';
import '../styles/responsive/HeroQuery.css';
import Logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <>
      <div className='hero'>
        <div>
          <a href="/">
            <img src={Logo} alt="FreeWilly logo" className="logo" />
          </a>
        </div>

        <div>
          <h1>Free Willy - Free Yourself</h1>
          <h2 style={{ marginBottom: '1rem' }}>Help fight against whale poaching</h2>
          <NavLink to="/" className='btn main-btn'>Donate</NavLink>
          <NavLink to="/" className='btn secondary-btn'>Read More</NavLink>
        </div>
      </div>
    </>
  );
}

export default Hero;