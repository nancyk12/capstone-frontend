import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../images/paw-logo-tan.png'; // Import the logo image

const Header = () => {
  return (
    
    <header>
        <nav>
          {/* <div className="logo-container">
          <img src="images/paw-logo-tan.png" alt="Logo" className="logo" /> {/* Display the logo image */}
          {/* </div>    */} 
          <ul>
            <li className="logo-container">
              <img src="images/paw-logo-tan.png" alt="Logo" className="logo" />SUBLIME PETS
            </li>
            <li className="selected"><a href="/">Home</a></li> {/* Add the "selected" class */}
            <li><a href="/about">Classes</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pets">Pets to Adopt</a></li>
            <li>
            <Link to="/store">Store</Link> {/* Link to the store */}
          </li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Log In</a></li> {/* Updated button text */}
          </ul>
        </nav>
    </header>
        
  )
}

export default Header;