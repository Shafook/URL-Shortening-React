import React from 'react';
import brand from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import custom from '../images/icon-fully-customizable.svg';

const Features = () => {
  return (
    <section className='features'>
      <div className='container container--pall'>
        <div className='features__intro'>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className='features__grid'>
          <div className='features__item'>
            <div className='features__icon'>
              <img src={brand} alt='' />
            </div>
            <div className='features__title'>Brand Recognition</div>
            <div className='features__description'>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </div>
          </div>
          <div className='features__item'>
            <div className='features__icon'>
              <img src={records} alt='' />
            </div>
            <div className='features__title'>Detailed Records</div>
            <div className='features__description'>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </div>
          </div>
          <div className='features__item'>
            <div className='features__icon'>
              <img src={custom} alt='' />
            </div>
            <div className='features__title'>Fully Customizable</div>
            <div className='features__description'>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
