import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Icon, Transition } from 'semantic-ui-react';
import AutoFocusInput from '../../components/AutoFocusInput';
// ---- import components ----------------------------------------------------- //
import Header from '../../components/Header';
import ProdCard from '../../components/ProdCard';
import SizeCard from '../../components/SizeCard';
import './home.css';

// ---- data ---- //
const p1 = {img: `https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/travel-100-men-s-trekking-shirt-maroon.jpg?&f=250x250`, desc:'Shirt 1'};
const p2 = {img: `https://contents.mediadecathlon.com/p1484213/k$9c0a8190f8d63c2f59c85989338bbb50/.jpg?&f=250x250`, desc: 'Shirt 2'};
const p3 = {img: `https://5.imimg.com/data5/UD/WQ/MY-31825245/mens-check-shirt-500x500-250x250.jpg`, desc: 'Shirt 3'};
const p4 = {img: `https://5.imimg.com/data5/UY/QK/MY-37155066/check-men-shirt-250x250.jpg`, desc: 'Shirt 4'};
const size = [
  {label: 'XS', width: '23CM', length: '60CM'},
  {label: 'S', width: '25CM', length: '60CM'},
  {label: 'M', width: '30CM', length: '65CM'},
  {label: 'L', width: '35CM', length: '70CM'},
]; 

const data = {
  prod: [p1, p2, p3, p4],
  size: size,
}

const Home = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [selected, setSelected] = useState({
    product: '',
    size: '',
    quantity: '',
  });
  // ---- storing order detail ---------------- //
  let orderDetail = {
    product: selected.product,
    size: selected.size,
  }
  // ---- Making smaller JSX ------------------ //
  const products = (
    <Card.Group itemsPerRow={2} stackable>
    {data.prod.map((obj, ind) => {
      return (
        <ProdCard key={ind} img={obj.img} desc={obj.desc} selected={selected} setSelected={setSelected}/>
        )
      })}
  </Card.Group>);
  const size = (
    <Card.Group itemsPerRow={4} stackable>
        {data.size.map( (obj, ind)=> {
          return(
            <SizeCard key={ind} label={obj.label} width={obj.width} length={obj.length} selected={selected} setSelected={setSelected}/>
            )
          })}
      </Card.Group>
  )
  // -------------------------------------------------------------------------------------------------------- //
  // ---- CONDITIONAL CLASS -------------------------------- //
  /*
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(prevPos);
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
    );
    */
   
   const quantityRef = useRef();
  
   const handleQuantityChange = (e) => {
    const output = e.target.value;
    setSelected(prev => {
      return (
        {...prev, quantity: output}
      )
    })
  };
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      console.log(selected)
    }
  };

  useEffect(() => {
    if (selected.size) {
      // quantityRef.current.focus();
      setTimeout(() => {
        quantityRef.current.focus();
      }, 500)
    }
  });

  return (
    <div>
      
      <Header name='home'/>
      <div className='main-container'>
      <Transition.Group animation='drop' duration='500' >
        {!selected.product && 
          <div>
            <h1>1&#x2192;First off. What kind of t-shirt you want to order? This question is required. *</h1>
            <p>Prices include sales tax.</p>
            {products}
          </div>
        }
      </Transition.Group>
      <Transition.Group animation='fade up' duration='500'>
        {(selected.product && !selected.size) &&
          <div>
            <h1>2&#x2192; ...and in what <b>size? *</b></h1>
            {size}
          </div>
        }
      </Transition.Group>
      <Transition.Group animation='fade up' duration='500'>
        {selected.size &&
          <div>
            <h1>3&#x2192; ...And how many ______ would you like?</h1>
            <AutoFocusInput 
              type="text"
              placeholder="Type your answer here..." 
              value={selected.quantity} 
              onChange={handleQuantityChange}
              onKeyDown={handleKeyDown} 
              ref={quantityRef}
            />
            {selected.quantity && 
              <div>
                <Button icon labelPosition='right' >
                <Icon name='chevron right' />
                OK
              </Button>
              <span>press <strong>Enter  </strong>&#x2386;</span>
              </div>
            }
          </div>
        }
      </Transition.Group>
      </div>
    </div>
  );
};

export default Home;