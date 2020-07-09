import React from 'react';
import './testimonial.scss';
import CarouselComponent from './CarouselComponent';
import TestimonialCard from './TestimonialCard';



function Testimonial(props) {
  return (
    <div className='testimonial-container'>
      <div className="average-testimonial-container">
        <h2>Excellent</h2>
        <img src={`${require('../../assets/4.5star.PNG')}`} />
        <p>Based on <a href=''><b>3,245 reviews</b></a></p>
        {/* <a href=''><img src={`${require('../../assets/TrustPilotLogo.PNG')}`} /></a> */}
        <div className='tooltip'>
          <a href=''><img src={`${require('../../assets/TrustPilotLogo.PNG')}`} /></a>
          <p style={{margin:0}}><span className="tooltip-text">Trustpilot</span></p>
        </div>
      </div>
      <div className="carousel-container">
        <CarouselComponent />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default Testimonial;