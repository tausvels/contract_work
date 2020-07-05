import React from 'react';
import ProductColor from './ProductColor';
import './product-card.scss';

function ProductCard(props) {
  const numberOfReviewStars = 4;
  const actualStarContainer = [];
  const defaultStarContainer = []
  for (let i = 0; i < numberOfReviewStars; i++) {
    actualStarContainer.push(<i className="fa fa-star-o"></i>)
  }
  for (let i = 0; i < 5; i++) {
    defaultStarContainer.push(<i className="fa fa-star-o"></i>)
  }

  return (
    <div className='product-card-container'>
      <a href='#'>
        <div className="product-card__image">
          <img src='https://api.reveri.io/api/image/2d1e4120-5405-4b55-9cca-87610962128f?size=Medium'/>
          <p>New Era Adjustable Structured Cap</p>
        </div>
      </a>
      <div className="product-card__info">
        <div className="product-card__info-code"><a href='#'>NE200</a></div>
        <div className="product-card__info-review">
          <div className='review-star'>
            <div className="default-stars">
              {defaultStarContainer.map((item, ind) => <span className='drs' key={ind}>{item}</span>)}
            </div>
            <div className="actual-stars-obtained">
              {actualStarContainer.map((item, ind) => <span className='ars' key={ind}>{item}</span>)}
            </div>
          </div>
          <div className='number-of-reviews'>
            <span>500 reviews</span>
            <a href='#'><i className='fa fa-angle-up'></i></a>
          </div>
        </div>
      </div>
      <div className="product-card__details">
        <div className="product-card__details-pricing">
          <p><mark><b>26.64</b>$ ea. for 6 - <b>$12.06</b> for 2500</mark></p>
          <p>$31.34 ea. for 6 - $14.19 for 2500</p>
          <p>based on embroidery on front</p>
          <p>Available Sizes: OSFA - OSFA</p>
        </div>
        <div className="product-card__details-color">
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
          <ProductColor color='grey'/>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;