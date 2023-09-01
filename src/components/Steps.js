import '../styles/Reusables.css';
import '../styles/Steps.css';
import '../styles/responsive/StepsQuery.css';
import phone from '../images/apple.png';
import ios from '../images/appstore.png';
import android from '../images/googleplay.png';

function Steps() {
  return (
    <>
      <section className='steps'>

        <div className='step-heading-div'>
          <h2 className='steps-heading'>How to help &mdash; 3 simple steps</h2>
        </div>

        <div className='steps-row'>
          <div className='grid-div'>
            <img src={phone} alt='Phone with FreeWilly app on display' className='app-screen' />
          </div>

          <div className='instructions'>
            <div className='steps-div'>
              <div className="step">
                <div className="number">1</div>
                <p className="p-steps">Sign up and download the FreeWilly app</p>
              </div>

              <div className="step">
                <div className="number">2</div>
                <p className="p-steps">Choose a personal, fitting donation</p>
              </div>

              <div className="step">
                <div className="number">3</div>
                <p className="p-steps">Stay tuned for important news and updates!</p>
              </div>
            </div>

            <div className='btn-apps'>
              <a href="/" className='btn-app1'>
                <img src={ios} alt="Download on the App Store -logo" />
              </a>
              <a href="/" className='btn-app2'>
                <img src={android} alt="Get it on Google Play -logo" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;