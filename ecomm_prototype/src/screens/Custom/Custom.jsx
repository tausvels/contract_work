import React from 'react';
import './custom.scss';

function Custom(props) {
  return (
    <div className='custom-container'>
      <h2>Custom Apparel Made Easy</h2>
      <p>
      Entripy makes ordering your custom clothing quick and seamless. Our client experience team is available to help 7 days a week and our proofing studio allows you to review and make revisions to your design before your order is printed. 
      <a href=''> Learn more</a> about how to place your order.
      </p>
      <div className="mini-card-container">
        <div style={{display:'flex', flex: '0 0 25%',position: 'relative'}}>
          <div className="mini-card__round-background-white"></div>
          <div className="mini-card__round-background"></div>
          <div className="mini-card__round-image">
            <img src='https://www.entripy.com/images/TopicPagePics/Pay_Only_After_Approved.svg'/>
          </div>
          <div className="mini-card">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom;