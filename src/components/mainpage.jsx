import React from 'react';
import {Link} from "react-router-dom";

import './mainpage.css';

const Mainpage = () => {
  return (
    <nav className="app_nav">
      <ul className="nav-link">
          
        <li>
          <Link to="/customer">
          <button type="button" className="custom__button"> Customer </button> 
          </Link>
    
          <Link to="/login">
          <button type="button" className="custom__button"> Restaurateur </button> 
          </Link>
        </li>

      </ul>
    </nav>
  )
};

export default Mainpage;
