import React from 'react';

import images from '../constants/images';

import './navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__nav-logo">
      <img src={images.nuorder} alt="app logo" />
      
    </div>
    <ul className="app__navbar-links">

    </ul>
      <div className="app__navbar-login">
      <a href="#login" className="p__opensans"> About </a>
      <div />
      <a href="#login" className="p__opensans"> Contact Us </a>
      </div> 
  </nav>
);

export default Navbar;
