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
    </div>
  );
}

export default Banner;