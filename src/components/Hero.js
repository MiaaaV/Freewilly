import '../styles/Reusables.css';
import '../styles/Hero.css';
import '../styles/responsive/HeroQuery.css';
import Logo from '../images/logo.png';

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
          <a className='btn main-btn' href="/">Donate</a>
          <a className='btn secondary-btn' href="/">Read More</a>
        </div>
      </div>
    </>
  );
}

export default Hero;