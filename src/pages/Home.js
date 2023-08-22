import React from 'react';
import AboutUsDiv from '../components/AboutUsDiv';
import { Link } from 'react-router-dom';

function Home(){
 return(
  <div>
    <div className="home-hero-container">
      
      <h1>All you need is love … And a pet</h1>
      <div className="hero-bottom">
        <p>Search for your new best friend. </p>
        <button className="cta-button">Adopt Now</button>
      </div>  
    </div>
       
    <div>
      <AboutUsDiv/>
    </div>
    <div>
        <h1 className="home-h1">Search, Adopt, Learn, Share, Shop</h1>
    </div>
    <div className="home-card-grid">
      <div className="home-card">
        <h3>Available Pet Search</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/pets"><button>Learn More</button></Link>
      </div>
      <div className="home-card">
        <h3>Online Pet Care Classes</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
      </div>
      <div className="home-card">
        <h3>Online Store</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/shop"><button>Learn More</button></Link>
      </div>
      <div className="home-card">
        <h3>Blog</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
      </div>
    </div>
       
</div>   
    )
}
export default Home;