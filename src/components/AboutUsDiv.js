import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About sublime-pets.com</h2>
      <div className="about-content">
      <img style={{ width: "300px" }} src="images/Sublime-Pets-Sweet-November.png" alt="sublimepets.com"/>
      <div>
        <p>It all started when we saw the 2001 movie, <b>Sweet November</b>, starring Keanu Reeves and Charlize Theron. Charlize Theron’s character ran a website called sublimepets.com.  
        </p>
        <p>So, now in we have created an updated version of sublime-pets.com. We have 4 sections. The first section is the adoptable pet search. The second section is the pet care education center, where we offer online pet care classes taught by experts. Our third section is our blog, where you can read pet adoption success stories. The fourth section is our online store, where you can purchase pet products and sublime-pets.com merchandise. 
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;