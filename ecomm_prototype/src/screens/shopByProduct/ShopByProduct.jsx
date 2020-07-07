import React from 'react';
import './shopByProduct.scss'
import ShopByProductCard from './ShopByProductCard';

function ShopByProduct(props) {
  const inputData = [
    {id: 1, title: 'T-Shirts', imgSrc:'https://www.entripy.com/content/images/thumbs/0040413_t-shirts.jpeg'},
    {id: 2, title: 'Sweatshirts & Hoodies', imgSrc:'https://www.entripy.com/content/images/thumbs/0040414_sweatshirts-hoodies.jpeg'},
    {id: 3, title: 'Golf Shirts & Polos', imgSrc:'https://www.entripy.com/content/images/thumbs/0040417_golf-shirts-polos_550.jpeg'},
    {id: 4, title: 'Hats, Caps & Toques', imgSrc:'https://www.entripy.com/content/images/thumbs/0040415_hats-caps-toques_550.jpeg'},
    {id: 5, title: 'Jackets', imgSrc:'https://www.entripy.com/content/images/thumbs/0040416_jackets_550.jpeg'},
    {id: 6, title: 'Team Wear', imgSrc:'https://www.entripy.com/content/images/thumbs/0039471_team-wear_550.jpeg'},
  ];
  const mainContainerData = []
  const secondContainerData = [];
  for (let i = 0; i < inputData.length; i++) {
    if (mainContainerData.length !== 2) {
      mainContainerData.push(inputData[i]);
    } else {
      secondContainerData.push(inputData[i]);
    }
  };
  return (
    <div className='shop-by-product-container'>
      <h1 className='shop-by-product-container-heading'>Shop By Product</h1>
      <div className="shop-by-product__main-card-container">
        {mainContainerData.map(item => (
          <ShopByProductCard key={item.id} title={item.title} imgSrc={item.imgSrc}/>
        ))}
      </div>
      <div className="shop-by-product__second-card-container">
        {secondContainerData.map(item => (
          <ShopByProductCard key={item.id} title={item.title} imgSrc={item.imgSrc} fontSize='24px'/>
        ))}
      </div>
    </div>
  );
}

export default ShopByProduct;