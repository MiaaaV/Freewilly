import '../styles/Reusables.css';
import '../styles/Whales.css';
import whale1 from '../images/whale1.jpg';
import whale2 from '../images/whale2.jpg';
import whale3 from '../images/whale3.jpg';
import whale4 from '../images/whale4.jpg';
import whale5 from '../images/whale5.jpg';
import whale6 from '../images/whale6.jpg';

function Info() {
  return (
    <>
      <section className='images'>
        <ul>
          <li>
            <figure className='whale-img'>
              <img src={whale1} alt="Whale poaching" />
            </figure>
          </li>
          <li>
            <figure className='whale-img'>
              <img src={whale2} alt="Whale poaching" />
            </figure>
          </li>
          <li>
            <figure className='whale-img'>
              <img src={whale3} alt="Whale poaching" />
            </figure>
          </li>
        </ul>

        <ul>
          <li>
            <figure className='whale-img'>
              <img src={whale4} alt="Whale poaching" />
            </figure>
          </li>
          <li>
            <figure className='whale-img'>
              <img src={whale5} alt="Whale poaching" />
            </figure>
          </li>
          <li>
            <figure className='whale-img'>
              <img src={whale6} alt="Whale poaching" />
            </figure>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Info;