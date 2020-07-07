import React from 'react';
import './shopByProductCard.scss'

function ShopByProductCard(props) {
  const {imgSrc, fontSize, title} = props;
  return (
    <div className='shop-by-product__card'>
      <img src={imgSrc} alt='prodImg'/>
      <p style={{fontSize: `${fontSize && fontSize}`}}>{title}</p>
    </div>
  );
}

export default ShopByProductCard;