import React, { useState } from 'react';
import logo from '../images/logo.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='header__content container container--pall'>
        <div className='header__links-content'>
          <div className='header__logo'>
            <a href='#'>
              <img src={logo} alt='logo' />
            </a>
          </div>

          <div className='header__links hide-for-mobile'>
            <a href='#'>Features</a>
            <a href='#'>Pricing</a>
            <a href='#'>Resources</a>
          </div>
        </div>

        <div className='header__cta hide-for-mobile'>
          <a href='#' className='login'>
            Login
          </a>
          <button type='button' className='link-button signup'>
            Sign Up
          </button>
        </div>

        <div
          id='btnHamburger'
          className='header__toggle hide-for-desktop'
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      {showMenu && <MobileMenu />}
    </header>
  );
};

const MobileMenu = () => {
  return (
    <div className={`header__menu hide-for-desktop}`}>
      <div className='links'>
        <a href='#'>Features</a>
        <a href='#'>Pricing</a>
        <a href='#'>Resources</a>
      </div>
      <div className='underline'></div>
      <div className='cta'>
        <a href='#' className='login'>
          Login
        </a>
        <button type='button' className='link-button'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
