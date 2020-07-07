import React from 'react';
import SpecialProductCard from './SpecialProductCard';
import './specials.scss';

function Specials(props) {
  return (
    <div className='specials-container'>
      <h2>Our Specials</h2>
      <div className="specials-card-container">
        <SpecialProductCard />
        <SpecialProductCard />
        <SpecialProductCard />
        <SpecialProductCard />
      </div>
      <button className='all-special-button'>All Specials</button>
    </div>
  );
}

export default Specials;