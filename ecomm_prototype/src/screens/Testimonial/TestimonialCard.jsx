import React from 'react';
import './testimonialCard.scss';

function TestimonialCard(props) {
  return (
    <div className='testimonial-card-container'>
      <div className="testimonial-card-top">
        <span><img src={`${require('../../assets/5star.PNG')}`} /></span>
        <span>35 hours Ago</span>
      </div>
      <p className='testimonial-card-heading'>Worked fast and did a quality job even during Covid! Good quality in all aspects...</p>
      <p className='testimonial-card-subtext'>Worked fast and did a quality job even during Covid! Good quality in all aspects...</p>
      <p className="testimonial-client-name">trey mj</p>
    </div>
  );
}

export default TestimonialCard;