import React from 'react';
import brand from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import custom from '../images/icon-fully-customizable.svg';

import features from '../data';
const images = [brand, records, custom];

const Features = () => {
  console.log(features);
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
          {features.map((feature, index) => {
            const { title, description } = feature;
            return (
              <div key={index} className='features__item'>
                <div className='features__icon'>
                  <img src={images[index]} alt={title} />
                </div>
                <div className='features__title'>{title}</div>
                <div className='features__description'>{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
