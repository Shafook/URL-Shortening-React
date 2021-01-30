import React from 'react';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__image'></div>
        <div className='hero__text container--pall'>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button type='button' className='link-button'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
