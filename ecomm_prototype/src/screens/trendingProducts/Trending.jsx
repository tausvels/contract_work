import React from 'react';
import './trending.scss';

import ProductCard from '../../components/ProductCard/ProductCard';

function Trending(props) {
  return (
    <div>
      <div className="header-text">
        <h2>Top Trending Products</h2>
        <p>These products are our current best sellers and have rave reviews from our customers. We think you'll like them too.</p>
      </div>
      <div className='card-container'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Trending;