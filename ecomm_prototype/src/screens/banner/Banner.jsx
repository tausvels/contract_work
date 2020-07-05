import React from 'react';
import './banner.scss'

function Banner(props) {
  return (
    <div className='banner-container'>
      <div className='banner-content'>
        <img src='https://entripyprodstorage.blob.core.windows.net/en-topics/723191a4-b27e-4580-8e6d-941f9fe3262d-restart-homepagebanner-min.jpg'/>
        <div className='banner-content-text'>
          <div className='banner-content-main__image'>
            <a href="#">
              <img src='https://entripyprodstorage.blob.core.windows.net/en-topics/a6013bad-ada1-4ebc-a12d-c574edda18ef-HomePage_Text-restart-home.png'/>
            </a>
          </div>
        </div>
        <div className='banner-content-secondary__image'>
          <img src='https://entripyprodstorage.blob.core.windows.net/en-topics/e16df9ec-e6e7-4dd5-b9c9-e7492cc57195-Happy_Canada_Day_Banner.jpg'/>
        </div>
      </div>
      <div className='banner-highlight'>
        <div className="banner-highlight-cards">
          <img src='https://www.entripy.com/Themes/Entripy/Content/images/Icons/Free_Shipping_Entripy_Box_sm.png'/>
          <div className='banner-highlight__text'>
            <p>WE SHIP FROM OUR OAKVILLE ONTARIO FACILITY TO ANYWHERE IN CANADA</p>
            <p><a className='highlight-card__link-special' href='#'>About our shipping & Return Policy</a></p>
          </div>
        </div>
        <div className="banner-highlight-cards">
          <div className="mini-card__date">
            <p className='mini-card__date-month'>Jul</p>
            <p className='mini-card__date-day'>13</p>
          </div>
          <div className='banner-highlight__text'>
            <p>GUARANTEED 5 DAY ORDER COMPLETION</p>
            <p>in 5 business days! Place your order today and it will ship from our Oakville, ON facility by July 13. <mark>There may be delivery delays,</mark> <a href='#'>read more</a><mark> on Covid-19 update.</mark></p>
            <p><a className='highlight-card__link' href='#'>Detals</a></p>
          </div>
        </div>
        <div className="banner-highlight-cards">
          <img src='https://www.entripy.com/Themes/Entripy/Content/images/Icons/All_Inclusive_Tag_Live_w-Dropshadow_sm.png'/>
          <div className='banner-highlight__text'>
            <p>UNBEATABLE PRICE GUARANTEE</p>
            <p>We won't just match it, we'll beat it! If you find a lower price than what we have quoted, we'll beat it by 5%.</p>
            <p><a className='highlight-card__link'href='#'>Details</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;