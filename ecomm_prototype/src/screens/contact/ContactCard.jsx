import React from 'react';
const sms = require('../../assets/sms.PNG');

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={sms}/>
      <p>Live Chat</p>
    </div>
  );
}

export default ContactCard;