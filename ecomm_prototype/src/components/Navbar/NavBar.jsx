import React, {useEffect} from 'react';

import './navbar.scss'

function NavBar(props) {
  let prevScrollPosition = window.pageYOffset;
  useEffect(() => {
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPosition > currentScrollPos) {
        let bottomMenu = document.getElementById('test');
        bottomMenu.style.opacity = '1';
      } else {
        let navContainer = document.getElementById('navContainer');
        navContainer.style.opacity = '0.95';
        let bottomMenu = document.getElementById("test");
        bottomMenu.style.opacity = '0';
      }
      prevScrollPosition = currentScrollPos;
    }
  }, []);
  return (
    <div id='navContainer' className='navbar-container'>
      <div className='navbar-content-top'>
        <div className="navbar-content-top__message">Message</div>
        <div className="navbar-container-top__menu">
          <ul>
            <li><span style={{color: 'white'}}>$</span><img /></li>
            <li><a href='#'>SIGN IN</a></li>
            <li><a href='#'>SIGN UP</a></li>
          </ul>
        </div>
      </div>
      <div className='navbar-content-middle'>
        <div className="logo">
          <img src='https://entripy.com/Themes/Entripy/Content/17/images/logo.svg'/>
          <div className="navbar-content-middle__content">
            <p>Custom T-Shirts | Uniforms | Swag</p>
            <p>The Fastest, Most Trusted & Largest In Canada</p>
          </div>
        </div>
        <div className="search">
          <div className="input-icon"> 
            <a href='#'><i className="fa fa-search"></i> </a>
            <input className="input-field" type="text" placeholder='Search' /> 
          </div>
        </div>
        <div className="info">
          <div className="basket">
            <a href='#'>
              <span className="quantity">0</span>
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
          <div className="info-content">
            <div className='speed-icon'>
              <span><img src='https://www.entripy.com/Content/Images/icon-rush-service-solid.svg' /></span>
              <span>24 HR Rush Service</span>
            </div>
            <div className='info-contact'>
              <span><i className='fa fa-phone'></i> 1-866-368-7479</span>
              <span> | </span>
              <a href='#'><img src='https://www.entripy.com/Content/Images/icon-chat-solid.svg' height='16px' />Chat Now</a>
            </div>
          </div>
          <div className="youtube-icon"><a href='#'><i className='fa fa-youtube-play'></i></a></div>
        </div>
      </div>
      <div id='test' className='navbar-content-bottom'>
        <ul className='navbar-content-bottom__menu-items'>
          <li><a href='#'>T-SHIRTS</a></li>
          <li><a href='#'>HATS</a></li>
          <li><a href='#'>SWEATSHIRTS</a></li>
          <li><a href='#'>JACKETS</a></li>
          <li><a href='#' style={{background: 'yellow'}}>MORE</a></li>
          <li><a href='#'>TOTE BAGS</a></li>
          <li><a href='#'>MASKS</a></li>
          <li><a href='#'>PROMO ITEMS</a></li>
          <li><a href='#'>SPECIALS</a></li>
          <li><a href='#'>ESTORES</a></li>
          <li><a href='#' style={{background: 'yellow'}}>NO MINIMUM</a></li>
          <li><a href='#' style={{background: '#003781', color: 'white'}}>DESIGN NOW</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;