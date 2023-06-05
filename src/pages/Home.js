import React from 'react';
import AboutUsDiv from '../components/AboutUsDiv';
//import { Carousel } from 'react-responsive-carousel';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home(){
    return(
      <div>
       {/* <Carousel>
        <div>
          <img src="images/dummy-image.jpg" alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src="images/home-hero.png" alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src="images/pet-hero.png" alt="Slide 3" />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel> */}
    <div className="home-hero-container">
      
      <h1>All you need is love … And a pet</h1>
            <p>Search for your new best friend. </p>
        <button className="cta-button">Adopt Now</button>
        
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
        <button>Learn More</button>
      </div>
      <div className="home-card">
        <h3>Online Pet Care Classes</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
      </div>
      <div className="home-card">
        <h3>Online Store</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
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