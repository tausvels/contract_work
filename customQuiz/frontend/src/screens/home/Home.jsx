import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
// ---- import components ----------------------------------------------------- //
import Header from '../../components/Header';
import ProdCard from '../../components/ProdCard';
import './home.css';

// ---- data ---- //
const p1 = {img: `https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/travel-100-men-s-trekking-shirt-maroon.jpg?&f=250x250`, desc:'Shirt 1'};
const p2 = {img: `https://contents.mediadecathlon.com/p1484213/k$9c0a8190f8d63c2f59c85989338bbb50/.jpg?&f=250x250`, desc: 'Shirt 2'};
const p3 = {img: `https://5.imimg.com/data5/UD/WQ/MY-31825245/mens-check-shirt-500x500-250x250.jpg`, desc: 'Shirt 3'};
const p4 = {img: `https://5.imimg.com/data5/UY/QK/MY-37155066/check-men-shirt-250x250.jpg`, desc: 'Shirt 4'};

const data = {
  prod: [p1, p2, p3, p4],
  selected: false
}

// destructuing the props
const Home = () => {
  const [selected, setSelected] = useState({
    product: '',
  });
  // ---- storing order detail ---------------- //
  let orderDetail = {
    product: selected.product,
  }
  console.log(orderDetail)
  const products = (
  <Card.Group itemsPerRow={2} stackable>
    {data.prod.map((obj, ind) => {
      return (
          <ProdCard key={ind} img={obj.img} desc={obj.desc} selected={selected} setSelected={setSelected}/>
      )
    })}
  </Card.Group>);
  return (
    <div>
      {/* <h1>Welcome</h1> */}
      <Header name='home'/>
      <div style={{width: '40%'}}>
        {products}
      </div>
    </div>
  );
};

export default Home;