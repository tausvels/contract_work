import React from 'react';
import './custom.scss';
import CustomCard from './CustomCard';

function Custom(props) {
  return (
    <div className='custom-container'>
      <h2>Custom Apparel Made Easy</h2>
      <p className='custom-container-subheading'>
      Entripy makes ordering your custom clothing quick and seamless. Our client experience team is available to help 7 days a week and our proofing studio allows you to review and make revisions to your design before your order is printed. 
      <a href=''> Learn more</a> about how to place your order.
      </p>
      <div className="mini-card-container">
        <CustomCard color='#0056ac' imageSrc='https://www.entripy.com/images/TopicPagePics/Pay_Only_After_Approved.svg'/>
        <CustomCard color='red' imageSrc='https://www.entripy.com/images/TopicPagePics/Proudly_Canadian_Stamp.png'/>
        <CustomCard color='#0056ac' imageSrc='https://www.entripy.com/Themes/Entripy/Content/17/images/blocks-ico5.svg'/>
        <CustomCard color='#0056ac' imageSrc='https://www.entripy.com/images/TopicPagePics/air-miles.png'/>
      </div>
    </div>
  );
}

export default Custom;