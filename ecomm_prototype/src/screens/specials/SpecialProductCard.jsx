import React from 'react';
import SpecialCardInteraction from './SpecialCardInteraction';

function SpecialProductCard(props) {
  return (
    <div className="specials-card-container__card">
      <div className="specials-card__image-container">
        <img src='https://entripyprodstorage.blob.core.windows.net/en-topics/64df0544-24f0-4419-a952-0c440beb9cc8-ATC_1000_417x421.jpg' />
      </div>
      <div className="card__product-detail__container">
        <p>EVERYDAY LOW PRICED WHITE T-SHIRTS</p>
        <p><b>Customer Favourite. Order as low as 1!</b></p>
        <p>1 Colour, 1 Location Print Included</p>
        <p><b>Available</b> for <mark style={{background: 'none', color: 'red'}}><b>24 Hour Hot Rush</b></mark></p>
        <SpecialCardInteraction />
      </div>
    </div>
  );
}

export default SpecialProductCard;