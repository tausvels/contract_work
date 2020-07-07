import React from 'react';
const sms = require('../../assets/sms.PNG');

function ContactCard(props) {
  return (
    <div className="contact-card">
      {/* <img src={sms}/> */}
      <div className="white-background"></div>
      <div className="blue-background"></div>
      <img style={{zIndex: 3}} className='contact-card-img'src='https://www.entripy.com/Themes/Entripy/Content/17/images/blocks-ico7.svg' />
      <p>Live Chat</p>
    </div>
  );
}

export default ContactCard;