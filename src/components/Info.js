import '../styles/Reusables.css';
import '../styles/Info.css';
import '../styles/responsive/InfoQuery.css';

function Info() {
  return (
    <>
      <section className='info'>
        <div className='info-heading'>
          <h3>It's your time to act</h3>
          <p>Our passionate goal is to put a stop for whale poaching.</p>
        </div>

        <div className='info-row'>
          <div className='col'>
            <ion-icon name="earth-outline" />
            <h4>Globality</h4>
            <p>We have bases all around the world keeping an eye on places with most whale attraction. Our supporters come from all around the world in all colours, and ethnicities. The more supporters, the more bases.</p>
          </div>

          <div className='col'>
            <ion-icon name="medkit-outline" />
            <h4>Save Lives</h4>
            <p>Whales are constantly losing their lives over plastic pollution, poaching, bombing and harpooning. There's no mandatory need for drastic action - you can help by making sure to keep your recycling on point!</p>
          </div>

          <div className='col'>
            <ion-icon name="information-circle-outline" />
            <h4>Our Work</h4>
            <p>FreeWilly.org has been active in protecting whales since 1952. We gain amazing volunteers and supporters daily to help us become even more effective! You might see our word being spread on CNN News or ABC News.</p>
          </div>

          <div className='col'>
            <ion-icon name="heart-outline" />
            <h4>Support Us</h4>
            <p>Sign up to become a part of our wholesome FreeWilly team! Sign petitions, be heard and if you'd like - please make a donation to save the whales! Every penny counts towards making a better future for whales.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Info;