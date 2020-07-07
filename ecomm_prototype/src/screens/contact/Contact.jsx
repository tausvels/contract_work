import React from 'react';
import './contact.scss';
import ContactCard from './ContactCard';

function Contact(props) {
  return (
    <div className='contact-container'>
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
}

export default Contact;